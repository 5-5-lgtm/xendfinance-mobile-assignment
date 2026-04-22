import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  { id: '1', name: 'CNGN', sub: 'Compliant Naira', bal: '₦ 1,200', color: '#8E24AA' },
  { id: '2', name: 'USDT', sub: 'Tether USD', bal: '$ 1,200', color: '#00897B' },
  { id: '3', name: 'USDC', sub: 'USD Coin', bal: '$ 1,200', color: '#1E88E5' },
];

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wallets</Text>
      <View style={styles.blueCard}><Text style={styles.cl}>Asset Portfolio</Text><Text style={styles.cb}>$ 12,480.22</Text></View>
      <FlatList data={DATA} renderItem={({item}) => (
        <View style={styles.row}>
          <View style={[styles.circle, {backgroundColor: item.color}]}><Text style={{color:'#fff', fontWeight:'bold'}}>{item.name[0]}</Text></View>
          <View style={{flex: 1, marginLeft: 15}}><Text style={styles.nt}>{item.name}</Text><Text style={styles.st}>{item.sub}</Text></View>
          <Text style={styles.nt}>{item.bal}</Text>
        </View>
      )} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  blueCard: { backgroundColor: '#1A53FF', padding: 25, borderRadius: 20, marginVertical: 20 },
  cl: { color: '#fff', opacity: 0.8 },
  cb: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: 10 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 0.5, borderBottomColor: '#222' },
  circle: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  nt: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  st: { color: '#888', fontSize: 12 }
});