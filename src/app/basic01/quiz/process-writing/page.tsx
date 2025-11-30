'use client';

import QuizSection, { QuizQuestion } from '@/components/ui/QuizSection';

const questions: QuizQuestion[] = [
  {
    id: 1,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Complete: Her _____ name is Maya.',
    options: ['first', 'last', 'Our', 'student'],
    correctAnswer: 'first',
    type: 'multiple',
  },
  {
    id: 2,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Complete: Their _____ is Jimenez.',
    options: ['first name', 'last name', 'Our', "He's"],
    correctAnswer: 'last name',
    type: 'multiple',
  },
  {
    id: 3,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Complete: _____ a student.',
    options: ['Our', "He's", 'last name', 'first name'],
    correctAnswer: "He's",
    type: 'multiple',
  },
  {
    id: 4,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Circle correct: My favorite colors is / are red and blue.',
    options: ['is', 'are'],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 5,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Circle correct: Our favorite teacher is / are Mr. Diaz.',
    options: ['is', 'are'],
    correctAnswer: 'is',
    type: 'multiple',
  },
  {
    id: 6,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Circle correct: His favorite sports is / are soccer and tennis.',
    options: ['is', 'are'],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 7,
    section: 'Process Writing',
    subsection: 'Grammar Review',
    question: 'Circle correct: We is / are friends with Leo.',
    options: ['is', 'are'],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 8,
    section: 'Process Writing',
    subsection: 'Apostrophes',
    question: 'Write the contraction: I am →',
    correctAnswer: "I'm",
    type: 'text',
  },
  {
    id: 9,
    section: 'Process Writing',
    subsection: 'Apostrophes',
    question: 'Write the contraction: he is →',
    correctAnswer: "he's",
    type: 'text',
  },
  {
    id: 10,
    section: 'Process Writing',
    subsection: 'Apostrophes',
    question: 'Write the contraction: we are →',
    correctAnswer: "we're",
    type: 'text',
  },
  {
    id: 11,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: those / keys / Are / my →',
    correctAnswer: 'Are those my keys?',
    type: 'text',
  },
  {
    id: 12,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: laptop / to use / Is / easy / that →',
    correctAnswer: 'Is that laptop easy to use?',
    type: 'text',
  },
  {
    id: 13,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: messy / that / Is / classroom →',
    correctAnswer: 'Is that classroom messy?',
    type: 'text',
  },
  {
    id: 14,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: your / these / Are / headphones →',
    correctAnswer: 'Are these your headphones?',
    type: 'text',
  },
  {
    id: 15,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: comfortable / boots / those / Are →',
    correctAnswer: 'Are those boots comfortable?',
    type: 'text',
  },
  {
    id: 16,
    section: 'Process Writing',
    subsection: 'Demonstratives',
    question: 'Unscramble: TV / expensive / this / Is →',
    correctAnswer: 'Is this TV expensive?',
    type: 'text',
  },
  {
    id: 17,
    section: 'Process Writing',
    subsection: 'Product Review',
    question: 'Complete review: "_____ is my new backpack. It\'s an expensive product."',
    options: ['This', 'These', 'Those', 'That'],
    correctAnswer: 'This',
    type: 'multiple',
  },
  {
    id: 18,
    section: 'Process Writing',
    subsection: 'Product Review',
    question: 'Complete review: "My favorite thing is the color! _____ blue is popular now."',
    options: ['This', 'These', 'That', 'Those'],
    correctAnswer: 'That',
    type: 'multiple',
  },
  {
    id: 19,
    section: 'Process Writing',
    subsection: 'Product Review',
    question: 'Complete review: "_____ pockets are very big, too."',
    options: ['This', 'These', 'That', 'It'],
    correctAnswer: 'These',
    type: 'multiple',
  },
  {
    id: 20,
    section: 'Process Writing',
    subsection: 'Product Review',
    question: 'Complete review: "_____ comfortable and easy to carry."',
    options: ["It's", 'Its', 'This', 'That'],
    correctAnswer: "It's",
    type: 'multiple',
  },
];

export default function ProcessWritingQuizPage() {
  return (
    <QuizSection
      title="Process Writing"
      icon="writing"
      description="Grammar Review, Apostrophes, Demonstratives, Product Reviews"
      questions={questions}
      backLink="/basic01/quiz"
      backLabel="Quiz B01"
      accentColor="from-amber-600 to-orange-600"
    />
  );
}
