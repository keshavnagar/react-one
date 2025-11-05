so here we have the event handling in our vs code 
first i do code just write onclick event in button 
and add some style and in that one funciotn i define that console the text button clicked
but this funciton also has some parameter from onclick and that is event we also console this in our console

SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button.m-8.px-5.py-2.5.bg-indigo-600.text-white.font-medium.rounded-full.shadow.hover:shadow-lg.hov…, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelable: true
clientX: 95
clientY: 60
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 3
getModifierState: ƒ modifierStateGetter(keyArg)
isDefaultPrevented: ƒ functionThatReturnsFalse()
isPropagationStopped: ƒ functionThatReturnsFalse()
isTrusted: true
metaKey: false
movementX: 0
movementY: 0
nativeEvent: PointerEvent {isTrusted: true, pointerId: 7, width: 1, height: 1, pressure: 0, …}
pageX: 95
pageY: 60
relatedTarget: null
screenX: 674
screenY: 247
shiftKey: false
target: button.m-8.px-5.py-2.5.bg-indigo-600.text-white.font-medium.rounded-full.shadow.hover:shadow-lg.hover:bg-indigo-700.transition
timeStamp: 366535.30000000075
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
_reactName: "onClick"
_targetInst: null
[[Prototype]]: Object
so this type of object is comming to see we here 

so event jo hota  hai vo jo js me hota hai vaisa react me nahi hota hai react me isey synthetic base event dwara ise wrape kiya jata hai and ye jo hai vo apne ko ye suvidha deta hai ki ye sabhi browser pe ek jaisa chalta hai bas

so apan ne yaha par kya kiya 
yaha par apane ne oclicke pe ek funciton ko call kiya aur vo funciotn ne vo diya jo apane ne usme define kiya 

but apan yehi defininton inline tarike se bhi likh sakte hai jise fat arrow funtion ki help se event handling bhi kahte hai 

<button onClick={handleClick}>
        Click Here
</button>
<button onClick={(event) => handleClick(event)}>
        Click Here click here
</button>

so both ways are right but if we add () into above handlclick it run automatically without pressing the button but if we add same thing in our second way it is working like if we call handleclick in arrow funtion without () this in second way it is not working

dekho iska simple funda hai jab apan direct likh rahe the onclick ke andar hadleclick funciotn ko to vaha par vo direct pass hora tha 
but jab vo click karenge to call hoga 
but second thing ye hai ki jab ham dusre way me usey call karenge to vo pass nahi hoga like suppose ham ek work karte hai like arrow funcito ke anda hamne usey bina usey liikh diya to click karne par arrow fucmtion call hoga na ki handlclick to jasie hee arrow fucniton call ho to uske andar jo handleclick hai vo to aisa hee rahega to usey call karne ke liye () ye lagana hoga 
same thing like jab ham () nahi lagayenge to vo call hi ni hoga 
but same thing apan ne first wale me bhi to nahi lagaya to vaha ham usey as a reference pass kar rahe hai 
now we do the inline way of this things
<button onClick={(event) => {console.log("hello this is :",event)}}>
    inline way clicking
</button>
one more thing we also pass the parameter or argument to our funcion that is in onclick 
so if we pass directly to the first way means it is automatically called because we use () 
but if we use fat arrow funtion we pass the value

so we impletement that way 

<button
        onClick={() => {
          handleUserClick("ankit");
        }}
      >
        get user name
</button>

const handleUserClick = (user) => {
    console.log(`hello ${user}`);
  };

so that's we used the pass extra parameter to event handlers





