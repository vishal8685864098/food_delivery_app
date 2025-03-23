import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Food Delivery App</h1>
      <img 
        src="img.jpg" 
        alt="Food Delivery" 
        style={{
          maxWidth: "90%",  // Makes image responsive
          height: "auto",   // Maintains aspect ratio
          display: "block",
          margin: "auto",
          borderRadius: "10px", // Optional for rounded corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // Optional shadow
        }} 
      />
    </div>
  );
}

export default Home;
