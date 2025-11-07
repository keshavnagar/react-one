when react creates a new tree, it will re-render the affected component and all its children. so, in this case it will re-run our <counter/> component, it won't re-render other components ouside,like sibling components.

now we just go with our example: 

const App = () => {
    return(
        <>
            <Parent>
                <Child1/>
                <Child2/>
            </Parent>
            <Sibling/>
        </>
    )
}

so in initial rendering all the things are painted in screen

now if state change of parent component than parent re rendered but also re rendererd the child1 and 2.

# here's how the re-rendering works: 

# initial render: 
when the app component first renders, react renders Parent, Child1, 2 and Sibling.

# state change in Parent:
suppose there is a state change in Parent.
React will re-render Parent and all its children Child 1 and 2.

# component outside:
sibling is not affected by the state change in Parent, therefore, it will not be re-render

so in my practical experince i just realize it works like nothing problem there and in screenshot you learn more about it state change than our childs are also re render