// use this to import
mongoimport users.json -d users -c user_data --jsonArray --drop

// query object in Array
db.user_data.find({"hobbies.title":"Sports"}).pretty();

// $size
db.user_data.find({hobbies:{$size:3}}).pretty();

//$all
mongoimport boxoffice.json -d boxoffice -c moviestarts --jsonArray --drop

db.moviestarts.find({genre:{$all:["action","thriller"]}}).pretty();

// $elemMatch

use users
// it gives a issue as it will filter even other hobbies with frequency 
// greater than 3
db.users.find({$and:[{"hobbies.frequency":{$gt:3}},{"hobbies.title":"Sports"}]}).pretty()


db.users.find({hobbies:
    {$elemMatch:{"title":"Sports",frequency:{$gte:3}}}}).pretty();






