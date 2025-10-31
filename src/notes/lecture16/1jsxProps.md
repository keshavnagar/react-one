1. in first we created a component named profile and reder direct into the app.jsx
2. than we created a child component of this component named profile card
3. we repeat this component two times with different props 
4. in the profile card component we pass three things 
5. name, age and greeting
6. we pass greeting as jsx like div strong hi ajay have a wonderful day
7. now i repeat same thing with same props in second iteration of the props and in the same props the second iteration of the props passing in the same profile card component 
8. and than one more creative thing we do like we set the component profile card as a html tag like in button we pass name of the button like this below
9. <profilecard>some jsx</profillecard>
10. so now we do the thing for props we render the props like in which we have greeting props we also access this with the help of normal props but now we also render thing thing that is some jsx between the profilecard component so how we do this now we learn 
11. so we have property in props that access the content between the props that is written in their parent component like this 
12.  <profilecard>some jsx</profillecard> i access the some jsx with the help of props.children
13. so we learn the thing, how we get that content and we also acces this one with the help of our props in react so props is so powerfull, i also do one more experiment to destructurin and direct put into the child component 