const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageFileIds: [{  
    type: mongoose.Schema.Types.ObjectId,  // Almacena múltiples ObjectIds de GridFS
    required: false
  }]
});

module.exports = mongoose.model('Blog', BlogSchema);
