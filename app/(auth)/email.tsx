import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function EmailInput() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>What's your email address?</Text>
      <TextInput style={styles.input} placeholder="Email address" placeholderTextColor="#555" />
      <TouchableOpacity style={styles.btn} onPress={() => router.push('/(auth)/password')}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 25 },
  label: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 40 },
  input: { borderBottomWidth: 1, borderBottomColor: '#333', color: '#fff', fontSize: 18, marginTop: 30, paddingBottom: 10 },
  btn: { backgroundColor: '#1A53FF', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  btnText: { color: '#fff', fontWeight: 'bold' }
});