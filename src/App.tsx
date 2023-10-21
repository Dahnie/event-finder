import "./App.css";
import "./assets/styles/Modals.css";
import "./assets/styles/Input.css";
import "./assets/styles/bootstrap-css/bootstrap.min.css?v=1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Event from "./pages/event/Event";
import Layout from "./components/layout/Layout";
import SearchModalContextProvider from "./components/contexts/search-modal-context/SearchModalContext";

function App() {
  return (
    <div className="app">
      <Router>
        <SearchModalContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event/:eventId" element={<Event />} />
            </Routes>
          </Layout>
        </SearchModalContextProvider>
      </Router>
    </div>
  );
}

export default App;
