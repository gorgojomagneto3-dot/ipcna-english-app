import LessonLayout from '@/components/ui/LessonLayout';
import VocabularyTable from '@/components/ui/VocabularyTable';
import DialogueBox from '@/components/ui/DialogueBox';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ImageCard from '@/components/ui/ImageCard';
import { images } from '@/lib/images';
import { Icons } from '@/components/ui/Icons';

export default function Unit2LessonB() {
  return (
    <LessonLayout
      unitNumber={2}
      unitTitle="Countries"
      lessonLetter="B"
      lessonTitle="It's a Big City (Es una gran ciudad)"
      objectives={[
        'Describir ciudades con más detalle',
        'Usar adjetivos para comparar lugares',
        'Hablar sobre características de tu ciudad',
      ]}
      prevLesson={{ href: '/basic01/unit2/lesson-a', label: 'Lección A: Around the World' }}
      nextLesson={{ href: '/basic01/unit3/lesson-a', label: 'Unidad 3: Gifts' }}
      headerImage={images.barcelona}
    >

      {/* Vocabulary: Describing Places */}
      <VocabularyTable
        title="Vocabulario: Describiendo Lugares"
        items={[
          { english: 'beautiful', spanish: 'hermoso/a', example: 'Paris is beautiful.' },
          { english: 'big', spanish: 'grande', example: 'Tokyo is a big city.' },
          { english: 'boring', spanish: 'aburrido/a', example: 'The movie was boring.' },
          { english: 'busy', spanish: 'ocupado/concurrido', example: 'The streets are busy.' },
          { english: 'crowded', spanish: 'lleno de gente', example: 'The subway is crowded.' },
          { english: 'exciting', spanish: 'emocionante', example: 'New York is exciting!' },
          { english: 'famous', spanish: 'famoso/a', example: 'The Eiffel Tower is famous.' },
          { english: 'friendly', spanish: 'amigable', example: 'The people are friendly.' },
          { english: 'fun', spanish: 'divertido/a', example: 'The party was fun.' },
          { english: 'interesting', spanish: 'interesante', example: 'The museum is interesting.' },
          { english: 'large', spanish: 'grande', example: 'It is a large building.' },
          { english: 'new', spanish: 'nuevo/a', example: 'The hotel is new.' },
          { english: 'old', spanish: 'viejo/antiguo', example: 'Rome has old buildings.' },
          { english: 'popular', spanish: 'popular', example: 'This restaurant is popular.' },
          { english: 'relaxing', spanish: 'relajante', example: 'The beach is relaxing.' },
          { english: 'small', spanish: 'pequeño/a', example: 'My town is small.' },
          { english: 'tall', spanish: 'alto/a', example: 'The buildings are tall.' },
          { english: 'wonderful', spanish: 'maravilloso/a', example: 'The view is wonderful!' },
        ]}
      />

      {/* Visual Vocabulary - Adjectives */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.globe("w-5 h-5")} Adjectives in Pictures</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <ImageCard src={images.beautiful} alt="Beautiful landscape" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">beautiful</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">hermoso/a</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.bigCity} alt="Big city skyline" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">big / large</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">grande</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.crowded} alt="Crowded street" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">crowded</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">lleno de gente</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.oldBuildings} alt="Old historic buildings" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">old</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">antiguo</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.modern} alt="Modern architecture" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">modern</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">moderno</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.busy} alt="Busy street" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">busy</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">ocupado</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.relaxing} alt="Relaxing beach" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">relaxing</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">relajante</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.tallBuildings} alt="Tall skyscrapers" aspectRatio="square" />
              <p className="mt-2 font-bold text-cyan-700 dark:text-cyan-300">tall</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">alto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo: Describing Cities"
        situation="Dos personas hablan sobre sus ciudades."
        lines={[
          { speaker: 'A', text: "What's your city like?" },
          { speaker: 'B', text: "It's big and modern. The buildings are very tall." },
          { speaker: 'A', text: 'Is it crowded?' },
          { speaker: 'B', text: 'Yes, it is, especially downtown. But the parks are quiet and beautiful.' },
          { speaker: 'A', text: 'Are the people friendly?' },
          { speaker: 'B', text: 'Yes, they are! People are very helpful here.' },
        ]}
      />

      {/* Useful Structures */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.buildings("w-5 h-5")} Estructuras Útiles para Describir Ciudades</h3>
        </div>
        <div className="p-4">
          <div className="grid gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Preguntas:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>What&apos;s your city like?</strong> - ¿Cómo es tu ciudad?</li>
                <li>• <strong>Is it [adjective]?</strong> - ¿Es [adjetivo]?</li>
                <li>• <strong>Are the [noun] [adjective]?</strong> - ¿Los/Las [sustantivo] son [adjetivo]?</li>
              </ul>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Respuestas:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>It&apos;s [adjective] and [adjective].</strong></li>
                <li>• <strong>The [noun] is/are [adjective].</strong></li>
                <li>• <strong>Yes, it is, especially...</strong> - Sí, especialmente...</li>
                <li>• <strong>But the [noun] is/are [adjective].</strong> - Pero los/las... son...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* City Description Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.buildings("w-5 h-5")} Ejemplos de Descripciones</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">New York</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                New York is a very big and busy city. The buildings are tall and modern. 
                It&apos;s crowded, especially in Times Square. The subway is convenient but noisy. 
                The people are diverse and interesting.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Tokyo</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tokyo is a modern and exciting city. The streets are clean and safe. 
                It&apos;s very crowded during rush hour. The food is delicious and the 
                people are polite and helpful.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Paris</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Paris is a beautiful and romantic city. The buildings are old and historic. 
                The cafes are charming. It&apos;s expensive but worth it. The architecture 
                is amazing.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Lima</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lima is a big and interesting city. It has old and modern areas. 
                The food is fantastic - ceviche is famous! The weather is warm. 
                The people are friendly and welcoming.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice: Describe Your City */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">{Icons.writing("w-6 h-6")} Tu Turno: Describe Your City</h3>
        <p className="mb-4">Usa estas preguntas para escribir sobre tu ciudad:</p>
        <ol className="space-y-3">
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
            <span>What&apos;s your city called? Where is it?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
            <span>Is it big or small? Modern or old?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
            <span>What are the streets like?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
            <span>Are the people friendly?</span>
          </li>
          <li className="flex gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</span>
            <span>What&apos;s special about your city?</span>
          </li>
        </ol>
      </div>

      {/* Grammar Notes: Adjectives with BE */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.book("w-5 h-5")} Grammar Notes: Adjectives with be</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Adjectives</strong> are words that describe nouns.</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Adjectives <strong>follow be</strong>:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">Your city <strong>is beautiful</strong>. | The buildings <strong>are old</strong>.</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Use <strong>and</strong> to join two adjectives:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">Carnival is <strong>fun and loud</strong>.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Adjectives can come <strong>before nouns</strong>:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">It is an <strong>exciting</strong> city. | There are many <strong>tall</strong> buildings.</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Use <strong>a</strong> or <strong>an</strong> before singular nouns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Exercise A: Circle Adjectives */}
      <ExerciseCard
        title="Grammar Exercise A: Identify Adjectives and Nouns"
        instructions="Identify the adjective(s) in each sentence."
        exercises={[
          {
            question: "It's a crowded place. → The adjective is:",
            options: ['crowded', 'place', 'It'],
            correctAnswer: 'crowded',
          },
          {
            question: 'Are you a busy person? → The adjective is:',
            options: ['you', 'busy', 'person'],
            correctAnswer: 'busy',
          },
          {
            question: 'They are tall and beautiful. → The adjectives are:',
            options: ['They, are', 'tall, beautiful', 'are, and'],
            correctAnswer: 'tall, beautiful',
          },
          {
            question: "She's a friendly teacher. → The adjective is:",
            options: ['She', 'friendly', 'teacher'],
            correctAnswer: 'friendly',
          },
          {
            question: 'Our street is busy and interesting. → The adjectives are:',
            options: ['Our, street', 'busy, interesting', 'is, and'],
            correctAnswer: 'busy, interesting',
          },
          {
            question: 'My small town is famous for good food. → The adjectives are:',
            options: ['My, town, food', 'small, famous, good', 'is, for'],
            correctAnswer: 'small, famous, good',
          },
        ]}
      />

      {/* Grammar Exercise B: Put Words in Order */}
      <ExerciseCard
        title="Grammar Exercise B: Complete the Sentences"
        instructions="Put the word in parentheses into the correct place."
        exercises={[
          {
            question: "He's _____ English teacher. (an)",
            correctAnswer: "He's an English teacher.",
          },
          {
            question: 'The restaurant is small _____ friendly. (and)',
            correctAnswer: 'The restaurant is small and friendly.',
          },
          {
            question: 'That _____ student is in class. (new)',
            correctAnswer: 'That new student is in class.',
          },
          {
            question: "It's a _____ city of five million people. (large)",
            correctAnswer: "It's a large city of five million people.",
          },
          {
            question: "There's a _____ view from the mountain. (wonderful)",
            correctAnswer: "There's a wonderful view from the mountain.",
          },
          {
            question: "It's a big city with the feeling of a _____ town. (small)",
            correctAnswer: "It's a big city with the feeling of a small town.",
          },
        ]}
      />

      {/* Contrast expressions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.lightbulb("w-5 h-5")} Expresiones de Contraste</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Usa estas expresiones para hacer contrastes en tus descripciones:
          </p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span className="font-bold text-violet-600 dark:text-violet-400">but</span>
              <span className="text-gray-600 dark:text-gray-300">It&apos;s crowded, <strong>but</strong> the parks are quiet.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span className="font-bold text-violet-600 dark:text-violet-400">especially</span>
              <span className="text-gray-600 dark:text-gray-300">It&apos;s busy, <strong>especially</strong> downtown.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span className="font-bold text-violet-600 dark:text-violet-400">not too</span>
              <span className="text-gray-600 dark:text-gray-300">It&apos;s big, but <strong>not too</strong> crowded.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span className="font-bold text-violet-600 dark:text-violet-400">very</span>
              <span className="text-gray-600 dark:text-gray-300">The people are <strong>very</strong> friendly.</span>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
