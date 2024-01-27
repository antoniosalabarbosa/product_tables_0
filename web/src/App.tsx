import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Header from "./components/Header";
import "./styles/main.scss";

const App = ()=>{
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;