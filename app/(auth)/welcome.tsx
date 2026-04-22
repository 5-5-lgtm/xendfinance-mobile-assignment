import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}><Text style={styles.logoX}>X</Text></View>
        <Text style={styles.title}>The Future of finance is here.</Text>
        <Text style={styles.subtitle}>Take control of your wealth with secure and easy-to-use tools.</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => router.push('/(auth)/email')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}><Text style={styles.btnTextSecondary}>Sign In</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#1A53FF', justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  logoX: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#888', textAlign: 'center', marginTop: 15, fontSize: 16 },
  footer: { gap: 15, marginBottom: 20 },
  btnPrimary: { backgroundColor: '#1A53FF', padding: 20, borderRadius: 30, alignItems: 'center' },
  btnSecondary: { borderWidth: 1, borderColor: '#333', padding: 20, borderRadius: 30, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  btnTextSecondary: { color: '#fff', fontSize: 18 }
});