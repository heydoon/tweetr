"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const initialTweets = require("./tweets");
let collections;



const dbMethods = {
  saveTweet: (data, callback) => {
    collections.insertOne(data, (err, results) => {
      if (err) {
        console.log(err);
      } 
      callback(results);
    });
    
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
    MongoClient.connect(MONGODB_URI, (err, db) => {
      collections = db.collection("tweets");
      onConnect(dbMethods);
    }); 
  }
}

