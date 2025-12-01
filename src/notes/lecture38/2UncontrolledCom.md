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

so jaise hee hamne value attribute add kiya hame below error dikhi 

installHook.js:1 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

to yaha par hamne ek aur chij dekhi ki jab ham input field pe click kar rahe hai to ham field me kuch change bhi nahi kar parahe hai to is error ka means yai hai ki aapn onchange method use karo yadi apko change karna hai aur isey changeable rakhna hai to like iska means ye hai ki dhire dhire ham react ke power bubble me aa rahe hai 

to ab ham onchange method ka use karke isey puri tarah se controlled bana hee dete hia 

ek chij aur jo mujhe confusion huyi ki jab hamne handle submit function define kiya tha dom ki help se to ham vaha par form ka jo funciton tha uski help se uske input ki value access kar rahe the throught input ki id

but yaha par ham direct onchange funciton ki help se ek funcito ki help se value access kar rahe hai sath hee uski value ko bhi access hee nahi balki change bhi kar rahe hai 

so jo chij aa rahi thi dom kee help se input id ke through value ko access karne ki ab vohi chij ham access kar rahe hai through state and state updation simple

here we do another experiment like now we have controll component okay but in before little time we have uncontrol element and we try to create them control component to add the value attribute , but if we remove the this value attribute than we are try to create this into an uncotrolled component , so first we remove and than we read the error than we know what actually happening here 

installHook.js:1 A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: 

so here it says ki jo cpoment hai vo control input se uncontrolled  ho raha hai ye isliey hora hai kyuki jo value define se undefine ki taraf ja raha hai like kyuki ham value attribute ka use nahi kar rahe filhar jo abhi hame input pe value mil rahi hai vo bas jo ham type kar rahe hai e.target.value hai aisa kah sakte hai but jab vo controlled that to us value me state thi apni isliye aisa hora tha to ye error isliye aa rahi hai ki koi ek value honi chahiye ya to aap control karlo ya fir uncontroll its more interesting yar 

like yadi ham state ki jagah value = "jar" bhi likhte tab bhi react ko aisa lagega ki ye mujse power lene ki koshish ki ja rahi hai 

bhale hee ham ye karke dekte hai taki concept acches se samajh aa jaye