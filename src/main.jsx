import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Custom CSS for Swiper
const swiperCustomCSS = `
  .tournaments-swiper .swiper-pagination-bullet {
    background: linear-gradient(45deg, #8B5CF6, #06B6D4);
    opacity: 0.4;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .tournaments-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }
  
  .tournaments-swiper .swiper-button-next,
  .tournaments-swiper .swiper-button-prev {
    color: #8B5CF6;
    background: rgba(255, 255, 255, 0.9);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: -22px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .tournaments-swiper .swiper-button-next:hover,
  .tournaments-swiper .swiper-button-prev:hover {
    background: linear-gradient(45deg, #8B5CF6, #06B6D4);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(139, 92, 246, 0.3);
  }
  
  .tournaments-swiper .swiper-button-next::after,
  .tournaments-swiper .swiper-button-prev::after {
    font-size: 16px;
    font-weight: bold;
  }
  
  .dark .tournaments-swiper .swiper-button-next,
  .dark .tournaments-swiper .swiper-button-prev {
    background: rgba(17, 24, 39, 0.9);
    color: #06B6D4;
  }
  
  .dark .tournaments-swiper .swiper-button-next:hover,
  .dark .tournaments-swiper .swiper-button-prev:hover {
    background: linear-gradient(45deg, #8B5CF6, #06B6D4);
    color: white;
  }
`;

// Add custom CSS to head
const style = document.createElement('style');
style.textContent = swiperCustomCSS;
document.head.appendChild(style);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);