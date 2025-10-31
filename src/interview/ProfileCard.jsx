const ProfileCard = (props) => {
  return (
    <>
      <h1 style={{ color: "blue" }}>Name: {props.name}</h1>
      <h2 style={{color: "darkblue"}}>Age: {props.age}</h2>
    </>
  );
};
export default ProfileCard;
