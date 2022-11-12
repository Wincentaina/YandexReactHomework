import React from "react";
import Layout from "./components/Layout/Layout";
import StorePage from "./pages/StorePage/StorePage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import InfoPage from "./pages/InfoPage/InfoPage";


function App() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route index element={<StorePage />} />
                            <Route path=":bookId" element={<InfoPage />}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
        </Provider>
    );
}

export default App;
