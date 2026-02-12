import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSummary = async () => {
    try {
      const response = await API.get("dashboard/");
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="page-container">
      <h1>Dashboard</h1>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.containerh1}>Total Employees</h3>
          <p style={styles.number}>{summary.total_employees}</p>
        </div>

        <div style={styles.altercard}>
          <h3 style={styles.containerh1}>Total Attendance</h3>
          <p style={styles.number}>{summary.total_attendance}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.containerh1}>Present Today</h3>
          <p style={styles.number}>{summary.present_today}</p>
        </div>

        <div style={styles.altercard}>
          <h3 style={styles.containerh1}>Absent Today</h3>
          <p style={styles.number}>{summary.absent_today}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#5F9598",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 4px 10px rgba(6, 30, 41, 0.1)",
  },
  number: {
    fontSize: "28px",
    fontWeight: "600",
    marginTop: "10px",
  },
  altercard: {
	background: "rgba(6, 30, 41, 0.81)",
	padding: "20px",
	borderRadius: "10px",
	color: "white",
	boxShadow: "rgba(6, 30, 41, 0.1) 0px 4px 10px"
  },
  containerh1:{
    color: "#fafbfcff",
  },
  container:{
    color: "#1D546D",
  }
};

export default Dashboard;
