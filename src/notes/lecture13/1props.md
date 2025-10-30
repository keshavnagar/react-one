react props (properties) facilitate data transfer from parent to child components.
data flows unidirectionally, ensuring a clear direction of information in react applications.
like attribute in html tag
same props in react component 


        opening tag                             closing tag
<a href="register" target="_self" >Registration </a>
              attributes

so in html tag, there are two attributes href and target

props are immutable, meaning child components cannot modify the data received from parents.

child components access props through their function parameter

we can also pass jsx as props to another component.

har components ek prakar se function hota hai aur us function ke andar ek parameter ka option hota hai usme props apan catch karte hai  

it means in english child components access props through their funciton parameter 

we can also pass jsx as props to another component like we also pass the jsx code like we written in component in the form of props

like apan ne jo netflix component rakha hai apne pass uske andar mene map method lagaya hai to code bahut jyada messy dikh raha hai to isey ham clean karne ke liye apan isey aur component me tod sakte hai 

like jaise map method ke andar bahut sare cards hai aisa apan mante hai to mujhe subah confution tha ki jo bhi me saparate card banayu usme map method rakhu ya map method ke andar us saparete component ko rakhu to ab mujhe ek chij ye clear huyi hai ki map method jo ki sabhi data ko ek list or card ke rup me darsha rahi hai to me us list ko as a card component use karta hu kyuki vo bhi ho sakta hai ki me component ke andar map method lagadu but accha ye hoga ki me map method ke andar ek list ek particular card ko show kar rahi hai to me as a particular card ko ek component banayu taki vo sab different rahega aur usey map method ke andar rakhunga like vo ek particular card hoga na isliye 
