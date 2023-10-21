import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Event from "./pages/event/Event";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventId" element={<Event />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
