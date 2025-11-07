# why react state doesn't reset its initial value on re-reder:

like kahne ka means ye hai ki jab ham bar bar state value change karte hai to hamene re-render me dekha hoga ki ye to stating se hota hia means uske beech me state initialization bhi hota hai firse to us doran jo value hai vo fir se 0 kyu nahi ban jati in our case like counter if we set it to 0 

so we know the render means like jitna change hua hai utna heee pura nahi bas utna hee change karod actual dom ke andar 

to in 

# first render : 
const [count, setCOunt] = useState(0);
consunt is initialize to 0.

# button click: 
increment functioon is called 
setCOunt(count + 1) updates the count to 1

# re-render:
react re-render the component. (when user click button for second time)

const[count, setCOunt] = useSate(0); 

sees the count is now 1 and uses 1 as the current state.
The useState hook is smart enough to only use the initial value the very first time 