import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import './App.css'

import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    const onButtonClick = () => { setShowAlert(true) };
    const onAlertClose = () => { setShowAlert(false) };

    const alert = showAlert &&
        <Alert onAlertClose={onAlertClose}>
            <b>Hello World</b>
        </Alert>;

    return (
        // <div>
        //     {alert}
        //     <Button color="danger" onClick={onButtonClick}>Push Me</Button>
        // </div>
        // <ListGroup items={["Apple", "Orange", "Pear"]} heading={"Fruits"} onSelectItem={() => {}} />
        // <div>
        //     <BsFillCalendarFill color="red" size="40"/>
        // </div>
        // <div>
        //     <Button onClick={() => {}}>My Button</Button>
        // </div>
        <Like onClick={() => {console.log('click!')}} />
    )
}

export default App;