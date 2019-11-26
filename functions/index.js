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
console.log("hello")

exports.helloWorld = functions.https.onRequest((req, res) => {
	db.collection("news").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());
		});
		return null;
	})
	.catch(error =>{
		console.log(error)
	})
	res.send("hello world")
	
  });


// exports.helloWorld = functions.https.onRequest((req,res) =>{
	// db.collection("news")
	// .doc("Document2")
    // .get()
    // .then(snapshot => {
    //     snapshot.forEach(doc => {
	// 		console.log(doc.data)
    //         const data = {
    //             id: doc.data,
    //         }
    //         authors.push(data)
    //         authors.push({ key: "test in loop" })
	// 	})
		
	
// admin.firestore().collection('news').doc('Document2').get().then(queryResult => {console.log(queryResult.data())
// 	return null;
// 	}
// )

// admin.firestore().collection('news/Document2').add({
// 	      first_name : "babe",
//           last_name : "Chow",
//           hobby : "Swimming"
       
// })


// admin.firestore().collection('news').doc('Document2').add({
// 	      first_name : "babe",
//           last_name : "Chow",
//           hobby : "Swimming"
       
// });



// db.collection("news").doc("Document2").add({
//           first_name : "babe",
//           last_name : "Chow",
//           hobby : "Swimming"
//         })
  

	
// });
