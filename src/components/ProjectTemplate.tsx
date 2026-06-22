import { LanguageBox } from "./LanguageBox";

interface myProps {
  img: string;
  name: String;
  bio: String;
  stack: String[];
  webLink?: string;
  codeLink?: string;
  projectDate: string;
  projectType?: string;
}

export const Template: React.FC<myProps> = (props) => {
  const { img, name, bio, stack, webLink, codeLink, projectDate, projectType } = props;
  return (
    <>
      <div className="w-80 min-w-80 sm:min-w-72 bg-white/5 backdrop-blur-md border border-white/30 p-2 m-2 rounded-lg">
        <div>
          <a href={webLink ? webLink : "#projects"} target={webLink ? "_blank" : "_self"} rel="noopener noreferrer">
            <img
              src={img}
              alt="projectImage"
              className="w-68 border-2 border-black hover:opacity-80"
            />
          </a>
        </div>
        <div className="flex justify-between p-2">
          <p className="font-semibold">{name}</p>
          <p className="text-sm opacity-80">
            {projectDate}
          </p>
        </div>
        <p className="text-justify p-2 min-h-36">{bio}</p>
        <div className="p-2 h-20 mb-4">
            <p className="flex flex-wrap gap-2">
              {stack.map((item, index) => (
                <LanguageBox key={index} text={item} />
              ))}
            </p>
        </div>
        {
          webLink && codeLink && (
          <div className="flex justify-between items-center px-2 text-sm dark:text-zinc-300">
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800/80 px-4 py-1 border border-zinc-200/50 rounded-lg backdrop-blur-md hover:bg-red-100/60 hover:text-black hover:border-red-100/40 transition ease-in-out duration-100 w-[40%] text-center"
            >
              {projectType === "website" ? "Live" : "Download"}
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800/80 px-3 py-1 border border-zinc-200/50 rounded-lg backdrop-blur-md hover:bg-red-100/60 hover:text-black hover:border-red-100/40 transition ease-in-out duration-100 w-[50%] text-center"
            >
              Source Code
            </a>
          </div>
          )
        }
      </div>
    </>
  );
};

export default Template;
