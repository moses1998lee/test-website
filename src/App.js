import "./App.css";
import Image from "./components/image";
import background from "./images/Finland cruise.png";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App" style={{
      /*display: "flex"*/
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>
        <NavBar>MOSES LEE HONG DE</NavBar>
      </div>

      <span className={App.textstyle}>
        people orientated mechanical engineer who is also a neophile with a growth mindset.</span>

      <span className={App.textstyle} style={{
        color: '#8B8B8B'
      }}>
        just my 2 cents about myself..</span>
      <>


        {/* <img src={background}></img> 
        <Image source={background} style={{ fontFamily: "Inter", fontSize: "26px" }}>
          <h1>Hey, I'm</h1>
          <h1 style={{ fontFamily: "Open-Sans", fontSize: "100px", fontWeight: "400" }}>Moses</h1>
  </Image>*/
        }
      </>

      {/* <Box title="This is another title">  
        <h1 style={{ color: "blue" }}>whatsaup</h1>
      </Box> */}

    </div >
  );
}

export default App;
