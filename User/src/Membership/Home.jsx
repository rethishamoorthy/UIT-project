import React from 'react';

function App() {
  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
  };

  return (
    <div>
<br/><br/>
<div style={{ textAlign: 'center', margin: '30px 0' }}>
<div style={{ textAlign: 'center', margin: '30px 0' }}>
  <video
    src="/TrashCash.mp4"
    controls
    autoPlay
    muted
    loop
    style={{
      width: '100%',
      maxWidth: '1000px',
      height: 'auto',
      borderRadius: '10px',
    }}
  />
</div>

</div>

      <section style={containerStyle}>
        <h2>Who We Are</h2>
        
          <p>
            TrashCash is a platform dedicated to tracking and recycling waste,
            reducing carbon footprints, and encouraging sustainability in
            communities worldwide. Our mission is to create innovative
            solutions to help individuals and organizations make a meaningful
            impact on the environment.
            <br />
            Through our program, TrashCash, individuals can contribute to a
            cleaner environment while earning rewards. We offer collection
            services and incentives like coupons and gift vouchers for greater
            recycling contributions.
          </p>
      </section>

      <section style={containerStyle}>
        <h2>Our Mission & Vision</h2>
        <p>
          We aim to simplify waste management with technology, helping
          individuals and organizations achieve their environmental goals.
        </p>
        <p>
          To create a clean and green environment along with everyone's effort.
        </p>
        <p>You can dispose the trash in a beneficial and healthy way.</p>
      </section>

      <section style={containerStyle}>
        <h2>Instruction</h2>
        
          Click on "Sign Up" to create a new account.
          Fill in the registration form with the required details:
        
            Name
            Email Address
            Phone Number
            Password
            Confirm Password
          
          Click on "Submit" to create your account.
          Go back to the login page and click on "Sign In".
          Enter your registered email address and password.
          Click on "Log In" to access your account.
          
            View your account dashboard and track your recycling progress and
            rewards.
          
        
      </section>

      <section style={containerStyle}>
        <h2>Making The Use Of Recycled Plastic</h2>
        <p>
          TrashCash has been at the forefront of promoting the circular
          economy. We help major brands adopt circular resins and integrate
          informal recyclers.
        </p>
      </section>

      <section style={containerStyle}>
        <h2>Our Key Focus Areas</h2>
        <div className="cards" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: '1', minWidth: '250px' }}>
            <img src="/lo1.png" alt="Supply Chain Icon" width="100%" />
            <h3>Building an integrative and equitable supply chain</h3>
            <p>
              We've onboarded thousands of informal waste collectors, ensuring
              transparent material tracking with advanced data analytics across
              India.
            </p>
          </div>
          <div className="card" style={{ flex: '1', minWidth: '250px' }}>
            <img src="/lo2.png" alt="Recycling Technology Icon" width="100%" />
            <h3>Redefining plastics recycling technology</h3>
            <p>
              Our automated facilities purify discarded packaging, ensuring
              contaminant removal and consistency. It's a model for recycling
              excellence.
            </p>
          </div>
          <div className="card" style={{ flex: '1', minWidth: '250px' }}>
            <img src="/lo3.png" alt="Circular Economy Icon" width="100%" />
            <h3>Driving circular economy with recycled plastics</h3>
            <p>
              We've helped brands produce over 1.5 billion bottles with 100%
              recycled plastic for various industries.
            </p>
          </div>
        </div>
      </section>

      <section style={containerStyle}>
        <h2>Types of Plastics</h2>
        <p><b>There are over 30 different types of plastic, typically categorized into 7 groups.</b></p>
        <div className="plastic-cards" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div className="plastic-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>PET (Polyethylene Terephthalate)</h3>
            <img src="/pet.jpg" alt="PET Plastic" width="100%" />
            <p><strong>Density:</strong> 1.38 g/cm³</p>
            <p>PET is used in packaging and textiles. Lightweight, strong, and recyclable.</p>
          </div>
          <div className="plastic-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>HDPE (High-Density Polyethylene)</h3>
            <img src="/hdpe.jpg" alt="HDPE Plastic" width="100%" />
            <p><strong>Density:</strong> 0.95 g/cm³</p>
            <p>Known for strength and chemical resistance. Used in containers, pipes, and toys.</p>
          </div>
          <div className="plastic-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>PVC (Polyvinyl Chloride)</h3>
            <img src="/download.jpeg" alt="PVC Plastic" width="100%" />
            <p><strong>Density:</strong> 1.38 g/cm³</p>
            <p>Durable and used in construction, plumbing, and electrical insulation.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', color: '#fff', backgroundColor: '#000' }}>
        <p>© 2025 TrashCash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
