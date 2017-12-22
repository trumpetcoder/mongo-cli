var mongo = require('mongodb').MongoClient;
var prompt = require('prompt-sync')();
var url = 'mongodb://localhost:27017/restaurants_db';

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });

// Task 1: Comment out the first prompt and add another prompt to let the user view information about a specific restaurant, by entering a name.

mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var oneRestaurant = prompt("Type in a specific 'name' to see that restaurant: ");
	  collection.find({name: oneRestaurant}).toArray(function(err, doc) {
	    console.log(doc);

	});
});

// Task 2:  Create a prompt for users to add their own restaurants.

// mongo.connect(url, function(err, db) {
// 	var collection = db.collection('restaurants');
// 	var newPlace = prompt("Type in a 'name' for a new restaurant: ");
// 	var address = prompt("Type in an 'address' for the new restaurant: ");
// 	var zip = prompt("Type in a 'zip-code' for the new restaurant: ");
// 	  collection.insert({name: newPlace, address: address, zip: zip});

// });

// Create a prompt for users to edit restaurants.

// mongo.connect(url, function(err, db) {
// 	var collection = db.collection('restaurants');
// 	var name = prompt("Type in a 'name' to update the restaurants name: ");
// 	var newName = prompt("Type in the 'New Name' for your restaurant: ");
// 	  collection.update({name: name}, 
// 	  	{$set: {name: newName}
// 	});
// });					










// Create a prompt for users to delete restaurants.

// mongo.connect(url, function(err, db){
// 	var collection = db.collection('restaurants');
// 	var byeBye = prompt("Type in a restaurants 'name' to remove that restaurant: ");
// 	  collection.remove({name: byeBye}); 
// 	  	// console.log(doc);
// 	  // });
// });


    
