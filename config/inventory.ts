import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "placa_de_video_1",
    name: "Video card RTX 3060 Dual OC Palit NVIDIA GeForce, GDDR6, RGB, 192bit, G-Sync, Ray Tracing, DLSS - NE63060T19K9-190AD",
    description: `RTX 3060 Dual OC Video Card
    The GeForce RTX 3060 lets you play the latest games using the power of Ampere – NVIDIA's 2nd generation RTX architecture. 
    Get incredible performance with improved Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.`,
    price: 1699, 
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654894185506",
    images: [
      "https://images.kabum.com.br/produtos/fotos/511042/placa-de-video-rtx-3060-dual-oc-palit-nvidia-geforce-12gb-gddr6-rgb-192bit-g-sync-ray-tracing-dlss-ne63060t19k9-190ad_1701199937_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/511042/placa-de-video-rtx-3060-dual-oc-palit-nvidia-geforce-12gb-gddr6-rgb-192bit-g-sync-ray-tracing-dlss-ne63060t19k9-190ad_1701199935_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/511042/placa-de-video-rtx-3060-dual-oc-palit-nvidia-geforce-12gb-gddr6-rgb-192bit-g-sync-ray-tracing-dlss-ne63060t19k9-190ad_1701199933_gg.jpg",
    ],
    categories: ["videoCards"],
    colors: ["RGB"],
    currency: "BRL",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "rise_mode_1",
    name: "Rise Mode Galaxy Glass Standard Gamer Case, Mid Tower, ARGB, ATX, Glass Side and Front, 10x Cooler Fan, White - RM-GA-GGSW-ARGB",
    description: `Gamer Rise Mode Galaxy Glass Standard White Case
    A product that offers great features for those looking for a good gaming case with high performance. It has tempered glass on the side and front, which will allow you to showcase its components.`,
    price: 529,
    image:
      "https://images.kabum.com.br/produtos/fotos/420418/gabinete-gamer-rise-mode-galaxy-glass-standard-white-10-fans-argb-rm-ga-ggsw-argb_1685731687_gg.jpg",
    images: [
      "https://images.kabum.com.br/produtos/fotos/420418/gabinete-gamer-rise-mode-galaxy-glass-standard-white-10-fans-argb-rm-ga-ggsw-argb_1685731680_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/420418/gabinete-gamer-rise-mode-galaxy-glass-standard-white-10-fans-argb-rm-ga-ggsw-argb_1685731681_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/420418/gabinete-gamer-rise-mode-galaxy-glass-standard-white-10-fans-argb-rm-ga-ggsw-argb_1685731682_gg.jpg",
    ],
    categories: ["computerCases"],
    colors: ["white"],
    currency: "BRL",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "notebook_gamer_1",
    name: "Notebook Gamer Acer Nitro 5 AMD Ryzen 5 7535HS, NVIDIA RTX 3050, SSD 512GB, 15.6 Full HD, Linux Gutta, Preto - AN515-47-R5SU",
    description: `Gamer Notebook Acer Nitro 5 AN515-47-R5SU AMD Ryzen 5 7535HS
    Start the Game for Real
    The advanced stage of your game has arrived! Be prepared with the Acer Aspire Nitro 5 gaming notebook. With it, there is no such thing as a difficult game, there is only a brutal game!  `,
    price: 439,
    image:
      "https://images.kabum.com.br/produtos/fotos/471697/notebook-gamer-acer-nitro-5-an515-47-r5su-amd-ryzen-5-7535hs-8gb-nvidia-rtx-3050-ssd-512gb-15-6-full-hd-win-11-preto-nh-qlhal-001_1689859064_gg.jpg",
    images: [
      "https://images.kabum.com.br/produtos/fotos/471697/notebook-gamer-acer-nitro-5-an515-47-r5su-amd-ryzen-5-7535hs-8gb-nvidia-rtx-3050-ssd-512gb-15-6-full-hd-win-11-preto-nh-qlhal-001_1689859072_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/471697/notebook-gamer-acer-nitro-5-an515-47-r5su-amd-ryzen-5-7535hs-8gb-nvidia-rtx-3050-ssd-512gb-15-6-full-hd-win-11-preto-nh-qlhal-001_1689859065_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/471697/notebook-gamer-acer-nitro-5-an515-47-r5su-amd-ryzen-5-7535hs-8gb-nvidia-rtx-3050-ssd-512gb-15-6-full-hd-win-11-preto-nh-qlhal-001_1689859066_gg.jpg"
    ],
    categories: ["notebooksGamer"],
    colors: ["black"],
    currency: "BRL",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "mouse_gamer_1",
    name: "Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2",
    description: `Gaming Mouse Redragon Cobra M711 V2
    Redragon Cobra performance and design
    The Redragon Cobra Gamer Mouse has a PIXART 3327 sensor for High Performance (20 G / 100 IPS) and its system is Redragon Chroma Mk.II RGB Lighting (7 Different Lighting Modes).`,
    price: 119,
    image:
      "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_gg.jpg",
    images: [
      "https://images.kabum.com.br/produtos/fotos/94555/94555_1_1516707060_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/94555/94555_2_1516707060_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1640721081_gg.jpg"
    ],
    categories: ["mouses"],
    colors: ["black"],
    currency: "BRL",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47r",
    sku: "monitor_gamer_1",
    name: "MONITOR GAMER BENQ MOBIUZ EX3410R, 34 POL. VA CURVO, UWQHD, 1MS, 144HZ, FREESYNC PREMIUM PRO, HDMI/DP, 9H.LKKLA.TBA",
    description: `Venca todos os inimigos, mesmo em velocidades altíssimas. A taxa de atualização de 165Hz elimina o atraso e o desfoque do movimento para uma jogabilidade estimulante com ação ultra-suave.`,
    price: 189,
    image:
      "https://images.kabum.com.br/produtos/fotos/364670/monitor-gamer-samsung-odyssey-g3-27-led-full-hd-165-hz-1ms-hdmi-displayport-freesync-premium-ajuste-de-altura-preto-ls27ag320nlxzd_1699279318_g.jpg",
    images: [
      "https://images.kabum.com.br/produtos/fotos/364670/monitor-gamer-samsung-odyssey-g3-27-led-full-hd-165-hz-1ms-hdmi-displayport-freesync-premium-ajuste-de-altura-preto-ls27ag320nlxzd_1699279319_g.jpg",
      "https://images.kabum.com.br/produtos/fotos/364670/monitor-gamer-samsung-odyssey-g3-27-led-full-hd-165-hz-1ms-hdmi-displayport-freesync-premium-ajuste-de-altura-preto-ls27ag320nlxzd_1699279320_g.jpg",
      "https://images.kabum.com.br/produtos/fotos/364670/monitor-gamer-samsung-odyssey-g3-27-led-full-hd-165-hz-1ms-hdmi-displayport-freesync-premium-ajuste-de-altura-preto-ls27ag320nlxzd_1699279322_g.jpg"
    ],
    categories: ["mouses"],
    colors: ["black"],
    currency: "BRL",
  },
]
