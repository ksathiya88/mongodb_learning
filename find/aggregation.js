

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




