import React from "react";
import Layout from "./components/Layout/Layout";
import {books} from "./constants/mock";
import StorePage from "./pages/StorePage/StorePage";
// import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
    return (
        <Layout>
            <StorePage books={books}/>
            {/*<InfoPage book={books[0]}/>*/}
        </Layout>
    );
}

export default App;
