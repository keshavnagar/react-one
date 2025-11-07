# how state works in react? 

like when we click on increment button how it is update the value

the virtual dom is a programming concept where an ideal, or 'virtual', representation of a ui is kept in memory and synced with the 'real' dom by a library such as reactDom. This process is called reconciliation.

# how state works?
in react, state is a way to store and manage data that can change over the lifetime of a component.

when state changes, react re-renders the component to reflect the new state.

this ensures that the ui stays sync with the underlying data.

# using useState in funciton components

# initialization:
we call useState  with the initial state value. 
It returns an array with two elements: the current state value and a funciton to update that state.

# updating state:
whenw we call the updater function, react schedules a re-render of the component with the new state value.

# preservation of state:
react maintains state bteween renders. 
when a component re-render it doesn't reinitialize the state. instead, it uses the preserved state from the previous render.

# so now we visualize the process of re-render

App
Counter
<div>
    <h1>{counter: 0}</h1>
    <button>

--so above one is the current structure of our app component , when we click on button , the state will be changed--

App
Counter
<div>
    <h1>{counter: 1}</h1>
    <button>

--after click the button react re-render the app component again because the state is in the app component but it only update the value of counter state and the h1 heading because it dom first check all the elements of tree first it check app, counter, div, h1, and button so in first three there is no change so it not update the these but in h1 there is change so it update the value on screen--

--so the first tree is old tree and second is new one--

# setState()
the button calls setState() function which notifies react that we are trying to update a state. react js then create a new tree with the new state value. 

like in our new tree the value of state is change from 0 to 1.

so jaise mene bataya tha ki react check karta hai har ek chij ko ki konsi chij update hui hai to vo har element ko pahle check karta hai 

so react ko kasie pata chalta hai ki konsa tree mujhe dikhana hai old ya new tree on screen 

so iske liye process hoti hai jise ham kahte hai react reconciliation : 

# react reconciliation:
it is the process through wcich react updates the browser dom.

so is process ki help se react ko help milti hai ki vo browser dom ko update kare like vaha tak ye new tree ko pahuchaye.

# diffing algorithm

diffing short for difference algorithm is used to differentiat the dom tree for efficient updates.

diffing algorithm jo hoti hai vo hame jo real update hota hai usey hee karne deti hai na ki pure ke pure tree ko firse paint nahi karti like suppose hamare pass new tree hai and old tree hai to basically hame yadi kisi ek chij me change karna hai to pura tree paint ya update ya firse render karne ki bajaye dono me comparison karti hai like new me and old me aur fir jaha change hota hai usey hee ye actual dom ko deti hai like isey aisa samajhlo ki apne pass do virtual dom hai okay and abhi apan ne inhe create ya delete nahi kiya hai in actual dom aur apan ye chahte hai ki jo actual dom hai vo pura ka pura na badle bas vohi part badle jo update hua hai to isliye apan ye process follow karte hai

suppose we have two doms


div
    h1
    button 
    span 
        "time: 9"

so yaha par yadi time me change hua to jo ye initial dom hai vo change hoga or update hoga in new dom

div
    h1
    button 
    span
        "time: 10"

now react compare both doms 

now it goes to actual dom and only update the time that is in the span, means it doesn't manipulate or reload whole dom

this is actual dom

div
    h1
    button
    span
        "time: 10"

so is comparison aur updation ke process ko ham reconsilatino bolte hia 

aur process ko karne ke liye ek algorithm use hoti hai jise ham difing algorithem kahte hia 

so yaha par jo difing algo hai vo ek work karti hai ki jitne bhi update are hai like ye thik hai ki react pahle bhi render isi prakar karta tha ki pure actual dom ko reload kare bina jo only changes hai unhe hee update karta tha but suppose apne pass bahut kam time me bahut jyada update aa gaye to kya apan un chhhote chhote updates ko bar bar re redner karwayenge 

to javab hai , karwa sakte hai but ye bahut expensive hoga 

to diffing algorithm ne ye work kiya ki ye sabhi updates ko ek batch me ek sath kar leti hai like in os we learn the algos for batching the tasks inside the os

suppose we have an exmaple: 

const App = ({isLoggedIn}) => {
    return (
        <div className = "app">
        {
            isLoggedIn ? (
                <h1>Welcome</h1>
            )  
            :
            (
                <button>Login</button>
            ) 
        }
        </div>
    )
}

so in virtual dom initialy if the condition is false

{
    type: "div"
    props: {
        classname: "app",
        childred: [
            {
                type: "button",
                props: {
                children: "login"
                }
            } 
        ]
    }
}

so this is initial virtual dom if we update the dom like isLoggedIn is true than it will become updated vdom


{
    type: "div"
    props: {
        classname: "app",
        childred: [
            {
                type: "h1",
                props: {
                children: "welcome"
                }
            } 
        ]
    }
}

so here it will goes to actual dom so in actual dom it dont reload whole actual dom but it destroy this part
{
    type: "button",
    props: {
        children: "login"
    }
} 

and convert into below part:

{
    type: "h1",
    props: {
        children: "welcome"
    }
} 

so it only update that chunks not whole actual dom and that is the real advantage of react

now this is the old thing now react do same thing with react fiber reconciliatino algorithm 

like in oldtime react update with the help of diffin algo and in the way that i define here but now react update things with react fiber

