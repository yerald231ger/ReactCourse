import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
const handleSelectedItem = (item: string) => console.log(item);
function App() {
    return <>
        <ListGroup
            items={["Cdmx", "Gdl", "Monterrey", "Queretaro", "Puebla"]}
            heading="Cities"
            onSelectedItem={handleSelectedItem} />
        <Alert>
            Hola <span>Gera</span>
        </Alert>
    </>;
}

export default App;