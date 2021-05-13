const dados = [
  {
    id: '1',
    nome: 'Ivo Souto Maior',
    sobrenome: 'Cipriano',
    cargo: 'Gerente',
    setor: 'Compras',
    tempo: '8',
  },
  {
    id: '2',
    nome: 'KellY Mendes',
    sobrenome: 'Torrado',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '13',
  },
  {
    id: '3',
    nome: 'Erica Balsemão Lindim',
    sobrenome: 'Torrado',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '4',
  },
  {
    id: '4',
    nome: 'Ivanilson Rebocho',
    sobrenome: 'Muxagata',
    cargo: 'Técnico',
    setor: 'Suporte',
    tempo: '9',
  },
  {
    id: '5',
    nome: 'Matias Parente',
    sobrenome: 'Taveiros',
    cargo: 'Soldador',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '6',
    nome: 'Thayra Carvalhoso',
    sobrenome: 'Girão',
    cargo: 'Carpinteiro',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '7',
    nome: 'Roberto Sobreira Prado',
    sobrenome: 'Prado',
    cargo: 'Programador',
    setor: 'T.I',
    tempo: '6',
  },
  {
    id: '8',
    nome: 'Fernando Lessa',
    sobrenome: 'Igrejas',
    cargo: 'Cozinheiro',
    setor: 'Cozinha',
    tempo: '5',
  },
  {
    id: '9',
    nome: 'Maribel Mateus',
    sobrenome: 'Feitosa',
    cargo: 'Enfermeiro',
    setor: 'Saéde',
    tempo: '10',
  },
  {
    id: '10',
    nome: 'Ayesha Carqueijeiro',
    sobrenome: 'Loureiro',
    cargo: 'Compras',
    setor: 'Financeiro',
    tempo: '3',
  },

  {
    id: '11',
    nome: 'Rocha Miranda',
    sobrenome: 'Cipra',
    cargo: 'Gerente',
    setor: 'Compras',
    tempo: '8',
  },
  {
    id: '12',
    nome: 'Mara Mendes',
    sobrenome: 'Tarra',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '13',
  },
  {
    id: '13',
    nome: 'Pedro Balsemão',
    sobrenome: 'Torrado',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '4',
  },
  {
    id: '14',
    nome: 'Ivanildo Rebocho',
    sobrenome: 'Torta',
    cargo: 'Técnico',
    setor: 'Suporte',
    tempo: '9',
  },
  {
    id: '15',
    nome: 'Matos Parri',
    sobrenome: 'Taveira',
    cargo: 'Soldador',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '16',
    nome: 'Rosa Maria',
    sobrenome: 'Girando',
    cargo: 'Carpinteiro',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '17',
    nome: 'Roberta Prado',
    sobrenome: 'Rosa',
    cargo: 'Programador',
    setor: 'T.I',
    tempo: '6',
  },
  {
    id: '18',
    nome: 'Fernanda Alessa',
    sobrenome: 'Igora',
    cargo: 'Cozinheiro',
    setor: 'Cozinha',
    tempo: '5',
  },
  {
    id: '19',
    nome: 'Maribela Maria',
    sobrenome: 'Feitosa',
    cargo: 'Enfermeiro',
    setor: 'Saéde',
    tempo: '10',
  },
  {
    id: '20',
    nome: 'Amorim Carrilho',
    sobrenome: 'Loureiro',
    cargo: 'Compras',
    setor: 'Financeiro',
    tempo: '3',
  },

  {
    id: '21',
    nome: 'Delfim Uchoa',
    sobrenome: 'Vilante',
    cargo: 'Gerente',
    setor: 'Compras',
    tempo: '8',
  },
  {
    id: '22',
    nome: 'Sehajpreet Vasconcelos',
    sobrenome: 'Vargas',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '13',
  },
  {
    id: '23',
    nome: 'Liam Onofre',
    sobrenome: 'Cardim',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '4',
  },
  {
    id: '24',
    nome: 'Karen Camarinho',
    sobrenome: 'Amaro',
    cargo: 'Técnico',
    setor: 'Suporte',
    tempo: '9',
  },
  {
    id: '25',
    nome: 'Matias Gorunk',
    sobrenome: 'Xavier',
    cargo: 'Soldador',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '26',
    nome: 'Maria Carvalhosa',
    sobrenome: 'Norberta',
    cargo: 'Carpinteira',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '27',
    nome: 'Roberta Sobreira',
    sobrenome: 'Prada',
    cargo: 'Programador',
    setor: 'T.I',
    tempo: '6',
  },
  {
    id: '28',
    nome: 'Fernanda Alessa',
    sobrenome: 'Igrid',
    cargo: 'Cozinheiro',
    setor: 'Cozinha',
    tempo: '5',
  },
  {
    id: '29',
    nome: 'Feitosa Mateus',
    sobrenome: 'Maribel',
    cargo: 'Enfermeiro',
    setor: 'Saéde',
    tempo: '10',
  },
  {
    id: '30',
    nome: 'Loureiro Ayesha',
    sobrenome: 'Carqueijeiro',
    cargo: 'Compras',
    setor: 'Financeiro',
    tempo: '3',
  },

  {
    id: '31',
    nome: 'Ivan Souto',
    sobrenome: 'Maior',
    cargo: 'Gerente',
    setor: 'Compras',
    tempo: '8',
  },
  {
    id: '32',
    nome: 'Kellyane Mendes',
    sobrenome: 'Tornado',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '13',
  },
  {
    id: '33',
    nome: 'Erico Balsemão',
    sobrenome: 'Lindim',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '4',
  },
  {
    id: '34',
    nome: 'Mario Ivanilson',
    sobrenome: 'Rebocho',
    cargo: 'Técnico',
    setor: 'Suporte',
    tempo: '9',
  },
  {
    id: '35',
    nome: 'Marcos Taveiros',
    sobrenome: 'Parente',
    cargo: 'Soldador',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '36',
    nome: 'Tiara Vieira',
    sobrenome: 'Girado',
    cargo: 'Carpinteiro',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '37',
    nome: 'Pedro Sobral',
    sobrenome: 'Mattos',
    cargo: 'Programador',
    setor: 'T.I',
    tempo: '6',
  },
  {
    id: '38',
    nome: 'Fernandina Lessandra',
    sobrenome: 'Iguara',
    cargo: 'Cozinheiro',
    setor: 'Cozinha',
    tempo: '5',
  },
  {
    id: '39',
    nome: 'Maribela Feitosa',
    sobrenome: 'Rubra',
    cargo: 'Enfermeiro',
    setor: 'Saéde',
    tempo: '10',
  },
  {
    id: '40',
    nome: 'Avira Caras',
    sobrenome: 'Bocas',
    cargo: 'Compras',
    setor: 'Financeiro',
    tempo: '3',
  },

  {
    id: '41',
    nome: 'Ivanildo Souza',
    sobrenome: 'Brasil',
    cargo: 'Gerente',
    setor: 'Compras',
    tempo: '8',
  },
  {
    id: '42',
    nome: 'Karla Mendanha',
    sobrenome: 'Torrado',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '13',
  },
  {
    id: '43',
    nome: 'Eripedes Balsa',
    sobrenome: 'Torres',
    cargo: 'Arrumadeira',
    setor: 'Suporte',
    tempo: '4',
  },
  {
    id: '44',
    nome: 'Ivanilson Faria',
    sobrenome: 'Rocha',
    cargo: 'Técnico',
    setor: 'Suporte',
    tempo: '9',
  },
  {
    id: '45',
    nome: 'Matias Pardo',
    sobrenome: 'Taveira',
    cargo: 'Soldador',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '46',
    nome: 'Taís Carvalhosa',
    sobrenome: 'Giry',
    cargo: 'Carpinteiro',
    setor: 'Suporte',
    tempo: '8',
  },
  {
    id: '47',
    nome: 'Roberto Patas',
    sobrenome: 'Paranhos',
    cargo: 'Programador',
    setor: 'T.I',
    tempo: '6',
  },
  {
    id: '48',
    nome: 'Fernanda Lessandro',
    sobrenome: 'Igarati',
    cargo: 'Cozinheiro',
    setor: 'Cozinha',
    tempo: '5',
  },
  {
    id: '49',
    nome: 'Marrilda Maura',
    sobrenome: 'Feira',
    cargo: 'Enfermeiro',
    setor: 'Saéde',
    tempo: '10',
  },
  {
    id: '50',
    nome: 'Amoré Carlos',
    sobrenome: 'Loureira',
    cargo: 'Compras',
    setor: 'Financeiro',
    tempo: '3',
  },
]
export default dados
