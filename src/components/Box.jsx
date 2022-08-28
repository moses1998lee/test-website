function Box({ title, children }) {
  console.log(title, children);

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Box;
