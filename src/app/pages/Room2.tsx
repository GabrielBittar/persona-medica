import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room2() {
  const hotspot = hotspots.find((h) => h.id === "room2")!;

  return (
    <DetailPage
      id="room2"
      title="Prática de consultório"
      hotspot={hotspot}
      mapImage={mapImage}
      description="O ponto central é a transição do modelo focado na doença para o modelo centrado na pessoa. A importância desse roleplay está em ensinar o médico a olhar para além das queixas mais evidentes e atuar dentro das características da APS com seus pacientes, oferecendo atendimento próximo, contínuo e integral, junto a uma escuta atenta e investigativa, prevenindo tanto quanto possível o surgimento de novas condições adversas nos pacientes."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: aquele que faz o papel do paciente é instruído a não entregar todas as informações de imediato. O residente precisa usar perguntas abertas e empatia para descobrir o que realmente trouxe aquela pessoa. É o modelo clássico de consulta. O paciente traz uma queixa principal, mas também pistas de outros problemas",
        "Importante: o mais relevante de afinar aqui é a união entre a escuta na atenção primária e a capacidade de focar na preparação do residente para otimizar ao máximo o uso do tempo em consultório.",
        "Principais referências sugeridas: Silverman, J. et al. Skills for Communicating with Patients, 2013 [Este é o guia definitivo sobre o modelo Calgary-Cambridge, que detalha cada etapa da consulta médica, focando em habilidades de comunicação que podem ser treinadas via roleplay] / Balint, M. O Médico, seu Paciente e a Doença, 2001 [Referência para entender as agendas ocultas e as emoções transferenciais que ocorrem no consultório. Ajuda a preparar o médico para lidar com pacientes que trazem queixas somatizadas e/ou ocultam pontos importantes] / Gusso et al. Tratado de Medicina de Família e Comunidade - 2 Volumes: Princípios, Formação e Prática, 2018 [Para uma perspectiva brasileira e contextualizada ao nosso sistema de saúde, este tratado é fundamental. Adapta os conceitos internacionais à realidade da prática clínica no Brasil, sendo uma referência robusta para preceptorias em programas de residência.] / Cole, S. & Bird, J. The Medical Interview: The Three Function Approach, 2013 [Ajuda o residente a entender que uma consulta de sucesso não é apenas aquela que chega ao diagnóstico correto, mas aquela que estabelece uma relação de confiança e garante a adesão do paciente ao tratamento].",
      ]}
    />
  );
}
