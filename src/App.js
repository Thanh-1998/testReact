import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import linkRoutes from "./router";
import Topbar from "./components/Topbar";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Topbar />
                    <Header />
                    <Routes>
                        {linkRoutes.map((route, index) => {
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
