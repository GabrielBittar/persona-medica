import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room5() {
  const hotspot = hotspots.find((h) => h.id === "room5")!;

  return (
    <DetailPage
      id="room5"
      title="Reunião de feedback"
      hotspot={hotspot}
      mapImage={mapImage}
      description="O feedback entre preceptor e residente é um momento crucial no processo de ensino. Muitas vezes, a tensão desse diálogo pode travar o aprendizado. Este roleplay é importante para desmistificar o erro e torná-lo pedagógico. Ao simular uma reunião de feedback, o médico em formação desenvolve a capacidade de ouvir críticas de forma analítica, sem se sentir pessoalmente atacado. Para o preceptor, é um treino de como guiar o aluno para a excelência mantendo o incentivo e o respeito."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: simula-se uma discussão sobre uma conduta clínica que deu errado ou uma falha de postura. O objetivo é que o preceptor aprenda a orientar sem desmotivar e o residente aprenda a receber o feedback sem se colocar na defensiva.",
        "Importante: o feedback tem relevância tanto como uma prática real no cotidiano do residente quanto no contexto do roleplay, trabalhando a maneira como deve se dar seu desenvolvimento.",
        "Principais referências sugeridas: Eidt, L. Feedback in medical education: beyond the traditional evaluation. Rev. Assoc. Med. Bras., 2023 [Redefine o feedback como um diálogo contínuo e formativo, essencial para o desenvolvimento de competências, indo além da nota ou avaliação tradicional para focar no crescimento do residente] / Pricinote, S. et al. O significado do feedback: um olhar de estudantes de medicina. Rev. Bras. de Educação Médica, 2021 [Revela a percepção dos estudantes, destacando que o feedback eficaz exige um ambiente de confiança e clareza para que seja aceito como ferramenta de melhoria e não como crítica pessoal.] / Cantillon, P. et al. ABC of learning and teaching in medicine, 2017 [aborda modelos como o Sanduíche de Feedback (embora discuta suas limitações) e o modelo de Pendleton, oferecendo estratégias para lidar com o residente que tem dificuldade em aceitar críticas].",
      ]}
    />
  );
}
