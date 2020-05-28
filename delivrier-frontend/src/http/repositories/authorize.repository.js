import httpClient from '../http-client';
import firebase from 'firebase';
const resource = '/authorize';

export default {
  authorize(user) {
    return httpClient.post(`${resource}`, user);
  },
  authorizeGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  authorizeGoogleBackend(payload) {
    return httpClient.post(`${resource}/google`, payload);
  },
  authorizeFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  authorizeFacebookBackend(payload) {
    return httpClient.post(`${resource}/facebook`, payload);
  }
};
