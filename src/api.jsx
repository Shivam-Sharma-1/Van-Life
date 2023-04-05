// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase/lite";
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

async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(url)

    if(!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const res = await fetch(url)

    if(!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

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

export { getVans, getHostVans, loginUser }