so in my code of that is ShortCircuit.jsx in which i add the logic of two states where one state is handle the true false and second is handle the logic of a string storage variable if the toggle is true than the string storage variable change their value 

but same thing we do with our concept called short circuit evalution in which we just have a signlle state in which we set the value or true false and when we click on our button the button trigger the funciton that is set the value to true and false 

and same if the condition is true than we return the paragraph tag other wise not 

so its like short circutit as far as i understood

so more clear way i deep down in this problem so here we have one state that's toggled when we click on button and if the button is clicked than we just set the value of state from true to false and false to true

so here we want one result 

so in ampersand operator if the first value is true than it checks second and if both true than it return second

if the first is false than it returns first value

so the logic is just little bit in which i created state and set the initial value to false 

and than i just created a logic with && operator in which i just add with the paragraph to state 

so the state is false than it return the false means nothing is visible to screen 

but if the state is true than it returns its second value , because our second value is true than it will be returned

so this time we do same work with second button 

but here in my mind says why we use another state like if we handle this with same state 

but the thing is here if i handle this also with same state than it is value to depend on both button's line suppose when i click on first button it is also change the second button work 

its like the first button work is to hide the logged in or not logged in and the second button work is set the name of user so if i give the same state to both of them than it is dependent to each other if first says set the user name than it is also logged in that user but we do not say them to logged in or not we just says your work is just set the user name not manipulate the login work it is already assign to is logged in state so that's why we saparate the states

so i also set the set user logic in which i just add the logic of state creation default i give the false and than toggle with the help onclick and set user funciton and than it reverse the value of state every time when we click and than we just add the value paragraph tag is value is true than paragraph returned otherwise first value is returned if the state value is false

we have clear user button so may be i made mistake so we have two button we do not use the ! operator there we just first set user button we just set the value to true and clear user we use false , okya here we just creat the logic in this commit 

but but but we dont use this condition && operator becuase we learn just them with the that exmaple 

now we understand the ? this question mark operator, so the work of questrion mark operator is when the value is null and undefine the first value i said than it returns second value other wise first values so we remove my logic that is right but not practical in this situation we need to write the logic with ? operator

so ?? iska system hamene dekha jaise hee yadi apni value initially set hai "" to bhi ye isey true manega aur isey print kar dega second wale ko print nahi karenga swayam print ho jayega but jab ham isey bolenge ki aap print ho to jab ham ispe click karenge to ye apne aapp me print hoga samnjha ya nahi ? 

me firs se samjhata hu 

suppose apne pass hai abhi initially 

const [user, setUser] = useState("")

to abhi user ki value hai "" it means jo ?? ye value hai vo return nahi karegi iski right conditional value ko ye return karegi iski left conditional value ko means 

user ?? <p>right conditional value</p>

to abhi user = ""

to ye undefine and null dono hee nahi hai to ye swayam return ho jayega na ki return karega second value ko 

aur yadi ham likhde set user ("arijit") to ye to pahle se hee null nahi tha means "" ye tha to ye "" isko aur "arijit" dono ko true manega aur kabhi right conditional value return karega hee nahi yadi me use state declare karte time undefined ya null likhdu to ye jarur return kar dega iski second value to isey kahte hai short circuit evaluation ka second operator that's called ? operator

ab apne ko kya karna padega set user ke liye just click kar denge aur value ko set kar denge but ab apan ye chahte hai ki click karne par jo right hand side me likha hai vo apne ko pradarshit ho to vo kasei karenge apan ? 

to paasaa fir se palat gaya hai jo me soch raha tha vo ?? to ye vala operator tha jise mene sahi samjha but abhi apan us video ke reference se baat ? is operator ki kar rahe the ki isme yadi "" to isey ye false manega aur second ki value ko return karega like suppose ye start me "" hai to ye false mana jayega aur jab me user ko set karunga arijit to ye fir ye true mana jayega aur fir ye second value ko return karega 

so yaha par ek bat aur dhyan rakhni hai ki jab ham dekhte hai ki hamari jo value false hai to condition konsi chalti hai jo : iske bad lihhi ho but yadi true hai to conditino chalti hai jo ? iske just bad likhi hai to ye difference hota hai 

so apne ko ek work aur karna hai ki toggle wale me to apan ! iska user karke true false kar rahe the but yaha par apan toggle nahi kar sakte signle state me to apan ek work karnege ki jo apane pass dusra button hai usse stat ko firse empty state me le jayenege okay

than we have the result



