/* global questions, eneagramTypes */

// Estado do quiz
let currentQuestionIndex = 0;
let scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
let selectedAnswer = null;

// Elementos DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const progressFill = document.getElementById('progress-fill');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultType = document.getElementById('result-type');
const resultDescription = document.getElementById('result-description');

// Função para iniciar o quiz
function startQuiz() {
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    showQuestion();
}

// Função para mostrar a pergunta atual
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Atualizar progresso
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Atualizar número da pergunta
    questionNumber.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Atualizar texto da pergunta
    questionText.textContent = question.question;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    
    // Criar opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => selectOption(optionElement, option.type);
        optionsContainer.appendChild(optionElement);
    });
}

// Função para selecionar uma opção
function selectOption(element, type) {
    // Remover seleção anterior
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Selecionar nova opção
    element.classList.add('selected');
    selectedAnswer = type;
    
    // Aguardar um pouco e ir para próxima pergunta
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// Função para ir para próxima pergunta
const nextQuestion = () => {
    if (selectedAnswer === null) return;
    
    // Adicionar pontuação
    scores[selectedAnswer]++;
    
    // Verificar se há mais perguntas
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

// Função para mostrar o resultado
function showResult() {
    // Encontrar o tipo com maior pontuação
    let maxScore = 0;
    let resultTypeNumber = 1;
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultTypeNumber = parseInt(type);
        }
    }
    
    const result = eneagramTypes[resultTypeNumber];
    
    // Mostrar tela de resultado
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Atualizar conteúdo do resultado
    resultType.textContent = `Tipo ${resultTypeNumber}: ${result.name}`;
    resultDescription.innerHTML = `
        <p style="margin-bottom: 20px;">${result.description}</p>
        <h3 style="margin-bottom: 10px; color: #1F2937;">Características principais:</h3>
        <ul style="text-align: left; margin: 0 auto; display: inline-block;">
            ${result.characteristics.map(char => `<li style="margin-bottom: 5px;">• ${char}</li>`).join('')}
        </ul>
    `;
    
    // Simular envio de dados (webhook)
    console.log('Resultado do quiz:', {
        tipo: resultTypeNumber,
        nome: result.name,
        pontuacoes: scores
    });
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    selectedAnswer = null;
    
    resultScreen.style.display = 'none';
    welcomeScreen.style.display = 'block';
}

// Adicionar efeitos sonoros simulados
function playClickSound() {
    // Simular som de clique
    console.log('🔊 Som de clique');
}

function playEncouragementSound() {
    // Simular som de encorajamento
    console.log('🔊 Som de encorajamento');
}

// Adicionar sons aos cliques
document.addEventListener('click', playClickSound);

// Mostrar mensagem de encorajamento em pontos específicos
function showEncouragement() {
    if (currentQuestionIndex === Math.floor(questions.length / 3) || 
        currentQuestionIndex === Math.floor(questions.length * 2 / 3)) {
        
        playEncouragementSound();
        
        // Criar modal de encorajamento
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: linear-gradient(45deg, #10B981, #059669);
            color: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            max-width: 300px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        `;
        
        content.innerHTML = `
            <div style="font-size: 32px; margin-bottom: 15px;">💚</div>
            <div style="font-size: 16px; font-weight: 600;">Você está indo muito bem! Continue assim!</div>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Remover modal após 2 segundos
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 2000);
    }
}

// Modificar a função nextQuestion para incluir encorajamento
const originalNextQuestion = nextQuestion;
nextQuestion = function() {
    originalNextQuestion();
    showEncouragement();
};