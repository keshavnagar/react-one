const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreetings = () => {
    alert(`hello bro`);
    onClick();
  };
  return (
    <>
      <button
        onClick={onClick}
        className="m-8 px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold shadow hover:bg-white transition"
      >
        Click
      </button>

      <button
        onMouseEnter={onMouseEnter}
        className=" m-8 px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold shadow hover:bg-white transition"
      >
        Hover here
      </button>

      <button
        onClick={handleGreetings}
        className="m-8 px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold shadow hover:bg-white transition"
      >
        Greetings
      </button>
    </>
  );
};

export default WelcomeUser;
