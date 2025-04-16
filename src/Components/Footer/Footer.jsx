import React from 'react';
import './Footer.css'; // Optional: External CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer_text">© 2025 Ferdinand</p>
        <div className="footer_links">
          <a href="LINK" target="_blank">
            LinkedIn
          </a>
          <a href="LINK" target="_blank">
            GitHub
          </a>
          <a href="LNIK" target="_blank">
            Youtube
          </a>
          <a href="mailto:yourname@example.com" target="_blank">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;