hooks ek prakar se esi chij hai jo hame vo feature provide karte hai jo pahle jab ham class components ka use karke kar pate the, like funcitoanl component pahle vo kam nahi kar pate the jo unse ham bolte aur fir vo class componenetn me convert hoke karte like state management , side effect means fetch data or api so ab vo hi kam ham functional components se karwa sakte hai with the halp of hooks.
It starts with use___ (useState, useEffect, useReduce etc.)
hooks can only be used in top level of compoenent
do not call hooks inside the loop, conditions and nested functions eg in below
if(user) {
    const[count, setCount] = useState(0)
}
so it is now allowed
if(user){
    setCount(count+1)
}
it is allowed
ek chij aur ye hai ki jaise apne compoennts ke andar to apan hooks call kar sakte hai but jo normal js functions jo hote hia , jo ham react me bhi use karte hai to unke andar bhi ham hook ko call nahi kar sakte hai , like samajho ki ham jo functino banate hai react me vo bhi to ek componentn hee hua , but its not true compoennt jab bhi ham banate hai uska first letter hamesha capital hota hai but in case of funciton tis first letter should be small letter so ham uske andar bhi hook call nahi kar sakte like yadi vo return ke upar bhi hai to bhi ham call nahi kar sakte suppose
const getData = () => {
    const [count, setCount] = useState(0)
}
getData()
so yaha par ye component nahi function hai jiska first letter samll hai na ki capital 
ab ek aur bat ye ati hai ki jo mera main componentn hai yadi me uska bhi first letter hata deta hu aur small kar deta hu to bhi error ayega becasue rule ye hi hai ki first capital in component and in funciton it should be small
we can also create a custom hook by creating function starting with use___ , ensure that react can identify this as a hook (useFetch, useForm etc.)
so hooks ko same order me likhne ka ye means hai ki suppose react internally jitne bhi ham hooks likh rahe hai apni reat component me to sabhi hooks ko ek key provide hoke store kiya jata hai , its like an internal state that store all this hooks supose we have three hookks
const [count, setCount] = useState(0)
useEffect(()=> {}, [])
const [name, setName] = useState("")
so in teeno ko react ki internal state ne apne andar store kar liya hai with keys like keys ensure the order of these hooks to abhi state ko pata hai ye order nahi badlne wala kyuki ham simply in hooks ko ek rule ke according define kar rahe hai top level component ke rule ke according jisme koi conditino ham nahi la rahe hai 
ab ate hai situation kuch aisi ho jaise hamne pahle hee bola hai ki condition me ham hook kyu nahi laga sakte to iska reason bhi ye jo same order wala system hai isee se related hai 
const [count, setCount] = useState(0)
if(count>5)
useEffect(()=> {}, [])
const [name, setName] = useState("")
to count ki value 5 se less than hogi to react ne internal store or state me store kar liya hai ki apne pass do hee state hai but jasie hee count kei value greater than 5 hui to 1 pe count, second pe useEffect and third pe aa gaya name to yaha order change ho gaya to react apna track lose kar jata hai like ye chij allowed nahi hai ha aap ye wali conditino useeffect ke andar laga sakte hai but ek prakar se ye bahut related thing ho gayi ki han apan in dono rules me relation dekh rahe hai

