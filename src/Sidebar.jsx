import './Styles/Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="./assets/profile-photo.JPG" alt="Profile" className="profile-pic" />
      <h2>Your Name</h2>
      <p>Computer Science | UC Berkeley</p>
      <div className="icons">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your-email@berkeley.edu">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}