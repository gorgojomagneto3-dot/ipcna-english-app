import LessonLayout from '@/components/ui/LessonLayout';
import VocabularyTable from '@/components/ui/VocabularyTable';
import GrammarTable from '@/components/ui/GrammarTable';
import DialogueBox from '@/components/ui/DialogueBox';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ReadingSection from '@/components/ui/ReadingSection';
import WritingSection from '@/components/ui/WritingSection';
import KeyPhrasesCard from '@/components/ui/KeyPhrasesCard';
import CommunicationActivity from '@/components/ui/CommunicationActivity';
import YouTubePlayer from '@/components/ui/YouTubePlayer';
import ImageCard from '@/components/ui/ImageCard';
import { images } from '@/lib/images';
import { Icons } from '@/components/ui/Icons';

export default function Unit2LessonA() {
  return (
    <LessonLayout
      unitNumber={2}
      unitTitle="Countries"
      lessonLetter="A"
      lessonTitle="Around the World (Alrededor del mundo)"
      objectives={[
        'Hablar sobre países y nacionalidades',
        'Hacer y responder preguntas con WHO y WHERE',
        'Describir lugares usando adjetivos',
        'Preguntar sobre origen y ubicación',
      ]}
      prevLesson={{ href: '/basic01/unit1/lesson-b', label: 'Lección B: My Favorites' }}
      nextLesson={{ href: '/basic01/unit2/lesson-b', label: "Lección B: It's a Big City" }}
      headerImage={images.worldMap}
    >
      {/* Video Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            {Icons.video("w-5 h-5")} Video: Speeding Around the World
          </h3>
        </div>
        <div className="p-4">
          <YouTubePlayer videoId="EQIsX5ivY0w" title="Speeding Around the World in Under Five Minutes" />
        </div>
      </div>

      {/* Flags Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.flag("w-5 h-5")} Flags of the World - Banderas del Mundo</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {[
              { flag: images.flags.usa, name: 'USA' },
              { flag: images.flags.uk, name: 'UK' },
              { flag: images.flags.mexico, name: 'Mexico' },
              { flag: images.flags.peru, name: 'Peru' },
              { flag: images.flags.japan, name: 'Japan' },
              { flag: images.flags.france, name: 'France' },
              { flag: images.flags.brazil, name: 'Brazil' },
              { flag: images.flags.spain, name: 'Spain' },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div className="aspect-[3/2] overflow-hidden rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.flag} alt={`Flag of ${item.name}`} className="w-full h-full object-cover" />
                </div>
                <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries and Nationalities */}
      <GrammarTable
        title="Países y Nacionalidades (Countries and Nationalities)"
        headers={['Country', 'Nationality', 'Ejemplo']}
        rows={[
          { columns: ['Argentina', 'Argentinean', "I'm from Argentina. I'm Argentinean."] },
          { columns: ['Australia', 'Australian', "She's Australian."] },
          { columns: ['Brazil', 'Brazilian', "He's Brazilian. He's from São Paulo."] },
          { columns: ['Canada', 'Canadian', "She's Canadian. She's from Toronto."] },
          { columns: ['Chile', 'Chilean', "They're Chilean."] },
          { columns: ['China', 'Chinese', 'She speaks Chinese.'] },
          { columns: ['Colombia', 'Colombian', "They're Colombian."] },
          { columns: ['Egypt', 'Egyptian', 'The pyramids are Egyptian.'] },
          { columns: ['France', 'French', "Paris is in France. It's a French city."] },
          { columns: ['Japan', 'Japanese', 'Sushi is Japanese food.'] },
          { columns: ['Korea', 'Korean', 'K-pop is Korean music.'] },
          { columns: ['Mexico', 'Mexican', "I'm from Mexico. I'm Mexican."] },
          { columns: ['New Zealand', 'New Zealander / Kiwi', "He's a Kiwi."] },
          { columns: ['Peru', 'Peruvian', "She's from Peru. She's Peruvian."] },
          { columns: ['Portugal', 'Portuguese', 'He speaks Portuguese.'] },
          { columns: ['Spain', 'Spanish', "The teacher is Spanish."] },
          { columns: ['Thailand', 'Thai', 'Thai food is delicious.'] },
          { columns: ['Turkey', 'Turkish', 'Turkish coffee is famous.'] },
          { columns: ['United Kingdom (UK)', 'British', "He's British. He's from London."] },
          { columns: ['United States (US)', 'American', "We're from the USA. We're American."] },
          { columns: ['Vietnam', 'Vietnamese', 'Vietnamese food is healthy.'] },
        ]}
      />

      {/* Additional vocabulary */}
      <VocabularyTable
        title="Vocabulario Adicional"
        items={[
          { english: '(capital) city', spanish: 'ciudad (capital)', example: 'Lima is the capital city of Peru.' },
          { english: 'country', spanish: 'país', example: 'Japan is a beautiful country.' },
          { english: 'nationality', spanish: 'nacionalidad', example: 'My nationality is Mexican.' },
          { english: '(on) vacation', spanish: '(de) vacaciones', example: 'I am on vacation in Spain.' },
        ]}
      />

      {/* Questions about origin */}
      <GrammarTable
        title="Preguntas sobre Origen"
        headers={['Pregunta', 'Respuesta']}
        rows={[
          { columns: ['Where are you from?', "I'm from Peru."] },
          { columns: ['What country are you from?', "I'm from Mexico."] },
          { columns: ['Which city are you from?', "I'm from Lima."] },
          { columns: ["What's your nationality?", "I'm Peruvian."] },
          { columns: ['Are you from Lima?', "Yes, I am. / No, I'm not. I'm from Cusco."] },
        ]}
      />

      {/* WHO and WHERE questions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.academic("w-5 h-5")} Preguntas con WHO y WHERE</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 text-lg mb-2">WHO = ¿Quién?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">(para personas)</p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Who</strong> is your teacher? → Mr. Smith is my teacher.</li>
                <li><strong>Who</strong> is she? → She&apos;s Maria, my friend.</li>
              </ul>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 text-lg mb-2">WHERE = ¿Dónde?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">(para lugares)</p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Where</strong> are you from? → I&apos;m from Mexico.</li>
                <li><strong>Where</strong> is the museum? → It&apos;s on Main Street.</li>
                <li><strong>Where</strong> are they? → They&apos;re at school.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Notes: Questions with WHO and WHERE */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.book("w-5 h-5")} Grammar Notes: Questions with WHO and WHERE</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-2">WHO = asks about people</h4>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>Who <strong>is</strong> he/she? → He&apos;s/She&apos;s my classmate.</li>
                <li>Who <strong>&apos;s</strong> from Mexico? → Tomas (is).</li>
                <li>Who <strong>&apos;s</strong> with you? → My friend.</li>
                <li>Who <strong>are</strong> you? → (I&apos;m) Sara.</li>
                <li>Who <strong>are</strong> they? → (They&apos;re) my friends.</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">WHERE = asks about a place</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Use <strong>at</strong> + a place | Use <strong>in/from</strong> + a city or country</p>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>Where <strong>are</strong> you/they? → At school/work/home.</li>
                <li>Where <strong>is</strong> Nor? → (She&apos;s) in London / at her hotel.</li>
                <li>Where <strong>&apos;s</strong> Machu Picchu? → (It&apos;s) in Peru.</li>
                <li>Where <strong>is</strong> Ryan <strong>from</strong>? → (He&apos;s) from Australia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Exercise A: WHO/WHERE with Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.pencil("w-5 h-5")} Grammar Exercise A: Complete with who, where, in, or at</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Hometown</th>
                  <th className="px-3 py-2 text-left">Where is he or she now?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr><td className="px-3 py-2">Emma ♀</td><td className="px-3 py-2">Berlin, Germany</td><td className="px-3 py-2">on vacation / Mexico</td></tr>
                <tr><td className="px-3 py-2">Hisham ♂</td><td className="px-3 py-2">Rabat, Morocco</td><td className="px-3 py-2">on vacation / Italy</td></tr>
                <tr><td className="px-3 py-2">Jun ♂</td><td className="px-3 py-2">Beijing, China</td><td className="px-3 py-2">Mei&apos;s house</td></tr>
                <tr><td className="px-3 py-2">Mei ♀</td><td className="px-3 py-2">Beijing, China</td><td className="px-3 py-2">home</td></tr>
                <tr><td className="px-3 py-2">Tim ♂</td><td className="px-3 py-2">Toronto, Canada</td><td className="px-3 py-2">work / New York City</td></tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>1. <strong>Who</strong> is from Rabat? → Hisham is.</p>
            <p>2. <strong>Where</strong>&apos;s Rabat? → It&apos;s <strong>in</strong> Morocco.</p>
            <p>3. Where is Hisham now? → He&apos;s <strong>in Italy</strong>.</p>
            <p>4. <strong>Where</strong> is Emma from? → She&apos;s <strong>from Germany</strong>.</p>
            <p>5. <strong>Who</strong>&apos;s in the US now? → <strong>Tim is</strong>.</p>
            <p>6. Where exactly is Tim? → He&apos;s <strong>at</strong> work <strong>in</strong> New York City.</p>
            <p>7. Where are Mei and Jun? → They&apos;re <strong>at Mei&apos;s house</strong>.</p>
            <p>8. <strong>Who</strong>&apos;s on vacation now? → <strong>Emma and Hisham are</strong>.</p>
          </div>
        </div>
      </div>

      {/* Adjectives with BE */}
      <GrammarTable
        title="Adjetivos con BE"
        headers={['Oración', 'Traducción']}
        rows={[
          { columns: ['Lima is big.', 'Lima es grande.'] },
          { columns: ['The streets are crowded.', 'Las calles están llenas de gente.'] },
          { columns: ['Tokyo is very modern.', 'Tokio es muy moderno.'] },
          { columns: ['The people are friendly.', 'La gente es amigable.'] },
        ]}
      />

      {/* Vocabulary: Describing Cities */}
      <VocabularyTable
        title="Vocabulario: Describiendo Ciudades"
        items={[
          { english: 'big / large', spanish: 'grande', example: 'Tokyo is a big city.' },
          { english: 'small', spanish: 'pequeño', example: 'My town is small.' },
          { english: 'old', spanish: 'viejo/antiguo', example: 'Rome is an old city.' },
          { english: 'modern / new', spanish: 'moderno/nuevo', example: 'Dubai is very modern.' },
          { english: 'busy', spanish: 'ocupado/concurrido', example: 'The streets are busy.' },
          { english: 'quiet', spanish: 'tranquilo/silencioso', example: 'The park is quiet.' },
          { english: 'crowded', spanish: 'lleno de gente', example: 'The subway is crowded.' },
          { english: 'beautiful', spanish: 'hermoso', example: 'Paris is beautiful.' },
          { english: 'expensive', spanish: 'caro', example: 'Hotels are expensive.' },
          { english: 'cheap', spanish: 'barato', example: 'Street food is cheap.' },
          { english: 'clean', spanish: 'limpio', example: 'Singapore is very clean.' },
          { english: 'dirty', spanish: 'sucio', example: 'The river is dirty.' },
          { english: 'safe', spanish: 'seguro', example: 'Japan is very safe.' },
          { english: 'friendly', spanish: 'amigable', example: 'The people are friendly.' },
          { english: 'famous', spanish: 'famoso', example: 'The Eiffel Tower is famous.' },
        ]}
      />

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo Modelo: Talking About Places"
        situation="Dos estudiantes hablan sobre sus ciudades de origen."
        lines={[
          { speaker: 'Ana', text: 'Where are you from, Kenji?' },
          { speaker: 'Kenji', text: "I'm from Japan. I'm from Tokyo." },
          { speaker: 'Ana', text: "Oh, cool! What's Tokyo like?" },
          { speaker: 'Kenji', text: "It's a very big city. It's modern and exciting, but it's also very crowded and busy." },
          { speaker: 'Ana', text: 'Are the people friendly?' },
          { speaker: 'Kenji', text: 'Yes, they are! Japanese people are very polite and helpful.' },
          { speaker: 'Ana', text: 'I want to visit Tokyo someday!' },
          { speaker: 'Kenji', text: "You should! It's beautiful. Where are you from?" },
          { speaker: 'Ana', text: "I'm from Lima, Peru. It's a big city too, but not as crowded as Tokyo." },
        ]}
      />

      {/* Speaking Strategy */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.chat("w-5 h-5")} Speaking Strategy: Asking Where Someone is From</h3>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Preguntando origen:</p>
                <p className="font-medium text-amber-700 dark:text-amber-300">Where are you from?</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">→ (I&apos;m from) Japan.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Preguntando específicamente:</p>
                <p className="font-medium text-amber-700 dark:text-amber-300">Really? Where exactly?</p>
                <p className="font-medium text-amber-700 dark:text-amber-300">Which city? / Where in Japan?</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Respondiendo específicamente:</p>
                <p className="font-medium text-orange-700 dark:text-orange-300">(I&apos;m from) Tokyo.</p>
                <p className="font-medium text-orange-700 dark:text-orange-300">A small town near Tokyo.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Pregunta Yes/No:</p>
                <p className="font-medium text-orange-700 dark:text-orange-300">Are you from Colombia?</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">→ Yes, I am. / No, I&apos;m from Peru.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Phrases */}
      <KeyPhrasesCard
        title="Frases Clave"
        phrases={[
          { english: "What's [place] like?", spanish: '¿Cómo es [lugar]?' },
          { english: "It's [adjective] and [adjective].", spanish: 'Es [adjetivo] y [adjetivo].' },
          { english: 'I want to visit [place].', spanish: 'Quiero visitar [lugar].' },
          { english: 'You should!', spanish: '¡Deberías!' },
          { english: 'Are the people friendly?', spanish: '¿La gente es amigable?' },
        ]}
      />

      {/* Reading */}
      <ReadingSection
        title="Reading: A Great Place to Visit"
        skill="Leer para confirmar expectativas con palabras clave"
        text={[
          "Barcelona, Spain",
          "Barcelona is a beautiful city in Spain. It's on the Mediterranean Sea. The city is famous for its architecture, beaches, and food.",
          "Barcelona is a big city, but it's not too crowded. The weather is warm and sunny. The people are friendly and helpful.",
          "The streets are clean and safe. There are many interesting museums and beautiful parks. The food is delicious! Spanish tapas are very popular.",
          "Barcelona is an exciting place to visit. It's modern but also has old, historic buildings. It's perfect for tourists!",
        ]}
        questions={[
          { question: 'Where is Barcelona?', answer: 'In Spain, on the Mediterranean Sea' },
          { question: 'Is Barcelona crowded?', answer: "No, it's not too crowded." },
          { question: 'What is the weather like?', answer: 'Warm and sunny' },
          { question: 'Are the people friendly?', answer: 'Yes, they are friendly and helpful.' },
          { question: 'What food is popular in Barcelona?', answer: 'Spanish tapas' },
        ]}
      />

      {/* Writing */}
      <WritingSection
        title="Writing: Describe a Favorite Place"
        instructions="Escribe un párrafo describiendo tu ciudad o lugar favorito."
        model={`My favorite city is Lima. It's in Peru. Lima is a big and busy city. It's on the Pacific Ocean. The food is delicious! Peruvian ceviche is famous. The people are friendly. Lima is an interesting place with old and modern buildings.`}
        template={`1. My favorite city/place is ____________.
2. It's in ____________ (country).
3. It's ____________ and ____________ (2 adjetivos).
4. The weather/food/people is/are ____________.
5. It's a good place to ____________.`}
      />

      {/* Communication Activity */}
      <CommunicationActivity
        title="Choose a Vacation Spot"
        description="En parejas, discutan estos destinos y elijan uno para vacaciones."
        questions={[
          'Where do you want to go?',
          'Why? What\'s it like?',
          'Is it expensive?',
          'What can you do there?',
        ]}
      />

      {/* Famous Cities Images */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.mapPin("w-5 h-5")} Famous Cities - Ciudades Famosas</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <ImageCard 
                src={images.paris}
                alt="Paris - Eiffel Tower"
                aspectRatio="square"
              />
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">Paris</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">France</p>
            </div>
            <div className="text-center">
              <ImageCard 
                src={images.tokyo}
                alt="Tokyo - Shibuya Crossing"
                aspectRatio="square"
              />
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">Tokyo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Japan</p>
            </div>
            <div className="text-center">
              <ImageCard 
                src={images.newYork}
                alt="New York - Times Square"
                aspectRatio="square"
              />
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">New York</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">USA</p>
            </div>
            <div className="text-center">
              <ImageCard 
                src={images.cancun}
                alt="Cancun Beach"
                aspectRatio="square"
              />
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">Cancun</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mexico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vacation Spots Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">{Icons.globe("w-5 h-5")} Destinos para Discutir</h3>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Destino</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Características</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">Paris, France</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">beautiful, romantic, expensive, famous museums</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">Tokyo, Japan</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">modern, exciting, crowded, great food</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">Cancun, Mexico</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">sunny, beaches, relaxing, fun</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">New York, USA</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">big, busy, exciting, expensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exercise 1 */}
      <ExerciseCard
        title="Ejercicio 1: Países y Nacionalidades"
        instructions="Completa con la nacionalidad correcta"
        exercises={[
          {
            question: "He's from Brazil. He's ____________.",
            correctAnswer: 'Brazilian',
          },
          {
            question: "She's from Japan. She's ____________.",
            correctAnswer: 'Japanese',
          },
          {
            question: "They're from Mexico. They're ____________.",
            correctAnswer: 'Mexican',
          },
          {
            question: "I'm from Peru. I'm ____________.",
            correctAnswer: 'Peruvian',
          },
          {
            question: "We're from France. We're ____________.",
            correctAnswer: 'French',
          },
        ]}
      />

      {/* Exercise 2 */}
      <ExerciseCard
        title="Ejercicio 2: WHO o WHERE"
        instructions="Completa con WHO o WHERE"
        exercises={[
          {
            question: '_______ is your best friend? - It\'s Carlos.',
            options: ['Who', 'Where'],
            correctAnswer: 'Who',
          },
          {
            question: "_______ are you from? - I'm from Lima.",
            options: ['Who', 'Where'],
            correctAnswer: 'Where',
          },
          {
            question: "_______ is the teacher? - She's Ms. Garcia.",
            options: ['Who', 'Where'],
            correctAnswer: 'Who',
          },
          {
            question: "_______ is the museum? - It's on Main Street.",
            options: ['Who', 'Where'],
            correctAnswer: 'Where',
          },
          {
            question: "_______ are they? - They're at the park.",
            options: ['Who', 'Where'],
            correctAnswer: 'Where',
          },
        ]}
      />

      {/* Exercise 3 */}
      <ExerciseCard
        title="Ejercicio 3: Adjetivos Opuestos"
        instructions="Completa con el adjetivo opuesto"
        exercises={[
          {
            question: 'Tokyo is big. My town is ____________.',
            options: ['small', 'large', 'big', 'tall'],
            correctAnswer: 'small',
          },
          {
            question: 'The streets are clean. The park is ____________.',
            options: ['clean', 'dirty', 'nice', 'beautiful'],
            correctAnswer: 'dirty',
          },
          {
            question: 'The city is modern. The buildings are ____________.',
            options: ['new', 'modern', 'old', 'tall'],
            correctAnswer: 'old',
          },
          {
            question: 'Lima is busy. The beach is ____________.',
            options: ['busy', 'crowded', 'quiet', 'noisy'],
            correctAnswer: 'quiet',
          },
          {
            question: 'The hotel is expensive. The hostel is ____________.',
            options: ['expensive', 'cheap', 'nice', 'small'],
            correctAnswer: 'cheap',
          },
        ]}
      />
    </LessonLayout>
  );
}
