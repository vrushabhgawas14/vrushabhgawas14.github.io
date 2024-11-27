interface myProps {
  isThin?: Boolean;
}
const Line: React.FC<myProps> = (myProps) => {
  const { isThin } = myProps;
  return (
    <div
      className={`${
        isThin
          ? "p-[1px] bg-slate-400 dark:bg-slate-900"
          : "mx-96 md:mx-52 sm:mx-20 p-1 bg-gray-700 dark:bg-zinc-700 rounded-xl"
      }`}
    />
  );
};

export default Line;
