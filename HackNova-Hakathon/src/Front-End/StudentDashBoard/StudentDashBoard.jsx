import "../StudentDashBoard/StudentDashBoard.css"

function StudentDashBoard () {
    return (
        <div classNameName="StudentDashBoardPage">
              <div className="dashboard">
        
        <div className="sidebar">
            <div className="logo">
                <h1>SGU Dashboard</h1>
                <p>Student Portal</p>
            </div>
            
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
        </div>

        
        <main className="main-content">
            <header className="StudentDashBord-header">
                <div className="welcome">
                    <h2>Welcome back, Student!</h2>
                    <p>Track your academic progress</p>
                </div>
                <div className="user-info">
                    <span className="notification">🔔</span>
                    <div className="user">
                        <span className="avatar">👤</span>
                       
                    </div>
                </div>
            </header>

            <div className="cards">
                <div className="card">
                    <h3>Attendance Overview</h3>
                    <div className="card-content">
                        <p className="percentage">85%</p>
                        <p className="label">Overall Attendance</p>
                    </div>
                </div>

                <div className="card">
                    <h3>Pending Assignments</h3>
                    <div className="card-content">
                        <p className="number">3</p>
                        <p className="label">Due this week</p>
                    </div>
                </div>

                <div className="card">
                    <h3>Latest Notice</h3>
                    <div className="card-content">
                        <p>Mid-term examination schedule has been released</p>
                        <p className="time">2 hours ago</p>
                    </div>
                </div>
            </div>

            <div className="activities">
                <h3>Recent Activities</h3>
                <div className="activity">
                    <span className="dot green"></span>
                    <p>Assignment submitted in Advanced Mathematics</p>
                    <span className="time">Today</span>
                </div>
                <div className="activity">
                    <span className="dot blue"></span>
                    <p>Attended Database Management System lecture</p>
                    <span className="time">Yesterday</span>
                </div>
                <div className="activity">
                    <span className="dot purple"></span>
                    <p>Viewed grade updates for Operating Systems</p>
                    <span className="time">2 days ago</span>
                </div>
            </div>
        </main>
    </div>
        </div>
    );
}

export default StudentDashBoard