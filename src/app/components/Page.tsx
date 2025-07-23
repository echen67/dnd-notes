const pageStyle = {
  padding: "24px 64px",
  display: "flex",
  justifyContent: "center",
};

export const Page = ({ children }) => {
  return (
    <div style={pageStyle}>
      <div style={{ width: "100%", maxWidth: 1200 }}>{children}</div>
    </div>
  );
};
