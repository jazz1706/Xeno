const CommunicationLog = require('../models/CommunicationLog');
const axios = require('axios');

exports.sendBulkMessages = async (req, res) => {
  try {
    const { consumers } = req.body; // Assume consumers is an array of consumer objects with id and name

    // Create communication log entries
    const logs = consumers.map(consumer => ({
      consumer_id: consumer.id,
      message: `Hi ${consumer.name}, here is 10% off on your next order`
    }));

    const createdLogs = await CommunicationLog.insertMany(logs);

    // Simulate hitting the vendor API
    const vendorResponses = await Promise.all(createdLogs.map(log => 
      axios.post('http://localhost:5000/api/vendor', {
        id: log._id,
        message: log.message
      })
    ));

    res.status(200).json({
      message: 'Messages sent',
      logs: createdLogs,
      vendorResponses
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
