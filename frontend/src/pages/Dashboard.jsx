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
          <h3>Total Employees</h3>
          <p style={styles.number}>{summary.total_employees}</p>
        </div>

        <div style={styles.card}>
          <h3>Total Attendance</h3>
          <p style={styles.number}>{summary.total_attendance}</p>
        </div>

        <div style={styles.card}>
          <h3>Present Today</h3>
          <p style={styles.number}>{summary.present_today}</p>
        </div>

        <div style={styles.card}>
          <h3>Absent Today</h3>
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
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  number: {
    fontSize: "28px",
    fontWeight: "600",
    marginTop: "10px",
  }
};

export default Dashboard;
