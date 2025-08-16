import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Trophy, Mail, User, Phone } from 'lucide-react-native';
import { UserData } from './EneagramQuizApp';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props {
  onSubmit: (data: UserData) => void;
}

export default function LeadCaptureScreen({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (name.trim() && email.trim() && whatsapp.trim()) {
      setIsSubmitting(true);
      await onSubmit({ 
        name: name.trim(), 
        email: email.trim(),
        whatsapp: whatsapp.trim() 
      });
    }
  };

  const isValid = name.trim().length > 0 && email.trim().length > 0 && email.includes('@') && whatsapp.trim().length > 0;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Trophy size={64} color="#4F46E5" strokeWidth={1.5} />
          </View>

          <Text style={styles.title}>Seu resultado está pronto!</Text>
          <Text style={styles.subtitle}>
            Insira seus dados para revelar seu perfil único do Eneagrama
          </Text>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <User size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu nome completo"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#9CA3AF"
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputContainer}>
              <Mail size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu melhor e-mail"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Phone size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu WhatsApp com DDD"
                value={whatsapp}
                onChangeText={setWhatsapp}
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.submitButton, !isValid && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isValid || isSubmitting}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={isValid ? ['#4F46E5', '#3730A3'] : ['#9CA3AF', '#6B7280']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>
                {isSubmitting ? 'REVELANDO...' : 'VER MEU RESULTADO AGORA!'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.privacyContainer}>
            <Text style={styles.privacyText}>
              🔒 Seus dados estão seguros e não serão compartilhados
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  iconContainer: {
    marginBottom: 32,
    padding: 20,
    borderRadius: 60,
    backgroundColor: '#EEF2FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    maxWidth: SCREEN_WIDTH - 80,
  },
  formContainer: {
    width: '100%',
    marginBottom: 32,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: 16,
    color: '#1F2937',
  },
  submitButton: {
    width: '100%',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  disabledButton: {
    shadowOpacity: 0.1,
    elevation: 2,
  },
  buttonGradient: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  privacyContainer: {
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});