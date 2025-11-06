import React from 'react';

const StarrySky: React.FC = () => {
  // Generate random stars
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: '20%', animationDelay: '2s' }} />
      <div className="shooting-star" style={{ top: '40%', animationDelay: '8s' }} />
      <div className="shooting-star" style={{ top: '60%', animationDelay: '15s' }} />
    </div>
  );
};

export default StarrySky;
