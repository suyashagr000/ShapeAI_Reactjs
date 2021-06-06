import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note classname="note" />
    </div>
  );
}

export default App;
