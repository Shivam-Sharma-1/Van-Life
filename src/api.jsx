// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH-VOrwhxwevoBWPEw7AMDM1O7R94DT1Y",
  authDomain: "vanlife-8c11c.firebaseapp.com",
  projectId: "vanlife-8c11c",
  storageBucket: "vanlife-8c11c.appspot.com",
  messagingSenderId: "395190221248",
  appId: "1:395190221248:web:b7a03a366f0f60a3f9b025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    console.log(querySnapshot);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr);
    return dataArr
}

// async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : '/api/vans'
//     const res = await fetch(url)

//     if(!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
//     const res = await fetch(url)

//     if(!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

async function loginUser(creds) {
    const res = await fetch("/api/login",
        {method: "post", body: JSON.stringify(creds)}
    )
    const data = await res.json()
    
    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        }
    }
    return data
}

export { getVans, getVan, getHostVans, loginUser }