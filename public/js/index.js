// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

//firebaseKey is a secret anyway
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDM_cp5YCbvc40d14iX5IOPwraIpPtwB6M",
    authDomain: "test-76a82.firebaseapp.com",
    databaseURL: "https://test-76a82-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-76a82",
    storageBucket: "test-76a82.appspot.com",
    messagingSenderId: "322609560931",
    appId: "1:322609560931:web:8f4df9e5d35f240a066756",
    measurementId: "G-RWHRNRCXLE"
  });

// Initialize Firebase
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in as ('+ user.email +')');
    } else {
        console.log('no user');
    }
});

// var enterID = document.querySelector('#enterID');
// var enterName = document.querySelector('#enterName');
// var enterAge = document.querySelector('#enterAge');
// var findAge = document.querySelector('#findAge');
// var findID = document.querySelector('#findID');
// var findName = document.querySelector('#findName');

const db = getDatabase();

var EnterA = document.querySelector("input[name='a']");
var EnterB = document.querySelector("input[name='b']");
var EnterC = document.querySelector("input[name='c']");
var EnterD = document.querySelector("input[name='d']");
var EnterE = document.querySelector("input[name='e']");
var EnterF = document.querySelector("input[name='f']");
var EnterG = document.querySelector("input[name='g']");

var insertBtn = document.querySelector('#InsertData');
var updateBtn = document.querySelector('#UpdateData');
var removeBtn = document.querySelector('#DeleteData');

let today = new Date();

  // return number
let dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear(),
    EnterID = dayNum.toString() + (month+1).toString() + year.toString();

function InsertData() {
    set(ref(db, EnterID), {
        taskA: EnterA.value,
        taskB: EnterB.value,
        taskC: EnterC.value,
        taskD: EnterD.value,
        taskE: EnterE.value,
        taskF: EnterF.value,
        taskG: EnterG.value
    })
    .then(()=>{
        alert('insert successfully')
    })  
    .catch((err)=>{
        alert(err)
    })
}

function FindData() {

}

function UpdateData() {
    
}

function DeleteData() {

}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
deleteBtn.addEventListener('click', DeleteData);
