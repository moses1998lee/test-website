function Box(word1, word2) {
  return (
    <div
      style={{
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
        height: "400px",
        width: "400px",
        flexWrap: "wrap",
      }}
    >
      <a>{word1}</a>
      <a>{word2}</a>
    </div>
  );
}

export default Box;
