import React, { useState, useEffect } from "react";
import axios from "axios";
import './Blogs.css';

const API_KEY = " "; // Replace with your API key
const CHANNEL_ID = " "; // Replace with your channel ID
const MAX_RESULTS = 50; // Fetch more upfront so we can load in batches

const Blogs = () => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Start by showing 3

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const showMore = () => {
    setVisibleCount(prev => prev + 3); // Show 3 more on each click
  };

  const isAllVisible = visibleCount >= videos.length;

  return (
    <div className="work container section" id="videos">
      <h2 className="section_title">Video Library</h2>  
      <div className='logo_container'>
      <a href="">
      <span className="logo_text">Watch on YouTube</span>
        <i class="fa-brands fa-youtube yt_logo"></i>
      </a>
      </div>
      <div className="blog_container">
        {videos.slice(0, visibleCount).map((video) => (
          <div key={video.id.videoId} className="blog_item">
            <a 
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
              target="_blank" 
              rel="noopener noreferrer">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className='blog_video'
            />
            </a>
          </div>
        ))}
      </div>
      {!isAllVisible && (
        <div className="show_button">
          <button onClick={showMore} className="btn">
            Show More
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Blogs;
