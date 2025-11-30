'use client';

import QuizSection, { QuizQuestion } from '@/components/ui/QuizSection';

const questions: QuizQuestion[] = [
  // LESSON A: AROUND THE WORLD
  {
    id: 1,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Yusef is from Ankara, _____.',
    options: ['Turkish', 'Turkey'],
    correctAnswer: 'Turkey',
    type: 'multiple',
  },
  {
    id: 2,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Diego is from _____.',
    options: ['Brazil', 'Brazilian'],
    correctAnswer: 'Brazil',
    type: 'multiple',
  },
  {
    id: 3,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Mei Li is _____.',
    options: ['China', 'Chinese'],
    correctAnswer: 'Chinese',
    type: 'multiple',
  },
  {
    id: 4,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Ryan is from Canberra. He\'s _____.',
    options: ['Australian', 'Australia'],
    correctAnswer: 'Australian',
    type: 'multiple',
  },
  {
    id: 5,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Monica is from London. She is _____.',
    correctAnswer: 'British',
    type: 'text',
  },
  {
    id: 6,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Mateo is from Mexico City. He is _____.',
    correctAnswer: 'Mexican',
    type: 'text',
  },
  {
    id: 7,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Vocabulary',
    question: 'Greg is from the United States. He is _____.',
    correctAnswer: 'American',
    type: 'text',
  },
  {
    id: 8,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Conversation',
    question: 'Where are you _____? → I\'m Spanish. I\'m from León.',
    options: ['from', 'in', 'at'],
    correctAnswer: 'from',
    type: 'multiple',
  },
  {
    id: 9,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: 'Hello? Hello? _____ is this?',
    options: ["Who's", "Where", "Who"],
    correctAnswer: 'Who',
    type: 'multiple',
  },
  {
    id: 10,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: '_____ are you? (asking about location)',
    options: ["Who's", "Where", "Where's"],
    correctAnswer: 'Where',
    type: 'multiple',
  },
  {
    id: 11,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: "You're in France? _____ in France?",
    options: ['Where', "Where's", "Who's"],
    correctAnswer: "Where's",
    type: 'multiple',
  },
  {
    id: 12,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: '_____ with you?',
    options: ['Where', 'Who', "Who's"],
    correctAnswer: "Who's",
    type: 'multiple',
  },
  {
    id: 13,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: "I'm _____ Mexico. (preposition)",
    options: ['in', 'at', 'from'],
    correctAnswer: 'in',
    type: 'multiple',
  },
  {
    id: 14,
    section: 'Unit 2: Countries',
    subsection: 'Lesson A - Grammar',
    question: "We're _____ the beach today. (preposition)",
    options: ['in', 'at', 'from'],
    correctAnswer: 'at',
    type: 'multiple',
  },
  // LESSON B: IT'S A BIG CITY
  {
    id: 15,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: 'There are many people in the city. It _____ very crowded.',
    options: ['is', "isn't", 'are', "aren't"],
    correctAnswer: 'is',
    type: 'multiple',
  },
  {
    id: 16,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: "My city is exciting. It _____ boring.",
    options: ['is', "isn't", 'are', "aren't"],
    correctAnswer: "isn't",
    type: 'multiple',
  },
  {
    id: 17,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: "The streets are very old. They _____ new.",
    options: ['is', "isn't", 'are', "aren't"],
    correctAnswer: "aren't",
    type: 'multiple',
  },
  {
    id: 18,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: 'The people here always say hello. They _____ friendly.',
    options: ['is', "isn't", 'are', "aren't"],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 19,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Reading',
    question: 'Correct the spelling: "capatal" →',
    correctAnswer: 'capital',
    type: 'text',
  },
  {
    id: 20,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Reading',
    question: 'Correct the spelling: "beutiful" →',
    correctAnswer: 'beautiful',
    type: 'text',
  },
  {
    id: 21,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Reading',
    question: 'Correct the spelling: "croded" →',
    correctAnswer: 'crowded',
    type: 'text',
  },
  {
    id: 22,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Reading',
    question: 'Correct the spelling: "friendley" →',
    correctAnswer: 'friendly',
    type: 'text',
  },
  {
    id: 23,
    section: 'Unit 2: Countries',
    subsection: 'Lesson B - Reading',
    question: 'Correct the spelling: "intresting" →',
    correctAnswer: 'interesting',
    type: 'text',
  },
];

export default function Unit2QuizPage() {
  return (
    <QuizSection
      title="Unit 2: Countries"
      icon="globe"
      description="Países, nacionalidades, ciudades y descripciones"
      questions={questions}
      backLink="/basic01/quiz"
      backLabel="Quiz B01"
      accentColor="from-green-600 to-teal-600"
    />
  );
}
