# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) first to optimize caching
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Ensure crypto polyfill is available (if needed)
RUN npm install crypto-browserify

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy the rest of the application files into the container
COPY . .

# Build the React app for production (with Vite)
RUN npm run build

# Step 2: Serve the static files using Nginx
FROM nginx:alpine

# Copy the build files from the previous image
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
