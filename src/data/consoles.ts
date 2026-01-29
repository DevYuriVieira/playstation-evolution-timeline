export type Era = "retro" | "modern" | "future";

export interface ConsoleData {
  id: string;
  name: string;
  year: number;
  sales: number; // milhões
  image: string;
  description: string;
  background: string;
  themeColor: string;
  era: Era;
  imageSize?: number; // Optional: tamanho máximo em px (padrão 550px)
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage?: string;
    media?: string;
  };
}

export const consoles: ConsoleData[] = [

  // 🎮 1994 — PS1 (Retro)
  {
    id: "ps1",
    name: "PlayStation",
    year: 1994,
    sales: 102,
    description:
      "Sony's groundbreaking first console revolutionized gaming forever with its advanced 3D graphics capabilities and CD-ROM technology. It became a cultural phenomenon with legendary franchises like Final Fantasy, Metal Gear Solid, and Resident Evil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png",
    themeColor: "#bfbfbf",
    background: "radial-gradient(circle at center, #222 0%, #000 70%)",
    era: "retro",
    specs: {
      cpu: "33.9 MHz R3000",
      gpu: "Custom Sony GPU",
      ram: "2 MB",
      media: "CD-ROM",
    },
  },

  // 🎮 2000 — PS2 (Retro)
  {
    id: "ps2",
    name: "PlayStation 2",
    year: 2000,
    sales: 155,
    description:
      "The best-selling console of all time, the PS2 dominated the gaming industry with DVD support, stunning graphics, and an unparalleled game library including GTA, Metal Gear Solid, and Kingdom Hearts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/PS2-Fat-Console-Set.png",
    imageSize: 420,
    themeColor: "#0047ff",
    background: "radial-gradient(circle at center, #001f5c 0%, #000 70%)",
    era: "retro",
    specs: {
      cpu: "294 MHz Emotion Engine",
      gpu: "Graphics Synthesizer",
      ram: "32 MB",
      media: "DVD-ROM",
    },
  },

  // 🎮 2004 — PSP (Retro Portable)
  {
    id: "psp",
    name: "PlayStation Portable",
    year: 2004,
    sales: 80,
    description:
      "Brought console-level gaming to your pocket with its brilliant screen, dual analog sticks, and impressive multimedia capabilities including movies, photos, and games via UMD.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/PSP-3000-Model.png",
    themeColor: "#999999",
    background: "radial-gradient(circle at center, #222 0%, #000 70%)",
    era: "retro",
    specs: {
      cpu: "333 MHz MIPS R4000",
      gpu: "Custom Sony GPU",
      ram: "32 MB",
      media: "UMD",
    },
  },

  // 🎮 2006 — PS3 (Modern início HD)
  {
    id: "ps3",
    name: "PlayStation 3",
    year: 2006,
    sales: 87,
    description:
      "Introduced groundbreaking Blu-ray technology and the powerful Cell processor. Defined HD gaming with online multiplayer, free PSN service, and iconic franchises like Uncharted, The Last of Us, and God of War.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Ps3-fat-console.png",
    imageSize: 330,
    themeColor: "#ffffff",
    background: "radial-gradient(circle at center, #111 0%, #000 70%)",
    era: "modern",
    specs: {
      cpu: "Cell Broadband Engine",
      gpu: "RSX Reality Synthesizer",
      ram: "256 MB XDR + 256 MB GDDR3",
      media: "Blu-ray",
    },
  },

  // 🎮 2011 — PS Vita (Modern Portable)
  {
    id: "psvita",
    name: "PlayStation Vita",
    year: 2011,
    sales: 15,
    description:
      "A powerful handheld featuring an OLED touchscreen, dual analog sticks, and rear touch panel. Delivered console-quality AAA games like Uncharted: Golden Abyss and Persona 4 Golden on the go.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlayStation-Vita-1101-FL.png",
    themeColor: "#0055ff",
    background: "radial-gradient(circle at center, #001f5c 0%, #000 70%)",
    era: "modern",
    specs: {
      cpu: "Quad-core ARM Cortex-A9",
      gpu: "PowerVR SGX543MP4+",
      ram: "512 MB",
      media: "Game Cards",
    },
  },

  // 🎮 2013 — PS4
  {
    id: "ps4",
    name: "PlayStation 4",
    year: 2013,
    sales: 117,
    description:
      "\"For the Players\" – a console built with developers in mind. Known for its incredible game library, cross-platform play, and social features that revolutionized how gamers connect and share experiences.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/PS4-Console-wDS4.png",
    themeColor: "#1f6fff",
    background: "radial-gradient(circle at center, #002a7a 0%, #000 70%)",
    era: "modern",
    specs: {
      cpu: "8-core AMD Jaguar",
      gpu: "1.84 TFLOPS AMD Radeon",
      ram: "8 GB GDDR5",
      storage: "500GB / 1TB HDD",
    },
  },

  // 🎮 2016 — PS4 Pro
  {
    id: "ps4pro",
    name: "PlayStation 4 Pro",
    year: 2016,
    sales: 14,
    description:
      "Unlocked 4K gaming potential with enhanced GPU power, providing 4K resolution support and significantly improved performance for premium gaming experiences on modern HDR displays.",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-product-thumbnail-01-en-14sep21?$facebook$",
    themeColor: "#003791",
    background: "radial-gradient(circle at center, #001a4d 0%, #000 70%)",
    era: "modern",
    specs: {
      cpu: "Enhanced 8-core Jaguar",
      gpu: "4.2 TFLOPS AMD Radeon",
      ram: "8 GB GDDR5",
      storage: "1TB HDD",
    },
  },

  // 🎮 2020 — PS5
  {
    id: "ps5",
    name: "PlayStation 5",
    year: 2020,
    sales: 50,
    description:
      "A generational leap forward with an ultra-fast custom SSD, advanced ray tracing capabilities, and haptic feedback in the DualSense controller. Redefines immersion with next-gen gaming at 4K 60-120fps.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png",
    imageSize: 450,
    themeColor: "#00aaff",
    background: "radial-gradient(circle at center, #001f5c 0%, #000 70%)",
    era: "modern",
    specs: {
      cpu: "AMD Zen 2 8-core",
      gpu: "10.28 TFLOPS RDNA 2",
      ram: "16 GB GDDR6",
      storage: "825GB SSD",
    },
  },

  // 🚀 2024 — PS5 Pro 
  {
    id: "ps5pro",
    name: "PlayStation 5 Pro",
    year: 2024,
    sales: 5,
    description:
      "The peak of current-generation gaming. Enhanced GPU power drives superior ray tracing quality, increased resolution scaling, and higher frame rates. A masterclass in performance optimization and gaming evolution.",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24?$facebook$",
    themeColor: "#00e5ff",
    background:
      "radial-gradient(circle at center, #001d3d 0%, #000814 40%, #000 80%)",
    era: "future",
    specs: {
      cpu: "AMD Zen 2 Enhanced",
      gpu: "RDNA 3-based (Enhanced Ray Tracing)",
      ram: "16 GB GDDR6",
      storage: "2TB SSD",
    },
  },
];



