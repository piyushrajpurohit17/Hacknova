import LogoSGU from '../../../public/sgulogo-landingpage.jpg'
import '../LandingPage/LandingPage.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function LandingPage () {
    return (
        <div className="LandingPage">
             <header>
    
    <div className="header">
       <div className="logo">
        <img src={LogoSGU} alt="Campus Image" />


       </div >         
<div className='LandingPage-head'>
       <div className='LandingPage-head-text'>
         <h1>Sanjay Ghodawat University</h1>
        <p>Established 2017 • Accredited Excellence</p>
        </div>
        <div className="LandingPage-login-btn">
            <a href="./login page/index.html" >LogIn <span className="icon-landingPage">➡️</span> </a>
        </div>
        </div>
    </div>
</header>


<section className="about">
    <h2>About Us</h2>
    <p>Sanjay Ghodawat University was established as a State Private University in 2017, formerly known as Sanjay Ghodawat Institutes (formed in 2009). We are dedicated to delivering excellence in education, research, and innovation.</p>
</section>


<section className="features">
    <h2>Features</h2>
    <div className="feature-item">
        <h3>Student & faculty login with role-based access</h3> 
        
    </div>
    <div className="feature-item">
        <h3>Attendance tracking system</h3>
        
    </div>
    <div className="feature-item">
        <h3>Assignment & grade tracking</h3>
    </div>
    <div className="feature-item">
        <h3>Notice board for important announcements</h3>
    </div>
    <div className="feature-item">
        <h3>Here we give a fair chance to every to Complain if any problem </h3>
    </div>
</section>


<footer>
    <div className="foot_logo">
    <div className="social-media">
      <a href="https://www.instagram.com" target="_blank"  rel="noopener noreferrer">
        <FaInstagram className="icon-instagram" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon-facebook" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon-linkedin" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon-youtube" />
      </a>
    </div>
    </div>
    <p>&copy; 2025 Sanjay Ghodawat University. All Rights Reserved.</p>
   
</footer>
        </div>
    );
}

export default LandingPage;