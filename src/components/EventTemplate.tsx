interface myProps {
  img: string;
  name: String;
  onClick: () => void;
}

export const EventTemplate: React.FC<myProps> = (props) => {
  const { img, name, onClick } = props;
  return (
    <>
      <div className="w-80 min-w-80 sm:min-w-72 border border-gray-600 p-2 m-2 rounded-lg">
        <div>
          <img
            src={img}
            alt="EventImages"
            onClick={onClick}
            className="w-68 border-2 border-black cursor-pointer hover:opacity-80 min-h-52 max-h-52 min-w-full"
          />
        </div>
        <p className="text-center p-2 font-semibold">{name}</p>
      </div>
    </>
  );
};
