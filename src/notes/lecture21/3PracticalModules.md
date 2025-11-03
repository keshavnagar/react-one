now we do the practical part in which i play with files okay
like we use the rule number three in which we just import the styles as an object from modules.css file and than we use the class name as an propertye of that style object of our component
and we also add the class name in our curly braces because we know the object property is like an object property so this is js part and the js part is always come in {}
so after adding the class name in to {} , than i also check it will work
so now do this same thing with our other component
one thing i learn here is  : 
const condiStyle = rating >= 8.5 ? styles.green : styles.yellow;
we do write look like this not like below: 
const condiStyle = rating >= 8.5 ? {styles.green} : {styles.yellow};
because it is already written above the return statement and the portion here is used for js programming part
one more thing we want to learn here is how we pass the class name to component that is look like in css like grid-item but when you write styles.grid-item its not valid so we use styles[`grid-item`]
so lets do this 
