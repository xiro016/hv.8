import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "../../pages";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Container>
  );
};

export default App;
