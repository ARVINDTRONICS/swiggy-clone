


// // This function runs when the 'confirm-code' button is clicked
// // Takes the value from the 'code' input and submits the code to verify the phone number
// // Return a user object if the authentication was successful, and auth is complete
// function submitPhoneNumberAuthCode() {
//   // We are using the test code we created before
//   // var code = document.getElementById("code").value;
//   var code = "123456";
//   confirmationResult
//     .confirm(code)
//     .then(function (result) {
//       var user = result.user;
//       console.log(user);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// //This function runs everytime the auth state changes. Use to verify if the user is logged in
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log("USER LOGGED IN");
//   } else {
//     // No user is signed in.
//     console.log("USER NOT LOGGED IN");
//   }
// });
