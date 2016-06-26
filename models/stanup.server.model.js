var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  impediment: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});

var noIdSchema = new Schema(
  { name: String },
  { _id: false });

var exampleSchema = new Schema;

if (includeMiddleName) {
  exampleSchema.add({
    memberName: {
      first: String,
      middle: String,
      last: String
    }
  });
} else {
  exampleSchema.add({
    memberName: {
      first: String,
      last: String
    }
  });
};

exampleSchema.add({
  project: String,
  workYesterday: String,
  impediment: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});
