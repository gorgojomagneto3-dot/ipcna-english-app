import LessonLayout from '@/components/ui/LessonLayout';
import VocabularyTable from '@/components/ui/VocabularyTable';
import GrammarTable from '@/components/ui/GrammarTable';
import DialogueBox from '@/components/ui/DialogueBox';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ReadingSection from '@/components/ui/ReadingSection';
import WritingSection from '@/components/ui/WritingSection';
import KeyPhrasesCard from '@/components/ui/KeyPhrasesCard';
import YouTubePlayer from '@/components/ui/YouTubePlayer';
import ImageCard from '@/components/ui/ImageCard';
import { images } from '@/lib/images';
import { Icons } from '@/components/ui/Icons';

export default function Unit3LessonA() {
  return (
    <LessonLayout
      unitNumber={3}
      unitTitle="Possessions"
      lessonLetter="A"
      lessonTitle="Gifts (Regalos)"
      objectives={[
        'Hablar sobre objetos y artículos personales',
        'Usar demostrativos (this/that/these/those)',
        'Formar sustantivos plurales correctamente',
        'Dar y responder a agradecimientos',
      ]}
      prevLesson={{ href: '/basic01/unit2/lesson-b', label: "Lección B: It's a Big City" }}
      nextLesson={{ href: '/basic01/unit3/lesson-b', label: 'Lección B: Important Items' }}
      headerImage={images.giftBox}
    >
      {/* Video Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            {Icons.video("w-5 h-5")} Video: What Do You Carry with You?
          </h3>
        </div>
        <div className="p-4">
          <YouTubePlayer videoId="QpntDw6tDiU" title="What Do You Carry with You?" />
        </div>
      </div>

      {/* Personal Items Gallery */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.cube("w-5 h-5")} Personal Items - Objetos Personales</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            <div className="text-center">
              <ImageCard src={images.smartphone} alt="Smartphone" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">phone</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.wallet} alt="Wallet" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">wallet</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.keys} alt="Keys" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">keys</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.airpods} alt="Headphones" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">headphones</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.laptop} alt="Laptop" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">laptop</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.backpack} alt="Backpack" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">backpack</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.sunglasses} alt="Sunglasses" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">sunglasses</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.watch} alt="Watch" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">watch</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.notebook} alt="Notebook" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">notebook</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.camera} alt="Camera" aspectRatio="square" />
              <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">camera</p>
            </div>
          </div>
        </div>
      </div>

      {/* Possessions Vocabulary */}
      <VocabularyTable
        title="Posesiones (Possessions)"
        items={[
          { english: 'backpack', spanish: 'mochila', example: 'My backpack is heavy.' },
          { english: 'bus pass', spanish: 'pase de autobús', example: 'I have a bus pass.' },
          { english: 'camera', spanish: 'cámara', example: 'I have a new camera for photos.' },
          { english: 'cell phone', spanish: 'teléfono celular', example: 'My cell phone is always with me.' },
          { english: 'credit card', spanish: 'tarjeta de crédito', example: 'I pay with my credit card.' },
          { english: 'gift card', spanish: 'tarjeta de regalo', example: 'I got a gift card for my birthday.' },
          { english: 'headphones', spanish: 'audífonos', example: 'These headphones are great for music.' },
          { english: '(student) ID', spanish: 'carnet (de estudiante)', example: 'Show your student ID.' },
          { english: 'key', spanish: 'llave', example: 'Where is my key?' },
          { english: 'laptop', spanish: 'computadora portátil', example: 'My laptop is very fast.' },
          { english: 'notebook', spanish: 'cuaderno', example: 'I write in my notebook.' },
          { english: 'sunglasses', spanish: 'lentes de sol', example: 'These sunglasses are cool!' },
          { english: 'wallet', spanish: 'billetera', example: 'I have money in my wallet.' },
          { english: '(expensive) watch', spanish: 'reloj (caro)', example: 'My watch is a gift from my parents.' },
        ]}
      />

      {/* Describing Items */}
      <VocabularyTable
        title="Describir Artículos (Describing Items)"
        items={[
          { english: 'cheap', spanish: 'barato', example: 'This phone is cheap.' },
          { english: 'expensive', spanish: 'caro', example: 'That camera is expensive.' },
          { english: 'useful', spanish: 'útil', example: 'A laptop is very useful.' },
          { english: 'important', spanish: 'importante', example: 'My keys are important.' },
          { english: 'new', spanish: 'nuevo', example: "I have a new phone." },
          { english: 'nice', spanish: 'bonito/agradable', example: 'These sunglasses are nice.' },
          { english: 'cool', spanish: 'genial', example: 'Your backpack is cool!' },
          { english: 'great', spanish: 'excelente', example: 'The camera is great.' },
          { english: 'comfortable', spanish: 'cómodo', example: 'These headphones are comfortable.' },
          { english: 'heavy', spanish: 'pesado', example: 'My laptop is heavy.' },
          { english: 'light', spanish: 'ligero', example: 'The tablet is light.' },
        ]}
      />

      {/* Grammar Notes: Count Nouns */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.book("w-5 h-5")} Grammar Notes: Singular and Plural Count Nouns</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Count nouns</strong> have singular (= one thing) and plural (= two or more things) forms.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">It&apos;s an ID card. | I&apos;m a student. | There are ten students here.</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Use <strong>a</strong> or <strong>an</strong> before singular count nouns only.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">When the singular noun begins with a <strong>consonant sound</strong>, use <strong>a</strong>:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">a book, a student, a camera</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">When the singular noun begins with a <strong>vowel sound</strong>, use <strong>an</strong>:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">an ID card, an umbrella, an email</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plural Nouns */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.academic("w-5 h-5")} Sustantivos Plurales (Plural Nouns)</h3>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Regla</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Singular</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Plural</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">Most nouns: + s</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">camera, pen</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">camera<strong>s</strong>, pen<strong>s</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">I have two cameras.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">ch, sh, ss, x sounds: + es</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">watch, class</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">watch<strong>es</strong>, class<strong>es</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">These watches are expensive.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">consonante + y → ies</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">city</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">cit<strong>ies</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">Big cities are crowded.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">Vowel + y: + s</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boy, key</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boy<strong>s</strong>, key<strong>s</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">Where are my keys?</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">Vowel + o: + s</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">radio, photo</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">radio<strong>s</strong>, photo<strong>s</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">I have many photos.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">Consonant + o: + es (some)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">potato</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">potato<strong>es</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">I like potatoes.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">f/fe → ves</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">knife</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">kn<strong>ives</strong></td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">The knives are sharp.</td>
              </tr>
              <tr className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">Irregulares</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">man / woman / child</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">men / women / children</td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 italic">The children are happy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Demonstratives: This/That/These/Those */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.cube("w-5 h-5")} This / That / These / Those (Demostrativos)</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200"></th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Singular</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Plural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr className="hover:bg-purple-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-sm font-semibold text-purple-600 dark:text-purple-400">Cerca (Near)</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300"><strong>this</strong> (este/esta)</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300"><strong>these</strong> (estos/estas)</td>
                </tr>
                <tr className="hover:bg-purple-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Lejos (Far)</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300"><strong>that</strong> (ese/esa/aquel)</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300"><strong>those</strong> (esos/esas/aquellos)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Cerca:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>This</strong> phone is new. (Este teléfono es nuevo.)</li>
                <li><strong>These</strong> headphones are great! (¡Estos audífonos son geniales!)</li>
              </ul>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Lejos:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>That</strong> camera is expensive. (Esa cámara es cara.)</li>
                <li><strong>Those</strong> watches are old. (Esos relojes son viejos.)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Useful Questions */}
      <GrammarTable
        title="Preguntas Útiles"
        headers={['Pregunta', 'Respuesta']}
        rows={[
          { columns: ['What is this called in English?', "It's a charger."] },
          { columns: ['What are these called?', "They're headphones."] },
          { columns: ['What is that?', "That's my laptop."] },
          { columns: ['What are those?', 'Those are my keys.'] },
        ]}
      />

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo Modelo: Giving and Receiving Gifts"
        situation="Es la graduación de Lucas y Sofia le da un regalo."
        lines={[
          { speaker: 'Sofia', text: 'Hi Lucas! Happy graduation! This is for you.' },
          { speaker: 'Lucas', text: 'Oh wow, thank you Sofia! What is it?' },
          { speaker: 'Sofia', text: 'Open it and see!' },
          { speaker: 'Lucas', text: '(abriendo) Wow! New headphones! These are amazing!', isAction: false },
          { speaker: 'Sofia', text: 'Do you like them?' },
          { speaker: 'Lucas', text: "I love them! Thanks so much, Sofia. These are really cool!" },
          { speaker: 'Sofia', text: "No problem! I'm glad you like them. I know you love music." },
          { speaker: 'Lucas', text: "They're perfect. You're the best!" },
        ]}
      />

      {/* Speaking Strategy */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.chat("w-5 h-5")} Speaking Strategy: Giving and Replying to Thanks</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Agradeciendo:</h4>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="font-medium text-amber-700 dark:text-amber-300">Thank you very much.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="font-medium text-amber-700 dark:text-amber-300">Thank you.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="font-medium text-amber-700 dark:text-amber-300">Thanks a lot.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="font-medium text-amber-700 dark:text-amber-300">Thanks.</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Respondiendo:</h4>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="font-medium text-orange-700 dark:text-orange-300">You&apos;re welcome.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="font-medium text-orange-700 dark:text-orange-300">My pleasure.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="font-medium text-orange-700 dark:text-orange-300">Sure, no problem.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="font-medium text-orange-700 dark:text-orange-300">You bet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Exercise A: Word Bank */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.pencil("w-5 h-5")} Grammar Exercise A: Complete with Words Below</h3>
        </div>
        <div className="p-4">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-4 flex flex-wrap gap-2">
            {['backpack', 'knife', 'potato', 'cell phone', 'city', 'credit card', 'dictionary', 'email address', 'gift card', 'student ID', 'key', 'laptop', 'notebook', 'pen', 'photo', 'student', 'teacher', 'umbrella', 'wallet', 'watch'].map((word) => (
              <span key={word} className="bg-white dark:bg-gray-600 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300">{word}</span>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Remember to use <strong>a</strong> or <strong>an</strong> for singular words.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="font-medium text-blue-700 dark:text-blue-300 mb-2">1. It&apos;s... (singular)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">a backpack, a cell phone, an umbrella, a laptop, a notebook...</p>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <p className="font-medium text-cyan-700 dark:text-cyan-300 mb-2">2. They&apos;re... (plural)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">keys, pens, photos, potatoes, knives, dictionaries...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Exercise B: What's in your...? */}
      <ExerciseCard
        title="Grammar Exercise B: What's in your...?"
        instructions="Complete the sentences with the singular or plural form."
        exercises={[
          {
            question: "What's in your backpack? There's _____ (cell phone).",
            correctAnswer: 'a cell phone',
          },
          {
            question: "What's in your backpack? There's _____ (laptop).",
            correctAnswer: 'a laptop',
          },
          {
            question: "What's in your backpack? There's _____ (bus pass).",
            correctAnswer: 'a bus pass',
          },
          {
            question: "What's in your wallet? There's _____ (student ID).",
            correctAnswer: 'a student ID',
          },
          {
            question: "What's in your wallet? There are two _____ (photo).",
            correctAnswer: 'photos',
          },
          {
            question: "What's in your wallet? There are two _____ (credit card).",
            correctAnswer: 'credit cards',
          },
          {
            question: "What's on your desk? There are three _____ (pen).",
            correctAnswer: 'pens',
          },
          {
            question: "What's on your desk? There's _____ (notebook).",
            correctAnswer: 'a notebook',
          },
          {
            question: "What's on your desk? There are two _____ (dictionary).",
            correctAnswer: 'dictionaries',
          },
        ]}
      />

      {/* Reading */}
      <ReadingSection
        title="Reading: The One Thing I Can't Live Without"
        skill="Inferir información y escanear textos"
        text={[
          "My Smartphone - by Maria, 22, Peru",
          "The one thing I can't live without is my smartphone. It's always with me! I use it for everything: calls, messages, photos, music, and social media. It's very useful.",
          "My phone is a Samsung Galaxy. It's black and silver. It's not very expensive, but it's great. The camera is excellent for photos and videos. The battery is good too.",
          "I recommend this phone. It's perfect for students like me. The price is cheap, but the quality is excellent. Five stars!",
        ]}
        questions={[
          { question: 'What item can Maria not live without?', answer: 'Her smartphone' },
          { question: 'What does she use her phone for?', answer: 'Calls, messages, photos, music, and social media' },
          { question: 'What brand is her phone?', answer: 'Samsung Galaxy' },
          { question: 'Is the phone expensive?', answer: "No, it's not very expensive." },
          { question: 'How many stars does she give it?', answer: 'Five stars' },
        ]}
      />

      {/* Writing: Product Review */}
      <WritingSection
        title="Writing: Write a Product Review"
        instructions="Escribe una reseña de un producto que te guste."
        model={`Product: Apple AirPods
Rating: 5/5 stars

These headphones are amazing! They're wireless and very comfortable. The sound quality is excellent. They're expensive ($199), but they're worth it. I use them every day for music and calls. I highly recommend them!`}
        template={`1. Product: (nombre del producto)
2. Rating: 1-5 stars
3. Description: This/These [product] is/are [adjetivos].
4. Price: It's/They're [cheap/expensive] ($___).
5. Recommendation: I recommend / I don't recommend this product.`}
      />

      {/* Exercise 1: Plurals */}
      <ExerciseCard
        title="Ejercicio 1: Plurales"
        instructions="Escribe el plural de estos sustantivos"
        exercises={[
          { question: 'phone →', correctAnswer: 'phones' },
          { question: 'watch →', correctAnswer: 'watches' },
          { question: 'city →', correctAnswer: 'cities' },
          { question: 'key →', correctAnswer: 'keys' },
          { question: 'woman →', correctAnswer: 'women' },
          { question: 'child →', correctAnswer: 'children' },
        ]}
      />

      {/* Exercise 2: Demonstratives */}
      <ExerciseCard
        title="Ejercicio 2: This / That / These / Those"
        instructions="Completa con el demostrativo correcto"
        exercises={[
          {
            question: '(cerca, singular) _______ phone is mine.',
            options: ['This', 'That', 'These', 'Those'],
            correctAnswer: 'This',
          },
          {
            question: '(lejos, plural) _______ buildings are old.',
            options: ['This', 'That', 'These', 'Those'],
            correctAnswer: 'Those',
          },
          {
            question: '(cerca, plural) _______ headphones are new.',
            options: ['This', 'That', 'These', 'Those'],
            correctAnswer: 'These',
          },
          {
            question: '(lejos, singular) _______ camera is expensive.',
            options: ['This', 'That', 'These', 'Those'],
            correctAnswer: 'That',
          },
          {
            question: 'What is _______ called in English? (cerca, singular)',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'this',
          },
        ]}
      />

      {/* Exercise 3: Thanking */}
      <ExerciseCard
        title="Ejercicio 3: Agradecer y Responder"
        instructions="Empareja la frase de agradecimiento con la respuesta apropiada"
        exercises={[
          {
            question: "Thank you so much for the gift! → ___",
            options: ["No problem!", "You're welcome. I'm glad you like it!", "My pleasure!"],
            correctAnswer: "You're welcome. I'm glad you like it!",
          },
          {
            question: 'Thanks for helping me! → ___',
            options: ["No problem!", "You're welcome. I'm glad you like it!", "My pleasure!"],
            correctAnswer: "No problem!",
          },
          {
            question: 'I really appreciate it! → ___',
            options: ["No problem!", "You're welcome. I'm glad you like it!", "My pleasure!"],
            correctAnswer: "My pleasure!",
          },
        ]}
      />
    </LessonLayout>
  );
}
