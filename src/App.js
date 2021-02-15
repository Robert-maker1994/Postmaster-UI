import React, { Suspense } from "react";

import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Routing/Routing';
import Theme from './Theme/Theme';
import Nav from './Routing/Nav';
import Footer from "./Components/Footer";
import { PostProvider } from "./PostContext";
import Loader from "./Components/Loader/Loader";

function App() {
  return (
    <div className="App">
    <Router>
      <Theme >
      <PostProvider>
        <Nav />
            <Suspense fallback={<Loader></Loader>}>
              <Routing />
          
            </Suspense>
            <Footer/>
            </PostProvider>
        </Theme>
      </Router>
    </div>
  );
}

export default App;
