const Mongodb = require('mongodb');

/** Mongodb connection */
exports.mongodb = new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {
  safe: true
});
