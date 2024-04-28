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
      <div className="w-80 border border-gray-600 p-2 m-2 rounded-lg">
        <div>
          <img src={img} alt="" className="w-68" />
        </div>
        <p className="text-center">{name}</p>
        <p className="text-justify p-4">{bio}</p>
        <div className="p-1">
          <p className="font-semibold">Tech Stack: </p>
          <p className="p-2">{stack}</p>
        </div>
        <div className="flex justify-between p-1 italic underline">
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
