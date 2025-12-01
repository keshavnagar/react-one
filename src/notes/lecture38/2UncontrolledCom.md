# uncontrolled component: 
so controlled components are who those have state management, event handler and state updation funciton that is the feature of react 
but what is uncontrolled component ? 
in js we have funciton and if we need to track any value in js or any element in js than we need to DOM concept like queryselector, elementbyid, elementbyclass, elementbytag and so on

like in react we learned dom in js but in react we do not use dom because the react have their virtual dom, because react is like abstract or declarative way like behind the scene kya chal raha hai usse aapko koi lena dena nahi hai vo react apne aap handle kar leta hai 

like jo bhi behind the scene tree etc bante hai vo sab react handle karta hai to the real dom

so yaha par jab react swayam se vo sare work karta hai control karke usey apan controlled component kahte hai 

but jab react in sab pe se control nahi karta hai tab vo control dom swayam handle karta hai to un components ko uncontrolled component kahte hai like isiliye jab ham kabhi bhi shayad jab state ka use nahi karte hai aur simple variable banate hai tab vo control dom ke hatho me hota hia 

uncontrolled components in react are those where form data is handled by the dom itself.

it means: 

# direct dom manipulation: 
the value of the input field is controlled by the dom
(document.getElementById, etc.). It's not declarative way right.
# even handling: 
changes are directly handled by dom events (onChange, onBlur, etc)
# accessing form data: 
form data is accessed through refs or dom traversal methods, not through react state.

like here ther is not directly handled by react but the dom itself

now i create the the file controlledform.jsx in and implement the practical thing that i understand in theory

like one more thing i understood jab bhi browser screen pe output nahi dikhta hai tu dora dora code pe wapas kyu aa jata hai tujhe check karna chahiye console screen vaha par kya error show ho rahi hai ye sari things tujhe dekhni chahiye 

like yaha par console error dera hai ki handlesubmit define nahi ahi to ye things right aproach hai 

one more thing here we are first make the control forms in a way of uncontrolled component way 

so apan ab uncontrol way me jo input value hai vo apan console pe show karenge without react control component feature like state and so on 

ab yaha par ham late hai twist , like jaise hee me yadi value attribute ka use karunga to power dhire dhire shift hoga uncontrollled se controlled component ke taraf like jo power abhi dom ke pass tha ab vo ayega react ki taraf dekte hai kaise me batata hu 

