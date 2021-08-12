user_name = localStorage.getItem('user_name');
greeting = "Welcome " + user_name + "!";
console.log(greeting);
document.getElementById('welcome').innerHTML = greeting;




var firebaseConfig = {
apiKey: "AIzaSyCDICY-XXBIoZ98qqxqv08M6AXkm_VEBRU",
authDomain: "connect---messenger-app.firebaseapp.com",
projectId: "connect---messenger-app",
storageBucket: "connect---messenger-app.appspot.com",
messagingSenderId: "811142385124",
appId: "1:811142385124:web:85ea35678e94609bb00bf1",
measurementId: "G-8WCTQ29Q0Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
