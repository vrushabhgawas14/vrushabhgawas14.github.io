export const Arrow = () => {
  return (
    // eslint-disable-next-line
    <a
      href="#"
      className="fixed bottom-8 right-8 bg-slate-800 dark:bg-zinc-300 p-2 rounded-3xl hover:bg-slate-950 dark:hover:bg-zinc-100 ease-in duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="fill-zinc-100 dark:fill-slate-900"
        width={30}
        height={30}
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </a>
  );
};
