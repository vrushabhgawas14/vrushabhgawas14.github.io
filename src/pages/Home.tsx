import ProfileImage from "../components/ProfileImage";
import Line from "../components/Line";

export const Home = () => {
  return (
    <>
      <div
        id="/"
        className="min-w-full min-h-[100vh] flex items-center justify-around md:flex-col md:justify-normal sm:flex-col sm:justify-normal bg-secondary-light dark:bg-secondary-dark"
      >
        <div className="lg:hidden w-96 mt-40 sm:w-64 sm:mt-14">
          <ProfileImage />
        </div>
        <div className="flex flex-col lg:items-start items-center text-3xl sm:text-2xl sm:mx-8 md:my-20 sm:my-16 w-[40%] md:w-[60%] sm:w-full sliding-text">
          <div>Hello! 👋</div>
          <div className="text-5xl sm:text-[30px] py-2 font-semibold">
            I'm Vrushabh Gawas
          </div>
          <div className="lg:text-start text-center sm:px-4 md:mt-2 sm:mt-2">
            Full Stack Web Developer.
          </div>
          {/* Resume/ */}
          {/* <div className="my-8 hover:opacity-85">
            <a href="/" className="ease-in duration-1000 btn">
              Resume
            </a>
          </div> */}
        </div>
        <div className="w-80 md:hidden sm:hidden">
          <ProfileImage />
        </div>
      </div>
      <Line />
    </>
  );
};
