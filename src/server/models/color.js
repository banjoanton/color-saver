const mongoose = require('mongoose');

// Define schema
const colorSchema = mongoose.Schema({
  color: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

/*eslint-disable */
// edit toJSON
colorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});
/* eslint-enable */

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
