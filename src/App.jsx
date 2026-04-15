import { useRef, useState, useEffect } from "react";
import useVisitorCounter from "./hooks/useVisitorCounter";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const { count: visitorCount } = useVisitorCounter();

  useEffect(() => {
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      window.location.replace(window.location.origin + "/portofolio/");
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora colorStops={["#0077ff", "#00bfff", "#4682b4"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <div className="hero grid md:grid-cols-2 items-center pt-8 sm:pt-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/dwi.png" className="w-10 rounded-md" />
              <q>Kode yang indah, lahir dari ketekunan.</q>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <ShinyText text="Hi I'm Dwi Haadiy Palguna" disabled={false} speed={3} />
            </h1>
            <BlurText 
              text="Seorang pengembang aplikasi dan web yang penuh semangat, berdedikasi untuk menciptakan pengalaman digital yang modern dan berkinerja tinggi melalui solusi yang inovatif dan ramah pengguna."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6 text-base md:text-lg leading-relaxed text-gray-300" 
            />
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="./assets/CV.Dwi Haadiy Palguna.pdf" download className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-blue-600 transition-all">
                <ShinyText text="Download CV" />
              </a>
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-blue-600 transition-all">
                <ShinyText text="Explore Projects" />
              </a>
            </div>
          </div>
          <div className="md:ml-auto">
            <ProfileCard name="Dwi Haadiy P" title="Web Developer" handle="dwihadyp" status="Online" avatarUrl="./assets/dwi.png" showUserInfo={true} enableTilt={true} enableMobileTilt={false} />
          </div>
        </div>

        {/* About */}
        {/* About */}
<div
  className="mt-12 sm:mt-15 max-w-[1600px] mx-auto rounded-3xl border-[5px] border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.7)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-4 sm:p-6"
  id="about"
>
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-8">

    {/* LEFT */}
    <div className="basis-full md:basis-7/12 pr-0 md:pr-8 pb-6 md:pb-0">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
        About Me
      </h2>

      <BlurText
        text="Saya adalah mahasiswa D3 Sistem Informasi semester 5 dengan fokus pada Programming dan Design, khususnya dalam Web Development dan UI/UX. Saya memiliki pengalaman lebih dari 3 tahun di bidang Frontend Development serta pemahaman yang baik mengenai backend dasar dan pengelolaan database."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
      />

      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-8 sm:gap-y-0 mb-4 w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl mb-1">
            8<span className="text-blue-500">+</span>
          </h1>
          <p>Projects</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl mb-1">
            3<span className="text-blue-500">+</span>
          </h1>
          <p>Experience</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl mb-1">
            3.83<span className="text-blue-500">/4</span>
          </h1>
          <p>IPK</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl mb-1">
            {visitorCount}<span className="text-blue-500">+</span>
          </h1>
          <p>Visitors</p>
        </div>
      </div>

      <ShinyText
        text="Working with heart, creating with mind."
        className="text-sm md:text-base text-cyan-400"
      />
    </div>

    {/* RIGHT */}
    <div className="basis-full md:basis-5/12 pl-0 md:pl-8 flex justify-center">
      <div className="w-full h-[300px] md:h-[400px] flex justify-center items-center">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </div>

  </div>
</div>

        {/* Tools */}
        <div className="tools mt-20 sm:mt-32">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Tools & Technologies</h1>
          <p className="w-2/5 text-base opacity-80 text-gray-200 mb-14" data-aos="fade-up" data-aos-delay="300">My Professional Skills</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div key={tool.id} className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800 transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
                <img src={tool.gambar} alt={tool.nama} className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all" />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText text={tool.nama} className="text-lg font-semibold block" />
                  </div>
                  <p className="text-sm text-zinc-300 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="proyek mt-20 sm:mt-32 py-8 sm:py-10" id="project">
          <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
          <p className="text-base text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] via-[#7cff67] to-[#5227FF] bg-[length:200%_100%]" style={{animation: 'shine 4s linear infinite'}}>
            Showcasing projects that reflect my skills & creativity.
          </p>
          <style>{`@keyframes shine{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
          <div className="proyek-box mt-14">
            <div style={{height: 'auto', position: 'relative'}}>
              <ChromaGrid items={listProyek} onItemClick={handleProjectClick} radius={500} damping={0.45} fadeOut={0.6} ease="power3.out" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <section id="contact" className="relative mt-32 sm:mt-48 pb-20 sm:pb-32">
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[600px] h-[600px] bg-violet-500/10 blur-[160px] rounded-full" />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-base md:text-lg opacity-80 text-gray-200 max-w-xl mx-auto">
              Have a project? Say hello!
            </p>
          </div>
          <div className="max-w-2xl mx-auto px-4">
            <form action="https://formsubmit.co/seluruhbulan@gmail.com" method="POST" className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Portfolio Contact" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm uppercase tracking-wider opacity-70">Name</label>
                  <input type="text" name="name" required placeholder="Your name" className="bg-zinc-950/60 border border-zinc-700 rounded-xl px-4 py-3 focus:border-violet-500 transition" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm uppercase tracking-wider opacity-70">Email</label>
                  <input type="email" name="email" required placeholder="you@example.com" className="bg-zinc-950/60 border border-zinc-700 rounded-xl px-4 py-3 focus:border-violet-500 transition" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm uppercase tracking-wider opacity-70">Message</label>
                  <textarea name="message" rows="6" required placeholder="Your message..." className="bg-zinc-950/60 border border-zinc-700 rounded-xl px-4 py-3 resize-none focus:border-violet-500 transition" />
                </div>
                <button type="submit" className="mt-4 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-4 font-semibold transition hover:scale-[1.02]">
                  <ShinyText text="Send Message" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;

