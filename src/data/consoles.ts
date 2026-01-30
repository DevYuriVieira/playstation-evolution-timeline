import ps1Img from "../assets/Consoles/PS1.png";
import ps2Img from "../assets/Consoles/PS2.png";
import pspImg from "../assets/Consoles/PSP.png";
import ps3Img from "../assets/Consoles/PS3.png";
import psvitaImg from "../assets/Consoles/PSvita.png";
import ps4Img from "../assets/Consoles/PS4.png";
import ps4proImg from "../assets/Consoles/PS4pro.webp";
import ps5Img from "../assets/Consoles/PS5.png";
import ps5proImg from "../assets/Consoles/PS5pro.webp";

export type Era = "retro" | "modern" | "future";

export interface ConsoleData {
  id: string;
  name: string;
  year: number;
  sales: number;
  image: string;
  description: string;
  background: string;
  themeColor: string;
  era: Era;
  imageSize?: number;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage?: string;
    media?: string;
  };
}

export const consoles: ConsoleData[] = [
  {
    id: "ps1",
    name: "PlayStation",
    year: 1994,
    sales: 102,
    description:
      "Sony's groundbreaking first console revolutionized gaming forever with its advanced 3D graphics capabilities and CD-ROM technology. It became a cultural phenomenon with legendary franchises like Final Fantasy, Metal Gear Solid, and Resident Evil.",
    image: ps1Img,
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
  {
    id: "ps2",
    name: "PlayStation 2",
    year: 2000,
    sales: 155,
    description:
      "The best-selling console of all time, the PS2 dominated the gaming industry with DVD support, stunning graphics, and an unparalleled game library including GTA, Metal Gear Solid, and Kingdom Hearts.",
    image: ps2Img,
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
  {
    id: "psp",
    name: "PlayStation Portable",
    year: 2004,
    sales: 80,
    description:
      "Brought console-level gaming to your pocket with its brilliant screen, dual analog sticks, and impressive multimedia capabilities including movies, photos, and games via UMD.",
    image: pspImg,
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
  {
    id: "ps3",
    name: "PlayStation 3",
    year: 2006,
    sales: 87,
    description:
      "Introduced groundbreaking Blu-ray technology and the powerful Cell processor. Defined HD gaming with online multiplayer, free PSN service, and iconic franchises like Uncharted, The Last of Us, and God of War.",
    image: ps3Img,
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
  {
    id: "psvita",
    name: "PlayStation Vita",
    year: 2011,
    sales: 15,
    description:
      "A powerful handheld featuring an OLED touchscreen, dual analog sticks, and rear touch panel. Delivered console-quality AAA games like Uncharted: Golden Abyss and Persona 4 Golden on the go.",
    image: psvitaImg,
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
  {
    id: "ps4",
    name: "PlayStation 4",
    year: 2013,
    sales: 117,
    description:
      "\"For the Players\" – a console built with developers in mind. Known for its incredible game library, cross-platform play, and social features that revolutionized how gamers connect and share experiences.",
    image: ps4Img,
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
  {
    id: "ps4pro",
    name: "PlayStation 4 Pro",
    year: 2016,
    sales: 14,
    description:
      "Unlocked 4K gaming potential with enhanced GPU power, providing 4K resolution support and significantly improved performance for premium gaming experiences on modern HDR displays.",
    image: ps4proImg,
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
  {
    id: "ps5",
    name: "PlayStation 5",
    year: 2020,
    sales: 50,
    description:
      "A generational leap forward with an ultra-fast custom SSD, advanced ray tracing capabilities, and haptic feedback in the DualSense controller. Redefines immersion with next-gen gaming at 4K 60-120fps.",
    image: ps5Img,
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
  {
    id: "ps5pro",
    name: "PlayStation 5 Pro",
    year: 2024,
    sales: 5,
    description:
      "The peak of current-generation gaming. Enhanced GPU power drives superior ray tracing quality, increased resolution scaling, and higher frame rates. A masterclass in performance optimization and gaming evolution.",
    image: ps5proImg,
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


