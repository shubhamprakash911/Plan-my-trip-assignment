import "./App.css";
import Header from "../component/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
