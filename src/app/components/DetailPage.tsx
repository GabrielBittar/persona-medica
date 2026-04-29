import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Hotspot } from "../config/hotspots";

interface DetailPageProps {
  id: string;
  title: string;
  hotspot: Hotspot;
  mapImage: string;
  description: string;
  additionalInfo?: string[];
}

const room_offsets: Record<string, { x: number; y: number }> = {
  room1: { x: -6, y: 6 },
  room2: { x: 3, y: -5 },
  room3: { x: 14, y: -7 },
  room4: { x: 13, y: 10 },
  room5: { x: 2, y: 12 },
}

export function DetailPage({ id, title, hotspot, mapImage, description, additionalInfo }: DetailPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Recuperar a posição do mapa salva
  const savedMapPosition = (location.state as any)?.mapPosition;
  
  const handleBackToMap = () => {
    if (savedMapPosition) {
      // Voltar com a posição salva
      navigate("/map", { state: { mapPosition: savedMapPosition } });
    } else {
      // Voltar sem posição (centralizará)
      navigate("/map");
    }
  };
  
  const offset = room_offsets[id] || { x: 1, y : 1 };
 
  const centerX = hotspot.x + (hotspot.width / 2) + offset.x;
  const centerY = hotspot.y + (hotspot.height / 2) + offset.y;

  // Fator de zoom aplicado (mesmo valor usado no mapa interativo)
  const zoomScale = 3.8;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sky-700 hover:text-sky-900 mb-8 transition-colors group"
          onClick={handleBackToMap}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Voltar ao mapa</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Imagem de destaque - recorte exato da área do hotspot */}
          <div className="relative bg-gradient-to-br from-sky-100 to-teal-100 p-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-slate-200">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${mapImage})`,
                  backgroundSize: `${zoomScale * 85}%`,
                  backgroundPosition: `${centerX}% ${centerY}%`,
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl text-slate-800 mb-6"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-slate-600 leading-relaxed mb-6">
                {description}
              </p>

              {additionalInfo && additionalInfo.length > 0 && (
                <div className="mt-8 space-y-4">
                  {additionalInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-600">{info}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-200"
            >
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-4">
                  <p className="text-sm text-blue-700 font-medium">Informações Gerais</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-lg px-6 py-4">
                  <p className="text-sm text-sky-700 font-medium">Preceptor</p>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg px-6 py-4">
                  <p className="text-sm text-teal-700 font-medium">Residente</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}