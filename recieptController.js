const pubSub = require('../pubsub');

exports.receiptApi = async (req, res) => {
  const { id, status } = req.body;

  try {
    // Instead of updating immediately, push to pub-sub
    pubSub.emit('batchProcess', [{ id, status }]);
    res.status(200).json({ message: 'Status update queued', status });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
