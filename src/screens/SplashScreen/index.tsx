import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text logoText="Star Wars - Wiki" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
