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
          : "mx-96 sm:mx-20 p-1 bg-gray-700 dark:bg-zinc-700 rounded-xl"
      }`}
    ></div>
  );
};

export default Line;
