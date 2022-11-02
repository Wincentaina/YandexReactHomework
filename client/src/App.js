import React from "react";
import Layout from "./components/Layout/Layout";
import StorePage from "./pages/StorePage/StorePage";
import {books} from "./constants/mock";

function App() {
  return (
      <Layout>
        <StorePage books={books}/>
      </Layout>
  );
}

export default App;
