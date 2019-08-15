db.employees.insertOne({ "key": 7, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });


db.employees.insertMany([{ "key": 8, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" },
{ "key": 9, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" },
{ "key": 10, "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" }]);


// duplicate keys
db.employees.insertOne({ _id: "test_1", "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });
db.employees.insertOne({ _id: "test_1", "name": "ASD", "date_of_birth": "10/10/2010", "position_held": "Manager" });

// Inserting a document into a collection:
db.userData.insertOne({ name: "Kar", address: "XYZ" });

// For fetching the data
db.userData.find({});


