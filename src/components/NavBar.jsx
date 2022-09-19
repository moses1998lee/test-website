import styles from "./StylesNavBar.module.css";

// I want to create a generic function that allows me to fit in more headers in the future if i want to

function NavBar({ children }) {
  return (
    <a href="/" className={styles.article}>
      <nav className={styles.navigation}>{children}</nav>
    </a>
  );
}

export default NavBar;
