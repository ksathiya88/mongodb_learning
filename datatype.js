Shell DatatTyes:https://docs.mongodb.com/manual/core/shell-types/


DataTypes:
Text
Boolean
Number - 
a) Integer(int32)  
b) NumberLong(int64) 
c) NumberDecimal(34 decimals after comma)
ObjectId
ISODate
Timestamp
Embedded Documents
Array



Shell -  node Based

By default save as 64 bit Floating point number

typeof



Data Types & Limits


Single Document <= 16mb
100 levels of embedded documents.

Find Limits: https://docs.mongodb.com/manual/reference/limits/

For the data types detailed overview on this page: https://docs.mongodb.com/manual/reference/bson-types/

Important data type limits are:

Normal integers (int32)  +-2,147,483,647

Long integers (int64)  +-9,223,372,036,854,775,807

Shell:

NumberInt creates a int32 value => NumberInt(55)

NumberLong creates a int64 value => NumberLong(7489729384792)

 (e.g. insertOne({a: 1}) -- > tnormal double into the database.Shell treats everything as double

NumberDecimal creates a high-precision double value => NumberDecimal("12.99") => This can be helpful for cases where you need (many) exact decimal places for calculations.

Example for Node.js: http://mongodb.github.io/node-mongodb-native/3.1/api/Long.html
