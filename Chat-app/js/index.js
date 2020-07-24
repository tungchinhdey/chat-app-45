const init = () => {
  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_ZwH7PuHR29uf5GHyDjWn7DJC7ZaXLWc",
    authDomain: "chat-app-355cc.firebaseapp.com",
    databaseURL: "https://chat-app-355cc.firebaseio.com",
    projectId: "chat-app-355cc",
    storageBucket: "chat-app-355cc.appspot.com",
    messagingSenderId: "705046367363",
    appId: "1:705046367363:web:554db89c253610b6295fb6",
    measurementId: "G-N1CQW2JZH1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  view
  .setActiveScreen('registerScreen')
}
window.onload = init 
