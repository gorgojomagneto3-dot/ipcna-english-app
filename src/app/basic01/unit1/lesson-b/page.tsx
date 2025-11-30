import LessonLayout from '@/components/ui/LessonLayout';
import VocabularyTable from '@/components/ui/VocabularyTable';
import DialogueBox from '@/components/ui/DialogueBox';
import GrammarTable from '@/components/ui/GrammarTable';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ImageCard from '@/components/ui/ImageCard';
import { images } from '@/lib/images';
import { Icons } from '@/components/ui/Icons';

export default function Unit1LessonB() {
  return (
    <LessonLayout
      unitNumber={1}
      unitTitle="Introductions"
      lessonLetter="B"
      lessonTitle="My Favorites (Mis favoritos)"
      objectives={[
        'Describir tus cosas favoritas usando adjetivos',
        'Hablar sobre programas de TV, actores y entretenimiento',
        'Expresar opiniones usando adjetivos descriptivos',
      ]}
      prevLesson={{ href: '/basic01/unit1/lesson-a', label: 'Lección A: Hi!' }}
      nextLesson={{ href: '/basic01/unit2/lesson-a', label: 'Unidad 2: Around the World' }}
      headerImage={images.headphonesMusic}
    >

      {/* Vocabulary: Entertainment */}
      <VocabularyTable
        title="Vocabulario: Entretenimiento (Entertainment)"
        items={[
          { english: 'actor / actress', spanish: 'actor / actriz', example: 'My favorite actor is Tom Hanks.' },
          { english: 'artist', spanish: 'artista', example: 'Picasso is a famous artist.' },
          { english: 'author / writer', spanish: 'autor / escritor', example: 'She is my favorite author.' },
          { english: 'singer', spanish: 'cantante', example: 'He is a pop singer.' },
          { english: '(soccer) player', spanish: 'jugador (de fútbol)', example: 'Messi is a soccer player.' },
          { english: 'movie', spanish: 'película', example: 'My favorite movie is Titanic.' },
          { english: 'favorite (TV show)', spanish: 'programa de TV favorito', example: 'My favorite TV show is Friends.' },
          { english: 'friend', spanish: 'amigo/a', example: 'She is my best friend.' },
          { english: 'be friends with', spanish: 'ser amigo de', example: 'I am friends with Maria.' },
        ]}
      />

      {/* Music Types */}
      <VocabularyTable
        title="Tipos de Música (Music)"
        items={[
          { english: 'classical music', spanish: 'música clásica', example: 'I love classical music.' },
          { english: 'pop music', spanish: 'música pop', example: 'Pop music is very popular.' },
          { english: 'rap', spanish: 'rap', example: 'Rap is exciting.' },
          { english: 'rock', spanish: 'rock', example: 'Rock music is my favorite.' },
        ]}
      />

      {/* Sports Images */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.target("w-5 h-5")} Sports - Deportes</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <ImageCard 
                src={images.soccerBall}
                alt="Soccer ball"
                aspectRatio="square"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Soccer / Football</p>
            </div>
            <div className="text-center">
              <ImageCard 
                src={images.basketball}
                alt="Basketball"
                aspectRatio="square"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Basketball</p>
            </div>
            <div className="text-center">
              <ImageCard 
                src={images.tennis}
                alt="Tennis"
                aspectRatio="square"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Tennis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sports */}
      <VocabularyTable
        title="Deportes (Sports)"
        items={[
          { english: 'sport', spanish: 'deporte', example: 'Soccer is my favorite sport.' },
          { english: 'baseball', spanish: 'béisbol', example: 'Baseball is popular in the US.' },
          { english: 'basketball', spanish: 'baloncesto', example: 'I play basketball.' },
          { english: 'soccer', spanish: 'fútbol', example: 'Soccer is exciting!' },
          { english: 'tennis', spanish: 'tenis', example: 'Tennis is fun.' },
          { english: 'team', spanish: 'equipo', example: 'My favorite team is Real Madrid.' },
        ]}
      />

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo: Talking About Favorites"
        situation="Dos amigos hablan sobre sus programas de TV favoritos."
        lines={[
          { speaker: 'A', text: "What's your favorite TV show?" },
          { speaker: 'B', text: 'My favorite TV show is "Stranger Things." It\'s really exciting!' },
          { speaker: 'A', text: "Oh, I like that show too! Who's your favorite actor in it?" },
          { speaker: 'B', text: "My favorite is Millie Bobby Brown. She's cool!" },
          { speaker: 'A', text: "I agree. She's great!" },
        ]}
      />

      {/* Grammar Notes: Yes/No Questions with BE */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.book("w-5 h-5")} Grammar Notes: Yes / No Questions with be</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 py-2 text-left">be</th>
                  <th className="px-3 py-2 text-left">Subject</th>
                  <th className="px-3 py-2 text-left">Affirmative</th>
                  <th className="px-3 py-2 text-left">Negative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr><td className="px-3 py-2">Am</td><td className="px-3 py-2">I in this class?</td><td className="px-3 py-2">Yes, you are.</td><td className="px-3 py-2">No, you&apos;re not. / No, you aren&apos;t.</td></tr>
                <tr><td className="px-3 py-2">Are</td><td className="px-3 py-2">you a student?</td><td className="px-3 py-2">Yes, I am.</td><td className="px-3 py-2">No, I&apos;m not.</td></tr>
                <tr><td className="px-3 py-2">Is</td><td className="px-3 py-2">he / she a teacher?</td><td className="px-3 py-2">Yes, he/she is.</td><td className="px-3 py-2">No, he&apos;s not. / No, he isn&apos;t.</td></tr>
                <tr><td className="px-3 py-2">Is</td><td className="px-3 py-2">it her real name?</td><td className="px-3 py-2">Yes, it is.</td><td className="px-3 py-2">No, it&apos;s not. / No, it isn&apos;t.</td></tr>
                <tr><td className="px-3 py-2">Are</td><td className="px-3 py-2">we in this class?</td><td className="px-3 py-2">Yes, we are.</td><td className="px-3 py-2">No, we&apos;re not. / No, we aren&apos;t.</td></tr>
                <tr><td className="px-3 py-2">Are</td><td className="px-3 py-2">they students?</td><td className="px-3 py-2">Yes, they are.</td><td className="px-3 py-2">No, they&apos;re not. / No, they aren&apos;t.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">*In spoken English, the negative form with &quot;not&quot; (you&apos;re not, he&apos;s not) is more common.</p>
        </div>
      </div>

      {/* Grammar Exercise A: Yes/No Questions */}
      <ExerciseCard
        title="Grammar Exercise A: Yes/No Questions"
        instructions="Read each question. Circle the correct answer."
        exercises={[
          {
            question: 'Is your name John?',
            options: ["No, it's not.", "No, I'm not."],
            correctAnswer: "No, it's not.",
          },
          {
            question: 'Are you from Canada?',
            options: ["No, you're not.", "No, I'm not."],
            correctAnswer: "No, I'm not.",
          },
          {
            question: 'Is Ms. Kim the teacher?',
            options: ['Yes, she is.', 'Yes, it is.'],
            correctAnswer: 'Yes, she is.',
          },
          {
            question: 'Are you friends with Jane?',
            options: ['Yes, I am.', "Yes, I'm friends."],
            correctAnswer: 'Yes, I am.',
          },
          {
            question: 'Am I late for class?',
            options: ["No, it's not.", "No, you aren't."],
            correctAnswer: "No, you aren't.",
          },
          {
            question: 'Are Yuki and Carlos your friends?',
            options: ['Yes, we are.', "No, they're not."],
            correctAnswer: "No, they're not.",
          },
        ]}
      />

      {/* Grammar Exercise B: Danny Park */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.pencil("w-5 h-5")} Grammar Exercise B: Complete the Questions</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="font-semibold text-blue-700 dark:text-blue-300">Dae Sung (&quot;Danny&quot;) Park</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nickname: Danny</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Favorite sport: Soccer</p>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <p className="font-semibold text-cyan-700 dark:text-cyan-300">His good friends: Vanessa and Milo</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">They are just friends!</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-gray-700 dark:text-gray-300">1. <strong>Is</strong> his nickname Dae Sung? → <strong>No</strong>, it&apos;s <strong>Danny</strong>.</p>
            <p className="text-gray-700 dark:text-gray-300">2. <strong>Is</strong> baseball his favorite sport? → No, it <strong>isn&apos;t</strong>. <strong>Soccer</strong> is his favorite.</p>
            <p className="text-gray-700 dark:text-gray-300">3. <strong>Are</strong> Vanessa and Milo his friends? → <strong>Yes, they are</strong>.</p>
            <p className="text-gray-700 dark:text-gray-300">4. <strong>Is</strong> Vanessa his girlfriend? → <strong>No</strong>, they&apos;re just friends.</p>
            <p className="text-gray-700 dark:text-gray-300">5. <strong>Are</strong> you friends with Danny? → No, <strong>I&apos;m not</strong>.</p>
          </div>
        </div>
      </div>

      {/* Additional expressions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.sparkles("w-5 h-5")} Expresiones Útiles</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Para Preguntar:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• What&apos;s your favorite...?</li>
                <li>• Who&apos;s your favorite...?</li>
                <li>• Do you like...?</li>
                <li>• What do you think of...?</li>
              </ul>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Para Responder:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• My favorite is...</li>
                <li>• I really like...</li>
                <li>• It&apos;s [adjective]!</li>
                <li>• I agree! / I think so too!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Prompt */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">{Icons.target("w-6 h-6")} Práctica</h3>
        <p className="mb-4">Responde estas preguntas sobre tus favoritos:</p>
        <ol className="space-y-3">
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
            <span>What&apos;s your favorite TV show? Why?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
            <span>Who&apos;s your favorite actor or actress?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
            <span>What&apos;s your favorite sport?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
            <span>What kind of music do you like?</span>
          </li>
        </ol>
      </div>
    </LessonLayout>
  );
}
