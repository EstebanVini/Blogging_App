const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true  // Aseguramos que el email sea único
  },
  password: {
    type: String,
    required: true
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,  // Array de IDs de blogs asociados
      ref: 'Blog'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

// Almacena los blogs como un array vacío si no hay ninguno
UserSchema.pre('save', function (next) {
  if (!this.blogs) {
    this.blogs = [];
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
