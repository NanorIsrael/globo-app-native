import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Focus />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
});
