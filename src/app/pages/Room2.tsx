import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room2() {
  const hotspot = hotspots.find(h => h.id === "room2")!;

  return (
    <DetailPage
      id="room2"
      title="Prática de consultório"
      hotspot={hotspot}
      mapImage={mapImage}
      description="O ponto central é a transição do modelo focado na doença para o modelo centrado na pessoa. A importância desse roleplay aqui está em ensinar o médico a olhar para além das queixas mais evidentes e atuar dentro das características da APS com seus pacientes, oferecendo atendimento próximo, contínuo e integral, junto a uma escuta atenta e investigativa, prevenindo tanto quanto possível o surgimento de novas condições adversas nos pacientes."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: Aquele que faz o papel do paciente é instruído a não entregar todas as informações de imediato. O residente precisa usar perguntas abertas e empatia para descobrir o que realmente trouxe aquela pessoa ali. É o modelo clássico de consulta. O paciente traz uma queixa principal, mas também pistas de outros problemas",
        "Principais referências: Silverman, J. et al. Skills for Communicating with Patients, 2013; Balint, M. O Médico, seu Paciente e a Doença, 2001; Gusso et al. Tratado de Medicina de Família e Comunidade - 2 Volumes: Princípios, Formação e Prática, 2018; Cole, S. & Bird, J. The Medical Interview: The Three Function Approach, 2013."
      ]}
    />
  );
}
