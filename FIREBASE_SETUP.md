# Firebase Setup Guide for incubator.ai

1. Go to https://console.firebase.google.com/ and create a new project (or use an existing one).
2. In the Firebase console, add a new Web app to your project.
3. Copy your Firebase config object (apiKey, authDomain, etc).
4. Open `constants/firebase.ts` and replace the placeholder values with your real config:

```
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
```

5. Enable Authentication in Firebase Console:
   - Go to Authentication > Sign-in method.
   - Enable Email/Password and Google providers.

6. In Firestore, create a collection named `startupIdeas` for idea submissions.

7. (Optional) Set up Firebase Storage for proof uploads later.

---

## Need Help?
- If you get stuck, check the [Firebase Docs](https://firebase.google.com/docs/web/setup) or ask for help here.
- For Expo + Firebase, see: https://docs.expo.dev/guides/using-firebase/
- If you want me to generate a sample config (with placeholders), just ask!
