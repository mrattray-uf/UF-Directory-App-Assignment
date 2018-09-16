'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
    listingJSON = require('./listings');

/* Connect to your database */
mongoos.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 fs.readFile('listings.json', 'utf8', function(err, data){
   if (err) throw err;
   var listings = JSON.parse.data;
   listings.entries.forEach(function(listing){
     var listingModel = new Listing(listing);
     listingModel.save(function(err){
       if (err) throw err;

     });
   });
 });
 process.exit();


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
