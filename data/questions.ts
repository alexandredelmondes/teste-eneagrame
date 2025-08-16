export interface QuestionOption {
  text: string;
  type: number; // 0-8 for Enneagram types 1-9
}

export interface Question {
  question: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    question: "Ao ser convidado para um jantar na casa de amigos, sua principal preocupação ou foco é:",
    options: [
      { text: "Levar o prato ou a bebida perfeita, garantindo que sua contribuição seja de alta qualidade e siga a etiqueta.", type: 0 },
      { text: "Chegar pronto para ajudar o anfitrião, seja na cozinha ou garantindo que todos os convidados estejam se sentindo bem-vindos e cuidados.", type: 1 },
      { text: "Usar a oportunidade para interagir com pessoas interessantes e causar uma ótima impressão, mostrando seu lado mais charmoso e bem-sucedido.", type: 2 }
    ]
  },
  {
    question: "Você está assistindo a um filme com um grupo e a maioria das pessoas ama a história, mas você a considera clichê e sem profundidade. Qual sua reação interna?",
    options: [
      { text: "Sinto-me um pouco deslocado e incompreendido, questionando por que ninguém mais percebe a falta de originalidade que me parece tão óbvia.", type: 3 },
      { text: "Tento analisar objetivamente por que o filme agrada a tantos, desmontando a estrutura da trama em minha mente para entender sua fórmula.", type: 4 },
      { text: "Permaneço em silêncio e evito expressar minha opinião para não estragar a diversão do grupo e manter um clima de harmonia.", type: 8 }
    ]
  },
  {
    question: "Você se vê diante de um desafio completamente novo e intimidador. Qual é seu primeiro pensamento?",
    options: [
      { text: "Quais são os piores cenários possíveis? Preciso me preparar para todos eles e procurar conselhos de pessoas confiáveis.", type: 5 },
      { text: "Fantástico, uma nova aventura! Isso parece muito mais emocionante do que ficar na mesma rotina de sempre.", type: 6 },
      { text: "Ok, quem está no comando aqui? Preciso assumir o controle desta situação para garantir que ela seja resolvida e que ninguém tire vantagem de mim.", type: 7 }
    ]
  },
  {
    question: "Durante uma conversa, alguém afirma algo que você sabe que está factualmente incorreto. O que você faz?",
    options: [
      { text: "Fico quieto e guardo a informação para mim, mas mentalmente arquivo o fato para minha própria análise, pois não vejo necessidade de expor a pessoa.", type: 4 },
      { text: "Busco uma forma de suavizar a situação ou mudar de assunto, pois corrigir alguém publicamente poderia criar um momento de tensão desconfortável.", type: 8 },
      { text: "Sinto um forte impulso de corrigir a informação, pois a precisão dos fatos é importante e o erro não deveria passar despercebido.", type: 0 }
    ]
  },
  {
    question: "Qual situação te faria sentir mais valorizado em um relacionamento?",
    options: [
      { text: "Quando a outra pessoa demonstra explicitamente que precisa de você e que sua ajuda e seu carinho fazem toda a diferença na vida dela.", type: 1 },
      { text: "Quando a outra pessoa admira publicamente suas conquistas e te vê como um parceiro de sucesso, que agrega valor à imagem dela.", type: 2 },
      { text: "Quando a outra pessoa entende suas emoções mais complexas e sua necessidade de ser autêntico, sem te julgar ou te achar dramático.", type: 3 }
    ]
  },
  {
    question: "Você está no comando de um passeio em grupo. O que é mais importante para você?",
    options: [
      { text: "Manter a energia alta, garantindo que o roteiro tenha várias opções divertidas e que ninguém fique entediado.", type: 6 },
      { text: "Proteger o grupo, tomando as decisões difíceis e garantindo que tudo ocorra de forma segura e sob seu controle.", type: 7 },
      { text: "Assegurar que o ritmo seja confortável para todos e que as decisões sejam tomadas em consenso, sem deixar ninguém para trás.", type: 8 }
    ]
  },
  {
    question: "Uma nova política é implementada em seu trabalho e você a considera profundamente injusta e ilógica. Qual sua atitude?",
    options: [
      { text: "Eu me posiciono firmemente contra, questionando a autoridade e expondo as falhas da política para proteger a mim e aos meus colegas.", type: 7 },
      { text: "Sinto um grande desconforto, mas tento me adaptar e evito o confronto direto, esperando que a situação se resolva sozinha ou que outros tomem a frente.", type: 8 },
      { text: "Fico indignado com a falta de bom senso e sinto a responsabilidade de apresentar uma proposta alternativa, que seja mais correta e eficiente.", type: 0 }
    ]
  },
  {
    question: "Pense na sua reputação. Como você mais gostaria de ser visto pelos outros?",
    options: [
      { text: "Como alguém leal e confiável, que está sempre preparado para qualquer eventualidade.", type: 5 },
      { text: "Como alguém otimista, divertido e que sabe aproveitar a vida ao máximo.", type: 6 },
      { text: "Como uma pessoa forte, decidida e que não tem medo de lutar pelo que acredita.", type: 7 }
    ]
  },
  {
    question: "Se você tivesse que se descrever em um contexto profissional, qual descrição se encaixaria melhor?",
    options: [
      { text: "Sou movido por resultados e busco ser o melhor no que faço. Eficiência e imagem são tudo.", type: 2 },
      { text: "Busco um trabalho que tenha significado e que me permita expressar minha visão única de mundo.", type: 3 },
      { text: "Preciso entender todos os detalhes de um sistema antes de agir. Conhecimento é poder e segurança.", type: 4 }
    ]
  },
  {
    question: "Qual destes medos mais te assombra?",
    options: [
      { text: "O medo de ser visto como incompetente ou incapaz de lidar com o mundo.", type: 4 },
      { text: "O medo de ser traído ou abandonado por aqueles em quem confio.", type: 5 },
      { text: "O medo de perder oportunidades e ficar preso em uma rotina de sofrimento e monotonia.", type: 6 }
    ]
  },
  {
    question: "Como você geralmente toma decisões importantes?",
    options: [
      { text: "Tento encontrar um meio-termo que agrade a todos, mesmo que isso signifique abrir mão da minha preferência inicial.", type: 8 },
      { text: "Sigo minha intuição e meu senso de moralidade, fazendo o que é certo, mesmo que seja o caminho mais difícil.", type: 0 },
      { text: "Me conecto com as pessoas envolvidas para entender suas necessidades, pois a decisão certa é a que faz todos se sentirem bem.", type: 1 }
    ]
  },
  {
    question: "O que mais te motiva na vida?",
    options: [
      { text: "Ser reconhecido pelo meu sucesso e pelas minhas conquistas.", type: 2 },
      { text: "Encontrar um significado único para minha vida e expressar quem eu sou de verdade.", type: 3 },
      { text: "Sentir-me seguro e preparado para qualquer desafio que a vida apresentar.", type: 5 }
    ]
  },
  {
    question: "Quando se sente estressado, qual é a sua fuga mais comum?",
    options: [
      { text: "Se isolar para processar seus pensamentos sem interferência externa.", type: 4 },
      { text: "Buscar novas experiências e distrações para não ter que lidar com a dor.", type: 6 },
      { text: "Se tornar mais controlador e intenso para retomar o domínio da situação.", type: 7 }
    ]
  },
  {
    question: "O que significa 'amor' para você, em sua essência?",
    options: [
      { text: "Cuidar e se doar para o outro, muitas vezes colocando as necessidades dele acima das suas.", type: 1 },
      { text: "Uma conexão profunda e autêntica, onde ambos se sentem compreendidos em sua singularidade.", type: 3 },
      { text: "Uma aceitação incondicional e pacífica, livre de dramas e conflitos.", type: 8 }
    ]
  },
  {
    question: "Você acabou de concluir uma tarefa importante. Qual pensamento é mais provável?",
    options: [
      { text: "Poderia ter feito melhor. Onde foi que eu errei?", type: 0 },
      { text: "Ótimo, concluído! Qual é o próximo desafio para eu superar?", type: 2 },
      { text: "Será que todos estão satisfeitos com o resultado? Espero não ter decepcionado ninguém.", type: 1 }
    ]
  },
  {
    question: "Seus amigos te descreveriam como alguém que...",
    options: [
      { text: "Tem princípios muito fortes e busca sempre fazer a coisa certa.", type: 0 },
      { text: "É extremamente prestativo e sabe exatamente o que os outros precisam.", type: 1 },
      { text: "É focado, ambicioso e um exemplo de sucesso e eficiência.", type: 2 }
    ]
  },
  {
    question: "O que te deixa mais desconfortável em um relacionamento?",
    options: [
      { text: "Sentir que a relação se tornou superficial e comum, sem uma conexão autêntica.", type: 3 },
      { text: "Intrusões excessivas que invadem meu espaço pessoal e meu tempo para pensar.", type: 4 },
      { text: "Uma sensação de instabilidade ou não saber onde você realmente 'pisa' com a outra pessoa.", type: 5 }
    ]
  },
  {
    question: "Qual destas atividades de fim de semana mais te atrai?",
    options: [
      { text: "Um festival com várias atividades, shows e muita gente para conhecer.", type: 6 },
      { text: "Liderar um projeto voluntário na comunidade, organizando e fazendo acontecer.", type: 7 },
      { text: "Um dia tranquilo em casa ou na natureza, sem agenda e sem obrigações.", type: 8 }
    ]
  },
  {
    question: "Você cometeu um erro que ninguém viu. Como você se sente?",
    options: [
      { text: "Mal, pois minha própria consciência crítica é meu juiz mais severo.", type: 0 },
      { text: "Preocupado que, de alguma forma, isso possa prejudicar a imagem que os outros têm de mim.", type: 2 },
      { text: "Aliviado por não ter gerado um conflito ou desapontado alguém diretamente.", type: 8 }
    ]
  },
  {
    question: "Como você lida com suas emoções mais intensas?",
    options: [
      { text: "Mergulho nelas, buscando entendê-las e expressá-las de forma artística ou dramática.", type: 3 },
      { text: "Me distancio delas para analisá-las de forma objetiva, como um quebra-cabeça a ser resolvido.", type: 4 },
      { text: "As sinto de forma direta e poderosa, e geralmente preciso expressá-las fisicamente ou verbalmente.", type: 7 }
    ]
  },
  {
    question: "Qual é sua maior fonte de segurança?",
    options: [
      { text: "O amor e a aprovação das pessoas que são importantes para mim.", type: 1 },
      { text: "Ter um sistema de crenças, pessoas ou regras leais que me guiem.", type: 5 },
      { text: "A certeza de que posso contar comigo mesmo para controlar meu próprio destino.", type: 7 }
    ]
  },
  {
    question: "'Liberdade' para você significa principalmente...",
    options: [
      { text: "Liberdade de não ser limitado por expectativas, podendo viver múltiplas experiências.", type: 6 },
      { text: "Liberdade de não ter conflitos e pressões externas, vivendo em paz.", type: 8 },
      { text: "Liberdade de ser perfeito e íntegro, livre de falhas morais.", type: 0 }
    ]
  },
  {
    question: "Você entra em uma livraria. Qual seção te atrai primeiro?",
    options: [
      { text: "Biografias de pessoas bem-sucedidas e livros sobre produtividade.", type: 2 },
      { text: "Poesia, romances clássicos ou livros sobre arte e psicologia profunda.", type: 3 },
      { text: "Ciência, manuais técnicos ou livros que explicam como o mundo funciona.", type: 4 }
    ]
  },
  {
    question: "Um debate acalorado começa em um jantar. Sua atitude é:",
    options: [
      { text: "Participar com paixão, defendendo meu ponto de vista e desafiando os outros.", type: 7 },
      { text: "Tentar acalmar os ânimos, dizendo algo como 'gente, ambos os lados têm bons pontos'.", type: 8 },
      { text: "Analisar os argumentos de todos, mentalmente checando os fatos e a lógica.", type: 5 }
    ]
  },
  {
    question: "O que te faria recusar uma ótima oportunidade de emprego?",
    options: [
      { text: "Se o ambiente de trabalho parecesse antiético ou desalinhado com meus valores.", type: 0 },
      { text: "Se eu não sentisse uma conexão pessoal com a equipe ou o propósito da empresa.", type: 1 },
      { text: "Se o trabalho fosse monótono e não oferecesse espaço para novas ideias e aventuras.", type: 6 }
    ]
  },
  {
    question: "Você precisa aprender uma nova habilidade complexa. Como você começa?",
    options: [
      { text: "Buscando o melhor curso ou especialista e seguindo o método à risca.", type: 2 },
      { text: "Pesquisando tudo sobre o assunto primeiro, acumulando todo o conhecimento teórico antes de praticar.", type: 4 },
      { text: "Procurando um mentor ou um grupo de apoio para aprender junto e tirar dúvidas.", type: 5 }
    ]
  },
  {
    question: "O que mais te orgulha em si mesmo?",
    options: [
      { text: "Minha capacidade de me conectar profundamente com os sentimentos dos outros.", type: 1 },
      { text: "Minha identidade única e minha sensibilidade para a beleza e o significado da vida.", type: 3 },
      { text: "Minha resiliência e otimismo, mesmo diante das dificuldades.", type: 6 }
    ]
  },
  {
    question: "Diante de uma grande mudança na vida (ex: mudar de cidade), o que mais pesa?",
    options: [
      { text: "A possibilidade de perder o controle e a autonomia que eu tinha no lugar antigo.", type: 7 },
      { text: "A perturbação da minha paz e da minha rotina estabelecida.", type: 8 },
      { text: "A responsabilidade de fazer tudo da maneira 'certa' e perfeita no novo lugar.", type: 0 }
    ]
  },
  {
    question: "Qual crítica te ofenderia mais?",
    options: [
      { text: "Você é egoísta e não se importa com ninguém.", type: 1 },
      { text: "Você é igual a todo mundo, não tem nada de especial.", type: 3 },
      { text: "Você é ingênuo e vive fugindo da realidade.", type: 6 }
    ]
  },
  {
    question: "Em um projeto em grupo, qual papel você assume naturalmente?",
    options: [
      { text: "O Estrategista, que analisa os riscos e prepara planos de contingência.", type: 5 },
      { text: "O Visionário, que traz ideias novas e mantém a energia do grupo alta.", type: 6 },
      { text: "O Protetor, que garante que a equipe não seja explorada e que a justiça prevaleça.", type: 7 }
    ]
  },
  {
    question: "O que é mais importante em um líder?",
    options: [
      { text: "Sua competência e conhecimento inquestionável na área.", type: 4 },
      { text: "Sua integridade e seu compromisso com princípios justos.", type: 0 },
      { text: "Sua capacidade de inspirar e motivar a equipe para alcançar grandes resultados.", type: 2 }
    ]
  },
  {
    question: "Você ganha na loteria. Qual sua primeira atitude após garantir o dinheiro?",
    options: [
      { text: "Fazer uma lista de todas as pessoas que amo e que quero ajudar financeiramente.", type: 1 },
      { text: "Criar um plano de investimento sólido para garantir que o dinheiro renda e me dê segurança para o resto da vida.", type: 5 },
      { text: "Planejar imediatamente uma viagem ao redor do mundo ou comprar algo que sempre sonhei.", type: 6 }
    ]
  },
  {
    question: "Quando você sente que está sob ataque, sua defesa é:",
    options: [
      { text: "Se tornar mais frio e argumentativo, usando a lógica e os fatos para se proteger.", type: 4 },
      { text: "Confrontar diretamente a ameaça, de forma assertiva e sem recuar.", type: 7 },
      { text: "Se fechar em seu mundo interior, sentindo que ninguém realmente entende sua perspectiva.", type: 3 }
    ]
  },
  {
    question: "Como você define um 'dia bem aproveitado'?",
    options: [
      { text: "Um dia em que fui produtivo, avancei em minhas metas e causei uma boa impressão.", type: 2 },
      { text: "Um dia em que mantive a paz, evitei estresse e me senti conectado comigo mesmo e com os outros.", type: 8 },
      { text: "Um dia em que fiz tudo de acordo com o plano, de forma organizada e correta.", type: 0 }
    ]
  },
  {
    question: "Você descobre um novo hobby fascinante. Sua tendência é:",
    options: [
      { text: "Mergulhar de cabeça, querendo aprender tudo sobre ele o mais rápido possível para se tornar um especialista.", type: 4 },
      { text: "Se tornar um defensor leal desse hobby, tentando convencer todos os seus amigos a experimentá-lo também.", type: 5 },
      { text: "Usá-lo como uma forma de se expressar e se diferenciar dos outros.", type: 3 }
    ]
  },
  {
    question: "Se você tivesse que escolher um 'superpoder', qual seria?",
    options: [
      { text: "O poder de curar as pessoas e aliviar seu sofrimento.", type: 1 },
      { text: "O poder de ler mentes para entender o que as pessoas realmente pensam e se são confiáveis.", type: 5 },
      { text: "O poder da superforça para proteger os inocentes e impor a justiça.", type: 7 }
    ]
  },
  {
    question: "Qual ambiente de trabalho te deixaria mais esgotado?",
    options: [
      { text: "Um ambiente caótico, sem regras claras e com padrões de qualidade baixos.", type: 0 },
      { text: "Um ambiente onde o esforço individual não é reconhecido e a imagem não importa.", type: 2 },
      { text: "Um ambiente com conflitos e 'dramas' constantes, onde a paz é impossível.", type: 8 }
    ]
  },
  {
    question: "Qual é a sua relação com o passado?",
    options: [
      { text: "Frequentemente sinto nostalgia e penso que as coisas poderiam ter sido diferentes ou mais significativas.", type: 3 },
      { text: "O vejo como uma fonte de aprendizado e dados para tomar melhores decisões no futuro.", type: 4 },
      { text: "Tento não me prender a ele; o que importa são as possibilidades e alegrias do futuro.", type: 6 }
    ]
  },
  {
    question: "Você precisa dar um presente a alguém. Como você escolhe?",
    options: [
      { text: "Penso em algo que seja útil e que vá resolver uma necessidade prática da pessoa.", type: 1 },
      { text: "Busco algo que vá impressionar a pessoa e os outros, mostrando meu bom gosto e sucesso.", type: 2 },
      { text: "Procuro um presente que seja único e simbólico, que mostre o quanto eu entendo a essência daquela pessoa.", type: 3 }
    ]
  },
  {
    question: "Qual frase você se pega dizendo com mais frequência?",
    options: [
      { text: "Vamos pensar em todos os cenários possíveis...", type: 5 },
      { text: "Isso não é justo!", type: 7 },
      { text: "Qual é a maneira correta de fazer isso?", type: 0 }
    ]
  },
  {
    question: "Você tem uma semana inteira para fazer o que quiser, sozinho. Como você a aproveita?",
    options: [
      { text: "Criando algo, seja um texto, uma pintura, uma música; algo que expresse meus sentimentos.", type: 3 },
      { text: "Fazendo uma imersão profunda em um assunto que me fascina, com livros, cursos e documentários.", type: 4 },
      { text: "Planejando várias atividades diferentes, uma para cada dia, para experimentar um pouco de tudo.", type: 6 }
    ]
  },
  {
    question: "O que te faz sentir mais conectado a alguém?",
    options: [
      { text: "Quando a pessoa me pede ajuda e eu sinto que sou indispensável para ela.", type: 1 },
      { text: "Quando posso contar com a lealdade incondicional da pessoa, não importa o que aconteça.", type: 5 },
      { text: "Quando a pessoa respeita meu espaço e minha autonomia sem tentar me controlar.", type: 7 }
    ]
  },
  {
    question: "Qual é sua maior dificuldade em expressar raiva?",
    options: [
      { text: "Eu raramente a expresso diretamente, pois isso pode gerar conflito e quebrar a harmonia.", type: 8 },
      { text: "Eu a transformo em ressentimento e uma crítica interna severa sobre como as coisas deveriam ser.", type: 0 },
      { text: "Eu a sinto, mas tenho medo de expressá-la e acabar afastando as pessoas de quem preciso.", type: 1 }
    ]
  },
  {
    question: "Se sua vida fosse um filme, qual seria o gênero?",
    options: [
      { text: "Um filme de superação, mostrando como o trabalho duro leva ao sucesso e ao reconhecimento.", type: 2 },
      { text: "Um drama cult ou um filme de arte, cheio de simbolismo e profundidade emocional.", type: 3 },
      { text: "Um documentário investigativo, revelando a verdade por trás de um sistema complexo.", type: 4 }
    ]
  },
  {
    question: "Qual é sua filosofia de vida em uma frase?",
    options: [
      { text: "A vida é uma aventura cheia de possibilidades, e não quero perder nenhuma.", type: 6 },
      { text: "Os fortes devem proteger os fracos e lutar pelo que é certo.", type: 7 },
      { text: "A paz interior não é negociável.", type: 8 }
    ]
  }
];