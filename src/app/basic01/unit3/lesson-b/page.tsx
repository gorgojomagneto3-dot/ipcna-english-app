import LessonLayout from '@/components/ui/LessonLayout';
import VocabularyTable from '@/components/ui/VocabularyTable';
import DialogueBox from '@/components/ui/DialogueBox';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ImageCard from '@/components/ui/ImageCard';
import { images } from '@/lib/images';
import { Icons } from '@/components/ui/Icons';

export default function Unit3LessonB() {
  return (
    <LessonLayout
      unitNumber={3}
      unitTitle="Possessions"
      lessonLetter="B"
      lessonTitle="Important Items (Artículos importantes)"
      objectives={[
        'Describir objetos personales con más detalle',
        'Hablar sobre lo que llevas contigo',
        'Expresar valor e importancia de objetos',
      ]}
      prevLesson={{ href: '/basic01/unit3/lesson-a', label: 'Lección A: Gifts' }}
      nextLesson={{ href: '/basic01/quiz', label: 'Quiz Final B01' }}
      headerImage={images.flatLayItems}
    >

      {/* Vocabulary: Describing Items */}
      <VocabularyTable
        title="Vocabulario: Describiendo Artículos (Opuestos)"
        items={[
          { english: 'cheap ↔ expensive / valuable', spanish: 'barato ↔ caro / valioso', example: 'This watch is expensive.' },
          { english: 'comfortable ↔ uncomfortable', spanish: 'cómodo ↔ incómodo', example: 'These shoes are comfortable.' },
          { english: 'hard ↔ easy', spanish: 'difícil ↔ fácil', example: 'This exercise is easy.' },
          { english: 'important ↔ unimportant', spanish: 'importante ↔ sin importancia', example: 'My phone is important.' },
          { english: 'keep ↔ throw out', spanish: 'guardar ↔ tirar', example: 'I keep my old photos.' },
          { english: 'messy ↔ clean', spanish: 'desordenado ↔ limpio', example: 'My room is messy.' },
        ]}
      />

      {/* Quality Scale */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.qualityScale("w-5 h-5")} Escala de Calidad (Quality Scale)</h3>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg font-medium">
              excellent / great
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-medium">
              good
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-lg font-medium">
              OK / so-so
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-lg font-medium">
              bad
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-lg font-medium">
              terrible
            </div>
          </div>
        </div>
      </div>

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo: Describing Personal Items"
        situation="Dos amigos hablan sobre lo que tienen en su bolso/mochila."
        lines={[
          { speaker: 'A', text: "What's in your bag?" },
          { speaker: 'B', text: 'Let me see... my wallet, my keys, my phone, and my headphones.' },
          { speaker: 'A', text: "That's a nice phone! Is it new?" },
          { speaker: 'B', text: "Yes, it is. It's a gift from my parents." },
          { speaker: 'A', text: 'Cool! Is it expensive?' },
          { speaker: 'B', text: "Yes, it's pretty expensive, but it's really useful." },
        ]}
      />

      {/* Grammar Notes: this/that/these/those */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.book("w-5 h-5")} Grammar Notes: this / that / these / those</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-2">Near you</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white dark:bg-gray-700 rounded p-2">
                  <p className="font-medium text-violet-600 dark:text-violet-400">THIS (singular)</p>
                  <p className="text-gray-600 dark:text-gray-300">What&apos;s <strong>this</strong> called in English? → It&apos;s (called) a &quot;cell phone.&quot;</p>
                  <p className="text-gray-600 dark:text-gray-300">Bill, <strong>this</strong> is my friend Nadia.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded p-2">
                  <p className="font-medium text-violet-600 dark:text-violet-400">THESE (plural)</p>
                  <p className="text-gray-600 dark:text-gray-300">Are <strong>these</strong> your keys? → No, they&apos;re not.</p>
                  <p className="text-gray-600 dark:text-gray-300">Yuki, <strong>these</strong> are my parents.</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Away from you</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white dark:bg-gray-700 rounded p-2">
                  <p className="font-medium text-purple-600 dark:text-purple-400">THAT (singular)</p>
                  <p className="text-gray-600 dark:text-gray-300">Is <strong>that</strong> a new phone? → Yes, it is.</p>
                  <p className="text-gray-600 dark:text-gray-300">Who&apos;s <strong>that</strong> (over there)? → That&apos;s my friend Leo.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded p-2">
                  <p className="font-medium text-purple-600 dark:text-purple-400">THOSE (plural)</p>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Those</strong> headphones are cool. → Yeah, they are.</p>
                  <p className="text-gray-600 dark:text-gray-300">What are <strong>those</strong>? → They&apos;re my new earrings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Exercise A: this/that/these/those */}
      <ExerciseCard
        title="Grammar Exercise A: Complete the Dialogues"
        instructions="Complete the questions and answers with this, that, these, or those."
        exercises={[
          {
            question: 'Is _____ your new tablet? (near) → Yes, it is. It\'s nice.',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'this',
          },
          {
            question: 'Are _____ your sunglasses over there? (far) → No, they\'re not.',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'those',
          },
          {
            question: 'Eva, _____ is Bill. (introducing, near) → Hi, Bill. Nice to meet you.',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'this',
          },
          {
            question: 'What are _____ over there? (far, plural) → They\'re my new earrings.',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'those',
          },
          {
            question: 'Are _____ your keys? (near, plural) → Yes, they are.',
            options: ['this', 'that', 'these', 'those'],
            correctAnswer: 'these',
          },
        ]}
      />

      {/* What's in your bag? */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.gift("w-5 h-5")} What&apos;s in Your Bag?</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Practica describiendo los objetos que llevas contigo todos los días:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Estructura:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>I have...</strong> in my bag.</li>
                <li>• <strong>There is/are...</strong> in my backpack.</li>
                <li>• <strong>I always carry...</strong> with me.</li>
                <li>• <strong>I can&apos;t live without...</strong></li>
              </ul>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Ejemplo:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                In my bag, I have my phone, my wallet, and my keys. 
                I also have my headphones and a charger. My phone is 
                the most important thing - I can&apos;t live without it!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Describing importance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.star("w-5 h-5")} Expresando Importancia</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <ImageCard src={images.keys} alt="Keys" aspectRatio="square" />
              <p className="mt-2 font-medium text-purple-700 dark:text-purple-300 text-sm">My keys are important.</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mis llaves son importantes.</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.smartphone} alt="Smartphone" aspectRatio="square" />
              <p className="mt-2 font-medium text-pink-700 dark:text-pink-300 text-sm">My phone is essential.</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mi teléfono es esencial.</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.wallet} alt="Wallet" aspectRatio="square" />
              <p className="mt-2 font-medium text-purple-700 dark:text-purple-300 text-sm">I can&apos;t leave without my wallet.</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">No puedo salir sin mi billetera.</p>
            </div>
            <div className="text-center">
              <ImageCard src={images.headphones} alt="Headphones" aspectRatio="square" />
              <p className="mt-2 font-medium text-pink-700 dark:text-pink-300 text-sm">These headphones are my favorite.</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Estos audífonos son mi favorito.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gift questions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.gift("w-5 h-5")} Hablando sobre Regalos</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Preguntas:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Is it a gift?</li>
                <li>• Who gave it to you?</li>
                <li>• Is it new?</li>
                <li>• Is it expensive?</li>
                <li>• Do you like it?</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Respuestas:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Yes, it&apos;s a gift from my...</li>
                <li>• My parents/friend gave it to me.</li>
                <li>• Yes, it&apos;s brand new!</li>
                <li>• It&apos;s pretty expensive, but worth it.</li>
                <li>• I love it! It&apos;s amazing!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Activity */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">{Icons.target("w-6 h-6")} Actividad de Práctica</h3>
        <p className="mb-4">Describe 3 objetos importantes que tienes:</p>
        
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-medium mb-2">Objeto 1:</p>
            <ul className="text-sm space-y-1 text-blue-100">
              <li>• What is it?</li>
              <li>• Is it new or old?</li>
              <li>• Is it a gift? From who?</li>
              <li>• Why is it important?</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-medium mb-2">Objeto 2:</p>
            <ul className="text-sm space-y-1 text-blue-100">
              <li>• What is it?</li>
              <li>• What color is it?</li>
              <li>• Is it expensive or cheap?</li>
              <li>• Do you use it every day?</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-medium mb-2">Objeto 3:</p>
            <ul className="text-sm space-y-1 text-blue-100">
              <li>• What is it?</li>
              <li>• Where did you get it?</li>
              <li>• What&apos;s special about it?</li>
              <li>• Can you live without it?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Role Play */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-red-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.users("w-5 h-5")} Role Play: Give and Receive Gifts</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <strong>Situación:</strong> Es el cumpleaños de tu amigo/a. Le das un regalo.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Estudiante A (da el regalo):</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• &quot;Happy birthday! This is for you.&quot;</li>
                <li>• &quot;I hope you like it!&quot;</li>
                <li>• Responde a los agradecimientos.</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Estudiante B (recibe el regalo):</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Abre el &quot;regalo&quot; (objeto imaginario).</li>
                <li>• Expresa sorpresa y gratitud.</li>
                <li>• Describe el regalo usando adjetivos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">{Icons.checkCircle("w-6 h-6")} Resumen de la Unidad 3</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Aprendiste a:</h4>
            <ul className="text-sm space-y-1 text-green-100">
              <li><span className="text-green-600 mr-1">✔</span>Hablar sobre objetos personales</li>
              <li><span className="text-green-600 mr-1">✔</span>Usar this/that/these/those</li>
              <li><span className="text-green-600 mr-1">✔</span>Formar plurales correctamente</li>
              <li><span className="text-green-600 mr-1">✔</span>Dar y recibir regalos</li>
              <li><span className="text-green-600 mr-1">✔</span>Agradecer y responder</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Vocabulario clave:</h4>
            <ul className="text-sm space-y-1 text-green-100">
              <li>• Objetos: phone, wallet, keys, headphones...</li>
              <li>• Adjetivos: new, expensive, useful, important...</li>
              <li>• Frases: Thank you! / You&apos;re welcome.</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
