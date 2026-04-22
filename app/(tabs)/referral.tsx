import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Referral() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Referrals</Text>
      <View style={styles.stats}><View style={styles.stat}><Text style={styles.sl}>Referrals</Text><Text style={styles.sv}>0</Text></View><View style={styles.stat}><Text style={styles.sl}>Points</Text><Text style={styles.sv}>0</Text></View></View>
      <View style={styles.main}>
        <Ionicons name="gift-outline" size={100} color="#1A53FF" />
        <Text style={styles.mt}>Invite friends, earn points</Text>
        <Text style={styles.ms}>Share your link and earn rewards for every signup.</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text style={styles.bt}>Share Link</Text></TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  stats: { flexDirection: 'row', backgroundColor: '#111', padding: 20, borderRadius: 20, marginTop: 20 },
  stat: { flex: 1, alignItems: 'center' },
  sl: { color: '#888' },
  sv: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  main: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mt: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginTop: 25 },
  ms: { color: '#888', textAlign: 'center', marginTop: 10 },
  btn: { backgroundColor: '#1A53FF', padding: 20, borderRadius: 35, alignItems: 'center', marginBottom: 20 },
  bt: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});