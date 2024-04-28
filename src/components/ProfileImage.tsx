import { myImage } from "../assets";

export default function Image() {
    return (
        <img
            draggable="false"
            src={myImage}
            alt="Image"
            className="rounded-full grayscale transition-transform duration-300 hover:grayscale-0 hover:scale-110 cursor-pointer hover:z-10"
        />
    );
}