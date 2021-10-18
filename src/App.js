import React from "react";
import Counter from "./components/Counter";
import MenuBar from "./portfolio/menuBar";

const App = () => {
  return (
    <div>
      <MenuBar />
      <Counter />
      <div style={{color:"blue",textAlign:"center"}}>@deepakgupta</div>
    </div>
  );
};

export default App;
