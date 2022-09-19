import "./App.css";
import NavBar from "./components/NavBar";

import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.sectionTitle}>
        <NavBar>MOSES LEE HONG DE</NavBar>
      </div>
      <div className={styles.sectionHeroText}>
        <p
          style={{
            fontSize: "18px",
            color: "white",
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
      </div>

      <div className={styles.sectionNavButtons}>
        <div>
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
      <div className={styles.sectionContact}>
        {/* The code below should probably be in its own component */}
        <a href="/">LinkedIn</a>
        <h2 href="/">Contact Details</h2>
        <div className={styles.contactDetails}>
          <span>Email: </span>
          <span>moses1998lee@gmail.com</span>
        </div>
        <div className={styles.contactDetails}>
          <span>Mobile Number: </span>
          <span>+65 9822 8215</span>
        </div>
      </div>
    </div>
  );
}

export default App;
