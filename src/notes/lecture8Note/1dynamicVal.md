the {} is the use for variable in jsx or component 
like the whole code of js is written in this {} 
so it is the entry gate to write js logic, variable, funciton in jsx code


suppose we have a value in js 
const value = "hey"
and i wan to show this in my screen with the help of js 
so first i do this things 

const p_tag = document.createElement('p')
p_tag.textContent = value;
and i append in any tag like body
body.appendchild(p_tag)

and we render that thing in this way the pure code i write down below that i mentinno abouve: 

const value = "hey"; // your value

// 1️⃣ Create a <p> tag
const p_tag = document.createElement('p');

// 2️⃣ Assign the text content
p_tag.textContent = value;

// 3️⃣ Append it to the body (or any other element)
document.body.appendChild(p_tag);

but in jsx or component we do it easily just 

by this syntax that i write below: 

function App() {
  const value = "hey";

  return (
    <>
      <p>{value}</p>
    </>
  );
}

export default App;

so the react do same those thing that we do in our js file same that do automatically do dom changing, virtual dom tree change , dom manipulation , actual dom and all by their own

we also do operation like 1+2+3 in our jsx file 

return <p>the result is: {1+2+5}</p>

like we write js in html or jsx we should say: 

<h1>
{
   // here we write 
   1+2+3;
   // and also we again write html or jsx
   like 
   return (
    <h1>
    hello world {1+2+3} // and again i write the js operation write inside this jsx 
    </h1>
   ) 
}
</h1>
