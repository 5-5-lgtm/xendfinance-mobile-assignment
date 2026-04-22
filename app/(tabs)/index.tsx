import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed: Moved padding into style */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}><View style={styles.avatar} /><Text style={styles.hi}>Hi, @Michael_Chuks</Text></View>
        <View style={styles.card}>
          <Text style={styles.cl}>PORTFOLIO BALANCE</Text>
          <Text style={styles.cb}>₦ 2,450,120.00</Text>
          <View style={styles.wb}><Text style={{color: '#1A53FF', fontWeight: 'bold'}}>Total Savings: ₦ 890,000.00</Text></View>
        </View>
        <Text style={styles.st}>QUICK ACTIONS</Text>
        <View style={styles.grid}>
          {['To Bank', 'Withdraw', 'Save', 'Invest', 'Yield', 'Swap'].map((x) => (
            <View key={x} style={styles.gi}><View style={styles.ib}><Ionicons name="flash" size={22} color="#1A53FF" /></View><Text style={styles.it}>{x}</Text></View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContainer: { padding: 20 }, // This is where padding belongs
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#333' },
  hi: { color: '#fff', marginLeft: 12, fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#1A53FF', padding: 25, borderRadius: 25 },
  cl: { color: '#fff', opacity: 0.7, fontSize: 12 },
  cb: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginVertical: 12 },
  wb: { backgroundColor: '#fff', padding: 12, borderRadius: 15, alignItems: 'center' },
  st: { color: '#fff', fontWeight: 'bold', marginTop: 30, fontSize: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 },
  gi: { width: '33.3%', alignItems: 'center', marginBottom: 20 },
  ib: { backgroundColor: '#fff', padding: 15, borderRadius: 18 },
  it: { color: '#fff', fontSize: 11, marginTop: 8 }
});