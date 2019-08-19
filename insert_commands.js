db.employees.insertOne({ "key": 7, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });


db.employees.insertMany([{ "key": 8, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" },
{ "key": 9, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" },
{ "key": 10, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" }]);


// duplicate keys
db.employees.insertOne({ _id: "test_1", "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });
db.employees.insertOne({ _id: "test_1", "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });

// Inserting a document into a collection:
db.userData.insertOne({ name: "Kar", address: "XYZ" });


// Embedded documents and array
db.users.insertMany([{name:"Max",hobbies:[{title:"Sports",frequency:3},
{title:"Cooking",frequency:6}],phone:2321313123},
{name:"Max1",hobbies:[{title:"Sports",frequency:3},
{title:"Cooking",frequency:6}],phone:2321313123,age:30}])


db.movie.insertOne({name:"ABC",channels:["SUN","VIJAY","ZEE"],
description:{hero:"DDD",heroin:"sdfsdf",
about:{storyline:"dsfsdf",released:{}}}});





// ordered
db.hobbies.insertMany([{ _id: "yoga", name: "Yoga" },
{ _id: "cooking", name: "Cooking" },
{ _id: "hiking", name: "Hiking" }], { ordered: false });

// writeConcern
// w acknowledgment
// j journal which used for security in case your database goes down
// wtimeout timeout for write
db.persons.insertOne({ name: "Karthik", age: 22 },
    { writeConcern: { w: 1, j: true, wtimeout: 200 } })

// for importing the data
mongoimport tv-shows.json - d movieData - c movies --jsonArray --drop







