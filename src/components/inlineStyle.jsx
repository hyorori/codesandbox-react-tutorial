export const InlineStyle = () => {
  const containerStyle = {
    background: "#dd0",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
    minHeight: "1em"
  };
  const ttlStyle = {
    flex: 1,
    background: "#dd0"
  };
  const btnStyle = {
    background: "#aaa"
  };
  return (
    <div style={containerStyle}>
      <p style={ttlStyle}>InlineStyle</p>
      <button style={btnStyle}>btn</button>
    </div>
  );
};
