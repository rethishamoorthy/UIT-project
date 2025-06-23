// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const Form = require('./Module/Form');  // Adjust path if needed

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/myformdb') 
 
// .then(() => {console.log('✅ MongoDB connected')})
// .catch((err) => {console.error('❌ DB connection error:', err)});

// app.post('/api/form', async (req, res) => {
//   try {
//     const newForm = new Form(req.body);
//     await newForm.save();
//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRoutes = require('./Module/Form'); 

const app = express();
const PORT = 5000;  

// Middleware
app.use(cors());
app.use(bodyParser.json());  


const dbURI = 'mongodb://localhost:27017/orderDB';



mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/api/form', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
