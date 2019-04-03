const mongoose = require('mongoose');

const BoilerSchema = new mongoose.Schema({
  title: String,
  description: String
});

exports.BoilerModel = mongoose.model('Boiler', BoilerSchema, 'Boiler');
