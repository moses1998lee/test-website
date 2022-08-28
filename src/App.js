import picture from "./images/canoeing.png";
import "./App.css";
import Box from "./components/Box";
console.log(picture);

function App() {
  return (
    <div className="App">
      <img
        className="images"
        src={picture}
        style={{ maxWidth: "100%", height: 500 }}
      ></img>
      <Box title="This is a title">
        <input type="checkbox"></input>
        <h1 style={{ color: "red" }}>hello</h1>
      </Box>
      <Box title="This is another title">
        <h1 style={{ color: "blue" }}>whatsaup</h1>
      </Box>
    </div>
  );
}

export default App;
