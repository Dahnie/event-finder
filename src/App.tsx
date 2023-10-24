import "./App.css";
import "./assets/styles/Modals.css";
import "./assets/styles/Input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Event from "./pages/event/Event";
import Layout from "./components/layout/Layout";
import SearchModalContextProvider from "./components/contexts/search-modal-context/SearchModalContext";
import ToastHandlerProvider from "./components/contexts/toast-handler-context/ToastHandlerContext";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <ToastHandlerProvider>
          <SearchModalContextProvider>
            <Provider store={store}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/event/:eventId" element={<Event />} />
                  {/* Exception|404 Page */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </Provider>
          </SearchModalContextProvider>
        </ToastHandlerProvider>
      </Router>
    </div>
  );
}

export default App;
