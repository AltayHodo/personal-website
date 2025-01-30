import './styles/Sidebar.css';
import profilePhoto from './assets/profile-photo.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profilePhoto} alt="Profile" className="profile-pic" />
      <h2>Altay Hodoglugil</h2>
      <p>Computer Science | UC Berkeley</p>
      <div className="icons">
        <a href="" className="location-icon">
          <i className="fa-solid fa-location-dot icon-pad-right"></i><span>Berkeley, CA</span>
        </a>
        <a href="https://github.com/altayhodo" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/altay-hodoglugil-48268a25b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
        </a>
        <a href="mailto:altayhodoh@berkeley.edu">
          <i className="fas fa-envelope"></i> <span>Email</span>
        </a>
      </div>
    </div>
  );
}
