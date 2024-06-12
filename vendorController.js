const axios = require('axios');

exports.vendorApi = async (req, res) => {
  const { id, message } = req.body;

  // Simulate a random status
  const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';

  // Simulate hitting the delivery receipt API
  await axios.post('http://localhost:5000/api/receipt', { id, status });

  res.status(200).json({ message: 'Vendor API hit', status });
};
