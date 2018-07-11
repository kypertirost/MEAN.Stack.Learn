var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content)
};

var theEarth = (function() {
  var earthRadius = 6371;

  var getDistanceFromRads = function (rads) {
    return parseFloat (rads * earthRadius);
  };

  var getRadsFromDistance = function (distance) {
    return parseFloat (distance / earthRadius);
  };

  return {
    // expose these two function
    getDistanceFromRads : getDistanceFromRads,
    getRadsFromDistance : getRadsFromDistance
  }
})();


module.exports.locationsCreate = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationListByDistance = function (req, res) {
  var lng = parseFloat(req.query.lng); // parseFloat is a method convert string to float
  var lat = parseFloat(req.query.lat);
  // var maxDis = pareseFloat(req.query.maxDis)
  //construct point geoJSON obj
  var point = {
    type: "Point",
    coordinates: [lng, lat]
  };
  var geoOptions = {
    sphercial: true,
    maxDistance: theEarth.getRadsFromDistance(6371),
    num: 10
  };
  Loc.geoNear(point, geoOptions, function(err, results, stats) {
    var locations = [];
    if (err) {
      sendJSONresponse(res, 404, {
        "message" : "lng and lat query parameters are required"
      });
      return
    } else {
      results.forEach(function(doc){
        locations.push({
          distance: theEarth.getDistanceFromRads(doc.dis),
          name: doc.obj.name,
          address: doc.obj.address,
          rating: doc.obj.rating,
          facilities: doc.obj.facilities,
          _id: doc.obj._id
        });
      });
    }
    sendJSONresponse(res, 200, locations);
  });
};

module.exports.locationsReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.locationsUpdateOne = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function (req, res) {
  sendJSONresponse  (res, 200, {"status" : "success"});
};
