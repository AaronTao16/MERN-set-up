const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
     title: String,
     content: String,
     createdBy: String,
     tags: [String],
     selectedFile: String,
     likeCount: {
          type: Number,
          default: 0
     },
     createdAt: {
          type: Date,
          default: new Date()
     },
});

var PostInfo = mongoose.model('PostInfo', postSchema);

module.exports = PostInfo;