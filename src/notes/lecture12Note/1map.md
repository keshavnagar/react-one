we don't use for and while loops in reacr we use map method for repeatative task or loop type things 

eg

return (
    <ul>
   {students.map(
        (student)=>{
        <li key={student.id or index}>
        {student.nam}
        </li>
        }
    )} 
    </ul>
)

return (
    <ul>{students.map(
          (student)=>(
        <li key={student.id}>
               {student.name} 
        </li>
    ))}
    </ul>
)

map(
    ()=>()
)

so is prakar se apan map method ka use karte hai in our component

react js will throw error if we do not pass key props in their first parent element

so now we do practical this thing in our project

so first we add the json file in our api folder 

and than add image folder in our public folder

and than clean our code of netflix card and app component to remove header and footer code

so I clean the whole code in app and netflix card component

i also clean the code of conditional rendering like conditions and extra things that we learn but not require for future

so now our focus on app, json data and our netflix card.jsx file 

if you need something about previous work you just go github file where all things are stored for history okkay 

first I add the json data or import json file into my netflix card component

I also add data from json api to my netflix card to import json file 

one change i just add ul tag that hold all the cards like in li

so the concept here is like in first card i add with the help of seriesData[0].name, seriesData[0].img_url,seriesData[0].watch_url, seriesData[0].id, so it is just static 

like if i need second card i need to written thing again 

seriesData[1].name, seriesData[1].img_url,seriesData[1].watch_url, seriesData[1].id

seriesData[2].name, seriesData[2].img_url,seriesData[2].watch_url, seriesData[2].id

for each card

like hame ye repeat karna pad raha hai 

like map method se help ye hogi ki hame bar bar ye things repeat hogi

so now we do the things with the help of map method

so we render the data with the help of map method 

key prop should be pass into li tag

why we pass key 

so we pass key because we are using different element of the array that is json array file 

in which we have so may objects that is child of the array or elements of the array but here we use them with the help of map method with the parameter that name is always same for all these elements so we pass key to identify the elements as different elments in our array

like it is identity of each elements that is present on our array and if we add another element in our array so we also identify that one and the id is unique identity of each element present in an array like index

suppose we want to delete any card or li here so we delete with the help of this key prop

like in our example suppose we use map 

seriesData.map(
    ()=>() 
)

here we  don't need of our return statement

seriesData.map(
    ()=> {
        return 
    }
)

so here wer return 

and the return here is two types 

return ()

return <h1>Hello </h1> if we have only one element like this

image ke andar alt hai vaha par bhi name de dete hai 