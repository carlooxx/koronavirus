import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
    </>
  );
}

export default App;
