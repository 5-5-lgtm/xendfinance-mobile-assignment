import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Password() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}><View style={styles.avatar} /><Text style={styles.user}>Welcome, Michael_Chuks</Text></View>
      <Text style={styles.title}>Enter your password</Text>
      <TextInput style={styles.input} placeholder="Your Password" secureTextEntry placeholderTextColor="#555" />
      <View style={styles.faceId}><Ionicons name="scan-outline" size={60} color="#fff" /></View>
      <TouchableOpacity style={styles.btn} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 25 },
  profile: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#222' },
  user: { color: '#fff', marginLeft: 10 },
  title: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginTop: 30 },
  input: { backgroundColor: '#111', color: '#fff', padding: 15, borderRadius: 10, marginTop: 20 },
  faceId: { alignItems: 'center', marginVertical: 60 },
  btn: { backgroundColor: '#1A2B4C', padding: 18, borderRadius: 30, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' }
});