
//<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuEgA6XJdIMSx9uSRAJGlu3tWClM52BDU",
    authDomain: "mydata-e85cb.firebaseapp.com",
    databaseURL: "https://mydata-e85cb-default-rtdb.firebaseio.com",
    projectId: "mydata-e85cb",
    storageBucket: "mydata-e85cb.appspot.com",
    messagingSenderId: "1029427225832",
    appId: "1:1029427225832:web:cf69413b027368873ad55d",
    measurementId: "G-QHVFTZ7855"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//</script>




function writeUserData(nombre, email, imageUrl){

  const db= getDatabase();
  const reference= ref(db)
  
    set(reference, {
        userName: nombre,
        email: email,
        profile_picture: imageUrl
    });
}

writeUserData("gcam", "gaston@gmail.com", "myUrlImage./hello");

