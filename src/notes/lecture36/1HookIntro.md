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

