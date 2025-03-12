import { useState } from "react";
import "./TeacherDashboard.css";
import { useEffect, useRef } from "react";

export default function TeacherDashboard() {

  const buttonRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click(); // Simulate a button click
    }
  }, []);



  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>SGU Dashboard</h2>
        <p>Teacher Portal</p>
        <nav className="nav-menu">
          <button className="nav-item " onClick={() => { setIsShow("dashboard-overview") }}>
            <span className="icon">📊</span>
            Attendance
          </button>
          <button className="nav-item" onClick={() => { setIsShow("recent-activities") }}>
            <span className="icon">📝</span>
            Assignments
          </button>
          <button className="nav-item" onClick={() => { setIsShow("recent-activities-3") }}>
            <span className="icon">📈</span>
            Grade Tracking
          </button>
          <button className="nav-item" onClick={() => { setIsShow("notification") }}>
            <span className="icon">🔔</span>
            Notices
          </button>
          <button className="nav-item" onClick={() => { setIsShow("complain") }}>
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
            <button className="TeacherDashBord-btn" onClick={() => { setIsShow("notification") }}>
              <span className="notification">🔔</span>
            </button>
            <button className="TeacherDashBord-btn " ref={buttonRef} onClick={() => { setIsShow("profile") }}>
              <span className="avatar">👤</span>
            </button>

          </div>
        </header>
        {isShow === "dashboard-overview" && <section className="dashboard-overview">
          <h1> Taking Attendence </h1>
          <div className="TeacherDashBoard-Attendence-inputs-container">
            <div className="TeacherDashBoard-Attendence-inputs">
              <label className="TeacherDashBoard-Attendence-inputs-lable">Class : </label>
              <input type="text" placeholder="Class 1" className="TeacherDashBoard-Attendence-inputs-box" />
            </div>
            <div className="TeacherDashBoard-Attendence-inputs">
              <label className="TeacherDashBoard-Attendence-inputs-lable">Date : </label>
              <input type="text" placeholder="DD/MM/YYYY" className="TeacherDashBoard-Attendence-inputs-box" />
            </div>
            <button className="TeacherDashBoard-Attendence-btn-takeAtt" onClick={() => { setIsShow("studentlist") }}>Take Attendence</button>
          </div>

        </section>}

        {isShow === "studentlist" && <div className="studentlist">

          <div className="studentlist-roll1">
            <h2>Roll.No</h2>
            <h1>1</h1>
            <div className="Studentlist-check">
              <button className="btn-present">P</button>
              <button className="btn-absent">A</button>
              <button className="btn-leave">L</button>
            </div>
          </div>

          <div className="studentlist-roll2">
            <h2>Roll.No</h2>
            <h1>2</h1>
            <div className="Studentlist-check">
              <button className="btn-present">P</button>
              <button className="btn-absent">A</button>
              <button className="btn-leave">L</button>
            </div>
          </div>

          <div className="studentlist-roll3">
            <h2>Roll.No</h2>
            <h1>3</h1>
            <div className="Studentlist-check">
              <button className="btn-present">P</button>
              <button className="btn-absent">A</button>
              <button className="btn-leave">L</button>
            </div>
          </div>
          <button className="studentlist-submit-btn" onClick={showSubmit} >Submit</button>
        </div>


        }



        {isShow === "recent-activities" && <section className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
          </ul>
        </section>}

        {isShow === "recent-activities-3" && <section className="recent-activities-3">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
            <h1>THis is the third one</h1>
          </ul>
        </section>}

        {isShow === "notification" && <section className="notification">
          <h3>Recent Activities</h3>
          <ul>
            <li><span className="dot green"></span> Marked attendance for CS101</li>
            <li><span className="dot blue"></span> Graded assignments for AI Course</li>
            <li><span className="dot purple"></span> Updated syllabus for Web Development</li>
            <h1>THis is the notifi</h1>
          </ul>
        </section>}

        {isShow === "profile" && <div className="profile">
          <h1>Profile</h1>
          <div className="profile-details">
            <div className="profile-details-name">
              <h3>Name :</h3>
              <p>Bhumika Pujari</p>
            </div>
            <div className="profile-details-id">
              <h3>Teacher ID :</h3>
              <p>007</p>
            </div>
            <div className="profile-details-department">
              <h3>Department :</h3>
              <p>CSE</p>
            </div>
            <div className="profile-details-qulification">
              <h3>Educational Qualifications :</h3>
              <p>PhD in Computer Science</p>
            </div>
            <div className="profile-details-exprience">
              <h3>Exprience :</h3>
              <p>5 Years</p>
            </div>
            <div className="profile-details-contact">
              <h3>Contact Deatails :</h3>
              <p>Phone No = 1234567890</p>
              <p>Email = abc123@gmail.com</p>
            </div>
          </div>
        </div>}

        {isShow === "complain" && <h1>This is the Complain page</h1>}
      </main>
    </div>
  );
}
