import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"

function App() {

  const name = "Ankita Patil";
  console.log("Hello Project");
  console.log(name, "---");

  return (
    <>
      {/* <!-- Nav Bar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Ankita Patil</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h1 className="text-white mt-5">Hi, I'm Ankita Patil</h1>
              <p className="text-white">
                MERN Stack Developer with 2 Years of Experience
              </p>
              <a className="btn btn-primary btn-lg mb-5">Hire Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Us  --> */}
      <section>
        <div className="container py-5">
          <h2 className="text-center section-title">About Me</h2>

          <div className="row">
            <div className="col-md-6 text-center">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Profile"
                className="w-50 img-fluid rounded" />
            </div>

            <div className="col-md-6 m-auto">
              <p>
                I'm a dedicated MERN Stack developer with 2 years of experience in
                building scalable and user-friendly web applications. Proficient
                in MongoDB, Express.js, React, and Node.js, I specialize in
                creating seamless full-stack solutions.
              </p>
              <p>
                My passion lies in solving complex problems and delivering clean,
                efficient code. I thrive in collaborative environments and am
                always eager to learn new technologies to enhance my skill set.
              </p>

              <button>Download Resume</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section>
        <div className="container">
          <h2 className="text-center section-title">Skills</h2>
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="card skills-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1205/1205510.png" className="w-25 skill-img"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">MongoDB</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card skills-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" className="w-25 skill-img"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Express.js</h5>
                  <p className="card-text">
                    Building robust RESTful APIs for seamless backend
                    functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card skills-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" className="w-25 skill-img"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">
                    Creating dynamic and responsive front-end interfaces with
                    React.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card skills-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" className="w-25 skill-img"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Node.js</h5>
                  <p className="card-text">
                    Developing high-performance server-side applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Experience --> */}
      <section>
        <div className="container">
          <h2 className="text-center section-title">Experience</h2>
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MERN Stack Developer</h5>
                  <p className="card-text">
                    <strong>Tech Solutions Inc.</strong> | Jan 2023 - Present
                  </p>
                  <p className="card-text">
                    Developed and maintained full-stack applications using MERN
                    stack, implemented RESTful APIs, and optimized database
                    performance for a 20% increase in application efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MERN Stack Developer</h5>
                  <p className="card-text">
                    <strong>Tech Solutions Inc.</strong> | Jan 2023 - Present
                  </p>
                  <p className="card-text">
                    Developed and maintained full-stack applications using MERN
                    stack, implemented RESTful APIs, and optimized database
                    performance for a 20% increase in application efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
