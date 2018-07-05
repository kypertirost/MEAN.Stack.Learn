/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', { title: 'Home' });
};
/* GET 'Location Info' Page */
module.exports.locationInfo = function(req, res){
  res.render('index', { title: 'Location Info' });
};

module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add Review' });
};
