import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Plans() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Plans</Text>
      <View style={styles.blueCard}><Text style={styles.cl}>SAVINGS PLAN</Text><Text style={styles.cb}>USD 0.00</Text></View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box}><Ionicons name="add-circle-outline" size={30} color="#FF8A65" /><Text style={styles.bt}>Create Plan</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box}><Ionicons name="calculator-outline" size={30} color="#1A53FF" /><Text style={styles.bt}>Calculator</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  blueCard: { backgroundColor: '#1A53FF', padding: 25, borderRadius: 20, marginVertical: 20 },
  cl: { color: '#fff', opacity: 0.8 },
  cb: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  box: { backgroundColor: '#111', width: '48%', padding: 20, borderRadius: 15, height: 130, justifyContent: 'center' },
  bt: { color: '#fff', fontWeight: 'bold', marginTop: 15 }
});