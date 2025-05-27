const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const workOrderRoutes = require('./routes/workOrders');
const { authenticateToken } = require('./middleware/auth');
const db = require('./db'); // Conecta a la base de datos

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task321 backend is running');
});

// Rutas públicas
app.use('/api/auth', authRoutes);

// Rutas protegidas
app.use('/api/orders', authenticateToken, workOrderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

