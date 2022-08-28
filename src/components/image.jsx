import styles from "./image.module.css"

/*What i need:
  - Component should take in source and output source
  - Component should take in font style and output font 
  - Text to be written within component in App.js and assigned properties through image.css
  */

function Image({ source, font_style, children }) {
    //Article tags used when text is self-contained (independent of its surrounding context)
    return <article className={styles.article}>
        <img src={source} />
        <div className={styles.text} style={font_style}> {children} </div>
    </article>


}

export default Image