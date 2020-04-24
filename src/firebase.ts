import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC7YnL_g7J661ElXWQVjhjuCYfkhKcuV7Y',
  authDomain: 'dogs-redux.firebaseapp.com',
  databaseURL: 'https://dogs-redux.firebaseio.com',
  projectId: 'dogs-redux',
  storageBucket: 'dogs-redux.appspot.com',
  messagingSenderId: '306028609114',
  appId: '1:306028609114:web:d008a60f9bc6940a05e263',
}

firebase.initializeApp(firebaseConfig)

export default firebase
