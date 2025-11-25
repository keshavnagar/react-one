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

