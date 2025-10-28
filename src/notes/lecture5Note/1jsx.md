react is all about component and the component is js function that return jsx, like any function that return jsx is called a component, and our browser only identify html, css and js, it doesn't knew react, 
JSX stands for javascript xml. It allows you to write html elements in js and place them in the DOM without any createElement() and appendChild() methods.
like jaisa ki ham jante hai ki hamara jo virtual dom hota hai vo jab ham koi bhi react me element likhte hai html ka to virtual dom handle karta hai like hame sab kuch karne kee need nahi hoti and vo is work ko karne ke liye js kee help leta hai and sidha sa thing ye hai ki jaise js me hame koi element show karna hota tha kisi bhi heading ke form me to ham pahle usey create element likhte the and than if treat this element to ham appednchild mehtod kee help se usey ham insert karte the ui ke andar and so many things are we do in our case
eg:
const App = () =>{
    return /*#_PURE_*/ React.createElement(
        "h1", {
            name: "vinod"
        }, "Hello World"
    )
}

above code is not jsx but it is pure js like ye kaise hua aise convert to simpley react hamare liye aage rahkar ye convert karta hai is code ko above form me like ham to kewal itna likh dete hai 

const App = () => {
    return <h1>Hello world</h1>
}

so this is jsx that convert later


who made jsx: 
it is a syntatical sugar introduced by facebook for writing react js components easily.

because of jsx is a syntax extention for js that lets you write html markup inside a js

and at the end this code is compile to equivalent js code

like that i mention above that type of code

 <h1>Hello world</h1> like we write this in react 

 than react turn this into below code 

 import {jsx as _jsx} from "react/jsx-runtime";
 /*#_PURE_*/ _jsx("h1",{
    children: "Hello World"
 })

 now we go to our app.jsx file [app](../../App.jsx)


so when i go to jsx file we have code is below 

const App = () => {

  return (
    <>
    <h1>Hello keshav</h1>
    </>
  )

}

export default App;

sp we write the html h1 element in our js app arrow function

and jsx allows us to write the html code in js

like in our app component i write line <h1>Hello keshav</h1>

so instead of this or we can say that it converts into this below line 

React.createElement("h1", null, "hello keshav nagar")

so it is like that thing, that you want, same same but we use that one line of code not this type of complex and abstract thing, we also apply in our app component 

import React from "react";
const App = () => {
  return React.createElement("h1", null, "hello keshav nagar, why do you take stress");
  //  (
  //   {/* <h1>Hello keshav</h1> */}
  // )
};
export default App;


so we apply this thing also in our react component 

like now we console.log 

React.createElement("h1", null, "hello keshav nagar, why do you take stress");

and we get an object and that is called virtual dom

we do with in our app component

import React from "react";
const App = () => {
  console.log(React.createElement("h1", null, "hello keshav nagar, why do you take stress"))
  return (
    <>
      <h1>do not take stress</h1>
    </>
  );
};
export default App;


so here we add the condole.log and react.createlement here , and we get an object inside our console screen, and that object we call that as virtual dom


like in first our jsx converts our  <h1>do not take stress</h1> this simple heading into React.createElement("h1", null, "hello keshav nagar, why do you take stress") so this line is also not a virtual dom it is like a part of virtual dom, react.element is a building block and a part of the virtual dom, it is not the virtual dom itself. rather it is an object within the vitual dom tree that describe what should be rendered on the screen

like jo   <h1>do not take stress</h1> ye line hai ye convert hoti hai React.createElement("h1", null, "hello keshav nagar, why do you take stress")  line me and ye line convert hoti hai us object me jo ki virtual dom ka part hai us tree ka hissa hai and vo hee actual dom me jata hai and batata hai ki ye show karna hai as an object 
like is object ko virtual dom kah sakte hai and yehi object actual dom me convert hota hai and ye render hota hua dikhai deta hai simple

ab isye aud depth me lejana hai to ham babel search karnege google pe like yehi hai jo conversion ka work karta hai 


like babel hee apne react code ko js code me convert karta hai 

mene babel me run kiya jiska image bhi me leke aya hu aur usey save kiya hai jo ki tu dekh sakte hai 
[babel](babel.png)

ab mene jo screenshot add kiya hai vo bhi ek purana tarika hai isme bhi ek new tarika hai jo ki hota hai like hame sidhi see bat ye samjhni hai ki jo bhi ham jsx or react code likh rahe hai vo automatically badlata hai apne js code me 

so classic tarike me to dekh liya like jassa likha tha same vaisa hee hai but ek aur website me automatically tarike wala bhi option tha 

jo new tarika hai uska bhi screenshot is : [babelAuto](babelAuto.png)

like ek me aisa lag raha hai ki jo hello bro likha hai usey vo obejct se bahar likh raha hai 
and same way me dusri jagah vo object ke andar children me likh raha hai childre isliye ho sakta hai shayad jo dono open and close tag ke beech me likha hai isliye isey vo beech me likh raha ahi 

like one more difference in both of them like here we use _jsx like here jsx has more power to deal with without the need of createelement

like ye do tarike hai jaha par ham dekte hai ki jo apna react hai vo apne is react or jsx code ko behind the scene convert karta hai js code me 

one more thing observe in our component files there is no need of writing the import react things

in jsx we need to one parent element if we have more than two html tags 

like in app.jsx we need to write two h1 tags okay without any tag 

so it give us an error of enclosing tag that is show in our image [closeTagErr](closeTagErr.png)

so ye kah raha hai ki yadi isey ek parent tag se wrap karo ya fir react fragment ka use karo

import React from "react";
const App = () => {
  return (
    <div>
      <h1>do not take stress</h1>
      <h1>do not take stress</h1>
    </div>
  );
};
export default App;

so here we use the parent tag some rules also written in scrennshot : [closeTagRule](closeTagRule.png)

like one mini thing i notice there in 

import React from "react";
const App = () => {
  return {
    <div>
      <h1>do not take stress</h1>
      <h1>do not take stress</h1>
    </div>
  };
};
export default App;

what if we write {} instead of () after return it give us error so we must use () in case of we have multiple elements and also wrap those elments into parent tag or fragment

now in app component we create a card of film and we also add the image in public folder we just need to write the image name 




