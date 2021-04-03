const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    trim: true,
  },
  course_type: {
    type: String,
    trim: true,
  },
  course_code: {
    type: String,
    trim: true,
  },
  course_mentor: {
    type: String,
    trim: true,
  },
  course_domain:{
    type: String,
    trim: true,
  },
  
  course_period: { type: Date, default: Date.now() },
  /*
  bookIssueInfo: [
    {
      book_info: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Issue",
        },
      },
    },
  ],*/
  
});


module.exports = mongoose.model("Course", courseSchema);