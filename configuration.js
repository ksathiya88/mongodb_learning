// log file
mongod--dbpath "C:\data" --logpath "C:\mongod_log\file.txt";

// help
db.help()
db.employees.help()

//configuration file
mongod--config "mongod.cfg"
mongod -f "mongod.cfg"