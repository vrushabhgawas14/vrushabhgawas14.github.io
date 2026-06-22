import ProfileImage from "../components/ProfileImage";
import Line from "../components/Line";

export const Home = () => {
  return (
    <>
      <div
        id="/"
        className="min-w-full min-h-[100vh] flex items-center justify-around md:flex-col md:justify-normal sm:flex-col sm:justify-normal bg-secondary-light dark:bg-secondary-dark"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #463740 0%, #000000 100%)",
        }}
      >
        <div className="lg:hidden w-96 mt-40 sm:w-64 sm:mt-32">
          <ProfileImage />
        </div>
        <div className="flex flex-col text-3xl sm:text-2xl sm:px-8 md:my-20 sm:my-16 w-[50%] md:w-[60%] sm:w-full sliding-text">
          <div>Hello! 👋</div>
          <div className="text-5xl sm:text-[30px] py-2 font-semibold">
            I'm Vrushabh Gawas
          </div>
          <div className="md:mt-2 sm:mt-2 text-red-100/80">
            Software Developer.
          </div>
          <div className="text-sm mt-6 sm:mt-8 text-red-100/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <p>Mumbai, India</p> 
          </div>
          <div className="text-sm mt-3 sm:mt-2 text-red-100/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg> 
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gawasvrushabh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gawasvrushabh@gmail.com
            </a>
          </div>
          {/* Resume/ */}
          <div className="mt-4 sm:mt-4">
            <a href="/Vrushabh Resume.pdf" target="_blank" className="ease-in duration-150 text-xl bg-stone-700 text-zinc-200/90 rounded-2xl px-6 py-1 border-2 border-white/40 hover:bg-stone-900">
              Resume
            </a>
          </div>
        </div>
        <div className="w-80 md:hidden sm:hidden">
          <ProfileImage />
        </div>
      </div>
      <Line />
    </>
  );
};
