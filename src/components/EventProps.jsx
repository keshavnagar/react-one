import WelcomeUser from "./WelcomeUser";
const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`hey ${user}`);
  };
  const handleHover = () => {
    alert(`mouse hovered`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => {
          handleWelcomeUser("harshit");
        }}
        onMouseEnter={handleHover}
      />
    </>
  );
};
export default EventProps;
