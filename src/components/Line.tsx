interface myProps {
  isThin?: Boolean;
}
const Line: React.FC<myProps> = (myProps) => {
  const { isThin } = myProps;
  return (
    <div className="relative w-full">
      <div
        className={`absolute left-0 right-0 m-auto ${
          isThin
            ? "p-[1px] w-full bg-slate-400 dark:bg-[#463740]"
            : "w-[50%] p-1 bg-gray-700 dark:bg-[#463740] rounded-xl"
        }`}
      />
    </div>
  );
};

export default Line;
