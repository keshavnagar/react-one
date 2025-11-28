# Hooks
# 1. useState(): it is a fundamental hook in react that allows us to add state management to our functional components. It lets us state and update values that change over time, enabling dynamic and interactive ui.
                  state variable
                  the current state value     
#           const [count, setCount] = useState(0) 
            variable      a function that updates       0 is the initial value of state variable
            key           the state variable
# r1 functions passed to useState() and setState() runs twice during development mode to prevent developers from running side effects.
# r2 side effects in programming refers to changes or interactions that occur outside the scope of a function or a block of code.
# r3 react js compares previous state and new state using Object.is(), if it finds both are same then it will be ignoring re rendering
# r4 react js batches all useState() inside a event handler and run them at the same time. to access the value immedietly after setting a state, then you will get old values as it aynchronous

# now we creat a file that name is Counter.jsx in side a hooks folder's sub folder that name is UseState folder 

# after i creating the file and console the usestate() the result is look like in screenshot in this folder, like in r2 we discuss the function run twice so we see the two results there

# aur chalo ye to ek observation ki baat hui upar wali ab ate hai main principal pe 

# like isme ham dekh rahe hai ki hamare pas ek array ara hai jisme do elements hai 

# jo ki kuch is prakar likha hua hai 

(2) [undefined, ƒ]
0: undefined
1: ƒ ()
length: 2
[[Prototype]]: Array(0)

# isme pahli chij undefine hai suppose yadi me us use state ke andar yadi 5 likhdu to yaha iski value apne ko dikh jayega

(2) [89, ƒ]
0: 89
1: ƒ ()
length: 2
[[Prototype]]: Array(0)

# so now we see the change where we see the first value as 89 that we pass in our Counter.jsx file

# so it means the useState() return an array with two values 

# now we actual implement the count state in our counter.jsx file

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
    console.log(count);
  };
  console.log(count);
  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-[#468189] h-screen">
      <h1 className="text-6xl text-[#F4E9CD]">UseState Hook</h1>
      <p className="text-4xl text-[#F4E9CD]">{count}</p>
      <button
        onClick={() => handleCounter()}
        className="bg-[#F4E9CD] p-4 text-[#468189] font-bold text-2xl rounded-2xl shadow-2xl"
      >
        Increment
      </button>
    </section>
  );
};
export default Counter;

# dekho jo mene example samajhaya ki jab ham first time code run karte hai to jo handler function hai vo to click karne ke baad hi run hoga to vo first time me to ayega nahi 

# jab ham click karenge to jo funciton ke andar hai setcoutn function aur uske bad jo console.log line hai uska count nahi badhega balki jab new render hoga tabhi vo count increase hoga aur jo console.log hai count vo as it is dikhayi dega, ab jab vo function khatam hoga tab fir se re render hoga aur fir jo value hai hamari count ki vo increase jo hui hai vo set hogi new render me aur fir count one hoga 

# to is prakar se jo inner value hai vo hamesha previous outer value jaisee hee rahegi kyuki vo new render ke pahle hee execute ho jati hai 

# hamara jo r4 hai vo isee chij ka example hai 

