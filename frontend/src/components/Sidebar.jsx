import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ marginBottom: "30px" }}>HRMS Lite</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/employees" style={styles.link}>Employees</Link>
        <Link to="/attendance" style={styles.link}>Attendance</Link>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    height: "100vh",
    background: "linear-gradient(180deg, #1f2937, #111827)",
    color: "white",
    padding: "25px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginTop: "30px"
  },
  link: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "15px",
  }
};

export default Sidebar;
