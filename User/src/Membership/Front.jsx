/*import { Container, Row, Col, Button, Card } from "react-bootstrap";
 import { useNavigate } from "react-router-dom";
 
 const Home = () => {
   const navigate = useNavigate();
 
   return (
     <Container className="mt-5 text-center">
       <Row className="justify-content-center">
         <Col md={10}>
           <Card className="shadow-lg border-0 rounded-4 p-4">
             <Card.Body>
               <h1 className="fw-bold text-success">🌍 Welcome to TrashCash!!</h1>
               <p className="text-muted">
                 The smart way to **recycle, track, and earn rewards** while keeping your home and the world clean & green! 🌏 🌳
               </p>
               
               <hr />
               <h4 className="text-success fw-bold mt-3">♻️ How TrashCash Works?</h4>
               <Row className="mt-4">
                 <Col md={4}>
                   <Card className="border-0 shadow-sm p-3">
                     <Card.Body>
                       <h5>📊 Track Your Waste</h5>
                       <p className="text-muted">Monitor how much waste you recycle with **interactive charts** & insights.</p>
                     </Card.Body>
                   </Card>
                 </Col>
                 <Col md={4}>
                   <Card className="border-0 shadow-sm p-3">
                     <Card.Body>
                       <h5>💰 Earn Rewards</h5>
                       <p className="text-muted">Get **cash incentives & discounts** for every kg of waste you recycle.</p>
                     </Card.Body>
                   </Card>
                 </Col>
                 <Col md={4}>
                   <Card className="border-0 shadow-sm p-3">
                     <Card.Body>
                       <h5>🚀 Schedule Pickups</h5>
                       <p className="text-muted">Submit your trash collection request and let us handle the rest!</p>
                     </Card.Body>
                   </Card>
                 </Col>
               </Row>
 
               <hr />
 
               <h4 className="text-success fw-bold mt-3">🌟 Why Choose TrashCash?</h4>
               <ul className="list-group list-group-flush">
                 <li className="list-group-item">✅ **Eco-Friendly Impact** – Reduce your **carbon footprint** easily.</li>
                 <li className="list-group-item">✅ **User-Friendly Interface** – Track and manage waste **seamlessly**.</li>
                 <li className="list-group-item">✅ **Community-Driven** – Join a movement of **eco-conscious recyclers**.</li>
               </ul>
 
               <div className="text-center mt-4">
                 <Button 
                   variant="success" 
                   className="fw-bold shadow-sm px-4 mx-2" 
                   onClick={() => navigate("/about")}
                 >
                   Learn More ♻️
                 </Button>
               </div>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
   );
 };
 
 export default Home;*/



 import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4 p-4">
            <Card.Body>
              <h1 className="fw-bold text-success">🌍 Welcome to TrashCash!!</h1>
              <p className="text-muted">
                The smart way to <strong>recycle, track, and earn rewards</strong> while keeping your home and the world clean & green! 🌏 🌳
              </p>

              <hr />
              <h4 className="text-success fw-bold mt-3">♻️ How TrashCash Works?</h4>
              <Row className="mt-4">
                <Col md={4}>
                  <Card className="border-0 shadow-sm p-3">
                    <Card.Body>
                      <h5>📊 Track Your Waste</h5>
                      <p className="text-muted">Monitor how much waste you recycle with <strong>interactive charts</strong> & insights.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="border-0 shadow-sm p-3">
                    <Card.Body>
                      <h5>💰 Earn Rewards</h5>
                      <p className="text-muted">Get <strong>cash incentives & discounts</strong> for every kg of waste you recycle.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="border-0 shadow-sm p-3">
                    <Card.Body>
                      <h5>🚀 Schedule Pickups</h5>
                      <p className="text-muted">Submit your trash collection request and let us handle the rest!</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <hr />

              <h4 className="text-success fw-bold mt-3">🌟 Why Choose TrashCash?</h4>
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">✅ <strong>Eco-Friendly Impact</strong> – Reduce your <strong>carbon footprint</strong> easily.</li>
                <li className="list-group-item">✅ <strong>User-Friendly Interface</strong> – Track and manage waste <strong>seamlessly</strong>.</li>
                <li className="list-group-item">✅ <strong>Community-Driven</strong> – Join a movement of <strong>eco-conscious recyclers</strong>.</li>
              </ul>

             

              {/* 👇 Add User/Admin Buttons here 👇 */}
              <div className="text-center mt-4">
                <Button 
                  variant="primary" 
                  className="fw-bold shadow-sm px-4 mx-2"
                  onClick={() => navigate("/Home")}
                >
                  Go to User Page 👤
                </Button>

                <Button 
                  variant="dark" 
                  className="fw-bold shadow-sm px-4 mx-2"
                  onClick={() => navigate("/Adminlogin")}
                >
                  Go to Admin Page 🛠️
                </Button>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
