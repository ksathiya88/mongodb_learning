
// use this command for checking the below element operators
db.users.insertMany([{name:"Max",hobbies:[{title:"Sports",frequency:3},
{title:"Cooking",frequency:6}],phone:2321313123},
{name:"Max1",hobbies:[{title:"Sports",frequency:3},
{title:"Cooking",frequency:6}],phone:"2321313123",age:30},
{name:"Anna",hobbies:[{title:"Sports",frequency:3},
{title:"Cooking",frequency:6}],phone:2321313123,age:30}])


// $exist command
db.users.find({age:{$exists:true,$ne:null}}).pretty();

// $type command
db.users.find({phone:{$type:"number"}}).pretty()

// $type as array
db.users.find({phone:{$type:["number","string"]}}).pretty()

