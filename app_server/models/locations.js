var mongoose = require ('mongoose');

// define openingTime schema
var openingTimeSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  close: {type: Boolean, required: true}
})

// define review schema
var reviewSchema = new mongoose.Schema({
  author: String,
  rating:{type: Number, "defalut" = 0, min: 0, max: 5},
  reviewText: String,
  createdOn: {type: Date, "default": Date.now}
})

// combine the previous two into location Schema (define main schema)
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "defalut" = 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: [Number], idenx: '2dsphere'},
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});


mongoose.model('Location', locationSchema);
