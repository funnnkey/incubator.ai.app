import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../constants/firebase';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Account created!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Signed in!');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  // Google sign-in placeholder (Expo Go does not support signInWithPopup)
  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In is only available in standalone builds.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isSignUp ? 'Sign Up' : 'Sign In'} onPress={handleAuth} />
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} color="#4285F4" />
      <Text style={styles.toggle} onPress={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C47FF',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  toggle: {
    marginTop: 16,
    color: '#009688',
    textDecorationLine: 'underline',
  },
});
