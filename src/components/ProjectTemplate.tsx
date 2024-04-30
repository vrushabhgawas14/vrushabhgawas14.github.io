interface myProps {
  img: string;
  name?: String;
  bio?: String;
  stack?: String;
  webLink?: string;
  codeLink?: string;
}

export const Template: React.FC<myProps> = (props) => {
  const { img, name, bio, stack, webLink, codeLink } = props;
  return (
    <>
      <div className="min-w-80 sm:min-w-72 border border-gray-600 p-2 m-2 rounded-lg">
        <div>
          <img src={img} alt="" className="w-68" />
        </div>
        <p className="text-center p-2 font-semibold">{name}</p>
        <p className="text-justify p-2 h-32">{bio}</p>
        <div className="p-2">
          <p className="font-semibold">Tech Stack: </p>
          <p className="p-2">{stack}</p>
        </div>
        <div className="flex justify-between px-2 italic underline text-zinc-300">
          <a href={webLink} target="_blank">
            live link
          </a>
          <a href={codeLink} target="_blank">
            view code
          </a>
        </div>
      </div>
    </>
  );
};

export default Template;
