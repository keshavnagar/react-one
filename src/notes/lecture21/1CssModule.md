css modules: every time you import a css file in our react component, they are regarded as global css.
css modules help you keep styles specific to the component they're used in.
suppose if we want to give two classes to any component we used their styles
in css module we add particular css module file for particular jsx component
each module encapsulates its styles, preventing unintended style confilcts with other modules.
the class names in css modules are often automatically, reducing the likelihood of naming clashes.