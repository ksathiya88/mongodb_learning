// delete one entry
db.employees.deleteOne({name:"Michael"});

// delete many entries
db.employees.deleteMany({name:"ASD"});

// drop collection
db.users.drop()


// drop database
db.dropDatabase()

