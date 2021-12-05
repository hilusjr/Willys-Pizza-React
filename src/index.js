import React from 'react'
import reactDom from 'react-dom'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import App from './App'

const firebaseConfig = {
  apiKey: 'AIzaSyBgoshghJ8ITC777Xe12mknNLHdhtEXNh4',
  authDomain: 'project-react-11f30.firebaseapp.com',
  projectId: 'project-react-11f30',
  storageBucket: 'project-react-11f30.appspot.com',
  messagingSenderId: '1027213816971',
  appId: '1:1027213816971:web:7555d5c29718e40fe9d08e',
  measurementId: 'G-BVNGQX1D5F',
  databaseURL:
    'https://project-react-11f30-default-rtdb.europe-west1.firebasedatabase.app/',
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('signed in')
  } else {
    console.log('signed out')
  }
})

const site = <App />

reactDom.render(site, document.getElementById('root'))
