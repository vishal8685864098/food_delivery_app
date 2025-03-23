import React from "react";

const Login = () => {
  const backgroundStyle = {
    backgroundImage: "url('/imglb3.jpg')",
    backgroundSize: "contain", // Ensures full background coverage
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    minHeight: "100vh", // Full height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "400px",
  };

  return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
            <div className="form-text">We'll never share your email.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
