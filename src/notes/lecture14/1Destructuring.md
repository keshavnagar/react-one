destructuring in jsx:
ab jaisa ki hame pata hia ki like jab ham bahut sare props ya ek bhi props pass karte hai to vo ek single object me store ho jata hai as property in that object 
like ek component hai apne pass apna wala 

SeriesCard(props)

ab yadi mujhe isme se bas mujhe series = {series} wala props hee chahiye to me aise likh sakta hu 

const {series} = props

but yaha par ek rule hai ab ise kasie pata chala ki const me mene jo series likha hai to vo series props ke anda hai ya nahi to iska ek simple sa funda hai ki const me jo ham variable declar karte hai props ke samne to hame same vohi name dena hota hai jo hamare props ke andar us particular props ka name hai 

like yadi props object ke andar series name ka koi property nahi hai to ye store nahi hoga series data ke andar simple

isey bolte hai destructuring karna 

ab isse fayda ye hoga ki hamne jo particular data ab ek variable me le liya hai to ham jo object.property likhte the ya props.series and further yadi series me se hame koi series ki property bhi leni ho to  hame aise likhna hota tha like

props.series.cast
props.series.desc
props.series.img

and so on 

like hame ye pata hai ki jo series prop hai vo bhi ek object hai tabhi to hame usey aisa likhna pad raha hai further like
series.cast 
series.description 
series.img

ab hame yadi isey bhi destructure karna hai to ham isey kar sakte hai like 

const {cast} = series
cosnt {desc} = series

but ek warning ki jo bhi ham const me likh rahe hai varibel declaretion ke doran vo hamare sereis object ki property me bhi hona chahiye 

iska ek shortcut bhi ahi like ham ek work aur ye bhi kar sakte hai like

const {cast, description, img} = series 

make sure all three properties should be inside the series object 

aur fir inka direct use kar sakte hai hamare jsx ke andar ab ye chij me apne compeonent [SeriesCard](../../components/SeriesCard.jsx)
