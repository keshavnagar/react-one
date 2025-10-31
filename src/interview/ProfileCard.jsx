const ProfileCard = (props) => {
  const { name, age, children } = props;
  return (
    <>
      <h1 style={{ color: "blue" }}>Name: {name}</h1>
      <h2 style={{ color: "darkblue" }}>Age: {age}</h2>
      <div>{children}</div>
    </>
  );
};
export default ProfileCard;
