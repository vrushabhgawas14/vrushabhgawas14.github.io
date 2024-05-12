interface myProps {
  text: String;
}

export const LanguageBox: React.FC<myProps> = (props) => {
  return (
    <span className="px-2 bg-teal-800 dark:bg-teal-900 text-zinc-200 hover:bg-teal-950 dark:hover:bg-teal-800 cursor-pointer rounded-lg">
      {props.text}
    </span>
  );
};
