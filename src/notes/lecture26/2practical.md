# now we create a folder that name is hook 

in hook, i created a state.jsx file 

so why react use useState hook for data store?

it's because those are normal variables and react js doesn't know that it's going to be changed.

and that react should respond or update dom based on that.

those values are already rendered on dom, there is no way they will be re-rendered.

for that react js provide a funciton called useState

this type of funciton which starts with use is called hook

this is a special funciton which has some features provided by react js

we will learn about other hooks in future

# syntax

const [count, setCount] = useState(0)

const- variable(key)
count- state variable or the current state value
setCount- a function that updates the state varibale
useState(0)- the initial value of the state

so when we console.log(useState())

Array(2)
0: undefined
1: ƒ ()
length: 2
[[Prototype]]: Array(0)

it will apear means the array of size 2 first element is undefined and second is a funciton 

and that's why we use const [count, setCOunt] so this is an array

so first this is - state varibale 
second is - updatedFunction

so now we destructure 

const [count, setCOunt ] = useState()

here we do array destructuring 







