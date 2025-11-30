'use client';

import QuizSection, { QuizQuestion } from '@/components/ui/QuizSection';

const questions: QuizQuestion[] = [
  {
    id: 1,
    section: 'Matching',
    subsection: 'Subject Pronouns → BE',
    question: 'Match each subject pronoun with the correct form of BE:',
    matchingPairs: [
      { left: 'I', right: 'am' },
      { left: 'He/She/It', right: 'is' },
      { left: 'You/We/They', right: 'are' },
    ],
    matchingOptions: ['am', 'is', 'are'],
    correctAnswer: 'I→am,He/She/It→is,You/We/They→are',
    type: 'matching',
  },
  {
    id: 2,
    section: 'Matching',
    subsection: 'Countries → Nationalities',
    question: 'Match each country with its nationality:',
    matchingPairs: [
      { left: 'Japan', right: 'Japanese' },
      { left: 'Brazil', right: 'Brazilian' },
      { left: 'France', right: 'French' },
      { left: 'Mexico', right: 'Mexican' },
      { left: 'China', right: 'Chinese' },
    ],
    matchingOptions: ['Japanese', 'Brazilian', 'French', 'Mexican', 'Chinese'],
    correctAnswer: 'Japan→Japanese,Brazil→Brazilian,France→French,Mexico→Mexican,China→Chinese',
    type: 'matching',
  },
  {
    id: 3,
    section: 'Matching',
    subsection: 'Countries → Languages',
    question: 'Match each country with its main language:',
    matchingPairs: [
      { left: 'United States', right: 'English' },
      { left: 'Spain', right: 'Spanish' },
      { left: 'Germany', right: 'German' },
      { left: 'Italy', right: 'Italian' },
      { left: 'Portugal', right: 'Portuguese' },
    ],
    matchingOptions: ['English', 'Spanish', 'German', 'Italian', 'Portuguese'],
    correctAnswer: 'United States→English,Spain→Spanish,Germany→German,Italy→Italian,Portugal→Portuguese',
    type: 'matching',
  },
  {
    id: 4,
    section: 'Matching',
    subsection: 'Possessive Adjectives',
    question: 'Match each subject pronoun with its possessive adjective:',
    matchingPairs: [
      { left: 'I', right: 'my' },
      { left: 'you', right: 'your' },
      { left: 'he', right: 'his' },
      { left: 'she', right: 'her' },
      { left: 'they', right: 'their' },
    ],
    matchingOptions: ['my', 'your', 'his', 'her', 'their'],
    correctAnswer: 'I→my,you→your,he→his,she→her,they→their',
    type: 'matching',
  },
  {
    id: 5,
    section: 'Matching',
    subsection: 'Demonstratives',
    question: 'Match each demonstrative with its usage:',
    matchingPairs: [
      { left: 'this', right: 'singular + near' },
      { left: 'that', right: 'singular + far' },
      { left: 'these', right: 'plural + near' },
      { left: 'those', right: 'plural + far' },
    ],
    matchingOptions: ['singular + near', 'singular + far', 'plural + near', 'plural + far'],
    correctAnswer: 'this→singular + near,that→singular + far,these→plural + near,those→plural + far',
    type: 'matching',
  },
  {
    id: 6,
    section: 'Matching',
    subsection: 'Adjectives → Opposites',
    question: 'Match each adjective with its opposite:',
    matchingPairs: [
      { left: 'big', right: 'small' },
      { left: 'old', right: 'new' },
      { left: 'expensive', right: 'cheap' },
      { left: 'beautiful', right: 'ugly' },
      { left: 'clean', right: 'dirty' },
    ],
    matchingOptions: ['small', 'new', 'cheap', 'ugly', 'dirty'],
    correctAnswer: 'big→small,old→new,expensive→cheap,beautiful→ugly,clean→dirty',
    type: 'matching',
  },
  {
    id: 7,
    section: 'Matching',
    subsection: 'Questions → Answers',
    question: 'Match each question with its correct answer:',
    matchingPairs: [
      { left: 'What is your name?', right: 'My name is John.' },
      { left: 'Where are you from?', right: 'I am from Peru.' },
      { left: 'Is she a teacher?', right: 'Yes, she is.' },
      { left: 'Are they students?', right: 'No, they aren\'t.' },
    ],
    matchingOptions: ['My name is John.', 'I am from Peru.', 'Yes, she is.', 'No, they aren\'t.'],
    correctAnswer: 'What is your name?→My name is John.,Where are you from?→I am from Peru.,Is she a teacher?→Yes, she is.,Are they students?→No, they aren\'t.',
    type: 'matching',
  },
  {
    id: 8,
    section: 'Matching',
    subsection: 'Numbers',
    question: 'Match each number with its word:',
    matchingPairs: [
      { left: '0', right: 'zero' },
      { left: '7', right: 'seven' },
      { left: '12', right: 'twelve' },
      { left: '15', right: 'fifteen' },
      { left: '20', right: 'twenty' },
    ],
    matchingOptions: ['zero', 'seven', 'twelve', 'fifteen', 'twenty'],
    correctAnswer: '0→zero,7→seven,12→twelve,15→fifteen,20→twenty',
    type: 'matching',
  },
];

export default function MatchingQuizPage() {
  return (
    <QuizSection
      title="Matching"
      icon="link"
      description="Relaciona los elementos de cada columna"
      questions={questions}
      backLink="/basic01/quiz"
      backLabel="Quiz B01"
      accentColor="from-cyan-600 to-blue-600"
    />
  );
}
