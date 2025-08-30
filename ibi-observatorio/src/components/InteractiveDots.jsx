import { useEffect, useRef } from 'react';

const InteractiveDots = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];
    let animationTime = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize dots when canvas is resized
      initDots();
    };

    const initDots = () => {
      dots = [];
      const spacing = 50;
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            originalX: i * spacing + spacing / 2,
            originalY: j * spacing + spacing / 2,
            radius: 1,
            opacity: 0.4,
            // Propriedades para movimento orgânico
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
            speedX: 0.5 + Math.random() * 1,
            speedY: 0.5 + Math.random() * 1,
            amplitudeX: 1 + Math.random() * 2,
            amplitudeY: 1 + Math.random() * 2
          });
        }
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationTime += 0.016; // ~60fps
      
      dots.forEach(dot => {
        // Movimento orgânico sutil usando funções seno/cosseno
        const organicOffsetX = Math.sin(animationTime * dot.speedX + dot.phaseX) * dot.amplitudeX;
        const organicOffsetY = Math.cos(animationTime * dot.speedY + dot.phaseY) * dot.amplitudeY;
        
        // Posição base com movimento orgânico
        const baseX = dot.originalX + organicOffsetX;
        const baseY = dot.originalY + organicOffsetY;
        
        // Calculate distance from mouse
        const dx = mouseRef.current.x - baseX;
        const dy = mouseRef.current.y - baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          // Move dot away from mouse
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          const targetX = baseX - Math.cos(angle) * force * 15;
          const targetY = baseY - Math.sin(angle) * force * 15;
          
          dot.x += (targetX - dot.x) * 0.3;
          dot.y += (targetY - dot.y) * 0.3;
          dot.opacity = 0.4 + force * 0.6;
          dot.radius = 1 + force * 1.5;
        } else {
          // Return to organic position
          dot.x += (baseX - dot.x) * 0.05;
          dot.y += (baseY - dot.y) * 0.05;
          
          // Variação sutil na opacidade baseada no movimento
          const organicOpacity = 0.3 + 0.2 * (1 + Math.sin(animationTime * dot.speedX * 0.3 + dot.phaseX));
          dot.opacity += (organicOpacity - dot.opacity) * 0.05;
          dot.radius += (1 - dot.radius) * 0.05;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 166, 82, ${dot.opacity})`; // ibi-green with opacity
        ctx.fill();
        
        // Draw connections (only to nearby dots for performance)
        const nearbyDots = dots.filter(otherDot => {
          if (otherDot === dot) return false;
          const dx2 = Math.abs(dot.originalX - otherDot.originalX);
          const dy2 = Math.abs(dot.originalY - otherDot.originalY);
          return dx2 <= 60 && dy2 <= 60;
        });

        nearbyDots.forEach(otherDot => {
          const dx2 = dot.x - otherDot.x;
          const dy2 = dot.y - otherDot.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (distance2 < 70 && distance2 > 0) {
            const opacity = (70 - distance2) / 70 * 0.15;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = `rgba(0, 153, 216, ${opacity})`; // ibi-blue with opacity
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      drawDots();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 2 }}
    />
  );
};

export default InteractiveDots;