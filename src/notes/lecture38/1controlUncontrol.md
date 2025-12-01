# so first we do the experiment where it produce the problem 

# first we go to the IncDec file 

<input
        id="input"
        value={step}
        onChange={(e) => handleStep(e)}
        type="number"
      />

in this code if we keep this code, than the code run succesfully, but if we remove the   value={step} than it give error to us and erro as follow

installHook.js:1 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: 

# controlled component: 
controlled component simply means when react control our form's input field or normal input field with their use state hooks for state management and we also use onChange() method to funciton them with state than we called this component controlled component

this means : 

# state management: 
jo bhi apni state hai vo yadi input field ki value ko handle kar rahi hai to vo is prakar value ko control karegi
and the input field is controlled by react useState hook or this.state in class components

aur ye jo error ayi thi jo mene upar mention ki hai vo isiliye ari hai kyuki jaise heee mene value hatayi to vo error or warning mujhe ari thi kyuki jo value thi vo controll or manage ho rahi thi state dwara aur vaha se apan ne value ko hee hata diya isliye problem aa gayi 

# event handler: 
jab bhi apan event handler lagate hai react ke jaise ki onChange, onBlur etc. to ye add karte hai tab apan jo bhi perform karwana chahte hai click karne par ya kisi action lene par like input me koi text add karte hai to onChange ham add karte hai to isse ye hota hai ki ham jo ab input field me likh rahe hai vo react ka onchange track or control kar raha hai tab isey ham onChange method ke dwara handle karte hai input field ko like har key jab ham dabate hai tab tab hamari state update hoti hai kyuki ham uspe state updation wala funciton bhi likhte hia 

# state update: 
to ye hai third step like jab bhi input field me apan kuch bhi likhenge apna onchange funciton chalega aur ye state update method setState ko bhi chalayega aur jab ye chalega to ye track karenga input field ki value ko with the help of e.target.value aur isey store karega state me aur us state ki value ko assign kar dega iski value attribute me

in next md file we will learn about uncontrolled component

