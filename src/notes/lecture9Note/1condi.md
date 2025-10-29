we can either return a jsx early or we can use ternary operators for conditionals in jsx

like we have an eg

return <p>{age>=18: "adult" ? "minor"}</p>

ye kya karega firstly ye age check karega ki age ka value hai 18 hai to adult hoga 

aur fir vo adult hame curly braces ke andar dikhega jaisa ki ham jante hai ki koi si bhi js value ko hame jsx ke andar show karna hai to ham usey assign kar dete the kisi var ke andar aur show kar dete the but here we do other thing like we direcly also show this string into {} and show in to p tag 

so it's easy

so the first thing we do in our app's netflixcard comp, in which we just add a variable age and assign any value 
and write the ternary operator inside the jsx syntax to check if age is >= 18 than watch other wise not watch

than we also have another way 
like we have a variable inside 

const canWatch = "watch not"
if(age >= 18 ) cantwatch = "watch"

so we first comment the first way 
and than we put our second way 

like another way that i find like above return portion we just add assign the varibale 

const canWatch = age >=18 ? "watch" : "not avaiable"

and put this canwatch into our return portion

we have 4th way to create a funciton and call that with our {}

here we also use if else thing like the youtuber

