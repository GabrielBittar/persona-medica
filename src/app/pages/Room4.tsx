import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room4() {
  const hotspot = hotspots.find((h) => h.id === "room4")!;

  return (
    <DetailPage
      id="room4"
      title="Gerenciamento de erros e segurança do paciente"
      hotspot={hotspot}
      mapImage={mapImage}
      description="Este cenário foca na barreira contra eventos adversos. O preceptor orienta o residente a realizar a conferência sistemática antes de qualquer ajuste. Treina o residente a não seguir ordens cegamente e a conferir os procedimentos corretos da medicação (paciente certo, droga certa, via certa, hora certa, dose certa). É o exercício da vigilância compartilhada, onde o médico assume a responsabilidade final pela substância que entra na veia do paciente."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: o preceptor simula uma distração ou aponta para uma bolsa de infusão que não condiz com a prescrição atual (ex: um erro de dosagem ou de eletrólitos).",
        "Importante: nesse cenário podem ser trabalhados tanto o foco/atenção do preceptor ao que está fazendo, evitando distrações, quanto o trabalho em equipe, pois a atitude ideal será de corrigir o preceptor e apontar o medicamento correto.",
        "Principais referências sugeridas: Vincent, C. Patient Safety, 2010. [Detalha como o ambiente hospitalar pode induzir ao erro e como a supervisão direta (preceptoria) é o melhor método de prevenção.] / Gawande, A. The Checklist Manifesto: How to Get Things Right, 2011 [Gawande explica como a complexidade da medicina moderna exige checklists simples, como o que o residente faz ao conferir a bolsa de soro, para evitar catástrofes.]",
      ]}
    />
  );
}
