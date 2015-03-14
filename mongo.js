    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var url =  'mongodb://' +
process.env.MONGODB_ADDON_USER + ':' +
process.env.MONGODB_ADDON_PASSWORD + '@' +
process.env.MONGODB_ADDON_HOST + ':27017/' +
process.env.MONGODB_ADDON_DB;

var getData = module.exports = function(cb) {
  MongoClient.connect(url, {"uri_decode_auth": true}, function(err, db) {
  if(err) throw err;

  var collection = db.collection('test_insert');
  collection.insert({a:2}, function(err, docs) {

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
      // Let's close the db
      cb(results);
      db.close();
    });
  });
})
};

