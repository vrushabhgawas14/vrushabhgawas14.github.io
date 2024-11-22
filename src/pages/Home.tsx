import ProfileImage from "../components/ProfileImage";
import Line from "../components/Line";

export const Home = () => {
  return (
    <>
      <div
        id="/"
        className="min-w-full min-h-[100vh] flex items-center justify-around sm:flex-col sm:justify-normal bg-secondary-light dark:bg-secondary-dark"
      >
        <div className="w-64 hidden sm:block sm:mt-14">
          <ProfileImage />
        </div>
        <div className="flex flex-col items-start sm:items-center text-3xl sm:text-2xl sm:mx-8 sm:my-16 sliding-text">
          <div>Hello! 👋</div>
          <div className="text-5xl sm:text-[30px] py-2 font-semibold">
            I'm Vrushabh Gawas
          </div>
          <div className="text-center">Full Stack Web Developer and Coder.</div>
        </div>
        <div className="w-80 sm:hidden">
          <ProfileImage />
        </div>
      </div>
      <Line />
    </>
  );
};
