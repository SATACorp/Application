var admin = require("firebase-admin");
admin.initializeApp();
var functions = require("firebase-functions");
const fetch = require("node-fetch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const db = admin.firestore();
console.log("hello");

let newsUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae0c8f3d55f44f19d14a61a4c1cb105";

fetch(newsUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.articles[0]);
    return data;
  })
  .catch(err => {
    console.log(err.message);
  });

exports.testFunction = functions.https.onRequest((req, res) => {
  db.collection("news")
    .doc("Document2")
    .get()
    .then(snapshot => {
      const data = snapshot.data();
      res.send(data);
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
  res.send("Test Function");
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
