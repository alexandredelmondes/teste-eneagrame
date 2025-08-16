import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Teste Rápido de Eneagrama</Text>
          <Text style={styles.description}>
            Este documento apresenta um teste rápido de Eneagrama desenvolvido para promover o autoconhecimento e auxiliar na identificação do seu tipo de personalidade predominante. O Eneagrama é uma poderosa ferramenta de compreensão da personalidade humana, que identifica nove tipos distintos e suas inter-relações. Nas próximas seções, você encontrará informações detalhadas sobre o que é o Eneagrama, instruções para realização do teste, o questionário completo, sistema de pontuação, interpretação dos resultados, descrição dos nove tipos e recursos adicionais para aprofundar seus conhecimentos.
          </Text>
          <View style={styles.authorContainer}>
            <View style={styles.authorAvatar}>
              <Text style={styles.authorAvatarText}>TN</Text>
            </View>
            <Text style={styles.authorName}>por Tatiana Santos Novaes</Text>
          </View>
        </View>

        <Image 
          source={require('../assets/images/eneagrama.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.startButton} onPress={onStart} activeOpacity={0.8}>
          <Text style={styles.buttonText}>INICIAR TESTE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1ED',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    color: '#4A443F',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif', // Uma fonte mais elegante
  },
  description: {
    fontSize: 16,
    color: '#4A443F',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8A7F80',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  authorAvatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 16,
    color: '#8A7F80',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 48,
    opacity: 0.5,
  },
  startButton: {
    backgroundColor: '#8A7F80',
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});