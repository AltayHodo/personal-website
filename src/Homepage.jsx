import './styles/Homepage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="info">
        🐻 💻 Hello there! Im a junior studying at UC Berkeley, majoring in
        Computer Science & Operations Research, with a minor in Data Science. I
        aspire to work as a software engineer or data scientist, and I have a
        passion for the fields of technology, mathematics, business, and building things
        with code.
      </div>
      <div className="info">
        🏀 🏋️ In my free time, you’ll probably catch me playing basketball,
        working out, or watching the Warriors. Feel free to reach out to me
        about anything at{' '}
        <a href="mailto:altayhodo@berkeley.edu">altayhodo@berkeley.edu</a>.
      </div>

      <div>
        <h2 className="subtitle">Projects</h2>
        <div className="projects-container">
          <table className="projects-table">
            <thead>
              <tr className="projects-top-row">
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://resumai-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ResumAI
                  </a>
                </td>
                <td>
                  <img
                    src="/ResumAI.webp"
                    alt="Project 1 Image"
                    className="project-image"
                  />
                </td>
                <td>
                  An AI application that gives students tailored feedback on
                  improving their resume.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">Waiver Wire</a>
                </td>
                <td>
                  <img
                    src="/lebron.webp"
                    alt="Project 2 Image"
                    className="project-image"
                  />
                </td>
                <td>
                  A fantasy basketball project that forecasts player statistics
                  and recommends players to add to your fantasy team.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
