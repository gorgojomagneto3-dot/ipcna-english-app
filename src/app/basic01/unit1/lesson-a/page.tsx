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

export default function Unit1LessonA() {
  return (
    <LessonLayout
      unitNumber={1}
      unitTitle="Introductions"
      lessonLetter="A"
      lessonTitle="Hi! (¡Hola!)"
      objectives={[
        'Saludar a alguien y presentarte usando pronombres personales',
        'Usar adjetivos posesivos con el verbo "be"',
        'Hacer y responder preguntas sobre ti mismo y otras personas',
        'Deletrear tu nombre y preguntar cómo se escribe algo',
      ]}
      nextLesson={{ href: '/basic01/unit1/lesson-b', label: 'Lección B: My Favorites' }}
      headerImage={images.handshake}
    >
      {/* Video Section - Premium Design */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
              {Icons.video("w-6 h-6 text-white")}
            </div>
            <div>
              <span className="text-xs font-semibold text-rose-200 uppercase tracking-wider">Video Lesson</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Carlos&apos;s Day</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <YouTubePlayer videoId="hnFZleIvrwY" title="Carlos's Day - El día de Carlos" />
        </div>
      </div>

      {/* Personal Information Vocabulary */}
      <VocabularyTable
        title="Información Personal (Personal Information)"
        items={[
          { english: 'first name', spanish: 'nombre de pila', example: 'My first name is Maria.' },
          { english: 'last name', spanish: 'apellido', example: 'My last name is Garcia.' },
          { english: 'nickname', spanish: 'apodo', example: 'Beto is my nickname.' },
          { english: 'classmate', spanish: 'compañero/a de clase', example: 'He is my classmate.' },
          { english: 'teacher', spanish: 'profesor/a', example: "She's a teacher." },
          { english: 'student ID number', spanish: 'número de carnet estudiantil', example: 'My student ID number is 12345.' },
          { english: 'email address', spanish: 'correo electrónico', example: 'My email address is carlos@mail.com.' },
          { english: 'phone number', spanish: 'número de teléfono', example: 'My phone number is 555-1234.' },
          { english: 'Mr. / Ms.', spanish: 'Sr. / Sra.', example: 'Mr. Smith is our teacher.' },
          { english: 'female / male', spanish: 'femenino / masculino', example: 'Check the box: female or male.' },
        ]}
      />

      {/* Numbers */}
      <GrammarTable
        title="Números 0-10 (Numbers)"
        headers={['Número', 'Inglés', 'Ejemplo']}
        rows={[
          { columns: ['0', 'zero', 'My phone number starts with zero.'] },
          { columns: ['1', 'one', 'I have one brother.'] },
          { columns: ['2', 'two', 'Two students are absent.'] },
          { columns: ['3', 'three', 'Three plus three is six.'] },
          { columns: ['4', 'four', 'I have four classes today.'] },
          { columns: ['5', 'five', 'Five is my lucky number.'] },
          { columns: ['6', 'six', 'There are six days until Friday.'] },
          { columns: ['7', 'seven', 'Seven students passed the test.'] },
          { columns: ['8', 'eight', 'Class starts at eight.'] },
          { columns: ['9', 'nine', 'Nine is before ten.'] },
          { columns: ['10', 'ten', 'I have ten fingers.'] },
        ]}
      />

      {/* Alphabet - Premium Design */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
              {Icons.alphabet("w-6 h-6 text-white")}
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Fonética</span>
              <h3 className="text-xl font-bold text-white tracking-tight">El Alfabeto (The Alphabet)</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { letter: 'A', pronunciation: '/eɪ/ (ei)' },
              { letter: 'B', pronunciation: '/biː/ (bi)' },
              { letter: 'C', pronunciation: '/siː/ (si)' },
              { letter: 'D', pronunciation: '/diː/ (di)' },
              { letter: 'E', pronunciation: '/iː/ (i)' },
              { letter: 'F', pronunciation: '/ef/ (ef)' },
              { letter: 'G', pronunciation: '/dʒiː/ (yi)' },
              { letter: 'H', pronunciation: '/eɪtʃ/ (eich)' },
              { letter: 'I', pronunciation: '/aɪ/ (ai)' },
              { letter: 'J', pronunciation: '/dʒeɪ/ (yei)' },
              { letter: 'K', pronunciation: '/keɪ/ (kei)' },
              { letter: 'L', pronunciation: '/el/ (el)' },
              { letter: 'M', pronunciation: '/em/ (em)' },
              { letter: 'N', pronunciation: '/en/ (en)' },
              { letter: 'O', pronunciation: '/oʊ/ (ou)' },
              { letter: 'P', pronunciation: '/piː/ (pi)' },
              { letter: 'Q', pronunciation: '/kjuː/ (kiu)' },
              { letter: 'R', pronunciation: '/ɑːr/ (ar)' },
              { letter: 'S', pronunciation: '/es/ (es)' },
              { letter: 'T', pronunciation: '/tiː/ (ti)' },
              { letter: 'U', pronunciation: '/juː/ (iu)' },
              { letter: 'V', pronunciation: '/viː/ (vi)' },
              { letter: 'W', pronunciation: '/ˈdʌbəljuː/ (dabliu)' },
              { letter: 'X', pronunciation: '/eks/ (eks)' },
              { letter: 'Y', pronunciation: '/waɪ/ (uai)' },
              { letter: 'Z', pronunciation: '/ziː/ (zi)' },
            ].map((item) => (
              <div 
                key={item.letter} 
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 text-center border border-blue-100 dark:border-blue-800/50 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 group-hover:text-white transition-colors duration-300 block">
                  {item.letter}
                </span>
                <span className="relative text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80 mt-2 block transition-colors duration-300 font-medium">
                  {item.pronunciation}
                </span>
              </div>
            ))}
          </div>
          
          {/* Tip Box */}
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-xl border border-amber-200/50 dark:border-amber-700/30">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-800/30 flex items-center justify-center flex-shrink-0">
                {Icons.lightbulb("w-5 h-5 text-amber-600 dark:text-amber-400")}
              </div>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">Pro Tip</p>
                <p className="text-sm text-amber-700 dark:text-amber-200 leading-relaxed">
                  La pronunciación entre paréntesis es una aproximación en español. 
                  El símbolo fonético (IPA) es la pronunciación exacta en inglés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spelling Vocabulary */}
      <GrammarTable
        title="Deletrear (Spelling)"
        headers={['Pregunta', 'Respuesta']}
        rows={[
          { columns: ['How do you spell that?', 'M-A-R-I-A'] },
          { columns: ["What's your name?", 'My name is Carlos.'] },
          { columns: ['How do you spell your last name?', 'G-A-R-C-I-A'] },
        ]}
      />

      {/* Friends and Favorites */}
      <VocabularyTable
        title="Amigos y Favoritos (Friends and Favorites)"
        items={[
          { english: 'friend', spanish: 'amigo/a', example: 'Maria is my friend.' },
          { english: 'best friend', spanish: 'mejor amigo/a', example: 'Juan is my best friend.' },
          { english: 'favorite', spanish: 'favorito/a', example: 'Pizza is my favorite food.' },
          { english: 'TV show', spanish: 'programa de TV', example: 'My favorite TV show is Friends.' },
          { english: 'sport', spanish: 'deporte', example: 'My favorite sport is soccer.' },
          { english: 'music', spanish: 'música', example: 'I like pop music.' },
          { english: 'actor', spanish: 'actor', example: 'My favorite actor is Tom Hanks.' },
          { english: 'actress', spanish: 'actriz', example: 'My favorite actress is Jennifer Lawrence.' },
        ]}
      />

      {/* Personal Pronouns + BE */}
      <GrammarTable
        title="1. Pronombres Personales + Verbo BE"
        headers={['Pronombre', 'Verbo BE', 'Contracción', 'Ejemplo']}
        rows={[
          { columns: ['I', 'am', "I'm", "I'm Carlos."] },
          { columns: ['You', 'are', "You're", "You're a student."] },
          { columns: ['He', 'is', "He's", "He's from Mexico."] },
          { columns: ['She', 'is', "She's", "She's my friend."] },
          { columns: ['It', 'is', "It's", "It's a book."] },
          { columns: ['We', 'are', "We're", "We're students."] },
          { columns: ['They', 'are', "They're", "They're teachers."] },
        ]}
      />

      {/* Possessive Adjectives */}
      <GrammarTable
        title="2. Adjetivos Posesivos"
        headers={['Pronombre', 'Adjetivo Posesivo', 'Ejemplo']}
        rows={[
          { columns: ['I', 'my', 'My name is Carlos.'] },
          { columns: ['You', 'your', "What's your name?"] },
          { columns: ['He', 'his', 'His name is John.'] },
          { columns: ['She', 'her', 'Her name is Maria.'] },
          { columns: ['It', 'its', 'Its name is Fluffy. (mascota)'] },
          { columns: ['We', 'our', 'Our teacher is nice.'] },
          { columns: ['They', 'their', 'Their school is big.'] },
        ]}
      />

      {/* Yes/No Questions with BE */}
      <GrammarTable
        title="3. Preguntas Yes/No con BE"
        headers={['Pregunta', 'Respuesta Afirmativa', 'Respuesta Negativa']}
        rows={[
          { columns: ['Is John a student?', 'Yes, he is.', "No, he isn't. / No, he's not."] },
          { columns: ['Are you from Peru?', 'Yes, I am.', "No, I'm not."] },
          { columns: ['Is she your friend?', 'Yes, she is.', "No, she isn't."] },
          { columns: ['Are they teachers?', 'Yes, they are.', "No, they aren't."] },
        ]}
      />

      {/* Dialogue */}
      <DialogueBox
        title="Diálogo Modelo: Presentaciones"
        situation="Dos estudiantes se conocen en clase."
        lines={[
          { speaker: 'Carlos', text: "Hello! I'm Carlos, but please call me Beto. It's my nickname." },
          { speaker: 'Maria', text: 'Hi Beto! Nice to meet you. I\'m Maria.' },
          { speaker: 'Carlos', text: 'Nice to meet you too, Maria. Are you a student here?' },
          { speaker: 'Maria', text: "Yes, I am. I'm in the English class. And you?" },
          { speaker: 'Carlos', text: "Me too! Where are you from?" },
          { speaker: 'Maria', text: "I'm from Lima, Peru. And you?" },
          { speaker: 'Carlos', text: "I'm from Mexico City." },
          { speaker: 'Maria', text: "Cool! What's your last name?" },
          { speaker: 'Carlos', text: "It's Rodriguez. R-O-D-R-I-G-U-E-Z." },
          { speaker: 'Maria', text: "Nice! My last name is Garcia. G-A-R-C-I-A." },
        ]}
      />

      {/* Speaking Strategy - Premium Design */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
              {Icons.chat("w-6 h-6 text-white")}
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-100 uppercase tracking-wider">Speaking Strategy</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Introducing Yourself</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="group p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30 hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Preguntando el nombre</p>
                <p className="text-lg font-semibold text-amber-800 dark:text-amber-200">Hi, what&apos;s your name?</p>
              </div>
              <div className="group p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30 hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Respondiendo</p>
                <p className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-1">Hi, my name is Liling.</p>
                <p className="text-base text-amber-700 dark:text-amber-300">I&apos;m Liling. / It&apos;s Liling.</p>
              </div>
              <div className="group p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30 hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Con apodo</p>
                <p className="text-lg font-semibold text-amber-800 dark:text-amber-200">I&apos;m Alberto, but please call me Beto.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="group p-5 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/30 hover:shadow-lg hover:shadow-orange-200/50 dark:hover:shadow-orange-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">Saludando</p>
                <p className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1">(It&apos;s) nice to meet you.</p>
                <p className="text-base text-orange-700 dark:text-orange-300">(It&apos;s) nice to meet you, too.</p>
              </div>
              <div className="group p-5 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/30 hover:shadow-lg hover:shadow-orange-200/50 dark:hover:shadow-orange-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">Preguntando deletreo</p>
                <p className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1">How do you spell that?</p>
                <p className="text-base text-orange-700 dark:text-orange-300">How do you spell your (last) name?</p>
              </div>
              <div className="group p-5 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/30 hover:shadow-lg hover:shadow-orange-200/50 dark:hover:shadow-orange-500/5 transition-all duration-300">
                <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">Respondiendo deletreo</p>
                <p className="text-lg font-semibold text-orange-800 dark:text-orange-200">It&apos;s (spelled) P-O-R-T-E-R.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Phrases */}
      <KeyPhrasesCard
        title="Frases Clave del Diálogo"
        phrases={[
          { english: 'Hello! / Hi!', spanish: '¡Hola!' },
          { english: "I'm [nombre]", spanish: 'Soy [nombre]' },
          { english: 'Nice to meet you.', spanish: 'Mucho gusto.' },
          { english: 'Nice to meet you too.', spanish: 'Igualmente.' },
          { english: 'Please call me [apodo].', spanish: 'Por favor llámame [apodo].' },
          { english: 'Where are you from?', spanish: '¿De dónde eres?' },
          { english: "I'm from [lugar].", spanish: 'Soy de [lugar].' },
        ]}
      />

      {/* Celebrity Images - Premium Gallery */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
              {Icons.star("w-6 h-6 text-white")}
            </div>
            <div>
              <span className="text-xs font-semibold text-pink-200 uppercase tracking-wider">Famous People</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Famous Name Changers - Celebrities</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Lady Gaga', realName: 'Stefani Germanotta', image: images.ladyGaga },
              { name: 'Rihanna', realName: 'Robyn Fenty', image: images.rihanna },
              { name: 'Chuck Norris', realName: 'Carlos Ray Norris', image: images.chuckNorris },
            ].map((celebrity, index) => (
              <div key={index} className="group text-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none mb-4 aspect-[3/4]">
                  <ImageCard 
                    src={celebrity.image}
                    alt={celebrity.name}
                    aspectRatio="portrait"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Name on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">{celebrity.name}</p>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">{celebrity.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Real name: <span className="font-medium text-purple-600 dark:text-purple-400">{celebrity.realName}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reading */}
      <ReadingSection
        title="Reading: Famous Name Changers"
        skill="Leer para obtener detalles sobre personas que cambiaron de nombre"
        text={[
          "Many famous people change their names. Stefani Joanne Angelina Germanotta is a singer from New York. Her stage name is Lady Gaga.",
          "Robyn Rihanna Fenty is from Barbados. She is a famous singer too. Her stage name is just Rihanna.",
          "Carlos Ray Norris is an actor from Oklahoma. His nickname is Chuck Norris.",
          "Why do celebrities change their names? Some names are difficult to spell or remember. A short, simple name is easier for fans.",
        ]}
        questions={[
          { question: "What is Lady Gaga's real name?", answer: "Stefani Joanne Angelina Germanotta" },
          { question: 'Where is Rihanna from?', answer: 'Barbados' },
          { question: "What is Chuck Norris's real first name?", answer: 'Carlos' },
          { question: 'Why do celebrities change their names?', answer: 'Some names are difficult to spell or remember. A short, simple name is easier for fans.' },
        ]}
      />

      {/* Writing */}
      <WritingSection
        title="Writing: Write About Your Favorites"
        instructions="Escribe un párrafo sobre ti mismo siguiendo el modelo."
        model={`My name is Carlos Rodriguez. I'm from Mexico City. My favorite actor is Tom Hanks. My favorite actress is Jennifer Lawrence. My favorite TV show is "Friends." My favorite sport is soccer, and my favorite music is rock.`}
        template={`My name is ____________. I'm from ____________. My favorite actor is ____________. My favorite actress is ____________. My favorite TV show is "____________." My favorite sport is ____________, and my favorite music is ____________.`}
      />

      {/* Communication Activity */}
      <CommunicationActivity
        title="Interview Your Classmates"
        description="Entrevista a 3 compañeros y completa la tabla."
        tableHeaders={['Pregunta', 'Compañero 1', 'Compañero 2', 'Compañero 3']}
        tableRows={4}
        questions={[
          "What's your name?",
          'Where are you from?',
          "What's your favorite TV show?",
          "What's your favorite sport?",
        ]}
      />

      {/* Grammar Notes Section - Premium Design */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
              {Icons.book("w-6 h-6 text-white")}
            </div>
            <div>
              <span className="text-xs font-semibold text-violet-200 uppercase tracking-wider">Grammar Reference</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Subject Pronouns with be</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject pronoun</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">be</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contractions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
                <tr className="hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors"><td className="px-6 py-4 font-semibold text-violet-600 dark:text-violet-400">I</td><td className="px-6 py-4 text-gray-700 dark:text-gray-300">am</td><td className="px-6 py-4 text-gray-600 dark:text-gray-400">I am = I&apos;m</td></tr>
                <tr className="hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors"><td className="px-6 py-4 font-semibold text-violet-600 dark:text-violet-400">You</td><td className="px-6 py-4 text-gray-700 dark:text-gray-300">are</td><td className="px-6 py-4 text-gray-600 dark:text-gray-400">you are = you&apos;re</td></tr>
                <tr className="hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors"><td className="px-6 py-4 font-semibold text-violet-600 dark:text-violet-400">He / She</td><td className="px-6 py-4 text-gray-700 dark:text-gray-300">is</td><td className="px-6 py-4 text-gray-600 dark:text-gray-400">he is = he&apos;s / she is = she&apos;s</td></tr>
                <tr className="hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors"><td className="px-6 py-4 font-semibold text-violet-600 dark:text-violet-400">We / They</td><td className="px-6 py-4 text-gray-700 dark:text-gray-300">are</td><td className="px-6 py-4 text-gray-600 dark:text-gray-400">we are = we&apos;re / they are = they&apos;re</td></tr>
                <tr className="hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors"><td className="px-6 py-4 font-semibold text-violet-600 dark:text-violet-400">It</td><td className="px-6 py-4 text-gray-700 dark:text-gray-300">is</td><td className="px-6 py-4 text-gray-600 dark:text-gray-400">it is = it&apos;s</td></tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-xl border border-violet-100 dark:border-violet-800/30">
            <p className="text-sm text-violet-700 dark:text-violet-300 italic">
              <span className="font-semibold">Example:</span> I am a student. → I&apos;m a student. | It is a book. → It&apos;s a book.
            </p>
          </div>
        </div>
      </div>

      {/* Grammar Exercise A: Complete with BE */}
      <ExerciseCard
        title="Grammar Exercise A: Complete with BE"
        instructions="Complete each sentence with the correct form of the verb BE (am, is, are)"
        exercises={[
          {
            question: 'She _____ a teacher.',
            options: ['am', 'is', 'are'],
            correctAnswer: 'is',
          },
          {
            question: 'It _____ an ID card.',
            options: ['am', 'is', 'are'],
            correctAnswer: 'is',
          },
          {
            question: 'You _____ my classmate.',
            options: ['am', 'is', 'are'],
            correctAnswer: 'are',
          },
          {
            question: 'I _____ here.',
            options: ['am', 'is', 'are'],
            correctAnswer: 'am',
          },
        ]}
      />

      {/* Grammar Exercise B: Subject Pronouns */}
      <ExerciseCard
        title="Grammar Exercise B: Write the Subject Pronoun"
        instructions="Look at the underlined words. Write the correct subject pronoun."
        exercises={[
          {
            question: 'Yuki and Beto are here. → _____ are here.',
            options: ['He', 'She', 'They', 'We'],
            correctAnswer: 'They',
          },
          {
            question: 'My ID card is at home. → _____ is at home.',
            options: ['He', 'She', 'It', 'They'],
            correctAnswer: 'It',
          },
          {
            question: 'Lily is at school. → _____ is at school.',
            options: ['He', 'She', 'It', 'They'],
            correctAnswer: 'She',
          },
          {
            question: 'Carlos is at home. → _____ is at home.',
            options: ['He', 'She', 'It', 'They'],
            correctAnswer: 'He',
          },
        ]}
      />

      {/* Grammar Exercise C: Subject Pronoun or Possessive Adjective */}
      <ExerciseCard
        title="Grammar Exercise C: Subject Pronoun or Possessive Adjective"
        instructions="Complete the sentences with the correct subject pronoun or possessive adjective."
        exercises={[
          {
            question: '_____ is a teacher. _____ name is Mr. Porter.',
            options: ['He / His', 'She / Her', 'They / Their', 'We / Our'],
            correctAnswer: 'He / His',
          },
          {
            question: '_____ are my cousins. _____ last name is Novak.',
            options: ['He / His', 'She / Her', 'They / Their', 'We / Our'],
            correctAnswer: 'They / Their',
          },
          {
            question: '_____ name is Yukiko. _____ nickname is Yuki.',
            options: ['My / My', 'Her / Her', 'His / His', 'Their / Their'],
            correctAnswer: 'Her / Her',
          },
          {
            question: '_____ is a teacher. _____ name is Ms. Groves.',
            options: ['He / His', 'She / Her', 'They / Their', 'It / Its'],
            correctAnswer: 'She / Her',
          },
        ]}
      />

      {/* Grammar Exercise D: Contractions */}
      <ExerciseCard
        title="Grammar Exercise D: Contractions"
        instructions="Rewrite each sentence using a contraction."
        exercises={[
          {
            question: 'I am a student. →',
            correctAnswer: "I'm a student.",
          },
          {
            question: 'You are my classmate. →',
            correctAnswer: "You're my classmate.",
          },
          {
            question: 'She is a teacher. →',
            correctAnswer: "She's a teacher.",
          },
          {
            question: 'It is an ID card. →',
            correctAnswer: "It's an ID card.",
          },
          {
            question: 'They are my classmates. →',
            correctAnswer: "They're my classmates.",
          },
          {
            question: 'He is a student. →',
            correctAnswer: "He's a student.",
          },
        ]}
      />

      {/* Exercise 1 */}
      <ExerciseCard
        title="Ejercicio 1: Pronombres Personales"
        instructions="Completa con el pronombre correcto (I, you, he, she, it, we, they)"
        exercises={[
          {
            question: 'Maria is my friend. _____ is from Peru.',
            options: ['I', 'She', 'He', 'They'],
            correctAnswer: 'She',
          },
          {
            question: 'Carlos and I are students. _____ are in English class.',
            options: ['We', 'They', 'You', 'I'],
            correctAnswer: 'We',
          },
          {
            question: '_____ am from Mexico.',
            options: ['He', 'She', 'I', 'They'],
            correctAnswer: 'I',
          },
          {
            question: 'John is a teacher. _____ is very nice.',
            options: ['She', 'It', 'He', 'They'],
            correctAnswer: 'He',
          },
          {
            question: 'The book is on the table. _____ is red.',
            options: ['He', 'She', 'It', 'They'],
            correctAnswer: 'It',
          },
        ]}
      />

      {/* Exercise 2 */}
      <ExerciseCard
        title="Ejercicio 2: Adjetivos Posesivos"
        instructions="Completa con el adjetivo posesivo correcto (my, your, his, her, its, our, their)"
        exercises={[
          {
            question: "I'm Carlos. _____ nickname is Beto.",
            options: ['My', 'Your', 'His', 'Her'],
            correctAnswer: 'My',
          },
          {
            question: "She's Maria. _____ last name is Garcia.",
            options: ['My', 'Your', 'His', 'Her'],
            correctAnswer: 'Her',
          },
          {
            question: "What's _____ name? (tú)",
            options: ['my', 'your', 'his', 'our'],
            correctAnswer: 'your',
          },
          {
            question: "They're students. _____ teacher is Mr. Smith.",
            options: ['His', 'Her', 'Our', 'Their'],
            correctAnswer: 'Their',
          },
          {
            question: "We're from Peru. _____ country is beautiful.",
            options: ['My', 'Your', 'Our', 'Their'],
            correctAnswer: 'Our',
          },
        ]}
      />

      {/* Exercise 3 */}
      <ExerciseCard
        title="Ejercicio 3: Respuestas Cortas"
        instructions="Completa las respuestas cortas"
        exercises={[
          {
            question: 'Is Carlos from Mexico? → Yes, _____.',
            correctAnswer: 'he is',
          },
          {
            question: "Are you a teacher? → No, _____.",
            correctAnswer: "I'm not",
          },
          {
            question: 'Is Maria your friend? → Yes, _____.',
            correctAnswer: 'she is',
          },
          {
            question: "Are they students? → No, _____.",
            correctAnswer: "they aren't",
          },
        ]}
      />
    </LessonLayout>
  );
}
