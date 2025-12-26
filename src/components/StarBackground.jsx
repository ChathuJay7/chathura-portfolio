import {useEffect, useState} from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [constellations, setConstellations] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    generateStars();
    generateConstellations();
    generateShootingStars();

    const handleResize = () => {
      generateStars();
      generateConstellations();
    };

    window.addEventListener("resize", handleResize);

    const shootingStarInterval = setInterval(() => {
      generateShootingStars();
    }, 8000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random();
      const starType = size > 0.8 ? "giant" : size > 0.5 ? "medium" : "small";

      newStars.push({
        id: i,
        size: size * 4 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 3 + 1,
        type: starType,
        color: getStarColor(starType),
      });
    }

    setStars(newStars);
  };

  const getStarColor = (type) => {
    const colors = {
      giant: "255, 215, 0",
      medium: "255, 255, 255",
      small: "173, 216, 230",
    };
    return colors[type];
  };

  const generateConstellations = () => {
    const numberOfConstellations = 3;
    const newConstellations = [];

    for (let i = 0; i < numberOfConstellations; i++) {
      const points = [];
      const numPoints = Math.floor(Math.random() * 6) + 3; // 3-8 points

      // Create constellation shape
      const startX = Math.random() * 80 + 10;
      const startY = Math.random() * 80 + 10;

      points.push({x: startX, y: startY});

      for (let j = 1; j < numPoints; j++) {
        points.push({
          x: points[j - 1].x + (Math.random() * 10 - 5),
          y: points[j - 1].y + (Math.random() * 10 - 5),
        });
      }

      newConstellations.push({
        id: i,
        points,
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    setConstellations(newConstellations);
  };

  const generateShootingStars = () => {
    const numberOfShootingStars = Math.floor(Math.random() * 2) + 1;
    const newShootingStars = [];

    for (let i = 0; i < numberOfShootingStars; i++) {
      newShootingStars.push({
        id: Date.now() + i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 3,
        animationDuration: Math.random() * 2 + 1,
        trailLength: Math.random() * 100 + 50,
        angle: Math.random() * 30 + 15,
      });
    }

    setShootingStars(newShootingStars);

    setTimeout(() => {
      setShootingStars([]);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {constellations.map((constellation) => (
        <div
          key={`const-${constellation.id}`}
          className="absolute"
          style={{opacity: constellation.opacity}}
        >
          {constellation.points.map((point, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
            />
          ))}
          {constellation.points.slice(0, -1).map((point, index) => (
            <div
              key={`line-${index}`}
              className="absolute h-0.5 bg-white/20"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: `${Math.sqrt(
                  Math.pow(constellation.points[index + 1].x - point.x, 2) +
                    Math.pow(constellation.points[index + 1].y - point.y, 2)
                )}%`,
                transform: `rotate(${Math.atan2(
                  constellation.points[index + 1].y - point.y,
                  constellation.points[index + 1].x - point.x
                )}rad)`,
                transformOrigin: "0 0",
              }}
            />
          ))}
        </div>
      ))}

      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            backgroundColor: `rgb(${star.color})`,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(${
              star.color
            }, 0.3)`,
            animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.trailLength}px`,
            height: `${star.size}px`,
            background: `linear-gradient(90deg, 
            transparent, 
            rgba(59, 130, 246, 0.8) 20%,
            rgba(96, 165, 250, 0.6) 50%,
            transparent 100%)`,
            transform: `rotate(${star.angle}deg)`,
            transformOrigin: "0 50%",
            animation: `shooting-star ${star.animationDuration}s ease-out ${star.delay}s`,
            opacity: 0,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shooting-star {
          0% {
            opacity: 0;
            transform: translateX(0) rotate(${shootingStars[0]?.angle || 45}deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(500px)
              rotate(${shootingStars[0]?.angle || 45}deg);
          }
        }
      `}</style>
    </div>
  );
};
