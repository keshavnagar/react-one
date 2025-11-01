now i put shadow in my cards 
and with the help of box shadow
and thing is i also put more than one shadow in my one card 
so we are not trying to do that but we just know about it
we use shadow in two dimentions like vertical offset and horizontal offset 
like i give in grid item class situated in my sereiscard.jsx and seriescard.css 
so basically the shadow's two dimensions here is it push from upper to lower by 10 px and left to right 10 px as we seen in both w3 website and our card shadow in our seriescard.jsx and seriescard.css
we also add the shadow color 
spread radius 
blur effect
and we also change from outer shadow to inner shadow
so basically its simple use just follow two things
.grid-item{
    box-shadow: 10px 10px;
}
so first things is horizontal offset and second is vertical offset
so we already learn these things in above section
the default shadow color is the current text color inside the box 
suppose we want to add a color in our shadow by our choice so we also do this 
so we also change the color of the shadow
.grid-item{
    box-shadow: 10px 10px lightblue ;
}
now we add the blur effect in our shadow 
so we add blur with the help of third parameter of the css syntax in our grid item or other box in which we want to give the blur 
so the higher the number in px the blur effect is low 
like if i add 100px the blur is low okay 
and if i add 5 px the blur is high 
blur means not visible well 
but this blur effect add the shine to our card
now we have 4th number parameter that is spread shadow parameter in which we give 
we also decrese the shadow with the help of negative value
that is -8 , -4, and so on
so now we talk about inner shadow that is done by inset property 
and the inset property is use for just write inset in last of these all parameter
we also multiple shadow but we do not deep dive 
we just understand the concept of shadow that's it