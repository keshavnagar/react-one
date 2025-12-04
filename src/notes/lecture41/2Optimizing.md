so first thing after removing the switch case part is 
we console.log the prev object with the help of set user funciton
and we see this thing three times
dekho jasie hee apan jo apna switch case wala part tha vaha par different different name the but value same thi aur saparation tha with different condition behalf of name kyuki apan ne name and jo object ke andar jo property rakhi unka name apane same rakha hai like set user apan ne bar bar isliye likha hai kyuki vaha case me kya tha name tha aur vo hi name to hai apne object ki property aur us property ko set karne ke liye apan switch case na likhte huye direct name hee likh dete hai set user ke andar jo apan dynamism chah rahe hai uske liye 
ek chij aur ki jo apna name hai vo object ki property se to same hai but jo peroperty hai vo bhi ek state ka hi part hai to ye chij bhi dhyna rakhana 
const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, name: value }));
  };

abhi me jab run kar raha hu to mujhe input me new value likhni hai to me likh nahi para hu kyuki ab apne ko dynamic bhi chahiye but only name lihjne ke to ye hi means hua na ki apan uski name property ko change kar rahe hai ya fir yadi ye property exist hi ni karti hai to isey apan add kar rahe hai but apne ko to dono hee casee nahi chaiye apne ko dyanamic chahiye to dynnamic ke liye apan name ki jagah [name] likhnege