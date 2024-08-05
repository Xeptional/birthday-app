import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, About, WriteMessage, SubmittedMessages } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="write-message" element={<WriteMessage />}></Route>
          <Route path="submitted-messages" element={<SubmittedMessages />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
