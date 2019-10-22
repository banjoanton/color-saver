const mongoose = require('mongoose');

// MongoDB Example

// Define schema
const userSchema = mongoose.Schema({
    username: String,
    passwordHash: String
});

/*eslint-disable */
// edit toJSON
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
});
/* eslint-enable */

const User = mongoose.model('User', userSchema);

module.exports = User;
