const pubSub = require('./pubsub');
const CommunicationLog = require('./models/CommunicationLog');

pubSub.on('batchProcess', async (logs) => {
  try {
    const updatePromises = logs.map(log => 
      CommunicationLog.findByIdAndUpdate(log.id, { status: log.status })
    );
    await Promise.all(updatePromises);
    console.log('Batch processed');
  } catch (error) {
    console.error('Error processing batch:', error);
  }
});
