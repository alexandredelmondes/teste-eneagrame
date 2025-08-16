import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, ExternalLink, RotateCcw } from 'lucide-react-native';
import { QuizResult, UserData } from './EneagramQuizApp';
import { eneagramTypes } from '@/data/eneagramTypes';

interface Props {
  result: QuizResult;
  userData: UserData;
  onRestart: () => void;
}

export default function ResultScreen({ result, userData, onRestart }: Props) {
  const typeData = eneagramTypes[result.type];

  const handleSalesPagePress = () => {
    // URL para WhatsApp com mensagem pré-definida
    Linking.openURL('https://api.whatsapp.com/send?phone=5511986215512&text=Ol%C3%A1!%20Fiz%20o%20teste%20do%20Eneagrama%20e%20quero%20fazer%20minha%20sess%C3%A3o%20estrat%C3%A1gica%20gratuita.');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#667EEA', '#764BA2']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.starContainer}>
            <Star size={48} color="#FFD700" fill="#FFD700" />
          </View>
          <Text style={styles.congratsText}>
            Parabéns, {userData.name}!
          </Text>
          <Text style={styles.resultTitle}>
            Você é do Tipo {result.type + 1}: {typeData.name}
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Seu Perfil</Text>
          <Text style={styles.descriptionText}>{typeData.description}</Text>
        </View>

        <View style={styles.characteristicsContainer}>
          <Text style={styles.sectionTitle}>Características Principais</Text>
          {typeData.characteristics.map((characteristic, index) => (
            <View key={index} style={styles.characteristicItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.characteristicText}>{characteristic}</Text>
            </View>
          ))}
        </View>

        <View style={styles.salesSection}>
          <Text style={styles.salesTitle}>
            Quer conhecer mais sobre seu tipo?
          </Text>
          <Text style={styles.salesSubtitle}>
            Descubra estratégias personalizadas para seu crescimento pessoal e profissional
          </Text>

          <TouchableOpacity
            style={styles.salesButton}
            onPress={handleSalesPagePress}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.salesButtonGradient}
            >
              <Text style={styles.salesButtonText}>
                QUERO MINHA SESSÃO ESTRATÉGICA GRATUITA
              </Text>
              <ExternalLink size={20} color="#FFFFFF" style={styles.buttonIcon} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.restartButton}
          onPress={onRestart}
          activeOpacity={0.7}
        >
          <RotateCcw size={16} color="#6B7280" style={styles.restartIcon} />
          <Text style={styles.restartText}>Fazer o teste novamente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  starContainer: {
    marginBottom: 16,
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  resultTitle: {
    fontSize: 20,
    color: '#E5E7EB',
    textAlign: 'center',
    lineHeight: 28,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  descriptionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
  },
  characteristicsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  characteristicItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#4F46E5',
    marginRight: 8,
    marginTop: 2,
  },
  characteristicText: {
    flex: 1,
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  salesSection: {
    backgroundColor: '#FFF7ED',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#FDBA74',
  },
  salesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  salesSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  salesButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  salesButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
  },
  salesButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  buttonIcon: {
    marginLeft: 8,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  restartIcon: {
    marginRight: 8,
  },
  restartText: {
    fontSize: 16,
    color: '#6B7280',
  },
});