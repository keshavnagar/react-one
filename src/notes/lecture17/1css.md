like in our react project we have index.css file and app.css file so they are responsible for adding css in our react project

now we add some css code in our index.css file

index.css: this file contains global css styles that apply to the entire application.
It allows you to define styles that should be applied globally, affecting all components within the react app.

if we need a particular component styling we need to add particular css file for particular component liike if we design individually to any component we need to create individual css file for that 

like i add the index.css in my netflixseries component 

and since i want to add grid style in this so i use the grid style also in this component becuase it is a parent component that holds card and the particular card is the grid box in this parent component

so we used the grid layout in our netflix series component 

and the items that we called grid items are that component series card  it is the grid item

so in grid we have two types of properties 

first type if for parent and second is for their child

so added grid successfully in netflixseries.jsx file and also put grid style in container class in indes.css and add that class into app.jsx file

so we are also doing here control number of colum by grid 

number of rows by grid and their with also 

in case of number of columen we control the width and in case of rows we control their height

we also add gap between rows and columns both

jaise grid row gap and columm gap ka ek short cut hai grid gap jisme yadi apne ko done me ek jaisi gap chahiye to apan iska use kar sakte hai 

so i copy the code from the css sources that given in this lecture number 17 of branch name css

one more thing we do here is like we create a section tag over the netflixseries component that contain all the netflix series cards that are in netflix series components

now we style that section like jaise apan  ne jo list of series bana rakhi hai vaise hee apne ko yadi mx player ki series lani ho ya kisi dusrre platform ki sereis lani ho to ham un sabko ek container me rakh sakte hai aur vo layout balance rahe isliye ham is container ko secotion ke andar rakhenge and done

so here we do just simple index.css basic to just do simple style 

now we do one thing that is we style individually components with their saparete file

