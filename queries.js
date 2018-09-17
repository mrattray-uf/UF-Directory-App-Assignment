/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listingJSON = require('./listings.json');

    mongoose.connect(config.db.uri);


var findLibraryWest = function() {
   Listing.findOne({name: 'Library West'}, function(err, data){
     if (err) throw err;
     console.log(data);
   });
};
var removeCable = function() {
   Listing.findOneAndRemove({code : 'CABL'}, function(err, data){
     if (err) throw err;
   });
};
var updatePhelpsLab = function() {
   Listing.findOne({name: 'Phelps Laboratory'}, function(err, data){
     if (err) throw err;
     data.address = '1953 Museum Road Gainesville, FL 32603';
     data.save(function(err){
       if(err) throw err;
       console.log(data);
     })
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, data){
     if (err) throw error;
     console.log(data);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
