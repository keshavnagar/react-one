in react we do not return so many elements without the parent or wrapper element 
like you know about well
we can do this to imitate it: using an array of elements with keys
eg: return [<p>paragraph</p>, <strong>text</strong>]
but it's tedious, to fix this react 16 introduced fragments, which allow components to return multiple elements without adding extra nodes to the DOM.
import {Fragment} from "react";
return <Fragment>//</Fragment>
alternatively, we can use its shorthand syntax:
<></>
why react cant return multiple elements in jsx component
so the reason is like we know that every element is object 
and multiple objects are not return by same time together 
so we use a div tag that is parent object and all the objects are properties of that object
in js also multiple objects we cant return together
as after jsx is compiled it is converted to normal js object, we can't return multiple js object at the same time.
for the checking we see the div in inspect to our react code 
we see the root div and after that div that we use as wrapper or parent div
and it is like extra div we also do that thing without that div with the help of fragment
so why we say like it does not needed and use less and why we use fragment instead of this
so the reason when it converts into actual dom it is create a extra node in our actual dom
fir yar apne ko pata tha aisa hota hai to apan ne is div ka use hee kyu kiya because we also know about that jsx cant return multiple objects or elements together at the same time that's why we use it to wrap our elements
ab yadi apne ko isey remove karna hai to apan pahla tarika ye use kar sakte hai ki apan array ka use kar sakte hai 
suppose we write our code like this 
return (
    <div>
    <NetflixCard/>
    <NetflixCard/>
    </div>
)
but instead of writing this we use array with keys

return (
    [<NetflixCard key="1"/>
    <NetflixCard key="2" />]
)

ab yadi ye code ham kisi bhi component me likhke usey inspect karenge to hame vo jo extra div dikh raha tha vo nahi dikhega
like ek prakar se hamen code optimize kar diya bhale hee ek div tha but we remove becuase it could be
ye tarika optimized to hai but thoda complex hai in the written and learn and use this 

but we have another way to write same thing 

like we use react fragment instead of this 


import React from "react"
return (
    <React.Fragment>
        <NetflixCard/>
        <NetflixCard/>
    <React.Fragment/>
)

we also inspect this one and there is no extra div and direct we see the two div in our core html

for clean writing we also optimize this 
import  {Fragment} from "react"
return (
    <Fragment>
        <NetflixCard/>
        <NetflixCard/>
    <Fragment/>
)

pahle ham writing just react.fragment like react as an object and fragment is property of that object

ab yadi apne ko fragment bhi nahi likha and isey import bhi nahi karna hai to apan just isey aise bhi likh sakte hai 
return (
    <>
        <NetflixCard/>
        <NetflixCard/>
    </>
)

here we do not import any things 

i metion the screenshot of inspect window [inspect](inspect.png)

