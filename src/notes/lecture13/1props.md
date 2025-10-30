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

how i use the props: 

series={series} so this is the passing of props

ab mene jo props pass kiye hai vo thru mene {series} aise pass kiye hai to ye destructuring hua like isme me vohi props pass kar sakta hu jo mujhe chahiye 

like mere pass koi sa component hai 

<SeriesCard series={series} key={series.id} />

jaise ye component hai okay, ab jo series hai vo mera alag prop hai aur key alag lekin jab me is component me isey pass karta hu aur ye component jaha bhi define hota hai vaha par ye dono as key value ke pair me jate hai like ab ye dono props ek single object ke andar store ho jayega aur vaha par hame paramter me jo hota hia na () ye wala to iske andar hame bas aise likhna hoga 

(props)

aur jab ham isey console.log karayenge to ye bas aisa liha hoga 

{series: {}, key: {}}

to is prakar se ye hame dikhega

to isliye hame yadi bas series props ka hee use karna hai to ham iska use kar sakte hai 

