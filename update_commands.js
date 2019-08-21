// update single document
db.employees.updateOne({name:"Michael"},{$set:{date_of_birth:"30/10/2010"}} )

// update single document
db.employees.update({name:"Michael"},{$set:{date_of_birth:"20/10/2010"}} )


// update many documents
db.employees.updateMany({name:"Michael"},{$set:{date_of_birth:"20/10/2010"}} )


// replace the entries preferrable to avoid this.
db.employees.update({name:"Michael"},{date_of_birth:"40/10/2010"} )


// Throw errors
db.employees.updateMany({name:"Michael"},{date_of_birth:"40/10/2010"} )
db.employees.updateOne({name:"Michael"},{date_of_birth:"40/10/2010"} )


// replace the entries it is similar to update without $set
db.employees.replaceOne({name:"Michael"},{date_of_birth:"40/10/2010"} )




// use user data
// increment and decrementing
// increment
db.users.updateOne({name:"Anna"},{$inc:{age:1},$set:{sample:"text"}});

//decrement
db.users.updateOne({name:"Anna"},{$inc:{age:-1},$set:{sample:"text"}});


// minimum update only if the value "20" lower than the existing value 
db.users.updateOne({name:"Anna"},{$min:{age:20}});

//maximum 
db.users.updateOne({name:"Anna"},{$max:{age:40}});

// multiply
db.users.updateOne({name:"Anna"},{$mul:{"age":2}});

// rename fields
db.users.updateMany({},{$rename:{age:"totalAge"}})

// insert if not available
db.users.updateOne({name:"Anna1"},{$set:{age:25,hobbies:{frequency:3.1}}},
{upsert:true});



