
// retrieve all documents
db.employees.find({}).pretty();

// retrieve with filters specified
db.employees.find({ name: "Michael", key: 3 }).pretty();

// retrive single entry with filters specified.
db.employees.findOne({ name: "Michael" });