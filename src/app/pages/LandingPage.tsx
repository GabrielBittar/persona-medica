import { useNavigate } from "react-router";
import { useState } from "react";
export default function LandingPage() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleStart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ease-in-out ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >

        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
          onClick={() => setIsModalOpen(false)} 
        />

        <div 
          className={`relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 transform transition-all duration-500 ease-out ${
            isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 mb-6">
              <svg className="h-8 w-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-slate-800">Preparado/a?</h3>
            <p className="mt-3 text-slate-600">
              Persona Médica é uma biblioteca de cenários voltada à divulgação do conhecimento sobre práticas de roleplay na preceptoria médica. Por meio da navegação interativa arrastando a tela por um mapa e selecionando diferentes cenários, você poderá conhecer situações em que o roleplay pode ser aplicado à educação médica, bem como exemplos de dinâmicas.
            </p>
            <hr className="mt-3" />
            <p className="mt-3 text-slate-600">
              Este projeto foi desenvolvido com o apoio da Especialização em Preceptoria em Medicina da Família e Comunidade pelo Hospital Moinhos de Vento (Faculdade Moinhos).
            </p>
          </div>

          <div className="mt-8">
            <button 
              onClick={closeModal}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-95"
            >
              Entendido!
            </button>
          </div>
        </div>
      </div>


      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-10">
          <img src="web-app-manifest-512x512.png" width={150} className="hover:opacity-75" />
        </div> 

        <h1 className="text-5xl md:text-6xl mb-4 text-slate-800">
          Persona Médica
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12">
          práticas de roleplay na preceptoria
        </p>

        <p className="text-base md:text-lg text-slate-500 mb-16">
          Dr. Gabriel Gouveia Coelho
        </p>


        <button
          onClick={() => navigate("/map")}
          className="px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Começar exploração
        </button>
      </div>
    </div>
  );
}
