# passing events as a props

so here we create a new component that name is EventProps.jsx and do some practical about passing events as a props here 
so in future you just see that file 

if i more ellaborate this thing means you just understand we pass the event handlers in button , h1 and other html tags but we also pass these into component and it helps to communicate from child component to their parent component like if i pass the event handlers into child component means it define in parent component like if we pass some thing from child to parent than it is must like if i click than some thing comes in parent screen if i click on child parent or so many things

 <WelcomeUser
        onClick={() => {
          handleWelcomeUser("harshit");
        }}
        onMouseEnter={handleHover}
      />

like in this declaration of child component we pass some event handlers , so it is props and we pass as a props to their definetion of these props 

   <buttun onClick={props.onClick}  >Click</buttun>
      <buttun onMouseEnter={props.onMouseEnter}>Hover here</buttun>
      <buttun onClick={handleGreetings}>Greetings</buttun>

so here i also clicked in onClick and onMouseEnter both are travel from their child declaration to their defineition and if we call with the help of these by real onclick and onmouseenter these are triggered , simply we say like we pass the funciton through props and we call them with the help of real onclick and onmouseenter by real html tag like button tag means we just triggered them with the help of real buttons

like mujhe issse ye samajh ata hai ki jo things apan ne parent me likh rakhi hai vo chij apne ko unke child components se triggered karwani hai to ham event props ka use karenge like yadi hame koi funciotn jo chal raha hai in event props aur usey uske child component se trigger karwana hai to ham iska use karenge

const WelcomeUser = (props) => {
  const handleGreetings = () => {
    alert(`hello bro`);
    props.onClick();
  };

  we also pass our props funciton another time to in our own child component funciotn that is triggered a simple funciton and in that funciton it is called again the props funciotn that is cool

  wee also destructed these all things 
  