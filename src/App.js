import "./App.css";
import Box from "./components/Box";
import Image from "./components/image";
import background from "./images/Finland cruise.png"

function App() {
  return (
    <div className="App">
      <Box title="This is a title">
        {/* <img src={background}></img> */}

        <Image source={background} font-style="red">React is Awesome</Image>

        <h1 className="header" style={{ color: "red" }}>My name is Moses</h1>

      </Box>

      {/* <Box title="This is another title">
        <h1 style={{ color: "blue" }}>whatsaup</h1>
      </Box> */}

    </div>
  );
}

export default App;
