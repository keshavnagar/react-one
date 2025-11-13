# lifting the state up in react
1. parent component: holds the state inputVal and the state handler setInputVal

2. input component: receives inputVal and setInputVal as props. It updates the state via setInputVal when the input changes

3. DisplayOCmponent: receives inputVal as a prop and displays the current input value