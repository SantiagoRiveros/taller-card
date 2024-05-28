import "./App.css";
import { Card, Producto, UserPassword } from "./components";

function App() {
  return (
    <>
      <Card>
        <Producto />
      </Card>
      <Card>
        <UserPassword />
      </Card>
    </>
  );
}

export default App;
