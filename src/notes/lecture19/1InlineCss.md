now we add the inline css 
i just do same thing with that css but i also try with inline css because it is the part of learning so we apply the inline css in our code 
how we apply inline css in our jsx code 
1. inline css in react are specified usign js objects. property names are wirtten in camelCase instead of the traditional css kebab-case

const style = {
    backgoundColor: "blue",
    fontSize: "12px"
}

so here we use style as an object inline style is an object and the properties are our css propertis of this like we are writtern in our objects like name, age , id , salary , and so on

like in html css js code file structure we use the inline css in our h1 or h2 in the way look like this 

style = ""

<h1 style="backgound-color: blue "></h1> and so on

but in our style code we use curly braces it means it has dynamic values

const style = {
    backgoundColor: "blue",
    fontSize: "12px"
}

so it is that also it is like it is realy a js object because we use {} becuase of js like {} this is the entry point of our js

so here we use style as an object and {} means we enter the js

and another {} is for that object that give us the properties of style okay 

so in short we use first {} for js 
and in js we use the css style as an object , and objects are also written in js 

that's why i learn the inline css properties in react becuase it is related to fundamental 

 style={{}}

 units in css style in react: 

 for most numeric values, you need to specify units as a string eg: '15px'

 some properties, like zIndex, can take numberic values directly 

eg: 

const style = {
    padding: "2px",
    zIndex: 1
}

so we write the units in string value because in object if we write any things that is mix of number and string we use the ""

