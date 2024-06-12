const CommunicationLog = require('../models/CommunicationLog');

exports.getCampaignStats = async (req, res) => {
  try {
    const total = await CommunicationLog.countDocuments();
    const sent = await CommunicationLog.countDocuments({ status: 'SENT' });
    const failed = await CommunicationLog.countDocuments({ status: 'FAILED' });

    res.status(200).json({
      total,
      sent,
      failed
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
