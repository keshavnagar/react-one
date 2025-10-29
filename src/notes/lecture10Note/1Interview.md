1. for this interview questions practice we creat another folder in our src folder name interview
2. like we have an eg: in [Practice.jsx](../../interview/Practice.jsx)
we have a component: 
const Practice = () => {
  const students = [];
  return (
    <>
      <h1>Practice Interview Quetions: </h1>
      <p>{students.length && "no students found"}</p>   //0
      <p>number of students: {students.length}</p>      //0
    </>
  );
};
export default Practice;

in this we have student.length that is 0 and string 
if both are && operator than it return the first value that is 0 
and in second p the result is 0 again

now in that example we have student.length == 0 and other is second value that is true 
and now we have 
&& and the first is 0 and second is true value so it return the false value 
and since the first value is false than it return the 0 or false okay 
so if i want to only print no student found than it returns no found students if when we use the nor opertor ! okay

why it returns 0 if we add nor operator with our value

so the reason is what if it is false value 

so react doesn't render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used is jsx, will result in nothing being displayed.

however, `0` and `""` empty string are exceptions:

`0` is rendered in the dom because it is considered a valid react node. this means if `0` is the result means it is valid expression and  it will appear in ui

`""` are also considered valid and rendered as well.

const Practice = () => {
  const students = [];
  return (
    <>
      <h1>Practice Interview Quetions: </h1>
      <p>{students.length && "no students found"}</p>   //0
      <p>number of students: {students.length}</p>      //0
    </>
  );
};
export default Practice;

so here i solve this probelm by to add ! in front of students.length or i also put === operator and says is it 0 or not like i just add this one thing belo and than my practice.jsx file

 <p>{students.length===0 && "no students found"}</p>  

   <p>{Boolean(!students.length) && "no students found"}</p>   this is the third way to do same thing as well
   
