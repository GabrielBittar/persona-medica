export interface Hotspot {
  id: string;
  x: number; // posição horizontal em % (0-100)
  y: number; // posição vertical em % (0-100)
  width: number; // largura em %
  height: number; // altura em %
  route: string;
  label: string;
}

// Configure aqui as posições dos hotspots
// x, y = posição do canto superior esquerdo do quadrado (em porcentagem da imagem)
// width, height = tamanho do quadrado (em porcentagem da imagem)
export const hotspots: Hotspot[] = [
  {
    id: "room1",
    x: 26,
    y: 43,
    width: 12,
    height: 18,
    route: "/comunicando-noticia-sensivel",
    label: "Comunicando notícia sensível",
  },
  {
    id: "room2",
    x: 50,
    y: 24,
    width: 12,
    height: 18,
    route: "/pratica-de-consultorio",
    label: "Prática de consultório",
  },
  {
    id: "room3",
    x: 80,
    y: 20,
    width: 12,
    height: 18,
    route: "/room3",
    label: "Sala 3",
  },
  {
    id: "room4",
    x: 81,
    y: 59,
    width: 12,
    height: 18,
    route: "/room4",
    label: "Sala 4",
  },
  {
    id: "room5",
    x: 48,
    y: 68,
    width: 12,
    height: 20,
    route: "/reuniao-de-feedback",
    label: "Reunião de feedback",
  }
];

// Função helper para calcular o centro do hotspot (para usar no objectPosition)
export function getHotspotCenter(hotspot: Hotspot) {
  return {
    x: hotspot.x + hotspot.width / 2,
    y: hotspot.y + hotspot.height / 2,
  };
}
