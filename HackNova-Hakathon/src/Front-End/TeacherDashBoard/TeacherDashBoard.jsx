import "./TeacherDashboard.css";
import { FaUser, FaBell, FaClipboardList, FaBook, FaChartBar, FaExclamationTriangle } from "react-icons/fa";

export default function TeacherDashboard() {
  

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>SGU Dashboard</h2>
        <p>Teacher Portal</p>
        <nav className="nav-menu">
                <a href="#" className="nav-item active">
                    <span className="icon">📊</span>
                    Attendance
                </a>
                <a href="#" className="nav-item">
                    <span className="icon">📝</span>
                    Assignments
                </a>
                <a href="#" className="nav-item">
                    <span className="icon">📈</span>
                    Grade Tracking
                </a>
                <a href="#" className="nav-item">
                    <span className="icon">🔔</span>
                    Notices
                </a>
            </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome back, Teacher !</h1>
          <p>Manage your academic activities</p>
          <div className="header-icons">
          <span className="notification">🔔</span>
          <span className="avatar">👤</span>
          </div>
        </header>
        <section className="dashboard-overview">
          <div className="card">
            <h3>Class Attendance Overview</h3>
            <p><strong>90%</strong> Average Attendance</p>
          </div>
          <div className="card">
            <h3>Pending Evaluations</h3>
            <p><strong>5</strong> Assignments to grade</p>
          </div>
          <div className="card">
            <h3>Latest Notice</h3>
            <p>Staff meeting scheduled for tomorrow</p>
          </div>
        </section>
        <section className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
