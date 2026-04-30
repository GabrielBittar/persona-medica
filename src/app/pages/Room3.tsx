import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room3() {
  const hotspot = hotspots.find((h) => h.id === "room3")!;

  return (
    <DetailPage
      id="room3"
      title="Decisão crítica e ética à beira do leito"
      hotspot={hotspot}
      mapImage={mapImage}
      description="Este cenário é um dos mais sensíveis da prática hospitalar. A importância deste roleplay está principalmente em ensinar o residente a ter o equilíbrio entre a indicação ténica (beneficência) e o respeito aos valores e desejos do paciente (autonomia), agora representados pelo familiar. O objetivo é treinar o médico para orientar a família numa situação de decisão crítica, buscando a forma mais adequada de comunicar e valorizando a escolha correta pelos procedimentos mais indicados para cada caso. O residente aprende a traduzir riscos e benefícios de procedimentos invasivos sem usar um vocabulário muito técnico, apoiando a promoção de uma deliberação ética e acertada por parte dos familiares."
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: No papel de mediador, o residente deve acolher a angústia do familiar, que muitas vezes se sente culpado ou sobrecarregado pela responsabilidade de tomar uma então necessária decisão crítica acerca de um paciente inconsciente. A simulação foca na habilidade de explorar diretivas antecipadas (vontades prévias do próprio paciente) e em como chegar a um consenso ético que priorize a dignidade e a proporcionalidade terapêutica, evitando tanto o abandono quanto a obstinação terapêutica",
        "Principais referências sugeridas: Beauchamp, T. & Childress, J. Princípios de Ética Biomédica, 2002 [Texto fundamental que define os quatro pilares da bioética (Autonomia, Beneficência, Não-maleficência e Justiça). Essencial para fundamentar qualquer decisão à beira do leito] / Back, A. et al. Mastering communication with seriously ill patients, 2002 [Oferece ferramentas práticas (como o protocolo REMAP) para guiar conversas sobre objetivos de cuidado e decisões em situações de doenças graves e pacientes incapacitados] / Glebocki, G. & Corneau, F. Decisão compartilhada na atenção primária e desfechos em saúde: uma revisão integrativa, Rev. Brasil. Med. Farm. Comunidade, RJ: 2021 [Este artigo demonstra que a decisão compartilhada na atenção primária reduz o conflito decisório e aumenta a satisfação e adesão do paciente ao tratamento. Ele fundamenta que envolver o paciente nas escolhas clínicas melhora os desfechos em saúde e fortalece a aliança terapêutica no cuidado continuado].",
      ]}
    />
  );
}
