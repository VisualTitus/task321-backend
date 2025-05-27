const express = require('express');
const router = express.Router();

// GET /api/orders
router.get('/', (req, res) => {
  const user = req.user; // Viene del middleware JWT
  res.status(200).json({
    message: 'Work orders retrieved successfully',
    userCompany: user.company_id,
    userEmail: user.email
  });
});

module.exports = router;

