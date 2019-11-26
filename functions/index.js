var admin = require('firebase-admin');
admin.initializeApp();
var functions = require('firebase-functions');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const db = admin.firestore();
console.log(firebase.db)
console.log("hello")
exports.helloWorld = functions.https.onRequest((req,res) =>{
admin.firestore().collection('news').doc('Document2').get().then(queryResult => {console.log(queryResult.data())
	return null;
	}
);

// admin.firestore().collection('news/Document2').add({
// 	      first_name : "babe",
//           last_name : "Chow",
//           hobby : "Swimming"
       
// })
res.send("Hello World")


// db.collection("news").doc("Document2").add({
//           first_name : "babe",
//           last_name : "Chow",
//           hobby : "Swimming"
//         })
  

	
});
