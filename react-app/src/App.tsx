import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    const onButtonClick = () => { setShowAlert(true) };
    const onAlertClose = () => { setShowAlert(false) };

    const alert = showAlert &&
        <Alert onAlertClose={onAlertClose}>
            <b>Hello World</b>
        </Alert>;

    return (
        <div>
            {alert}
            <Button color="danger" onClick={onButtonClick}>Push Me</Button>
        </div>
    )
}

export default App;