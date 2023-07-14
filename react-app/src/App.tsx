import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const onButtonClick = () => { console.log("Button is pushed")};
    return (
        <div>
            <Alert>
                <b>Hello World</b>
            </Alert>
            <Button onClick={onButtonClick}>Push Me</Button>
        </div>
    )
}

export default App;