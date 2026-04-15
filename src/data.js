import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1800",
  },
];

import Proyek1 from "/assets/proyek/nexa1.png";
import Proyek2 from "/assets/proyek/Rt1.png";
import Proyek3 from "/assets/proyek/Group 6.png";
import Proyek4 from "/assets/proyek/nasduk.png";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: [Proyek1],
    title: "Nexa Notes",
    subtitle: "Webisite catatan yang mudah digunakan untuk menyimpan catatan...",
    fullDescription:"Tempat terbaik menyimpan apa yang layak diingat. Karena setiap catatan adalah langkah awal menuju ide besar berikutnya",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    demo: "https://nexanotes.vercel.app/",
    dad: "100",
  },
  {
    id: 2,
    image: [Proyek2],
    title: "Ruang Tanam",
    subtitle: "Platform edukasi untuk memilih tanaman yang sesuai dengan kondisi lingkungan....",
    fullDescription:"Platform edukasi untuk memilih tanaman yang sesuai dengan kondisi lingkungan perkotaan dan lahan terbatas.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    demo: "https://ruangtanam.netlify.app/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Korean-Dictionary",
    subtitle: "Korean Dictionary adalah kamus online sederhana untuk mencari kosakata bahasa Korea...",
    fullDescription:"Korean Dictionary adalah kamus online sederhana untuk mencari kosakata bahasa Korea beserta arti Bahasa Indonesia dan romanisasinya.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    demo: "/https://koreanndictionary.netlify.app/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Dapur Uduk Josh",
    subtitle: "Dapur Uduk Josh menyajikan nasi uduk gurih khas rumahan...",
    fullDescription:"Dapur Uduk Josh menyajikan nasi uduk gurih khas rumahan dengan lauk lezat dan harga terjangkau.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    demo: "https://dapurudukjosh.netlify.app/",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription:"A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];
