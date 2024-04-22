import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipes'
  }]
});
// Hash password before saving user
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(givenPassword) {
  try {
    return await bcrypt.compare(givenPassword, this.password);
  } catch (error) {
    throw error;
  }
};

export const UserModel =mongoose.models.user || mongoose.model('user', userSchema);


