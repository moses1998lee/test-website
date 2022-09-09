import "./App.css";
import index from "./index.css";
import Image from "./components/image";
import background from "./images/Finland cruise.png";
import Box from "./components/Box.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div
      className="App"
      style={{
        /*display: "flex"*/
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <NavBar>MOSES LEE HONG DE</NavBar>
      </div>

      <p
        style={{
          fontSize: "18px",
          color: "white",
          marginTop: "230px",
        }}
      >
        people orientated mechanical engineer who is also a neophile with a
        growth mindset.
      </p>

      <p
        style={{
          fontSize: "14px",
          color: "#8B8B8B",
        }}
      >
        just my 2 cents about myself..
      </p>

      <div
        style={{
          fontFamily: "Montserrat",
          fontSize: "18px",
          fontWeight: "800",
          color: "white",
          backgroundColor: "#272727",
          textDecoration: "none",
          marginTop: "200px",
        }}
      >
        <div
          style={{
            flexWrap: "wrap",
          }}
        >
          <a className="subpages" href="/experiences">
            EXPERIENCES
          </a>

          <a className="subpages" href="/portfolio">
            PORTFOLIO
          </a>
        </div>

        <div>
          <a className="subpages" href="/projects">
            PROJECTS
          </a>

          <a className="subpages" href="/about-me">
            ABOUT ME
          </a>
        </div>
      </div>
      <>
        {/* <img src={background}></img> 
        <Image source={background} style={{ fontFamily: "Inter", fontSize: "26px" }}>
          <h1>Hey, I'm</h1>
          <h1 style={{ fontFamily: "Open-Sans", fontSize: "100px", fontWeight: "400" }}>Moses</h1>
  </Image>*/}
      </>

      {/* <Box title="This is another title">  
        <h1 style={{ color: "blue" }}>whatsaup</h1>
      </Box> */}
    </div>
  );
}

export default App;
