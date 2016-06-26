var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function(val) {
    return (val.length > 0 && val.toLocaleLowerCase() != 'none')
  },
  'Select a valid name.'
];

var requiredStringValidator = [
  function(val) {
    var testVal = val.trim();
    return (testVal.length > 0)
  },
  '{PATH} cannot be empty'
];

var standupSchema = new Schema({
  memberName: {
    type: String,
    required: true,
    validate: memberNameValidator
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  impediment: {
    type: String,
    required: true,
    default: 'none'
  },
  createdOn: { type: Date, default: Date.now }
});

// var noIdSchema = new Schema(
//   { name: String },
//   { _id: false });
//
// var exampleSchema = new Schema;
//
// if (includeMiddleName) {
//   exampleSchema.add({
//     memberName: {
//       first: String,
//       middle: String,
//       last: String
//     }
//   });
// } else {
//   exampleSchema.add({
//     memberName: {
//       first: String,
//       last: String
//     }
//   });
// };
//
// exampleSchema.add({
//   project: String,
//   workYesterday: String,
//   impediment: String,
//   createdOn: {
//     type: Date,
//     default: Date.now
//   }
// });

module.exports = mongoose.model('Standup', standupSchema);
