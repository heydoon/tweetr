"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const initialTweets = require("./tweets");

let collections;

MongoClient.connect(MONGODB_URI, (err, db) => {

  collections = db.collection("tweets");

  
  });

const dbMethods = {

  saveTweet: (data) => {
    collections.insert(data);
    return true;
  },

  getTweets: (callback) => {
    collections.find().toArray((err, results) => {
    if (err) {
      console.log(err)
    }
    callback(results);

  });

}


}
module.exports = {

  connect: (onConnect) => {

    onConnect(dbMethods);

  }


}

