const mongoose = require("mongoose");

const communicationLogSchema = new mongoose.Schema({
    consumer_id: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['SENT', 'FAILED', 'PENDING'],
        default: 'PENDING',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

module.exports = mongoose.model("CommunicationLog", communicationLogSchema);
