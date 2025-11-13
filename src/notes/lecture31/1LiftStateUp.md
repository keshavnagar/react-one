# lifting state up: 
it is a pattern in react where you move the state from child to parent component so that multiple child component can share and synchronize this state.

# use cases:
when you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.

# 1LiftingState.png
in this image we have app components that has three children 
1. input
2. child
3. display

so in input i create inputvalue state and i want to pass this into display, so instead of freshly create this into display, i pass the state to the app and than props to the display

# practical 
in input i created state than i lift up to the liftstate up parent component 
than i pass the two functions input val and set input val from the lift state up component , since i catch through the props both the things and than i define them into my input component and pass through again prop
than i pass same props to the display component

through props

# but the passing of props is okay, what about lifting state up
so in my point of view we just created a commone state between children in the parent component, 
like jo state i need to create in input that state i created in my parent componennt and the things i control that state from my child component that's it 
but here one more thing we lift this states via the default state properties like there are two things in state variable and setter functino so both are i passed to the parent and than parent says yes that is the things i want from you so i geted 
than it pass the variable to the display component



