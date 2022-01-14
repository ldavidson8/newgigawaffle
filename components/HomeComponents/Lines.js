export const Lines = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-section mx-auto sm:px-10 all:px-4 grid grid-cols-4 h-full w-screen">
      <div className="relative h-full">
        <div className="absolute left-0 h-full w-px bg-gray-200"></div>
        <div className="absolute right-0 h-full w-px bg-dash bg-dashGap"></div>
      </div>
      <div className="relative h-full">
        <div className="absolute right-0 h-full w-px bg-dash bg-dashGap"></div>
      </div>
      <div className="relative h-full">
        <div className="absolute right-0 h-full w-px bg-dash bg-dashGap"></div>
      </div>
      <div className="relative h-full">
        <div className="absolute right-0 h-full w-px bg-gray-200"></div>
      </div>
    </div>
  );
};
