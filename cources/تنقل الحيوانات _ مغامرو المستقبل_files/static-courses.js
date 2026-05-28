const STATIC_COURSE_STORAGE_KEY = 'petWildLang';
const STATIC_COURSE_LANGS = ['en', 'fr', 'ar'];

const STATIC_UI = {
  en: {
    brand: 'Future Adventurers',
    navWelcome: 'Welcome',
    navAbout: 'About Us',
    navCourses: 'Courses',
    navGames: 'Games',
    langLabel: 'Language',
    sectionLearn: 'Lesson Summary',
    sectionPoints: 'Important Facts',
    sectionActivities: 'Practice to Understand',
    sectionPicture: 'Picture to Help Understanding',
    pictureLink: 'Open helpful link',
    specialVideo: 'Watch the Animal Movement Video',
    specialGame: 'Movement Game',
    gameIntroTitle: 'Animal Adventure',
    gamePrompt: 'Choose how each animal moves before time runs out.',
    gameStart: 'Start Game',
    gameScore: 'Score',
    gameQuestion: 'Question {current} / {total}',
    gameProgress: 'Animal {current} of {total}',
    gameHabitat: 'Lives in: {habitat}',
    gameHintLead: 'Hint:',
    gameQuestionText: 'How does this animal move?',
    gameFactLead: 'Fun fact:',
    gameNext: 'Next Animal',
    gamePlayAgain: 'Play Again',
    gameResultLabel: 'points earned',
    gameTimeUp: "Time's up! The correct answer is {answer}.",
    gameCorrect: 'Great job! You got it right!',
    gameWrong: 'Nice try. Let us keep learning!',
    gameResultLowTitle: 'Keep practicing!',
    gameResultLowMsg: 'Every explorer starts somewhere. Try again to help more animals.',
    gameResultMidTitle: 'Good job!',
    gameResultMidMsg: 'You helped some animals get home. Can you save them all next time?',
    gameResultHighTitle: 'Amazing explorer!',
    gameResultHighMsg: 'You helped almost all the animals find their way home!',
    gameResultPerfectTitle: 'Super hero!',
    gameResultPerfectMsg: 'Perfect score! All the animals are safe thanks to you!',
    locomotionReady: 'Tap an animal to see how it moves.',
    locomotionGood: 'Great! {animal} can {move}.',
    avatarAskTitle: 'Ask Mo8amer',
    avatarAskReady: 'Mo8amer is ready for your question.',
    avatarAskText: 'Write a question and watch the avatar answer by itself.',
    avatarAskPlaceholder: 'Ask Mo8amer here',
    avatarAskButton: 'Ask now',
    backToCourses: 'Back to Courses',
    goToGames: 'Go to Games'
  },
  fr: {
    brand: 'Aventuriers du Futur',
    navWelcome: 'Accueil',
    navAbout: 'A propos',
    navCourses: 'Cours',
    navGames: 'Jeux',
    langLabel: 'Langue',
    sectionLearn: 'Resume de la lecon',
    sectionPoints: 'Faits importants',
    sectionActivities: 'Petite pratique pour comprendre',
    sectionPicture: 'Image pour mieux comprendre',
    pictureLink: 'Ouvrir le lien utile',
    specialVideo: 'Regarde la video des mouvements',
    specialGame: 'Jeu du mouvement',
    gameIntroTitle: 'Aventure des animaux',
    gamePrompt: 'Choisis comment chaque animal se deplace avant la fin du temps.',
    gameStart: 'Commencer',
    gameScore: 'Score',
    gameQuestion: 'Question {current} / {total}',
    gameProgress: 'Animal {current} sur {total}',
    gameHabitat: 'Vit dans : {habitat}',
    gameHintLead: 'Indice :',
    gameQuestionText: 'Comment cet animal se deplace-t-il ?',
    gameFactLead: 'Info amusante :',
    gameNext: 'Animal suivant',
    gamePlayAgain: 'Rejouer',
    gameResultLabel: 'points gagnes',
    gameTimeUp: 'Temps termine ! La bonne reponse est {answer}.',
    gameCorrect: 'Bravo ! Bonne reponse !',
    gameWrong: 'Ce n est pas grave. On continue !',
    gameResultLowTitle: 'Continue a t entrainer !',
    gameResultLowMsg: 'Chaque explorateur commence quelque part. Essaie encore pour aider plus d animaux.',
    gameResultMidTitle: 'Bon travail !',
    gameResultMidMsg: 'Tu as aide quelques animaux. Peux-tu tous les aider la prochaine fois ?',
    gameResultHighTitle: 'Explorateur genial !',
    gameResultHighMsg: 'Tu as aide presque tous les animaux a rentrer chez eux !',
    gameResultPerfectTitle: 'Super heros !',
    gameResultPerfectMsg: 'Score parfait ! Tous les animaux sont saufs grace a toi !',
    locomotionReady: 'Appuie sur un animal pour voir comment il bouge.',
    locomotionGood: 'Bravo ! {animal} peut {move}.',
    avatarAskTitle: 'Demande a Mo8amer',
    avatarAskReady: 'Mo8amer est pret pour ta question.',
    avatarAskText: 'Ecris une question et regarde l avatar repondre tout seul.',
    avatarAskPlaceholder: 'Ecris ta question ici',
    avatarAskButton: 'Demander',
    backToCourses: 'Retour aux cours',
    goToGames: 'Aller aux jeux'
  },
  ar: {
    brand: 'مغامرو المستقبل',
    navWelcome: 'الصفحة الرئيسية',
    navAbout: 'من نحن',
    navCourses: 'الدروس',
    navGames: 'الألعاب',
    langLabel: 'اللغة',
    sectionLearn: 'ملخص الدرس',
    sectionPoints: 'معلومات مهمة',
    sectionActivities: 'تدريب يساعد على الفهم',
    sectionPicture: 'صورة تساعد على الفهم',
    pictureLink: 'افتح الرابط المفيد',
    specialVideo: 'شاهد فيديو حركة الحيوانات',
    specialGame: 'لعبة الحركة',
    gameIntroTitle: 'مغامرة الحيوانات',
    gamePrompt: 'اختر طريقة حركة كل حيوان قبل انتهاء الوقت.',
    gameStart: 'ابدأ اللعبة',
    gameScore: 'النقاط',
    gameQuestion: 'السؤال {current} / {total}',
    gameProgress: 'الحيوان {current} من {total}',
    gameHabitat: 'يعيش في: {habitat}',
    gameHintLead: 'تلميح:',
    gameQuestionText: 'كيف يتحرك هذا الحيوان؟',
    gameFactLead: 'معلومة ممتعة:',
    gameNext: 'الحيوان التالي',
    gamePlayAgain: 'العب مرة أخرى',
    gameResultLabel: 'نقطة تم جمعها',
    gameTimeUp: 'انتهى الوقت! الإجابة الصحيحة هي {answer}.',
    gameCorrect: 'أحسنت! إجابة صحيحة!',
    gameWrong: 'لا بأس، لنواصل التعلّم!',
    gameResultLowTitle: 'واصل التدريب!',
    gameResultLowMsg: 'كل مستكشف يبدأ بالتعلّم. حاول مرة أخرى لمساعدة حيوانات أكثر.',
    gameResultMidTitle: 'عمل جيد!',
    gameResultMidMsg: 'لقد ساعدت بعض الحيوانات. هل تستطيع إنقاذها كلها في المرة القادمة؟',
    gameResultHighTitle: 'مستكشف رائع!',
    gameResultHighMsg: 'لقد ساعدت معظم الحيوانات على العودة إلى بيوتها!',
    gameResultPerfectTitle: 'بطل خارق!',
    gameResultPerfectMsg: 'نتيجة كاملة! كل الحيوانات أصبحت آمنة بفضلك!',
    locomotionReady: 'اضغط على حيوان لترى كيف يتحرك.',
    locomotionGood: 'رائع! يستطيع {animal} أن {move}.',
    avatarAskTitle: 'اسأل مغامر',
    avatarAskReady: 'مغامر جاهز لسؤالك.',
    avatarAskText: 'اكتب سؤالك وشاهد الصورة الرمزية وهي ترد وحدها.',
    avatarAskPlaceholder: 'اكتب سؤالك هنا',
    avatarAskButton: 'اسأل الآن',
    backToCourses: 'العودة إلى الدروس',
    goToGames: 'الذهاب إلى الألعاب'
  }
};

const STATIC_COURSES = {
  compass: {
    en: {
      title: 'The Compass',
      eyebrow: 'Science Course 1',
      subtitle: 'A compass helps us know directions and move with confidence.',
      intro: 'The compass is a small tool with a needle that points north. It helps children understand direction, maps, and safe outdoor exploration.',
      learn: [
        'Know the four directions: north, south, east, and west.',
        'Understand how the needle points north.',
        'Use a compass with a map in a simple activity.'
      ],
      points: [
        'A compass works best when it is held flat.',
        'The red part of the needle usually points north.',
        'People use compasses while hiking, sailing, and reading maps.',
        'A compass helps us describe where places are.'
      ],
      activities: [
        'Draw a big compass rose and label the four directions.',
        'Stand in the classroom and point to the north wall.',
        'Use a school map and say which direction the door is from the board.'
      ],
      summary: 'The compass is a simple tool that helps students understand directions and move from one place to another correctly.',
      pictureIdea: 'Use a picture of a child holding a compass above a map, with the four directions clearly labeled.',
      pictureLink: 'https://en.wikipedia.org/wiki/Compass'
    },
    fr: {
      title: 'La boussole',
      eyebrow: 'Cours de sciences 1',
      subtitle: 'La boussole nous aide a connaitre les directions et a nous orienter.',
      intro: 'La boussole est un petit outil avec une aiguille qui indique le nord. Elle aide les enfants a comprendre les directions, les cartes et les sorties en securite.',
      learn: [
        'Connaitre les quatre directions : nord, sud, est et ouest.',
        'Comprendre que l aiguille indique le nord.',
        'Utiliser une boussole avec une carte dans une activite simple.'
      ],
      points: [
        'La boussole fonctionne mieux quand elle est tenue bien a plat.',
        'La partie rouge de l aiguille montre souvent le nord.',
        'Les personnes utilisent la boussole en randonnee, en mer et avec des cartes.',
        'La boussole aide a decrire ou se trouvent les lieux.'
      ],
      activities: [
        'Dessine une grande rose des vents et ecris les quatre directions.',
        'Dans la classe, montre le mur du nord.',
        'Observe un plan de l ecole et dis dans quelle direction se trouve la porte.'
      ],
      summary: 'La boussole est un outil simple qui aide les eleves a comprendre les directions et a bien se repérer.',
      pictureIdea: 'Utilise une image d un enfant tenant une boussole au-dessus d une carte avec les quatre directions bien visibles.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Boussole'
    },
    ar: {
      title: 'البوصلة',
      eyebrow: 'درس علوم 1',
      subtitle: 'تساعدنا البوصلة على معرفة الاتجاهات والتحرك بثقة.',
      intro: 'البوصلة أداة صغيرة فيها إبرة تشير إلى الشمال. تساعد الأطفال على فهم الاتجاهات والخرائط والاستكشاف بطريقة آمنة.',
      learn: [
        'معرفة الاتجاهات الأربعة: الشمال والجنوب والشرق والغرب.',
        'فهم أن إبرة البوصلة تشير إلى الشمال.',
        'استخدام البوصلة مع خريطة في نشاط بسيط.'
      ],
      points: [
        'تعمل البوصلة بشكل أفضل عندما نحملها بشكل مستقيم.',
        'يشير الجزء الأحمر من الإبرة غالباً إلى الشمال.',
        'يستخدم الناس البوصلة في الرحلات وفي البحر ومع الخرائط.',
        'تساعدنا البوصلة على وصف مكان الأشياء.'
      ],
      activities: [
        'ارسم وردة الجهات واكتب عليها الاتجاهات الأربعة.',
        'قف في القسم وأشر إلى الجدار الموجود في جهة الشمال.',
        'استعمل خريطة بسيطة للمدرسة وقل في أي جهة يوجد الباب.'
      ],
      summary: 'البوصلة أداة بسيطة تساعد التلميذ على فهم الاتجاهات والانتقال من مكان إلى آخر بطريقة صحيحة.',
      pictureIdea: 'استخدم صورة لطفل يمسك بوصلة فوق خريطة، مع توضيح الاتجاهات الأربعة بشكل واضح.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%A8%D9%88%D8%B5%D9%84%D8%A9'
    }
  },
  pollution: {
    en: {
      title: 'The Pollution',
      eyebrow: 'Science Course 2',
      subtitle: 'Pollution makes our environment dirty and unsafe.',
      intro: 'Pollution happens when harmful materials enter the air, water, or land. Children can learn to notice pollution and protect the Earth through good habits.',
      learn: [
        'Recognize air, water, and land pollution.',
        'Understand how pollution affects people, animals, and plants.',
        'Practice simple actions that reduce pollution.'
      ],
      points: [
        'Smoke from cars and factories can pollute the air.',
        'Trash in rivers and seas can harm fish and birds.',
        'Plastic on the ground can dirty parks and streets.',
        'Recycling and saving water help the environment.'
      ],
      activities: [
        'Sort pictures into clean environment and polluted environment.',
        'Make a class poster with rules to keep the school clean.',
        'List three actions you can do at home to reduce waste.'
      ],
      summary: 'This lesson helps the student understand what pollution is, why it is dangerous, and how simple actions can protect the environment.',
      pictureIdea: 'Use a before-and-after image showing a clean park and the same park with smoke, trash, and dirty water.',
      pictureLink: 'https://en.wikipedia.org/wiki/Pollution'
    },
    fr: {
      title: 'La pollution',
      eyebrow: 'Cours de sciences 2',
      subtitle: 'La pollution rend notre environnement sale et dangereux.',
      intro: 'La pollution apparait lorsque des matieres nocives arrivent dans l air, l eau ou le sol. Les enfants peuvent apprendre a la reconnaitre et a proteger la Terre.',
      learn: [
        'Reconnaitre la pollution de l air, de l eau et du sol.',
        'Comprendre comment la pollution touche les humains, les animaux et les plantes.',
        'Pratiquer des gestes simples pour reduire la pollution.'
      ],
      points: [
        'La fumee des voitures et des usines peut polluer l air.',
        'Les dechets dans les rivieres et les mers peuvent faire du mal aux poissons et aux oiseaux.',
        'Le plastique sur le sol peut salir les rues et les parcs.',
        'Le recyclage et l economie d eau aident l environnement.'
      ],
      activities: [
        'Classe des images dans environnement propre et environnement pollue.',
        'Fabrique une affiche de classe avec des regles pour garder l ecole propre.',
        'Ecris trois actions a faire a la maison pour reduire les dechets.'
      ],
      summary: 'Cette lecon aide l eleve a comprendre ce qu est la pollution, pourquoi elle est dangereuse et comment proteger l environnement avec des gestes simples.',
      pictureIdea: 'Utilise une image avant-apres montrant un parc propre puis le meme parc avec fumee, dechets et eau sale.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Pollution'
    },
    ar: {
      title: 'التلوث',
      eyebrow: 'درس علوم 2',
      subtitle: 'التلوث يجعل بيئتنا غير نظيفة وغير آمنة.',
      intro: 'يحدث التلوث عندما تصل مواد ضارة إلى الهواء أو الماء أو التربة. يمكن للأطفال أن يتعلموا كيف يلاحظون التلوث وكيف يحمون الأرض بعادات جيدة.',
      learn: [
        'التعرّف على تلوث الهواء والماء والتربة.',
        'فهم كيف يؤثر التلوث في الإنسان والحيوان والنبات.',
        'التدرّب على خطوات بسيطة تقلل التلوث.'
      ],
      points: [
        'يمكن أن يلوث دخان السيارات والمصانع الهواء.',
        'قد تضر النفايات في الأنهار والبحار بالأسماك والطيور.',
        'يمكن أن يسبب البلاستيك على الأرض اتساخ الشوارع والحدائق.',
        'تساعد إعادة التدوير وتوفير الماء في حماية البيئة.'
      ],
      activities: [
        'صنّف الصور إلى بيئة نظيفة وبيئة ملوثة.',
        'اصنع ملصقاً صفياً فيه قواعد للحفاظ على نظافة المدرسة.',
        'اكتب ثلاث خطوات يمكنك فعلها في البيت لتقليل النفايات.'
      ],
      summary: 'يساعد هذا الدرس التلميذ على فهم معنى التلوث، ولماذا هو خطر، وكيف يمكن حماية البيئة بخطوات بسيطة.',
      pictureIdea: 'استخدم صورة قبل وبعد لحديقة نظيفة ثم الحديقة نفسها مع دخان ونفايات وماء متسخ.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AA%D9%84%D9%88%D8%AB'
    }
  },
  locomotion: {
    en: {
      title: 'The Locomotion in Animals',
      eyebrow: 'Science Course 3',
      subtitle: 'Animals move in many ways to live and survive.',
      intro: 'Animals do not all move the same way. Their body parts help them walk, swim, crawl, jump, or fly depending on where they live.',
      coachBubble: 'Hi explorer! Let us watch animals move and then choose the right motion.',
      videoCaption: 'Look carefully at the wings, fins, legs, and body shapes in the video.',
      motionGame: [
        { animal: 'Bird', move: 'fly', icon: '🦅', image: '../photo/eagle.png' },
        { animal: 'Fish', move: 'swim', icon: '🐟', image: '../photo/fish.png' },
        { animal: 'Snake', move: 'crawl', icon: '🐍', image: '../photo/snake.png' },
        { animal: 'Kangaroo', move: 'jump', icon: '🦘', image: '../photo/kangaroo.png' }
      ],
      adventureGame: [
        {
          name: 'Eagle',
          habitat: 'Sky and mountains',
          moveType: 'flying',
          correctAnswer: 'flying',
          image: '../photo/eagle.png',
          fallbackEmoji: '🦅',
          hint: 'Look at its wings and where it lives.',
          fact: 'An eagle uses strong wings to glide high in the sky.',
          choices: [
            { label: '🦅 Flying', value: 'flying' },
            { label: '🐟 Swimming', value: 'swimming' },
            { label: '🐸 Jumping', value: 'jumping' },
            { label: '🐍 Crawling', value: 'crawling' }
          ]
        },
        {
          name: 'Fish',
          habitat: 'Water',
          moveType: 'swimming',
          correctAnswer: 'swimming',
          image: '../photo/fish.png',
          fallbackEmoji: '🐟',
          hint: 'It lives underwater and has fins.',
          fact: 'Fish push water with fins and tails to swim.',
          choices: [
            { label: '🐟 Swimming', value: 'swimming' },
            { label: '🦅 Flying', value: 'flying' },
            { label: '🐸 Jumping', value: 'jumping' },
            { label: '🐍 Crawling', value: 'crawling' }
          ]
        },
        {
          name: 'Kangaroo',
          habitat: 'Australian grassland',
          moveType: 'jumping',
          correctAnswer: 'jumping',
          image: '../photo/kangaroo.png',
          fallbackEmoji: '🦘',
          hint: 'It has very strong back legs.',
          fact: 'A kangaroo can travel fast by making big jumps.',
          choices: [
            { label: '🦘 Jumping', value: 'jumping' },
            { label: '🐟 Swimming', value: 'swimming' },
            { label: '🦅 Flying', value: 'flying' },
            { label: '🐍 Crawling', value: 'crawling' }
          ]
        },
        {
          name: 'Snake',
          habitat: 'Forest and desert',
          moveType: 'crawling',
          correctAnswer: 'crawling',
          image: '../photo/snake.png',
          fallbackEmoji: '🐍',
          hint: 'It has no legs, so it moves with its body.',
          fact: 'A snake bends its body to move along the ground.',
          choices: [
            { label: '🐍 Crawling', value: 'crawling' },
            { label: '🦘 Jumping', value: 'jumping' },
            { label: '🐟 Swimming', value: 'swimming' },
            { label: '🦅 Flying', value: 'flying' }
          ]
        }
      ],
      learn: [
        'Name different types of animal movement.',
        'Match animals with the correct movement.',
        'Understand how wings, legs, fins, and body shape help locomotion.'
      ],
      points: [
        'Birds use wings to fly through the air.',
        'Fish use fins and tails to swim in water.',
        'Snakes move by crawling and bending their bodies.',
        'Kangaroos use strong back legs to jump far.'
      ],
      activities: [
        'Match animal cards to walk, fly, swim, jump, or crawl.',
        'Act out different animal movements with your classmates.',
        'Draw one animal and label the body parts that help it move.'
      ],
      summary: 'This lesson helps the student understand that each animal moves in a way that matches its body and its environment.',
      pictureIdea: 'Use a chart showing a bird flying, a fish swimming, a snake crawling, and a kangaroo jumping.',
      pictureLink: 'https://en.wikipedia.org/wiki/Animal_locomotion'
    },
    fr: {
      title: 'La locomotion chez les animaux',
      eyebrow: 'Cours de sciences 3',
      subtitle: 'Les animaux se deplacent de plusieurs facons pour vivre et survivre.',
      intro: 'Les animaux ne se deplacent pas tous de la meme maniere. Leurs parties du corps les aident a marcher, nager, ramper, sauter ou voler selon leur milieu.',
      coachBubble: 'Salut explorateur ! Regardons les animaux bouger puis choisissons le bon mouvement.',
      videoCaption: 'Observe bien les ailes, les nageoires, les pattes et la forme du corps dans la video.',
      motionGame: [
        { animal: 'Oiseau', move: 'voler', icon: '🦅', image: '../photo/eagle.png' },
        { animal: 'Poisson', move: 'nager', icon: '🐟', image: '../photo/fish.png' },
        { animal: 'Serpent', move: 'ramper', icon: '🐍', image: '../photo/snake.png' },
        { animal: 'Kangourou', move: 'sauter', icon: '🦘', image: '../photo/kangaroo.png' }
      ],
      adventureGame: [
        {
          name: 'Aigle',
          habitat: 'Ciel et montagnes',
          moveType: 'flying',
          correctAnswer: 'flying',
          image: '../photo/eagle.png',
          fallbackEmoji: '🦅',
          hint: 'Regarde ses ailes et son milieu.',
          fact: 'L aigle utilise ses ailes puissantes pour planer tres haut.',
          choices: [
            { label: '🦅 Voler', value: 'flying' },
            { label: '🐟 Nager', value: 'swimming' },
            { label: '🐸 Sauter', value: 'jumping' },
            { label: '🐍 Ramper', value: 'crawling' }
          ]
        },
        {
          name: 'Poisson',
          habitat: 'Eau',
          moveType: 'swimming',
          correctAnswer: 'swimming',
          image: '../photo/fish.png',
          fallbackEmoji: '🐟',
          hint: 'Il vit dans l eau et a des nageoires.',
          fact: 'Le poisson pousse l eau avec ses nageoires et sa queue.',
          choices: [
            { label: '🐟 Nager', value: 'swimming' },
            { label: '🦅 Voler', value: 'flying' },
            { label: '🐸 Sauter', value: 'jumping' },
            { label: '🐍 Ramper', value: 'crawling' }
          ]
        },
        {
          name: 'Kangourou',
          habitat: 'Prairie australienne',
          moveType: 'jumping',
          correctAnswer: 'jumping',
          image: '../photo/kangaroo.png',
          fallbackEmoji: '🦘',
          hint: 'Il a de tres fortes pattes arriere.',
          fact: 'Le kangourou se deplace vite grace a de grands sauts.',
          choices: [
            { label: '🦘 Sauter', value: 'jumping' },
            { label: '🐟 Nager', value: 'swimming' },
            { label: '🦅 Voler', value: 'flying' },
            { label: '🐍 Ramper', value: 'crawling' }
          ]
        },
        {
          name: 'Serpent',
          habitat: 'Foret et desert',
          moveType: 'crawling',
          correctAnswer: 'crawling',
          image: '../photo/snake.png',
          fallbackEmoji: '🐍',
          hint: 'Il n a pas de pattes et bouge avec son corps.',
          fact: 'Le serpent plie son corps pour avancer sur le sol.',
          choices: [
            { label: '🐍 Ramper', value: 'crawling' },
            { label: '🦘 Sauter', value: 'jumping' },
            { label: '🐟 Nager', value: 'swimming' },
            { label: '🦅 Voler', value: 'flying' }
          ]
        }
      ],
      learn: [
        'Nommer plusieurs types de deplacement chez les animaux.',
        'Associer chaque animal a sa facon de se deplacer.',
        'Comprendre comment les ailes, les pattes, les nageoires et la forme du corps aident a bouger.'
      ],
      points: [
        'Les oiseaux utilisent leurs ailes pour voler.',
        'Les poissons utilisent leurs nageoires et leur queue pour nager.',
        'Les serpents se deplacent en rampant et en pliant leur corps.',
        'Les kangourous utilisent leurs fortes pattes arriere pour sauter loin.'
      ],
      activities: [
        'Associe des cartes d animaux avec marcher, voler, nager, sauter ou ramper.',
        'Imite differents mouvements d animaux avec tes camarades.',
        'Dessine un animal et nomme les parties du corps qui l aident a se deplacer.'
      ],
      summary: 'Cette lecon aide l eleve a comprendre que chaque animal se deplace d une facon adaptee a son corps et a son milieu.',
      pictureIdea: 'Utilise un tableau montrant un oiseau qui vole, un poisson qui nage, un serpent qui rampe et un kangourou qui saute.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Locomotion_animale'
    },
    ar: {
      title: 'تنقل الحيوانات',
      eyebrow: 'درس علوم 3',
      subtitle: 'تتحرك الحيوانات بطرق كثيرة لتعيش وتحافظ على نفسها.',
      intro: 'لا تتحرك كل الحيوانات بالطريقة نفسها. تساعد أعضاء الجسم الحيوان على المشي أو السباحة أو الزحف أو القفز أو الطيران بحسب بيئته.',
      coachBubble: 'مرحباً يا مستكشف! لنشاهد الحيوانات وهي تتحرك ثم نختار الحركة المناسبة.',
      videoCaption: 'انظر جيداً إلى الأجنحة والزعانف والأرجل وشكل الجسم في الفيديو.',
      motionGame: [
        { animal: 'الطائر', move: 'يطير', icon: '🦅', image: '../photo/eagle.png' },
        { animal: 'السمكة', move: 'تسبح', icon: '🐟', image: '../photo/fish.png' },
        { animal: 'الأفعى', move: 'تزحف', icon: '🐍', image: '../photo/snake.png' },
        { animal: 'الكنغر', move: 'يقفز', icon: '🦘', image: '../photo/kangaroo.png' }
      ],
      adventureGame: [
        {
          name: 'النسر',
          habitat: 'السماء والجبال',
          moveType: 'flying',
          correctAnswer: 'flying',
          image: '../photo/eagle.png',
          fallbackEmoji: '🦅',
          hint: 'انظر إلى جناحيه والمكان الذي يعيش فيه.',
          fact: 'يستعمل النسر جناحيه القويين للطيران عالياً في السماء.',
          choices: [
            { label: '🦅 يطير', value: 'flying' },
            { label: '🐟 يسبح', value: 'swimming' },
            { label: '🐸 يقفز', value: 'jumping' },
            { label: '🐍 يزحف', value: 'crawling' }
          ]
        },
        {
          name: 'السمكة',
          habitat: 'الماء',
          moveType: 'swimming',
          correctAnswer: 'swimming',
          image: '../photo/fish.png',
          fallbackEmoji: '🐟',
          hint: 'هذا الحيوان يعيش في الماء وله زعانف.',
          fact: 'تدفع السمكة الماء باستعمال الزعانف والذيل لتسبح.',
          choices: [
            { label: '🐟 يسبح', value: 'swimming' },
            { label: '🦅 يطير', value: 'flying' },
            { label: '🐸 يقفز', value: 'jumping' },
            { label: '🐍 يزحف', value: 'crawling' }
          ]
        },
        {
          name: 'الكنغر',
          habitat: 'البراري الأسترالية',
          moveType: 'jumping',
          correctAnswer: 'jumping',
          image: '../photo/kangaroo.png',
          fallbackEmoji: '🦘',
          hint: 'له رجلان خلفيتان قويتان جداً.',
          fact: 'يتحرك الكنغر بسرعة من خلال القفزات الكبيرة.',
          choices: [
            { label: '🦘 يقفز', value: 'jumping' },
            { label: '🐟 يسبح', value: 'swimming' },
            { label: '🦅 يطير', value: 'flying' },
            { label: '🐍 يزحف', value: 'crawling' }
          ]
        },
        {
          name: 'الثعبان',
          habitat: 'الغابة والصحراء',
          moveType: 'crawling',
          correctAnswer: 'crawling',
          image: '../photo/snake.png',
          fallbackEmoji: '🐍',
          hint: 'ليس له أرجل ويتحرك بجسمه.',
          fact: 'يثني الثعبان جسمه ليتحرك على الأرض.',
          choices: [
            { label: '🐍 يزحف', value: 'crawling' },
            { label: '🦘 يقفز', value: 'jumping' },
            { label: '🐟 يسبح', value: 'swimming' },
            { label: '🦅 يطير', value: 'flying' }
          ]
        }
      ],
      learn: [
        'معرفة أنواع مختلفة من حركة الحيوانات.',
        'ربط كل حيوان بطريقة الحركة المناسبة له.',
        'فهم كيف تساعد الأجنحة والأرجل والزعانف وشكل الجسم على التنقل.'
      ],
      points: [
        'تستخدم الطيور الأجنحة للطيران في الهواء.',
        'تستخدم الأسماك الزعانف والذيل للسباحة في الماء.',
        'تتحرك الأفاعي بالزحف وثني أجسامها.',
        'يستعمل الكنغر رجليه الخلفيتين القويتين للقفز بعيداً.'
      ],
      activities: [
        'صل بطاقات الحيوانات بطرق الحركة مثل المشي والطيران والسباحة والقفز والزحف.',
        'قلّد حركات حيوانات مختلفة مع زملائك.',
        'ارسم حيواناً وحدد أعضاء الجسم التي تساعده على الحركة.'
      ],
      summary: 'يساعد هذا الدرس التلميذ على فهم أن لكل حيوان طريقة حركة تناسب جسمه وبيئته.',
      pictureIdea: 'استخدم لوحة تظهر طائراً يطير وسمكة تسبح وأفعى تزحف وكنغراً يقفز.',
      pictureLink: 'https://en.wikipedia.org/wiki/Animal_locomotion'
    }
  },
  petswild: {
    en: {
      title: 'Pets and Wild Animals',
      eyebrow: 'Science Course 4',
      subtitle: 'Some animals live with people and others belong in nature.',
      intro: 'Pets can live with families and need food, water, and care. Wild animals live in forests, seas, deserts, or savannas and should stay in their natural homes.',
      learn: [
        'Distinguish between pets and wild animals.',
        'Give examples of each type.',
        'Know how to behave kindly and safely with animals.'
      ],
      points: [
        'A dog or cat can be a pet because it can live with people.',
        'A lion or tiger is a wild animal and should stay in nature.',
        'Pets depend on people for care and food.',
        'Wild animals protect the balance of nature in their habitats.'
      ],
      activities: [
        'Sort animal pictures into pets and wild animals.',
        'Say one caring action for a pet and one safety rule for wild animals.',
        'Draw two boxes and place each animal in the correct box.'
      ],
      summary: 'This lesson helps the student understand the difference between animals that live with people and animals that live freely in nature.',
      pictureIdea: 'Use a comparison image with a pet dog at home and a lion in the savanna.',
      pictureLink: 'https://en.wikipedia.org/wiki/Pet'
    },
    fr: {
      title: 'Les animaux domestiques et sauvages',
      eyebrow: 'Cours de sciences 4',
      subtitle: 'Certains animaux vivent avec les humains et d autres vivent dans la nature.',
      intro: 'Les animaux domestiques peuvent vivre avec les familles et ont besoin de nourriture, d eau et de soins. Les animaux sauvages vivent dans les forets, les mers, les deserts ou les savanes.',
      learn: [
        'Faire la difference entre les animaux domestiques et sauvages.',
        'Donner des exemples de chaque groupe.',
        'Connaitre des comportements gentils et prudents avec les animaux.'
      ],
      points: [
        'Le chien ou le chat peuvent etre des animaux domestiques car ils vivent avec les humains.',
        'Le lion ou le tigre sont des animaux sauvages et doivent rester dans la nature.',
        'Les animaux domestiques dependent des humains pour les soins et la nourriture.',
        'Les animaux sauvages gardent l equilibre de la nature dans leurs habitats.'
      ],
      activities: [
        'Classe des images d animaux en domestiques et sauvages.',
        'Donne une action de soin pour un animal domestique et une regle de securite pour un animal sauvage.',
        'Dessine deux boites et place chaque animal dans la bonne boite.'
      ],
      summary: 'Cette lecon aide l eleve a comprendre la difference entre les animaux qui vivent avec les humains et ceux qui vivent librement dans la nature.',
      pictureIdea: 'Utilise une image de comparaison avec un chien domestique a la maison et un lion dans la savane.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Animal_domestique'
    },
    ar: {
      title: 'الحيوانات الأليفة والبرية',
      eyebrow: 'درس علوم 4',
      subtitle: 'بعض الحيوانات تعيش مع الإنسان وبعضها يعيش في الطبيعة.',
      intro: 'يمكن للحيوانات الأليفة أن تعيش مع العائلة وتحتاج إلى الطعام والماء والرعاية. أما الحيوانات البرية فتعيش في الغابة أو البحر أو الصحراء أو السافانا ويجب أن تبقى في بيئتها الطبيعية.',
      learn: [
        'التمييز بين الحيوانات الأليفة والحيوانات البرية.',
        'ذكر أمثلة من كل مجموعة.',
        'معرفة السلوك اللطيف والآمن مع الحيوانات.'
      ],
      points: [
        'يمكن أن يكون الكلب أو القط حيواناً أليفاً لأنه يعيش مع الإنسان.',
        'يعد الأسد أو النمر حيواناً برياً ويجب أن يبقى في الطبيعة.',
        'تعتمد الحيوانات الأليفة على الإنسان في الطعام والرعاية.',
        'تحافظ الحيوانات البرية على توازن الطبيعة في بيئاتها.'
      ],
      activities: [
        'صنّف صور الحيوانات إلى أليفة وبرية.',
        'اذكر عملاً لطيفاً مع حيوان أليف وقاعدة سلامة مع حيوان بري.',
        'ارسم صندوقين وضع كل حيوان في الصندوق الصحيح.'
      ],
      summary: 'يساعد هذا الدرس التلميذ على فهم الفرق بين الحيوانات التي تعيش مع الإنسان والحيوانات التي تعيش بحرية في الطبيعة.',
      pictureIdea: 'استخدم صورة مقارنة فيها كلب أليف في البيت وأسد في السافانا.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AD%D9%8A%D9%88%D8%A7%D9%86_%D8%A3%D9%84%D9%8A%D9%81'
    }
  },
  blood: {
    en: {
      title: 'The Blood Components',
      eyebrow: 'Science Course 5',
      subtitle: 'Blood is made of parts that work together inside the body.',
      intro: 'Blood travels all around the body. It carries oxygen and food, fights germs, and helps stop bleeding when we are hurt.',
      learn: [
        'Name red blood cells, white blood cells, platelets, and plasma.',
        'Understand the job of each blood component.',
        'Explain why blood is important for the body.'
      ],
      points: [
        'Red blood cells carry oxygen to the body.',
        'White blood cells help fight germs.',
        'Platelets help stop bleeding when we get a cut.',
        'Plasma carries water, nutrients, and other materials.'
      ],
      activities: [
        'Match each blood component with its job.',
        'Color a simple blood diagram using different colors for each part.',
        'Explain to a friend why blood is like a helpful team.'
      ],
      summary: 'This lesson helps the student understand that blood has different parts, and each part has an important job inside the body.',
      pictureIdea: 'Use a labeled diagram showing red blood cells, white blood cells, platelets, and plasma in a simple child-friendly style.',
      pictureLink: 'https://en.wikipedia.org/wiki/Blood'
    },
    fr: {
      title: 'Les composants du sang',
      eyebrow: 'Cours de sciences 5',
      subtitle: 'Le sang est forme de plusieurs parties qui travaillent ensemble.',
      intro: 'Le sang circule dans tout le corps. Il transporte l oxygene et la nourriture, combat les microbes et aide a arreter le saignement quand on se blesse.',
      learn: [
        'Nommer les globules rouges, les globules blancs, les plaquettes et le plasma.',
        'Comprendre le role de chaque composant du sang.',
        'Expliquer pourquoi le sang est important pour le corps.'
      ],
      points: [
        'Les globules rouges transportent l oxygene dans le corps.',
        'Les globules blancs aident a combattre les microbes.',
        'Les plaquettes aident a arreter le saignement en cas de blessure.',
        'Le plasma transporte l eau, les nutriments et d autres substances.'
      ],
      activities: [
        'Associe chaque composant du sang a son role.',
        'Colorie un schema simple du sang avec une couleur pour chaque partie.',
        'Explique a un camarade pourquoi le sang ressemble a une equipe utile.'
      ],
      summary: 'Cette lecon aide l eleve a comprendre que le sang a plusieurs parties et que chacune a un role important dans le corps.',
      pictureIdea: 'Utilise un schema avec etiquettes montrant les globules rouges, les globules blancs, les plaquettes et le plasma dans un style simple pour enfants.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Sang'
    },
    ar: {
      title: 'مكونات الدم',
      eyebrow: 'درس علوم 5',
      subtitle: 'يتكوّن الدم من أجزاء تعمل معاً داخل الجسم.',
      intro: 'يسير الدم في جميع أنحاء الجسم. ينقل الأكسجين والغذاء، ويحارب الجراثيم، ويساعد على إيقاف النزيف عند الجرح.',
      learn: [
        'معرفة كريات الدم الحمراء وكريات الدم البيضاء والصفائح الدموية والبلازما.',
        'فهم وظيفة كل مكوّن من مكونات الدم.',
        'شرح لماذا يعتبر الدم مهماً للجسم.'
      ],
      points: [
        'تحمل كريات الدم الحمراء الأكسجين إلى الجسم.',
        'تساعد كريات الدم البيضاء على محاربة الجراثيم.',
        'تساعد الصفائح الدموية على إيقاف النزيف عند الإصابة.',
        'تنقل البلازما الماء والمواد الغذائية ومواد أخرى.'
      ],
      activities: [
        'صل كل مكوّن من مكونات الدم بوظيفته.',
        'لوّن رسماً بسيطاً للدم باستعمال لون مختلف لكل جزء.',
        'اشرح لصديقك لماذا يشبه الدم فريق عمل مفيداً.'
      ],
      summary: 'يساعد هذا الدرس التلميذ على فهم أن الدم يتكوّن من أجزاء مختلفة، ولكل جزء وظيفة مهمة داخل الجسم.',
      pictureIdea: 'استخدم رسماً توضيحياً مع تسميات يظهر كريات الدم الحمراء وكريات الدم البيضاء والصفائح الدموية والبلازما بطريقة مبسطة للأطفال.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AF%D9%85'
    }
  }
};

const STATIC_EMOJIS = {
  compass: ['🧭', '🗺️', '⭐', '🧒', '🌍'],
  pollution: ['🌍', '🚯', '💧', '🌿', '♻️'],
  locomotion: ['🦅', '🐟', '🐍', '🦘', '🐾'],
  petswild: ['🐶', '🐱', '🦁', '🐘', '🌿'],
  blood: ['🩸', '❤️', '🔬', '🧪', '🛡️']
};

function normalizeStaticCourseLanguage(value) {
  return STATIC_COURSE_LANGS.includes(value) ? value : null;
}

function getStaticCourseLanguage() {
  const fromUrl = normalizeStaticCourseLanguage(new URLSearchParams(window.location.search).get('lang'));
  const fromStorage = normalizeStaticCourseLanguage(localStorage.getItem(STATIC_COURSE_STORAGE_KEY));
  const selected = fromUrl || fromStorage || 'ar';
  localStorage.setItem(STATIC_COURSE_STORAGE_KEY, selected);
  return selected;
}

let staticCourseLang = getStaticCourseLanguage();

function renderMovementVisual(item, extraClass = '') {
  if (item.image) {
    const className = ['movement-photo', extraClass].filter(Boolean).join(' ');
    return `<img class="${className}" src="${item.image}" alt="${item.animal}">`;
  }

  return `<span class="${extraClass}">${item.icon}</span>`;
}

function renderLocomotionAdventureGame(content) {
  const items = content.adventureGame || [];
  if (!items.length) return '';

  return `
    <section class="locomotion-quiz-game" data-quiz-game>
      <div class="quiz-screen is-active" data-quiz-screen="start">
        <span class="quiz-mascot">🦉</span>
        <h3>${uiText('gameIntroTitle')}</h3>
        <p class="quiz-subtitle">${uiText('gamePrompt')}</p>
        <div class="quiz-story-box">${content.intro}</div>
        <p class="quiz-stats">🎯 ${items.length} | ⏱ 15s | ⭐</p>
        <button class="quiz-main-btn" type="button" data-quiz-action="start">${uiText('gameStart')}</button>
      </div>

      <div class="quiz-screen" data-quiz-screen="play">
        <div class="quiz-hud">
          <div class="quiz-badge">⭐ ${uiText('gameScore')}: <span data-quiz-score>0</span></div>
          <div class="quiz-counter" data-quiz-counter>${formatStaticText(uiText('gameQuestion'), { current: 1, total: items.length })}</div>
          <div class="quiz-timer" data-quiz-timer>15</div>
        </div>
        <div class="quiz-progress-label" data-quiz-progress>${formatStaticText(uiText('gameProgress'), { current: 1, total: items.length })}</div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" data-quiz-progress-fill></div></div>
        <div class="quiz-animal-card" data-quiz-animal-card>
          <div class="quiz-animal-photo-wrap">
            <img class="quiz-animal-photo" data-quiz-image src="" alt="">
            <span class="quiz-animal-emoji" data-quiz-emoji hidden></span>
          </div>
          <div class="quiz-animal-name" data-quiz-name></div>
          <div class="quiz-animal-habitat" data-quiz-habitat></div>
        </div>
        <p class="quiz-hint">${uiText('gameHintLead')} <span data-quiz-hint></span></p>
        <div class="quiz-question">${uiText('gameQuestionText')}</div>
        <div class="quiz-answers" data-quiz-answers></div>
        <div class="quiz-feedback" data-quiz-feedback></div>
        <div class="quiz-fact" data-quiz-fact></div>
        <button class="quiz-main-btn quiz-next-btn" type="button" data-quiz-action="next">${uiText('gameNext')}</button>
      </div>

      <div class="quiz-screen" data-quiz-screen="end">
        <span class="quiz-mascot">🏆</span>
        <div class="quiz-result-stars" data-quiz-stars>⭐</div>
        <h3 data-quiz-result-title></h3>
        <div class="quiz-final-score" data-quiz-final-score>0</div>
        <p class="quiz-result-label">${uiText('gameResultLabel')}</p>
        <p class="quiz-result-message" data-quiz-result-message></p>
        <div class="quiz-summary" data-quiz-summary></div>
        <button class="quiz-main-btn" type="button" data-quiz-action="restart">${uiText('gamePlayAgain')}</button>
      </div>
    </section>
  `;
}

function uiText(key) {
  const aliases = {
    'nav.welcome': 'navWelcome',
    'nav.about': 'navAbout',
    'nav.courses': 'navCourses',
    'nav.games': 'navGames',
    'lang.label': 'langLabel'
  };
  const resolvedKey = aliases[key] || key;
  return (STATIC_UI[staticCourseLang] || STATIC_UI.en)[resolvedKey] || STATIC_UI.en[resolvedKey] || key;
}

function courseContent() {
  const courseId = document.body.dataset.courseId;
  const course = STATIC_COURSES[courseId];
  if (!course) return null;
  return course[staticCourseLang] || course.en;
}

function updateCourseLinks() {
  document.querySelectorAll('a[href]').forEach((anchor) => {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#')) return;
    const url = new URL(rawHref, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.endsWith('.html')) return;
    url.searchParams.set('lang', staticCourseLang);
    anchor.href = `${url.toString()}`;
  });
}

function renderStaticCoursePage() {
  const content = courseContent();
  if (!content) return;
  const courseId = document.body.dataset.courseId;
  const emojis = STATIC_EMOJIS[courseId] || ['📚', '⭐', '🎓'];

  document.documentElement.lang = staticCourseLang;
  document.documentElement.dir = staticCourseLang === 'ar' ? 'rtl' : 'ltr';
  document.title = `${content.title} | ${uiText('brand')}`;

  document.querySelectorAll('[data-ui], [data-i18n]').forEach((node) => {
    node.textContent = uiText(node.dataset.ui || node.dataset.i18n);
  });

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = staticCourseLang;
    const optionLabels = {
      en: { en: 'English', fr: 'French', ar: 'Arabic' },
      fr: { en: 'Anglais', fr: 'Francais', ar: 'Arabe' },
      ar: { en: 'الإنجليزية', fr: 'الفرنسية', ar: 'العربية' }
    };
    [...langSelect.options].forEach((option) => {
      option.textContent = optionLabels[staticCourseLang][option.value] || option.textContent;
    });
  }

  const container = document.getElementById('static-course-page');
  const movementItems = content.motionGame || [];
  const birdItem = movementItems[0];
  const fishItem = movementItems[1];
  const snakeItem = movementItems[2];
  const kangarooItem = movementItems[3];
  const specialFeature = courseId === 'locomotion'
    ? `
      <section class="wide-card locomotion-feature">
        <div class="locomotion-feature-grid">
          <article class="locomotion-coach-card">
            <div class="locomotion-avatar-wrap breathing-avatar-wrap">
              <img class="locomotion-avatar breathing-avatar" src="../photo/mo8amer.jpg" alt="Mo8amer avatar" />
              <div class="locomotion-bubble breathing-bubble" data-avatar-bubble>${content.coachBubble}</div>
            </div>
            <div class="course-avatar-qa" data-avatar-ask>
              <div class="course-avatar-qa-copy">
                <p class="eyebrow">${uiText('avatarAskTitle')}</p>
                <h3>${uiText('avatarAskReady')}</h3>
                <p>${uiText('avatarAskText')}</p>
              </div>
              <form class="avatar-qa-form" data-avatar-ask-form>
                <input class="avatar-qa-input" type="text" data-avatar-ask-input placeholder="${uiText('avatarAskPlaceholder')}" />
                <button class="avatar-qa-button" type="submit">${uiText('avatarAskButton')}</button>
              </form>
              <p class="avatar-qa-reply" data-avatar-ask-reply aria-live="polite"></p>
            </div>
          </article>

          <article class="locomotion-video-card">
            <p class="hero-badge">${uiText('specialVideo')}</p>
            <video class="locomotion-video" controls autoplay loop muted playsinline>
              <source src="../assests/video/animals.mp4" type="video/mp4">
            </video>
            <p>${content.videoCaption}</p>
          </article>
        </div>

        <article class="locomotion-play-card">

          
          <p class="movement-status" id="movement-status">${uiText('locomotionReady')}</p>
          ${renderLocomotionAdventureGame(content)}
        </article>
      </section>
    `
    : '';

  container.innerHTML = `
    <section class="hero">
      <div class="hero-badge">${content.eyebrow}</div>
      <h1>${content.title}</h1>
      <p>${content.subtitle}</p>
      <p>${content.intro}</p>
      <div class="emoji-row" aria-hidden="true">
        ${emojis.map((emoji) => `<span>${emoji}</span>`).join('')}
      </div>
    </section>

    ${specialFeature}



    <p class="footer-note">${content.summary}</p>
  `;

  updateCourseLinks();
  setupStaticCourseInteractions(courseId);
}

function formatStaticText(template, values = {}) {
  let text = template;
  Object.entries(values).forEach(([key, value]) => {
    text = text.replaceAll(`{${key}}`, String(value));
  });
  return text;
}

function setupStaticCourseInteractions(courseId) {
  if (courseId !== 'locomotion') return;

  const status = document.getElementById('movement-status');
  const cards = [...document.querySelectorAll('.movement-card')];
  const scene = document.querySelector('.animal-movement-scene');
  if (status && cards.length && scene) {
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        cards.forEach((item) => item.classList.remove('is-active'));
        card.classList.add('is-active');
        const motionIndex = card.dataset.motionIndex;
        scene.classList.add('is-focused');
        scene.dataset.motion = motionIndex;
        status.textContent = formatStaticText(uiText('locomotionGood'), {
          animal: card.dataset.animal,
          move: card.dataset.move
        });
      });
    });
  }

  setupStaticAvatarAsk();
  setupLocomotionQuizGame(courseContent());
}

function setupStaticAvatarAsk() {
  const widget = document.querySelector('[data-avatar-ask]');
  if (!widget || widget.dataset.avatarAskBound === 'true') return;

  widget.dataset.avatarAskBound = 'true';
  const form = widget.querySelector('[data-avatar-ask-form]');
  const input = widget.querySelector('[data-avatar-ask-input]');
  const reply = widget.querySelector('[data-avatar-ask-reply]');
  const bubble = document.querySelector('[data-avatar-bubble]');
  const courseId = document.body.dataset.courseId;
  const avatarAnswersByCourse = {
    locomotion: ['تحرك الحيوانات في البر بطرق مختلفة حسب نوعها. فبعضها يمشي أو يركض مثل الحصان والكلب، وبعضها يقفز مثل الأرنب والكنغر، وهناك من يزحف مثل الثعبان. هذه الحركات تساعدها على البحث عن الغذاء والهروب من الخطر', 'تستعمل الطيور أجنحتها للطيران.', 'تتحرك الأسماك في الماء عن طريق تحريك زعانفها وذيلها']
  };
  const answers = avatarAnswersByCourse[courseId] || ['answer1', 'answer2', 'answer3'];
  let answerIndex = 0;

  if (!form || !input || !reply) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim()) return;

    const nextAnswer = answers[answerIndex % answers.length];
    answerIndex += 1;
    reply.textContent = nextAnswer;
    if (bubble) bubble.textContent = nextAnswer;
    input.value = '';
  });
}

function setupLocomotionQuizGame(content) {
  const gameRoot = document.querySelector('[data-quiz-game]');
  const animals = content?.adventureGame || [];
  if (!gameRoot || !animals.length) return;

  const screens = [...gameRoot.querySelectorAll('[data-quiz-screen]')];
  const scoreNode = gameRoot.querySelector('[data-quiz-score]');
  const counterNode = gameRoot.querySelector('[data-quiz-counter]');
  const progressNode = gameRoot.querySelector('[data-quiz-progress]');
  const progressFill = gameRoot.querySelector('[data-quiz-progress-fill]');
  const timerNode = gameRoot.querySelector('[data-quiz-timer]');
  const imageNode = gameRoot.querySelector('[data-quiz-image]');
  const emojiNode = gameRoot.querySelector('[data-quiz-emoji]');
  const nameNode = gameRoot.querySelector('[data-quiz-name]');
  const habitatNode = gameRoot.querySelector('[data-quiz-habitat]');
  const hintNode = gameRoot.querySelector('[data-quiz-hint]');
  const answersNode = gameRoot.querySelector('[data-quiz-answers]');
  const feedbackNode = gameRoot.querySelector('[data-quiz-feedback]');
  const factNode = gameRoot.querySelector('[data-quiz-fact]');
  const nextBtn = gameRoot.querySelector('[data-quiz-action="next"]');
  const starsNode = gameRoot.querySelector('[data-quiz-stars]');
  const finalScoreNode = gameRoot.querySelector('[data-quiz-final-score]');
  const resultTitleNode = gameRoot.querySelector('[data-quiz-result-title]');
  const resultMessageNode = gameRoot.querySelector('[data-quiz-result-message]');
  const summaryNode = gameRoot.querySelector('[data-quiz-summary]');

  let currentIndex = 0;
  let score = 0;
  let timerId = null;
  let timeLeft = 15;
  let answered = false;
  let results = [];

  const showScreen = (screenName) => {
    screens.forEach((screen) => {
      screen.classList.toggle('is-active', screen.dataset.quizScreen === screenName);
    });
  };

  const stopTimer = () => {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
  };

  const updateHeader = () => {
    if (scoreNode) scoreNode.textContent = score;
    if (counterNode) counterNode.textContent = formatStaticText(uiText('gameQuestion'), { current: currentIndex + 1, total: animals.length });
    if (progressNode) progressNode.textContent = formatStaticText(uiText('gameProgress'), { current: currentIndex + 1, total: animals.length });
    if (progressFill) progressFill.style.width = `${(currentIndex / animals.length) * 100}%`;
    if (timerNode) {
      timerNode.textContent = timeLeft;
      timerNode.classList.toggle('is-urgent', timeLeft <= 5);
    }
  };

  const disableAnswers = () => {
    [...answersNode.querySelectorAll('button')].forEach((button) => {
      button.disabled = true;
    });
  };

  const markCorrectAnswer = (correctValue) => {
    [...answersNode.querySelectorAll('button')].forEach((button) => {
      if (button.dataset.value === correctValue) button.classList.add('is-correct');
    });
  };

  const showFeedback = (kind, animal) => {
    feedbackNode.className = `quiz-feedback is-visible ${kind}`;
    factNode.className = 'quiz-fact is-visible';
    factNode.innerHTML = `<strong>${uiText('gameFactLead')}</strong> ${animal.fact}`;
    nextBtn.classList.add('is-visible');
  };

  const finishQuestion = (isCorrect, timedOut = false, pickedValue = '') => {
    answered = true;
    stopTimer();
    disableAnswers();

    const animal = animals[currentIndex];
    const correctChoice = animal.choices.find((choice) => choice.value === animal.correctAnswer);

    if (timedOut) {
      markCorrectAnswer(animal.correctAnswer);
      feedbackNode.textContent = formatStaticText(uiText('gameTimeUp'), { answer: correctChoice?.label || animal.correctAnswer });
      showFeedback('wrong', animal);
    } else if (isCorrect) {
      score += 25 + Math.max(0, timeLeft * 2);
      if (scoreNode) scoreNode.textContent = score;
      feedbackNode.textContent = uiText('gameCorrect');
      showFeedback('correct', animal);
    } else {
      markCorrectAnswer(animal.correctAnswer);
      feedbackNode.textContent = uiText('gameWrong');
      showFeedback('wrong', animal);
    }

    results.push({ name: animal.name, emoji: animal.fallbackEmoji, correct: isCorrect });

    [...answersNode.querySelectorAll('button')].forEach((button) => {
      if (button.dataset.value === pickedValue) button.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
    });
  };

  const loadQuestion = () => {
    const animal = animals[currentIndex];
    answered = false;
    timeLeft = 15;
    updateHeader();
    feedbackNode.className = 'quiz-feedback';
    feedbackNode.textContent = '';
    factNode.className = 'quiz-fact';
    factNode.textContent = '';
    nextBtn.classList.remove('is-visible');

    nameNode.textContent = animal.name;
    habitatNode.textContent = formatStaticText(uiText('gameHabitat'), { habitat: animal.habitat });
    hintNode.textContent = animal.hint;
    imageNode.hidden = false;
    imageNode.src = animal.image;
    imageNode.alt = animal.name;
    emojiNode.hidden = true;
    emojiNode.textContent = animal.fallbackEmoji;
    imageNode.onerror = () => {
      imageNode.hidden = true;
      emojiNode.hidden = false;
    };

    answersNode.innerHTML = animal.choices.map((choice) => `
      <button class="quiz-answer" type="button" data-value="${choice.value}">
        <span>${choice.label}</span>
      </button>
    `).join('');

    [...answersNode.querySelectorAll('button')].forEach((button) => {
      button.addEventListener('click', () => {
        if (answered) return;
        const isCorrect = button.dataset.value === animal.correctAnswer;
        finishQuestion(isCorrect, false, button.dataset.value);
      });
    });

    stopTimer();
    timerId = window.setInterval(() => {
      timeLeft -= 1;
      updateHeader();
      if (timeLeft <= 0) finishQuestion(false, true);
    }, 1000);
  };

  const finishGame = () => {
    stopTimer();
    if (progressFill) progressFill.style.width = '100%';
    const correctCount = results.filter((item) => item.correct).length;
    const ratio = correctCount / animals.length;
    let title = uiText('gameResultLowTitle');
    let message = uiText('gameResultLowMsg');
    let stars = '⭐';

    if (ratio >= 0.5) {
      title = uiText('gameResultMidTitle');
      message = uiText('gameResultMidMsg');
      stars = '⭐⭐';
    }
    if (ratio >= 0.75) {
      title = uiText('gameResultHighTitle');
      message = uiText('gameResultHighMsg');
      stars = '⭐⭐⭐';
    }
    if (ratio === 1) {
      title = uiText('gameResultPerfectTitle');
      message = uiText('gameResultPerfectMsg');
      stars = '⭐⭐⭐⭐';
    }

    starsNode.textContent = stars;
    finalScoreNode.textContent = score;
    resultTitleNode.textContent = title;
    resultMessageNode.textContent = message;
    summaryNode.innerHTML = results.map((item) => `<span class="quiz-summary-chip ${item.correct ? 'is-correct' : 'is-wrong'}">${item.correct ? '✅' : '❌'} ${item.emoji} ${item.name}</span>`).join('');
    showScreen('end');
  };

  const startGame = () => {
    currentIndex = 0;
    score = 0;
    results = [];
    showScreen('play');
    loadQuestion();
  };

  gameRoot.querySelector('[data-quiz-action="start"]')?.addEventListener('click', startGame);
  gameRoot.querySelector('[data-quiz-action="restart"]')?.addEventListener('click', startGame);
  nextBtn?.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= animals.length) {
      finishGame();
    } else {
      loadQuestion();
    }
  });
}

function setupStaticCourseLanguageSwitcher() {
  const select = document.getElementById('lang-select');
  if (!select) return;
  select.value = staticCourseLang;
  select.addEventListener('change', (event) => {
    const next = event.target.value;
    if (!STATIC_COURSE_LANGS.includes(next)) return;
    staticCourseLang = next;
    localStorage.setItem(STATIC_COURSE_STORAGE_KEY, next);
    renderStaticCoursePage();
  });
}

renderStaticCoursePage();
setupStaticCourseLanguageSwitcher();
