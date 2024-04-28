import { musicPlayer } from "../assets";

export const Template = () => {
  return (
    <>
      <div className="w-80 border border-gray-600 p-2 rounded-lg">
        <div>
          <img src={musicPlayer} alt="" />
        </div>
        <p className="text-justify p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          tenetur laboriosam expedita quisquam. Maxime fuga quo sunt tenetur
          esse sed quae enim! Totam, quae quam pariatur nostrum repudiandae
          nihil earum.
        </p>
        <p></p>
        <div>
          <p>Teck Stack: </p>
          <p></p>
        </div>
        <div>
          <a href="https://www.google.com" target="_blank">
            live link
          </a>
          <a href="/">view code</a>
        </div>
      </div>
    </>
  );
};

export default Template;
