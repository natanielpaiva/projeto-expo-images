import React from 'react';

import { View, StyleSheet, Image } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/exemplo.png')}
        style={{ width: 400 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f0f0f0', // Cor de fundo clara para destaque
  },
});

export default App;