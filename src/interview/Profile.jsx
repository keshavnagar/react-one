import ProfileCard from "./ProfileCard";
const Profile = () => {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="ajay"
        age={30}
        greetings={
          <div>
            <strong>Hi, ajay have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="vikas"
        age={43}
        greetings={
          <div>
            <strong>Hi, vikas keep it up</strong>
          </div>
        }
      >
        <p>Hobbies: gaming, cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};
export default Profile;
