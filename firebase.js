<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { 
  apiKey : "AIzaSyBSQrG5bdCGC_6kUQxccgJxz2gtLiB2Kb4" , 
  authDomain: "sistema-os-1284b.firebaseapp.com",
  projectId: "sistema-os-1284b",
  bucket de armazenamento : "sistema-os-1284b.firebasestorage.app" , 
  messagingSenderId : " 1032102605721" 
  appId : "1:1032102605721:web:7eba5fc6e4eb9fc17ad908" 
};

const app = initializeApp(firebaseConfig);
window.db = getFirestore(app);
</script>
