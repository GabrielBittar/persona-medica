import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room1() {
  const hotspot = hotspots.find(h => h.id === "room1")!;

  return (
    <DetailPage
      id="room1"
      title="Comunicando notícia sensível"
      hotspot={hotspot}
      mapImage={mapImage}
      description="Comunicar um diagnóstico difícil ou o agravamento de um quadro clínico é um dos momentos mais críticos da prática médica. Não se trata apenas de entregar uma informação, mas de garantir que o paciente seja acolhido em sua vulnerabilidade. No ambiente de ensino, o roleplay é a estratégia mais eficaz para preparar o médico em formação para esse momento, permitindo que ele desenvolva segurança e empatia antes do contato real com o paciente. O objetivo final é formar médicos que saibam transitar pela angústia do outro sem serem consumidos por ela e sem se tornarem frios. O roleplay na preceptoria permite que a técnica e a empatia caminhem juntas."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: Geralmente utiliza-se um paciente simulado (um ator ou outro residente) que interpreta um familiar em choque ou negação. Em uma dinâmica, por exemplo, o residente deve abordar a pessoa em um local barulhento e levá-la para um canto mais reservado. O foco aqui é o manejo da crise. O preceptor observa se o residente consegue manter a calma diante de gritos ou choro intenso e se utiliza frases curtas e claras.",
        "Importante: Comunicar notícias ruins/sensíveis exige empatia, preparação e clareza, utilizando o protocolo SPIKES (S-Setting (organização ou configuração do ambiente), P-Perception (percepção), I-Invitation (convite), K-Knowledge (conhecimento), E-Emotions (emoções), S-Strategy/Summary (estratégia e resumo)) para estruturar a conversa.",
        "Principais referências: Buckman, R. How to Break Bad News: A Guide for Health Care Professionals, 1992; Silverman, J. et al. Skills for Communicating with Patients, 2013."
      ]}
    />
  );
}
