import { LanguageBox } from "./LanguageBox";

interface myProps {
  img: string;
  name: String;
  bio: String;
  stack: String[];
  webLink?: string;
  codeLink?: string;
  projectDate: string;
}

export const Template: React.FC<myProps> = (props) => {
  const { img, name, bio, stack, webLink, codeLink, projectDate } = props;
  return (
    <>
      <div className="w-80 min-w-80 sm:min-w-72 border border-gray-600 p-2 m-2 rounded-lg">
        <div>
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              alt="projectImage"
              className="w-68 border-2 border-black hover:opacity-80"
            />
          </a>
        </div>
        <p className="text-center p-2 font-semibold">{name}</p>
        <p className="text-end text-sm px-2 opacity-85 dark:opacity-65">
          ({projectDate})
        </p>
        <p className="text-justify p-2 h-32">{bio}</p>
        <div className="p-2">
          <p className="font-semibold">Tech Stack: </p>
          <div className="p-2 h-24">
            <p className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <LanguageBox text={item} />
              ))}
            </p>
          </div>
        </div>
        <div className="flex justify-between px-2 font-semibold italic underline dark:text-zinc-300">
          <a
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            live link
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            view code
          </a>
        </div>
      </div>
    </>
  );
};

export default Template;
