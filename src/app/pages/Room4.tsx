import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room4() {
  const hotspot = hotspots.find(h => h.id === "room4")!;

  return (
    <DetailPage
      id="room4"
      title="Sala de Atendimento 4"
      hotspot={hotspot}
      mapImage={mapImage}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nossa última sala de atendimento combina conforto excepcional com tecnologia avançada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cada visita é uma oportunidade de cuidar da sua saúde com excelência."
      additionalInfo={[
        "Espaço otimizado para conforto do paciente e eficiência médica",
        "Sistemas digitais integrados para prontuários e exames",
        "Ambiente sereno que promove relaxamento e confiança",
        "Acesso facilitado e layout inclusivo para todos os pacientes",
      ]}
    />
  );
}
