// comparison operators

//$eq
db.movies.find({runtime:{$eq:60}})

//$ne
db.movies.find({runtime:{$ne:60}})

// less than
db.movies.find({runtime:{$lt:40}}).pretty()

// greater than
db.movies.find({runtime:{$gt:40}}).pretty()

// less than and equal
db.movies.find({runtime:{$lte:40}}).pretty()

// greater than and equal
db.movies.find({runtime:{$gte:40}}).pretty()


// Querying Embedded documents
db.movies.find({"rating.average":{$gt:7}}).pretty()

// Querying Arrays
db.movies.find({"genres":"Drama"}).pretty()

// Querying Exact Arrays
db.movies.find({"genres":["Drama"]}).pretty()

// $in operator Querying in that value
db.movies.find({"runtime":{$in:[30,60]}}).pretty()

// $nin operator Querying not in that value
db.movies.find({"runtime":{$nin:[30,60]}}).pretty()
