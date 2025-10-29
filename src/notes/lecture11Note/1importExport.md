import export in react js
1. default export and import
2. named export and import
3. mixed export and import 

so first thing for this we make a folder components and shift netflix card into this 

now ont things is important here that mention in below: 

1. default export: a file can have only one default export.
and than we  import in out app component
so let we do

2. in app component we write import NetflixCard from ...
so we also add another name instead of this like NCard or NetCard and so on....

2. the second thing is like, we also have another type of import and export 

and that is 

NAMED import and export

like that think we do with our [netflix card component ](../../components/NetflixCard.jsx)

so the change is we add export in before the component name in component file and add the component name in import section of app component in our {}

one more important thing in named if we dot add {} so it give error 

and if we also change the component name in import part of app component but here we do not change we use component same as in somponent file

but in name export component we export more than two export components or more than one should i say 

so in  [netflix card component ](../../components/NetflixCard.jsx) we have two exports in single file that is not possible in default component or file import export system so this way is optimize 

