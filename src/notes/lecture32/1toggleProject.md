so here i learn one thing in set state i dont change state by myself in the funciton of set state

like 

setstate (toggle = toggle === "off" ? toggle = "on" : toggle = "off")

so here i dont say to toggle = ... in initial but here i just pass the value through this, so in this example the on or off value assign to the toggle without saying to setstate funciton like here i manually set the toggle state value 

setstate (toggle === "off" ? toggle = "on" : toggle = "off")
but in this case we directly pass the on or off value to the setstate and than set state set the toggle value

so that concept is called immutability where react dont support it its just mutate by themselve not by yourself



