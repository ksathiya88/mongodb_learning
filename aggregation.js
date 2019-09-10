

// just like find
db.persons.aggregate({$match:{gender:"female"}})

// aggregate 
db.persons.aggregate([
    {$match:{gender:"female"}},
    {$group:{ _id:{state:"$location.state"},totalPersons:{$sum:1}}}
]).pretty();

// sort
db.persons.aggregate([{$match:{gender:"female"}},
{$group:{ _id:{state:"$location.state"},
totalPersons:{$sum:1}}},
{$sort:{totalPersons:-1}}]).pretty();


//project
db.persons.aggregate({$project:
    {_id:0,gender:1,fullName:{$concat:["$name.first"," ","$name.last"]}}})

// Upper and lower
db.persons.aggregate({$project:{_id:0,gender:1,fullName:{$concat:[{$toUpper:"$name.first"}," ",{$toLower:"$name.last"}]}}})

// group vs project

// use friends.json

//aggregate on Arrays
db.friends.aggregate({$group:{_id:{age:"$age"}, allHobbies:{$push:"$hobbies"}}});

// unwind stage
db.friends.aggregate({$unwind:"$hobbies"}).pretty();
db.friends.aggregate({$unwind:"$hobbies"}, {$group:{_id:{age:"$age"}, allHobbies:{$push:"$hobbies"}}});

// Eliminating duplicate Values
db.friends.aggregate({$unwind:"$hobbies"}, {$group:{_id:{age:"$age"}, allHobbies:{$addToSet:"$hobbies"}}});

// size of Arrays
db.friends.aggregate({$project:{_id:0,size:{$size:"$hobbies"}}}).pretty();

// putting into a new collection
db.friends.aggregate({$unwind:"$hobbies"}, {$group:{_id:{age:"$age"}, allHobbies:{$addToSet:"$hobbies"}}},{$out:"transformedFriends"});

// combining two collections
use Books;
db.books.insertOne({name:"Harry Potter",price:"1000",author:"authorId1"});
db.authors.insertOne({_id:"authorId1",name:"Ruskin Bond",place:"US",gender:"female"});

db.books.aggregate([{$lookup:{from:"authors",localField:"author",
foreignField:"_id",as:"creators"}}]).pretty();





