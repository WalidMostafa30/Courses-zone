const Loading = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4 py-20">
      <span className="w-14 h-14 lg:w-20 lg:h-20 border-4 border-main-clr-1 border-t-transparent rounded-full animate-spin"></span>
      <h1 className="text-xl font-semibold text-main-clr-1">Loading...</h1>
    </section>
  );
};

export default Loading;
