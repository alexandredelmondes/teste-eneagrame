import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { questions } from '@/data/questions';
import EncouragementModal from './EncouragementModal';
import SoundManager from './SoundManager';

interface Props {
  currentQuestion: number;
  onAnswer: (typeIndex: number) => void;
}

export default function QuizScreen({ currentQuestion, onAnswer }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const question = questions[currentQuestion];
  const encouragementQuestions = useMemo(() => [8, 17, 26, 35], []); // After questions 9, 18, 27, 36

  useEffect(() => {
    setSelectedOption(null);
    // Fade in animation for new question
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentQuestion, fadeAnim]);

  useEffect(() => {
    if (encouragementQuestions.includes(currentQuestion)) {
      setShowEncouragement(true);
      SoundManager.playSound('encouragement');
    }
  }, [currentQuestion, encouragementQuestions]);

  // Cleanup para timeouts quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleOptionPress = useCallback((optionIndex: number, typeIndex: number) => {
    setSelectedOption(optionIndex);
    SoundManager.playSound('click');

    // Fade out animation before moving to next question
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      timeoutRef.current = setTimeout(() => {
        onAnswer(typeIndex);
      }, 100);
    });
  }, [fadeAnim, onAnswer]);

  const getEncouragementMessage = useCallback(() => {
    const messages = [
      'Você está indo muito bem! Continue.',
      'Metade do caminho! Suas respostas estão formando um padrão fascinante.',
      'Falta pouco! Continue com essa honestidade.',
      'Na reta final! Apenas mais algumas perguntas.',
    ];
    return messages[encouragementQuestions.indexOf(currentQuestion)];
  }, [encouragementQuestions, currentQuestion]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Teste de Eneagrama</Text>
        <View style={styles.authorContainer}>
          <View style={styles.authorAvatar}>
            <Text style={styles.authorAvatarText}>TN</Text>
          </View>
          <Text style={styles.authorName}>por Tatiana Santos Novaes</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.questionWrapper, { opacity: fadeAnim }]}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionNumber}>
              Pergunta {currentQuestion + 1} de 45
            </Text>
            <Text style={styles.questionText}>{question.question}</Text>
          </View>

          <View style={styles.optionsContainer}>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={`option-${option.type}-${option.text}`}
                style={[
                  styles.optionButton,
                  selectedOption === index && styles.selectedOption,
                ]}
                onPress={() => handleOptionPress(index, option.type)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === index && styles.selectedOptionText,
                  ]}
                >
                  {String.fromCharCode(65 + index)}) {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </ScrollView>

      <EncouragementModal
        visible={showEncouragement}
        message={getEncouragementMessage()}
        onClose={() => setShowEncouragement(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F1ED',
  },
  header: {
    backgroundColor: '#F4F1ED',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DCD9D5',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#4A443F',
    fontFamily: 'serif',
    marginBottom: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#8A7F80',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  authorAvatarText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 14,
    color: '#8A7F80',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F1ED',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  questionWrapper: {
    flex: 1,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionNumber: {
    fontSize: 16,
    color: '#8A7F80',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  questionText: {
    fontSize: 20,
    color: '#4A443F',
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'serif',
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCD9D5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedOption: {
    borderColor: '#8A7F80',
    backgroundColor: '#EAE7E4',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#4A443F',
    lineHeight: 24,
    textAlign: 'left',
  },
  selectedOptionText: {
    color: '#4A443F',
    fontWeight: '600',
  },
});