const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("grandparent");
  };
  const handleParent = () => {
    console.log("parent");
  };
  const handleChild = (event) => {
    event.stopPropagation();
    console.log(event);
    console.log("child");
  };
  return (
    <>
      <div
        className="g-div bg-red-200 border-4 border-red-400 p-6 inline-block"
        onClick={handleGrandParent}
      >
        <div
          className="p-div bg-green-200 border-4 border-green-400 p-10 rounded-lg"
          onClick={handleParent}
        >
          <button
            className="c-button bg-blue-500 text-white border-4 border-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition-all duration-200"
            onClick={handleChild}
          >
            Child Button
          </button>
        </div>
      </div>
    </>
  );
};
export default EventPropagation;
