'use client';

import QuizSection, { QuizQuestion } from '@/components/ui/QuizSection';

const questions: QuizQuestion[] = [
  // LESSON A: HI!
  // 1 VOCABULARY
  {
    id: 1,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'Complete: He is a _____. (profesor)',
    correctAnswer: 'teacher',
    type: 'text',
  },
  {
    id: 2,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'David is his _____ name. (nombre de pila)',
    correctAnswer: 'first',
    type: 'text',
  },
  {
    id: 3,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'Smith is his _____ name. (apellido)',
    correctAnswer: 'last',
    type: 'text',
  },
  {
    id: 4,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'Match the number: seven =',
    options: ['0', '1', '4', '7', '8'],
    correctAnswer: '7',
    type: 'multiple',
  },
  {
    id: 5,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'Match the number: zero =',
    options: ['0', '1', '2', '4', '8'],
    correctAnswer: '0',
    type: 'multiple',
  },
  {
    id: 6,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Vocabulary',
    question: 'Match the number: eight =',
    options: ['0', '2', '4', '7', '8'],
    correctAnswer: '8',
    type: 'multiple',
  },
  // 2 CONVERSATION
  {
    id: 7,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Conversation',
    question: '"Hello. My name is Mrs. Lane." → "Nice to meet you, Mrs. Lane. My name is Yukiko." → Next line:',
    options: ['Are you a student in my class?', 'How do you spell that?', 'Goodbye!', "What's your nickname?"],
    correctAnswer: 'Are you a student in my class?',
    type: 'multiple',
  },
  {
    id: 8,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Conversation',
    question: '"My last name is Diaz." → "How do you spell Diaz?" → Answer:',
    correctAnswer: 'D-I-A-Z',
    type: 'text',
  },
  // 3 GRAMMAR
  {
    id: 9,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'It _____ my book.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'is',
    type: 'multiple',
  },
  {
    id: 10,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'She _____ the teacher.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'is',
    type: 'multiple',
  },
  {
    id: 11,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'I _____ Tina.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'am',
    type: 'multiple',
  },
  {
    id: 12,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'They _____ my classmates.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 13,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'You _____ a student.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'are',
    type: 'multiple',
  },
  {
    id: 14,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'Rewrite with correct possessive: "You are my classmate. Her first name is Linda." →',
    options: ['His first name is Linda.', 'Your first name is Linda.', 'My first name is Linda.', 'Their first name is Linda.'],
    correctAnswer: 'Your first name is Linda.',
    type: 'multiple',
  },
  {
    id: 15,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'Rewrite with correct possessive: "Carlos is a student. Its last name is Diaz." →',
    options: ['Her last name is Diaz.', 'Your last name is Diaz.', 'His last name is Diaz.', 'Their last name is Diaz.'],
    correctAnswer: 'His last name is Diaz.',
    type: 'multiple',
  },
  {
    id: 16,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'Contraction: She is my classmate. →',
    correctAnswer: "She's my classmate.",
    type: 'text',
  },
  {
    id: 17,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson A - Grammar',
    question: 'Contraction: He is a student. →',
    correctAnswer: "He's a student.",
    type: 'text',
  },
  // LESSON B: MY FAVORITES
  {
    id: 18,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: 'Are you a teacher? →',
    options: ["No, I'm not. I'm a student.", "No, he isn't. He's from Cuba.", "Yes, it is.", "No, she isn't. She's a singer."],
    correctAnswer: "No, I'm not. I'm a student.",
    type: 'multiple',
  },
  {
    id: 19,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: 'Is Rihanna a soccer player? →',
    options: ["No, I'm not. I'm a student.", "Yes, she is.", "No, she isn't. She's a singer.", "Yes, it is."],
    correctAnswer: "No, she isn't. She's a singer.",
    type: 'multiple',
  },
  {
    id: 20,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Vocabulary & Grammar',
    question: 'Is Carlos from Mexico? →',
    options: ["Yes, he is.", "No, he isn't. He's from Cuba.", "Yes, it is.", "No, I'm not."],
    correctAnswer: "No, he isn't. He's from Cuba.",
    type: 'multiple',
  },
  {
    id: 21,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Reading',
    question: 'Is Mike a nickname for Michael?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    type: 'multiple',
  },
  {
    id: 22,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Reading',
    question: 'Is Sue a nickname for Elizabeth?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    type: 'multiple',
  },
  {
    id: 23,
    section: 'Unit 1: Introductions',
    subsection: 'Lesson B - Reading',
    question: 'His name _____ Yoshihiko Sato. Everyone calls him Yoshi.',
    options: ['am', 'is', 'are'],
    correctAnswer: 'is',
    type: 'multiple',
  },
];

export default function Unit1QuizPage() {
  return (
    <QuizSection
      title="Unit 1: Introductions"
      icon="hand"
      description="Vocabulario, conversación y gramática sobre presentaciones"
      questions={questions}
      backLink="/basic01/quiz"
      backLabel="Quiz B01"
      accentColor="from-blue-600 to-indigo-600"
    />
  );
}
