# phases

# capturing phase:
the event starts from the root of the dom and goes down the target element

capturing phase me ye hota hia like me ek map banwata hu ai se fir uski help se samjhte hai taki future me koi problem na ho

Event starts from:
Window
  ↓
Document
  ↓
<html>
  ↓
<body>
  ↓
<table>
  ↓
<tbody>
  ↓
<tr>
  ↓
<td>  

so capturing phase me apan bas ek chij karenge like vo hai capture karenge ki hamne event kaha kaha laga rakhe hai like yadi apna first event yadi document me hai to vo pahle capture hoga like if i want console.log ("hello") so that is printed and than mene ek event body pe bhi laga rakha hai to uspe jo mene likha hai uskei defineition me to fir vo console ho jayega like hello than apna jo final target the jispe apan ne click kiiya tha td vo finally capture hoga like isse hame ye pata chahlta hai ki koi bhi event direct tartet nahi hota vo step by step from the root element to target element tak jata hai 

like yaha ek chij batayi gayi hai ki jo capturing phase hota hia usme vo check karta hai from the root elemnent that is window element to the target element to jo bhi iske beech me ate jate hai vo yadi koi event unke pass rakhte hai to event propagtion unhe bhi triggered karta hai but yaha par to ham bas vo hee triggere karna chahte hai jo ki targeted hai 

# target phase:
target phase me ham reach karte hai hamare target element ko 

# bubbling phase:

bubbling phase opposite to capturing phase because it is started from the target elemtnt to root element

like isme ye hota hia ki jaise mene td pe click kiya to iska event triggerdd ho jata hai 

fir vo bottom to top check karta hai ki kisme hai aur kisme nahi hai vo check karta jata hai and if yes than it also triggered that 

to ye tha event propagatioin in js

now we see the in react js 

in our third md file


