
// Showing database:
// Show dbs

// Creating database:
// use <databasename>;

// For seeing collections:
// show collections

// For creating Collection:
// db.createCollection("customers");



// stats command
db.movies.find({},{name:1,type:1,_id:0}).pretty()