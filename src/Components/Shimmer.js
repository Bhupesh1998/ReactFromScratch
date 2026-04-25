const Shimmer = () => {
  return (
    <div className="p-5 bg-amber-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-60 rounded-xl animate-pulse"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
