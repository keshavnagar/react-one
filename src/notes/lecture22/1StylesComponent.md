now we learn about styled componoent in css 
we use this with the help of npm i styled-component
so we also have concept named styled-component
so first we import it and than we understood the concept
so the first way to use styled-component that is we just use template literal
const Button = style.button`color: grey`
second way to use as an object
const button = style.button: ({color: "grey"})
1. Button is there is styled component or we say it react comoponent created using styled component means it is both .
as react component we use it in jsx as a styled component it has styles directly attached to it, styled compnnent means ye component to hai means isme already styles jo css ki hoti hai vo attached hai 
here the button is the tag, 
styles is an object provided by the library, and button is a method on that object
another way to use styled component that is 
const Button 
now we implement the thing that we learn above 
 const Button = styles.button({
    backgroundColor: rating >= 8.5 ? "#333FFF" : "#F0F401",
    padding: "10px",
    border: "0",
    borderRadius: "5px",
    color: rating >= 8.5 ? "#F0F401" : "#333FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "1.5rem",
  });
    <Button>Watch Now</Button>
    so this is the example that show the real example where like we just create a styled component that is not a react componetn but look like this now
    