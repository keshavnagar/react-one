const WelcomeUser = (props) => {
  const handleGreetings = () => {
    alert(`hello bro`);
    props.onClick();
  };
  return (
    <>
      <button
        onClick={props.onClick}
        className="m-8 px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold shadow hover:bg-white transition"
      >
        Click
      </button>

      <button
        onMouseEnter={props.onMouseEnter}
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
