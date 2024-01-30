import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import { ModalContextProvider } from "./contexts/ModalContext";
import Header from "./components/Header";
import "./styles/main.scss";

const App = ()=>{
    return (
        <GlobalContextProvider>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/table" 
                        element={
                            <ModalContextProvider>
                                <Table />
                            </ModalContextProvider>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    );
};

export default App;