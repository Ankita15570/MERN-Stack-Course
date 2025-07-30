import React from 'react'

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="row ">
        <div className="col-md-4 my-4">
          <img
            src=""
            alt="Profile"
            className="profile-img rounded-circle"
          />
        </div>

        <div className="col-md-4 text-center mt-5">
          <h2 className="mb-3">Ankita Patil</h2>
          <ul className="list-unstyled">
            <li>
              <strong>Username:</strong> ankitapatil
            </li>
            <li>
              <strong>Email:</strong> anshupatil1901@gmail.com
            </li>
            <li>
              <strong>Mobile:</strong> 8624846250
            </li>
          </ul>
        </div>

        <div className="col-md-4 text-center mt-5 ">
          <button className="btn btn-danger my-1 w-25">Log Out</button><br />
          <button className="btn btn-warning my-1 w-30">  Delete Profile </button><br />
          <button className="btn btn-success my-1 w-25">Edit Profile</button>
        </div>

      </div>


      {/* My post */}

      <div className="row  mt-5"  >
        <div className="col-md-6 border border-primary">
          <h2 className="text-center">Feeds</h2>
        </div>

        <div className="col-md-6 border border-primary">
          <h2 className="text-center">My Post</h2>
        </div>
      </div>
    </div>
  )
}

export default Home