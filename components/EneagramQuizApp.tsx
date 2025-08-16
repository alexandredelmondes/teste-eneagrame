import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import QuizScreen from './QuizScreen';
import LeadCaptureScreen from './LeadCaptureScreen';
import ResultScreen from './ResultScreen';
import ProgressBar from './ProgressBar';
import SoundManager from './SoundManager';

export type QuizState = 'welcome' | 'quiz' | 'leadCapture' | 'result';

export interface UserData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface QuizResult {
  type: number;
  scores: number[];
}

export default function EneagramQuizApp() {
  const [currentState, setCurrentState] = useState<QuizState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>(new Array(9).fill(0));
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', whatsapp: '' });
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const handleAnswer = (typeIndex: number) => {
    const newScores = [...scores];
    newScores[typeIndex] += 1;
    setScores(newScores);

    if (currentQuestion < 44) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate result
      const maxScore = Math.max(...newScores);
      const resultType = newScores.indexOf(maxScore);
      setQuizResult({ type: resultType, scores: newScores });
      setCurrentState('leadCapture');
    }
  };

  const handleStartQuiz = () => {
    setCurrentState('quiz');
    SoundManager.playSound('click');
  };

  const handleLeadSubmit = async (data: UserData) => {
    setUserData(data);
    
    // Send webhook
    try {
      const webhookData = {
        nome: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        eneatipo: `Tipo ${(quizResult?.type || 0) + 1}`,
      };

      await fetch('https://n8n.misterx.com.br/webhook/leads-tati', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
    } catch (error) {
      console.log('Webhook error:', error);
    }

    setCurrentState('result');
    SoundManager.playSound('revelation');
  };

  const resetQuiz = () => {
    setCurrentState('welcome');
    setCurrentQuestion(0);
    setScores(new Array(9).fill(0));
    setUserData({ name: '', email: '', whatsapp: '' });
    setQuizResult(null);
  };

  const renderCurrentScreen = () => {
    switch (currentState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStartQuiz} />;
      case 'quiz':
        return (
          <QuizScreen
            currentQuestion={currentQuestion}
            onAnswer={handleAnswer}
          />
        );
      case 'leadCapture':
        return <LeadCaptureScreen onSubmit={handleLeadSubmit} />;
      case 'result':
        return (
          <ResultScreen
            result={quizResult!}
            userData={userData}
            onRestart={resetQuiz}
          />
        );
      default:
        return <WelcomeScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentState === 'quiz' && (
        <ProgressBar current={currentQuestion + 1} total={45} />
      )}
      <View style={styles.content}>
        {renderCurrentScreen()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
  },
});