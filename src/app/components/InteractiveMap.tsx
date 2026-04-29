import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export function InteractiveMap() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
 // const [scale] = useState(2.0); // Zoom fixo mas devia bater 2.0 no pc e 1.3 no mobile
 const [scale, setScale] = useState(window.innerWidth < 768 ? 1.3 : 2.0); 
 const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Para inércia/momentum
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPositionRef = useRef({ x: 0, y: 0, time: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Carregar a imagem para obter suas dimensões reais
    const img = new Image();
    img.src = mapImage;
    img.onload = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        
        // Calcular dimensões da imagem para cobrir o container mantendo aspect ratio
        const imgAspect = img.width / img.height;
        const containerAspect = containerWidth / containerHeight;
        
        let displayWidth, displayHeight;
        
        if (imgAspect > containerAspect) {
          // Imagem mais larga - ajustar pela altura
          displayHeight = containerHeight;
          displayWidth = displayHeight * imgAspect;
        } else {
          // Imagem mais alta - ajustar pela largura
          displayWidth = containerWidth;
          displayHeight = displayWidth / imgAspect;
        }
        
        setImageDimensions({ width: displayWidth, height: displayHeight });
        
        // Verificar se há posição salva no state da navegação
        const savedPosition = (location.state as any)?.mapPosition;
        
        if (savedPosition) {
          // Restaurar posição salva
          setPosition(savedPosition);
        } else {
          // Centralizar a imagem inicialmente
          const scaledWidth = displayWidth * scale;
          const scaledHeight = displayHeight * scale;
          
          setPosition({
            x: (containerWidth - scaledWidth) / 2,
            y: (containerHeight - scaledHeight) / 2,
          });
        }
        
        setIsInitialized(true);
      }
    };

  }, [scale, location.state]);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setScale(1.3);
    } else {
      setScale(2.0);
    }
  };

  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Cancelar qualquer animação de inércia em andamento
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setVelocity({ x: 0, y: 0 });
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    lastPositionRef.current = { x: position.x, y: position.y, time: Date.now() };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const timeDiff = now - lastPositionRef.current.time;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Calcular velocidade baseada na mudança de posição
    if (timeDiff > 0 && timeDiff < 50) { // Apenas se for um movimento recente
      const deltaX = newX - lastPositionRef.current.x;
      const deltaY = newY - lastPositionRef.current.y;
      setVelocity({ 
        x: deltaX / timeDiff * 10,
        y: deltaY / timeDiff * 10
      });
    }
    
    lastPositionRef.current = { x: newX, y: newY, time: now };
    updatePosition(newX, newY);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    applyMomentum();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Cancelar qualquer animação de inércia em andamento
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setVelocity({ x: 0, y: 0 });
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    lastPositionRef.current = { x: position.x, y: position.y, time: Date.now() };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const now = Date.now();
    const timeDiff = now - lastPositionRef.current.time;
    
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    // Calcular velocidade baseada na mudança de posição
    if (timeDiff > 0 && timeDiff < 50) { // Apenas se for um movimento recente
      const deltaX = newX - lastPositionRef.current.x;
      const deltaY = newY - lastPositionRef.current.y;
      setVelocity({ 
        x: deltaX / timeDiff * 10,
        y: deltaY / timeDiff * 10
      });
    }
    
    lastPositionRef.current = { x: newX, y: newY, time: now };
    updatePosition(newX, newY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    applyMomentum();
  };

  const updatePosition = (newX: number, newY: number) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      
      const scaledWidth = imageDimensions.width * scale;
      const scaledHeight = imageDimensions.height * scale;
      
      const maxX = 0;
      const minX = containerWidth - scaledWidth;
      const maxY = 0;
      const minY = containerHeight - scaledHeight;
      
      setPosition({
        x: Math.max(minX, Math.min(maxX, newX)),
        y: Math.max(minY, Math.min(maxY, newY)),
      });
    }
  };

  const applyMomentum = () => {
    const friction = 0.95; // Desaceleração suave
    const minVelocity = 0.5; // Velocidade mínima para continuar
    
    let currentVelocity = { ...velocity };
    
    const animate = () => {
      // Aplicar fricção
      currentVelocity.x *= friction;
      currentVelocity.y *= friction;
      
      // Parar se a velocidade for muito baixa
      if (Math.abs(currentVelocity.x) < minVelocity && Math.abs(currentVelocity.y) < minVelocity) {
        animationFrameRef.current = null;
        return;
      }
      
      // Atualizar posição
      setPosition(prev => {
        const newX = prev.x + currentVelocity.x;
        const newY = prev.y + currentVelocity.y;
        
        // Aplicar limites
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const containerHeight = containerRef.current.offsetHeight;
          
          const scaledWidth = imageDimensions.width * scale;
          const scaledHeight = imageDimensions.height * scale;
          
          const maxX = 0;
          const minX = containerWidth - scaledWidth;
          const maxY = 0;
          const minY = containerHeight - scaledHeight;
          
          return {
            x: Math.max(minX, Math.min(maxX, newX)),
            y: Math.max(minY, Math.min(maxY, newY)),
          };
        }
        
        return { x: newX, y: newY };
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Iniciar animação apenas se houver velocidade significativa
    if (Math.abs(currentVelocity.x) > minVelocity || Math.abs(currentVelocity.y) > minVelocity) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  const handleHotspotClick = (route: string) => {
    // Salvar a posição atual do mapa antes de navegar
    navigate(route, { 
      state: { mapPosition: position }
    });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-900 relative">
      <div
        ref={containerRef}
        className="w-full h-full relative cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          touchAction: "none",
          userSelect: "none",
        }}
      >
        {imageDimensions.width > 0 && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: `${imageDimensions.width}px`,
              height: `${imageDimensions.height}px`,
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "0 0",
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            <img
              ref={imageRef}
              src={mapImage}
              alt="Mapa interativo"
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
            
            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute transition-all duration-200"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  width: `${hotspot.width}%`,
                  height: `${hotspot.height}%`,
                  cursor: "pointer",
                  backgroundColor: hoveredHotspot === hotspot.id 
                    ? "rgba(100, 200, 255, 0.3)" 
                    : "rgba(100, 200, 255, 0.15)",
                  border: hoveredHotspot === hotspot.id 
                    ? "2px solid rgba(100, 200, 255, 0.8)" 
                    : "2px solid rgba(100, 200, 255, 0.4)",
                  borderRadius: "8px",
                  boxShadow: hoveredHotspot === hotspot.id 
                    ? "0 0 20px rgba(100, 200, 255, 0.6)" 
                    : "none",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!editMode) {
                    handleHotspotClick(hotspot.route);
                  }
                }}
                onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                {hoveredHotspot === hotspot.id && (
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-sky-700 px-3 py-1 rounded-md text-xs whitespace-nowrap shadow-lg"
                    style={{
                      pointerEvents: "none",
                    }}
                  >
                    {hotspot.label}
                    {editMode && (
                      <div className="text-[10px] mt-1 font-mono">
                        x:{hotspot.x}% y:{hotspot.y}%
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Instruções */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg max-w-[90vw]">
        <p className="text-xs md:text-sm text-slate-700 font-medium text-center">
          <span className="block md:inline">Arraste para explorar</span>
          <span className="hidden md:inline"> • </span>
          <span className="block md:inline">Clique nas áreas destacadas</span>
        </p>
      </div>
    </div>
  );
}