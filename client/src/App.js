import React from "react";
import Layout from "./components/Layout/Layout";
import {books} from "./constants/mock";
import StorePage from "./pages/StorePage/StorePage";
import {Provider} from "react-redux";
import {store} from "./store";
// import InfoPage from "./pages/InfoPage/InfoPage";


function App() {
    return (
        <Provider store={store}>
            <Layout>
                <StorePage />
                {/*<InfoPage genre={books[0]}/>*/}
            </Layout>
        </Provider>
    );
}

export default App;
