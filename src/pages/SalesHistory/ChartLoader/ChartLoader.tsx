const ChartLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 ">
      {[1, 2].map((id) => (
        <div key={id} className="flex flex-col gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default ChartLoader;
