import { useEffect, useRef } from 'react';

export default function StarsBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas ref not available');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }

    // Set canvas size to window size
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Explicitly set the canvas resolution
    canvas.width = width;
    canvas.height = height;
    
    console.log('Canvas initialized:', width, 'x', height);
    console.log('Canvas element:', canvas);
    console.log('Canvas context:', ctx);

    // Create stars array
    const stars = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (Math.random() * 3 + 1.5) * 0.72, // reduced ~30% total (~10% more)
        opacity: Math.random() * 0.8 + 0.5,
        speedX: (Math.random() - 0.5) * 3,
        speedY: (Math.random() - 0.5) * 3,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        maxOpacity: Math.random() * 1 + 0.6,
      });
    }

    console.log('Created', stars.length, 'stars');

    let frameCount = 0;
    let animationId = null;

    const drawStars = () => {
      frameCount++;

      const isDark = theme === 'dark';
      
      // Clear canvas with theme-appropriate background
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Draw and animate each star
      stars.forEach((star, index) => {
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
        star.opacity = Math.max(0.3, Math.min(star.maxOpacity, star.opacity));

        // Draw star - white for dark theme, black for light theme
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${star.opacity})` 
          : `rgba(0, 0, 0, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Log every 60 frames
      if (frameCount % 60 === 0) {
        console.log('Animation frame:', frameCount, 'First star:', stars[0]);
      }

      animationId = requestAnimationFrame(drawStars);
    };

    // Start animation
    console.log('Starting animation loop...');
    drawStars();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized to:', window.innerWidth, 'x', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: -1000,
        pointerEvents: 'none',
        display: 'block',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      }}
    />
  );
}
