import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import BookTile from './components/BookTile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Juditheke je t'aime</Text>
      <StatusBar style="auto" />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
