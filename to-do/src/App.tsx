const listStyle = {
  listStyle: "none"
};
const paragraphStyle = {
  display: "inline-block",
  marginLeft: "10px"
};

function App() {
  return (
    <>
      <ul>
        <li style={listStyle}><input type="checkbox"></input><p style={paragraphStyle}>Buy milk</p></li>
        <li style={listStyle}><input type="checkbox"></input><p style={paragraphStyle}>Water flowers</p></li>
        <li style={listStyle}><input type="checkbox"></input><p style={paragraphStyle}>Walk the dog</p></li>
      </ul>
    </>
  );
}

export default App;
