import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NoMatch() {
  return (
    <>
    <Header/>
      <div>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </div>
    <Footer/>
    </>        
  );
}

export default NoMatch;
