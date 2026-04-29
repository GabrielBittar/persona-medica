import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room5() {
  const hotspot = hotspots.find(h => h.id === "room5")!;

  return (
    <DetailPage
      id="room5"
      title="Reunião de feedback"
      hotspot={hotspot}
      mapImage={mapImage}
      description="O feedback entre preceptor e residente é um momento crucial no processo de ensino. Muitas vezes, a tensão desse diálogo pode travar o aprendizado. Este roleplay é importante para desmistificar o erro e torná-lo pedagógico. Ao simular uma reunião de feedback, o médico em formação desenvolve a capacidade de ouvir críticas de forma analítica, sem se sentir pessoalmente atacado. Para o preceptor, é um treino de como guiar o aluno para a excelência mantendo o incentivo e o respeito."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: simula-se uma discussão sobre uma conduta clínica que deu errado ou uma falha de postura. O objetivo é que o preceptor aprenda a orientar sem desmotivar, e o residente aprenda a receber o feedback sem se colocar na defensiva.",
        "Principais referências: ",
      ]}
    />
  );
}
