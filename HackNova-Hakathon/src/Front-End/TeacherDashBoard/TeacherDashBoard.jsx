import { useState } from "react";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {

  const [ isShow , setIsShow ] = useState(false)

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>SGU Dashboard</h2>
        <p>Teacher Portal</p>
        <nav className="nav-menu">
                <button className="nav-item " onClick={()=>{setIsShow("dashboard-overview")}}>
                    <span className="icon">📊</span>
                    Attendance
                </button>
                <button className="nav-item" onClick={()=>{setIsShow("recent-activities")}}>
                    <span className="icon">📝</span>
                    Assignments
                </button>
                <button className="nav-item" onClick={()=>{setIsShow("recent-activities-3")}}>
                    <span className="icon">📈</span>
                    Grade Tracking
                </button>
                <button className="nav-item" onClick={()=>{setIsShow("notification")}}>
                    <span className="icon">🔔</span>
                    Notices
                </button>
                <button className="nav-item" onClick={()=>{setIsShow("complain")}}>
                    <span className="icon">🛑</span>
                    Complaint
                </button>

            </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome back, Teacher !</h1>
          <p>Manage your academic activities</p>
          <div className="header-icons">
          <button className="TeacherDashBord-btn" onClick={()=> {setIsShow("notification")}}>
            <span className="notification">🔔</span>
            </button>
            <button className="TeacherDashBord-btn" onClick={()=> {setIsShow("profile")}}>
          <span className="avatar">👤</span>
          </button>

          </div>
        </header>
        {isShow==="dashboard-overview" &&   <section className="dashboard-overview">
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
        </section> }
        {isShow==="recent-activities" &&   <section className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
          </ul>
        </section>}

        {isShow==="recent-activities-3" &&   <section className="recent-activities-3">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
            <h1>THis is the third one</h1>
          </ul>
        </section>}

        {isShow==="notification" &&   <section className="notification">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
            <h1>THis is the notifi</h1>
          </ul>
        </section>}

        {isShow==="profile" &&  <h1>This is the profile page</h1>}

        {isShow==="complain" &&  <h1>This is the Complain page</h1>}
      </main>
    </div>
  );
}
