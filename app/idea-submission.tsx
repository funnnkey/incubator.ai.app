import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db, auth } from '../constants/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function IdeaSubmissionScreen() {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [market, setMarket] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'startupIdeas'), {
        problem,
        solution,
        market,
        experience,
        user: auth.currentUser?.uid || null,
        createdAt: new Date(),
      });
      Alert.alert('Submitted!', 'Your idea has been submitted.');
      setProblem(''); setSolution(''); setMarket(''); setExperience('');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Startup Idea</Text>
      <TextInput style={styles.input} placeholder="Problem" value={problem} onChangeText={setProblem} />
      <TextInput style={styles.input} placeholder="Solution" value={solution} onChangeText={setSolution} />
      <TextInput style={styles.input} placeholder="Market" value={market} onChangeText={setMarket} />
      <TextInput style={styles.input} placeholder="Founder Experience" value={experience} onChangeText={setExperience} />
      <Button title={loading ? 'Submitting...' : 'Submit'} onPress={handleSubmit} disabled={loading} />
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
    fontSize: 24,
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
});
