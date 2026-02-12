import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaClipboardCheck } from "react-icons/fa";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>HRMS Lite</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          <FaTachometerAlt style={styles.icon} />
          Dashboard
        </Link>

        <Link to="/employees" style={styles.link}>
          <FaUsers style={styles.icon} />
          Employees
        </Link>

        <Link to="/attendance" style={styles.link}>
          <FaClipboardCheck style={styles.icon} />
          Attendance
        </Link>
      </nav>
    </div>
  );
}

const styles = {

  
  sidebar: {
    width: "240px",
    height: "100vh",
    background: "#061E29",
    color: "white",
    padding: "25px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "30px"
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#F3F4F4",
    textDecoration: "none",
    fontSize: "15px",
  },
  icon: {
    fontSize: "16px"
  },
  title: {
	marginBottom: "30px",
	textAlign: "center",
	size: "inherit",
	fontSize: "xx-large",
}
};

export default Sidebar;
