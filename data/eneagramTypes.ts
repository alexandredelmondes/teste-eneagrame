export interface EneagramType {
  name: string;
  description: string;
  characteristics: string[];
}

export const eneagramTypes: EneagramType[] = [
  {
    name: "O Perfeccionista",
    description: "Você é uma pessoa orientada por princípios, com um forte senso de certo e errado. Busca sempre a excelência e tem uma crítica interna constante que te motiva a melhorar continuamente. Sua integridade e dedicação à qualidade inspiram outros, mas às vezes pode ser muito duro consigo mesmo.",
    characteristics: [
      "Possui padrões muito altos para si mesmo e para os outros",
      "Orientado por princípios éticos e morais sólidos",
      "Detalhista e busca sempre a perfeição",
      "Pode ser crítico quando as coisas não atendem seus padrões",
      "Motivado pela necessidade de estar certo e ser íntegro"
    ]
  },
  {
    name: "O Prestativo",
    description: "Você é uma pessoa carinhosa e prestativa, naturalmente sintonizada com as necessidades dos outros. Sua generosidade e capacidade de cuidar são suas maiores forças. Você encontra satisfação em ajudar e apoiar aqueles ao seu redor, mas às vezes pode esquecer de cuidar de suas próprias necessidades.",
    characteristics: [
      "Extremamente empático e atento às necessidades dos outros",
      "Generoso com seu tempo, energia e recursos",
      "Habilidoso em relacionamentos interpessoais",
      "Pode negligenciar suas próprias necessidades",
      "Motivado pelo desejo de ser amado e necessário"
    ]
  },
  {
    name: "O Realizador",
    description: "Você é uma pessoa ambiciosa, orientada para o sucesso e altamente adaptável. Sua capacidade de alcançar objetivos e inspirar outros é notável. Você tem um talento natural para apresentar uma imagem positiva e conquistar reconhecimento, mas às vezes pode perder contato com seus verdadeiros sentimentos.",
    characteristics: [
      "Altamente motivado e orientado para objetivos",
      "Carismático e capaz de inspirar outros",
      "Adaptável e eficiente em diferentes situações",
      "Focado na imagem e no sucesso",
      "Pode reprimir emoções em favor da produtividade"
    ]
  },
  {
    name: "O Individualista",
    description: "Você é uma pessoa profundamente introspectiva e autêntica, com uma rica vida emocional interior. Valoriza a originalidade e a expressão pessoal única. Sua sensibilidade artística e capacidade de ver beleza no mundo são dons especiais, mas às vezes pode se sentir diferente ou incompreendido.",
    characteristics: [
      "Altamente criativo e artisticamente sensível",
      "Busca autenticidade e significado profundo",
      "Emocionalmente intenso e introspectivo",
      "Valoriza a individualidade e a originalidade",
      "Pode tender à melancolia ou sentir-se incompreendido"
    ]
  },
  {
    name: "O Investigador",
    description: "Você é uma pessoa analítica e perceptiva, com uma sede insaciável de conhecimento. Sua capacidade de observar, analisar e compreender sistemas complexos é excepcional. Você valoriza a independência e a competência, mas às vezes pode se isolar excessivamente do mundo social.",
    characteristics: [
      "Altamente observador e analítico",
      "Independente e autodidata",
      "Busca compreender como as coisas funcionam",
      "Valoriza a privacidade e o espaço pessoal",
      "Pode ser reservado em situações sociais"
    ]
  },
  {
    name: "O Leal",
    description: "Você é uma pessoa responsável e confiável, com um forte senso de lealdade. Tem a capacidade de antecipar problemas e se preparar para diferentes cenários. Sua dedicação aos outros e aos grupos aos quais pertence é admirável, mas às vezes pode ser excessivamente ansioso ou cauteloso.",
    characteristics: [
      "Extremamente leal e comprometido",
      "Bom em antecipar problemas e se preparar",
      "Valoriza segurança e estabilidade",
      "Pode ser ansioso ou desconfiado",
      "Orientado pela necessidade de apoio e orientação"
    ]
  },
  {
    name: "O Entusiasta",
    description: "Você é uma pessoa otimista, versátil e espontânea. Sua energia contagiante e amor pela vida inspiram outros a aproveitar o momento. Tem uma curiosidade natural e busca sempre novas experiências e possibilidades, mas às vezes pode ter dificuldade em se comprometer ou lidar com limitações.",
    characteristics: [
      "Otimista e cheio de energia",
      "Busca variedade e novas experiências",
      "Criativo e inovador",
      "Pode ter dificuldade em se comprometer",
      "Evita dor e limitações"
    ]
  },
  {
    name: "O Desafiador",
    description: "Você é uma pessoa poderosa, assertiva e autoconfiante. Sua capacidade de liderança e proteção dos outros é natural. Não tem medo de confrontos e luta pela justiça, mas às vezes pode ser excessivamente controlador ou intimidador.",
    characteristics: [
      "Líder natural e protetor",
      "Direto e confrontativo quando necessário",
      "Forte senso de justiça",
      "Pode ser controlador ou dominante",
      "Motivado pela necessidade de autonomia e controle"
    ]
  },
  {
    name: "O Pacificador",
    description: "Você é uma pessoa tranquila, receptiva e estável. Sua capacidade de ver diferentes perspectivas e mediar conflitos é um dom especial. Valoriza a harmonia e tem um talento natural para unir pessoas, mas às vezes pode evitar conflitos necessários ou adiar decisões importantes.",
    characteristics: [
      "Busca harmonia e evita conflitos",
      "Bom mediador e pacificador",
      "Vê múltiplas perspectivas",
      "Pode procrastinar ou evitar decisões difíceis",
      "Motivado pela necessidade de paz interior e exterior"
    ]
  }
];