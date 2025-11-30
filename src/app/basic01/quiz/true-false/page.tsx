'use client';

import QuizSection, { QuizQuestion } from '@/components/ui/QuizSection';

const questions: QuizQuestion[] = [
  {
    id: 1,
    section: 'True or False',
    subsection: 'Subject Pronouns & BE',
    question: '"She am a student" is correct.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 2,
    section: 'True or False',
    subsection: 'Subject Pronouns & BE',
    question: '"I is from Mexico" is correct.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 3,
    section: 'True or False',
    subsection: 'Subject Pronouns & BE',
    question: '"They are my classmates" is correct.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 4,
    section: 'True or False',
    subsection: 'Subject Pronouns & BE',
    question: '"We is teachers" is correct.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 5,
    section: 'True or False',
    subsection: 'Subject Pronouns & BE',
    question: '"He is a doctor" is correct.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 6,
    section: 'True or False',
    subsection: 'Countries & Nationalities',
    question: 'Someone from Japan is "Japanian".',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 7,
    section: 'True or False',
    subsection: 'Countries & Nationalities',
    question: 'The capital of France is Paris.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 8,
    section: 'True or False',
    subsection: 'Countries & Nationalities',
    question: 'Someone from Brazil is Brazilian.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 9,
    section: 'True or False',
    subsection: 'Countries & Nationalities',
    question: 'The language in China is Chinese.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 10,
    section: 'True or False',
    subsection: 'Countries & Nationalities',
    question: 'Someone from Germany is "Germanian".',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 11,
    section: 'True or False',
    subsection: 'Possessives & Demonstratives',
    question: '"This" is used for things close to you.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 12,
    section: 'True or False',
    subsection: 'Possessives & Demonstratives',
    question: '"Those" is used for one thing far away.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 13,
    section: 'True or False',
    subsection: 'Possessives & Demonstratives',
    question: '"Their" and "They\'re" mean the same thing.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
  {
    id: 14,
    section: 'True or False',
    subsection: 'Possessives & Demonstratives',
    question: '"Its" (without apostrophe) shows possession.',
    correctAnswer: 'True',
    type: 'truefalse',
  },
  {
    id: 15,
    section: 'True or False',
    subsection: 'Possessives & Demonstratives',
    question: '"Your" and "You\'re" can be used interchangeably.',
    correctAnswer: 'False',
    type: 'truefalse',
  },
];

export default function TrueFalseQuizPage() {
  return (
    <QuizSection
      title="True or False"
      icon="checkCircle"
      description="Evalúa si las oraciones son correctas o incorrectas"
      questions={questions}
      backLink="/basic01/quiz"
      backLabel="Quiz B01"
      accentColor="from-emerald-600 to-green-600"
    />
  );
}
