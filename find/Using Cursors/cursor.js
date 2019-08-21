// use movies

// sort
db.movies.find({}).sort({runtime:1,"rating.average":1}).pretty();


// limit

db.movies.find({}).sort({runtime:1,"rating.average":1}).limit(2).pretty();


//skip

db.movies.find({}).sort({runtime:1,"rating.average":1}).skip(2).limit(5).pretty();

// slice projection

db.movies.find({"rating.average":{$gt:3}},{genres:{$slice:[1,2]},name:1}).pretty();