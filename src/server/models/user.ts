import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  name: string;
  email: string;
  telephone: string;
  password: string;
  code: string;
}

const userSchema = new Schema <IUser>({
   name:{type: String, required: true},
   email:{type: String, required: true},
   telephone:{type: String, required: true},
   password: {type: String, required: true},
   code: {type: String, required: true}
});

module.exports = model('User', userSchema);
module.exports.createUser = function(newUser: any, callback: any) {
bcrypt.genSalt(10, function(err: Error, salt: any) {
    bcrypt.hash(newUser.password, salt, function(err: Error, hash: any) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword: any, hash: any, callback: any) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
