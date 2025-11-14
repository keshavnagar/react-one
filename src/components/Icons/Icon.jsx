import { IoIosSwitch } from "react-icons/io";
const Icon = () => {
    return(
        <>
        <h1>Here we learn about react icons</h1>
        <p>First we intall the react icon with the help of npm i react-icons</p>
        <p>and now we check the package.json to enquire, is it install or not? </p>
        <p>so yeah it is installed:  "react-icons": "^5.5.0",</p>
        <p>so first we understand with the help of switch scenerio that we also built in this project also</p>
        <p>first we go to the website and take the import and component from there and copy paste here</p>
        <IoIosSwitch className="text-amber-300 text-9xl " />
        <p>so in above we have the icon</p>
        <p>here we also notice the thing, the icon is act like a component and we import this compopnents from the library that we install from our react project</p>
        <p>we also add some styles to it like color, size through text property, icon always behave like a text </p>
        </>
    )
}
export default Icon