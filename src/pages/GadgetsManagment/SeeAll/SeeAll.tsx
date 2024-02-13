const createSearchQuery = (queryObj: any) => {
  const keys = Object.keys(queryObj);
  if (keys.length > 0) {
    let queryAttach = "";
    for (const [key, value] of Object.entries(queryObj)) {
      // add valuable query field
      if (typeof value !== "undefined") {
        // console.log(value);
        queryAttach += ` & ${key}=${value}`;
      }
    }
    return `${queryAttach}`;
  } else {
    return "";
  }
};
const SeeAll = ({
  handelSeeAll,
  query,
}: {
  handelSeeAll: () => void;
  query: any;
}) => {
  return (
    <div className="flex justify-center items-center py-3 gap-3">
      <button
        onClick={handelSeeAll}
        className="text-white  bg-blue-500 border-none py-3 rounded px-10 ">
        See All
      </button>
      <p className="text-md text-warning font-semibold">
        Filtered On Gadgets By : {createSearchQuery(query)}
      </p>
    </div>
  );
};

export default SeeAll;
