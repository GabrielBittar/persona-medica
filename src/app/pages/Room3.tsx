import { DetailPage } from "../components/DetailPage";
import mapImage from "../../imports/gabriel-g-background-vetorial.png";
import { hotspots } from "../config/hotspots";

export default function Room3() {
  const hotspot = hotspots.find(h => h.id === "room3")!;

  return (
    <DetailPage
      id="room3"
      title="aaaaaaaaa"
      hotspot={hotspot}
      mapImage={mapImage}
      description="bbbbbbbbb"
      additionalInfo={[
        "Aplicação e exemplo de dinâmica: a",
        "Principais referências: ",
      ]}
    />
  );
}
