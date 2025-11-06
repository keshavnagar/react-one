# so now we see the same thing in react js 

In react js, event propogation refers to the process by which events propagate or "bubble" up from the target element through its parent elements in the dom hierarchy.
react follows the same event propagation model as regular js dom events.

when an event occurs on an element in react component, such as button click, the event is first captured at the target element and then bubbles up through the parent elements, triggering any event handlers that have been defined along the way. This allows you to handle events at different levels of the component hierarchy.

react provides a way to stop event propagation using stopPropagation which can be called on the event object within an event handler. This , the event from bubbling up further in dom, ensuring that only the event the target element is triggered.

so now we do the practical part of event propagaiont \

so i create a file that name is event propagation and do some code there and write things and get screenshot when i click on child button , and the button when i call , that is follow the same principal of event propagaiotn where i see it captured from root element to target element and conslole or triggered all the event handlers

so in second screenshot i again click on second div that is parent and i again like it bubles up like first it give me the result of parent div and then grandparent so it is bubbled 

so yaha par bubbling up hora hai 

to yaha par hame pata chala ki yadi ham child pe click kar rahe hai to uske parents me jitne bhi event honge vo bhi call ho jayege ye default behaviour hai of react to hame ye chije bhi samjhnni hogi

but ham isey rok sakte hai 

so now we also stopped the event propagation in react with the help of funciton that name is stopPropagation() 

but ham jab parent pe click kar rahe hai to bhi to ye event propagate hora hai 

but here is the catch 

we need to write stop propagation in every event handlers

so ye tha hamara bubbling phase in react now i cover capturing phase in react also


