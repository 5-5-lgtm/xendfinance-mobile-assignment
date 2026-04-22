import { StyleSheet, Text, View, SafeAreaView, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function More() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed: Moved padding into style */}
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Account</Text>
        <View style={styles.profile}><View style={styles.avatar} /><Text style={styles.handle}>@Michael_Chuks</Text></View>
        <View style={styles.list}>
          {['Account Settings', 'Verify Phone', 'KYC Verification', 'Support'].map(x => (
            <View key={x} style={styles.row}><Text style={styles.rt}>{x}</Text><Ionicons name="chevron-forward" size={18} color="#444" /></View>
          ))}
          <View style={styles.row}><Text style={styles.rt}>Biometrics</Text><Switch value={true} trackColor={{ true: '#1A53FF' }} /></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContainer: { padding: 20 }, // This is where padding belongs
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  profile: { flexDirection: 'row', alignItems: 'center', marginVertical: 25 },
  avatar: { width: 65, height: 65, borderRadius: 32.5, backgroundColor: '#222' },
  handle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
  list: { backgroundColor: '#111', borderRadius: 20, overflow: 'hidden' },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 22, borderBottomWidth: 0.5, borderBottomColor: '#222', alignItems: 'center' },
  rt: { color: '#fff', fontSize: 16 }
});