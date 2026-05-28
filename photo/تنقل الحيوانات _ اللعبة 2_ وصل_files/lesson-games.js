const GAME_STORAGE_KEY = 'petWildLang';
const GAME_LANGS = ['en', 'fr', 'ar'];

const GAME_UI = {
  en: {
    brand: 'Future Adventurers',
    navHome: 'Welcome',
    navAbout: 'About Us',
    navCourses: 'Courses',
    navGames: 'Games',
    langLabel: 'Language',
    langEn: 'English',
    langFr: 'French',
    langAr: 'Arabic',
    quizBadge: 'Game 1: Quiz',
    matchBadge: 'Game 2: Match',
    orderBadge: 'Game 3: Order',
    score: 'Stars:',
    question: 'Question {current} of {total}',
    leftColumn: 'Cards',
    rightColumn: 'Matches',
    matchIntro: 'Pick one card from the left, then choose its correct match on the right.',
    orderIntro: 'Tap the cards in the correct order.',
    orderCheck: 'Check order',
    orderReset: 'Reset',
    fullscreen: 'Play Big!',
    exitFullscreen: 'Back to Small',
    motionPortalTitle: 'A Magic Jungle Is Waiting!',
    motionPortalText: 'Press the big button to jump into the animal world and start learning.',
    motionPortalButton: 'Open the Jungle World!',
    motionAnimals: 'Animals',
    motionActions: 'Actions',
    motionPick: 'Pick an animal from the left, then choose its action.',
    nextGame: 'Other Games For This Lesson',
    good: 'Great job!',
    tryAgain: 'Try again.',
    matchDone: 'You matched all the cards.',
    orderNeedAll: 'Choose all the cards first.',
    orderDone: 'Excellent order!'
  },
  fr: {
    brand: 'Aventuriers du Futur',
    navHome: 'Accueil',
    navAbout: 'A propos',
    navCourses: 'Cours',
    navGames: 'Jeux',
    langLabel: 'Langue',
    langEn: 'Anglais',
    langFr: 'Francais',
    langAr: 'Arabe',
    quizBadge: 'Jeu 1 : Quiz',
    matchBadge: 'Jeu 2 : Associe',
    orderBadge: 'Jeu 3 : Range',
    score: 'Etoiles :',
    question: 'Question {current} sur {total}',
    leftColumn: 'Cartes',
    rightColumn: 'Reponses',
    matchIntro: 'Choisis une carte a gauche, puis son bon partenaire a droite.',
    orderIntro: 'Appuie sur les cartes dans le bon ordre.',
    orderCheck: 'Verifier',
    orderReset: 'Recommencer',
    fullscreen: 'Jouer en grand !',
    exitFullscreen: 'Retour petit',
    motionPortalTitle: 'Une jungle magique t attend !',
    motionPortalText: 'Appuie sur le grand bouton pour entrer dans le monde des animaux et apprendre en jouant.',
    motionPortalButton: 'Ouvrir le monde de la jungle !',
    motionAnimals: 'Animaux',
    motionActions: 'Actions',
    motionPick: 'Choisis un animal a gauche, puis son action.',
    nextGame: 'Autres jeux de cette lecon',
    good: 'Bravo !',
    tryAgain: 'Essaie encore.',
    matchDone: 'Tu as bien associe toutes les cartes.',
    orderNeedAll: 'Choisis toutes les cartes d abord.',
    orderDone: 'Excellent ordre !'
  },
  ar: {
    brand: 'مغامرو المستقبل',
    navHome: 'الصفحة الرئيسية',
    navAbout: 'من نحن',
    navCourses: 'الدروس',
    navGames: 'الألعاب',
    langLabel: 'اللغة',
    langEn: 'الإنجليزية',
    langFr: 'الفرنسية',
    langAr: 'العربية',
    quizBadge: 'اللعبة 1: اختبار',
    matchBadge: 'اللعبة 2: وصل',
    orderBadge: 'اللعبة 3: ترتيب',
    score: 'النجوم:',
    question: 'السؤال {current} من {total}',
    leftColumn: 'البطاقات',
    rightColumn: 'الإجابات',
    matchIntro: 'اختر بطاقة من اليسار ثم اختر الإجابة المناسبة من اليمين.',
    orderIntro: 'اضغط على البطاقات بالترتيب الصحيح.',
    orderCheck: 'تحقق من الترتيب',
    orderReset: 'أعد المحاولة',
    fullscreen: 'يلا نكبر اللعبة!',
    exitFullscreen: 'نرجعها صغيرة',
    motionPortalTitle: 'في غابة سحرية تنتظرك!',
    motionPortalText: 'اضغط على الزر الكبير لتدخل عالم الحيوانات وتتعلم وأنت تلعب.',
    motionPortalButton: 'افتح عالم الغابة!',
    motionAnimals: 'الحيوانات',
    motionActions: 'الحركات',
    motionPick: 'اختر حيواناً من اليسار ثم اختر حركته.',
    nextGame: 'ألعاب أخرى لهذا الدرس',
    good: 'رائع!',
    tryAgain: 'حاول مرة أخرى.',
    matchDone: 'أحسنت! أنهيت جميع البطاقات.',
    orderNeedAll: 'اختر جميع البطاقات أولاً.',
    orderDone: 'ترتيب ممتاز!'
  }
};

const LESSON_GAMES = {
  compass: {
    emoji: ['🧭','🗺️','⭐','🌍'],
    links: ['compass-quiz.html','compass-match.html','compass-order.html'],
    en: {
      lesson: 'Compass',
      subtitle: 'Play to understand directions and compass use.',
      quiz: [
        { prompt: 'Which direction does a compass needle point to first?', options: ['North', 'South', 'West'], answer: 'North' },
        { prompt: 'What helps us use a compass with places?', options: ['A map', 'A spoon', 'A shoe'], answer: 'A map' },
        { prompt: 'How should we hold a compass?', options: ['Flat', 'Upside down', 'In water'], answer: 'Flat' }
      ],
      match: {
        pairs: [
          ['North', 'Direction the needle points to'],
          ['Map', 'Helps show places'],
          ['East', 'One of the four directions']
        ]
      },
      order: {
        prompt: 'Put the steps of using a compass in order.',
        items: ['Hold the compass flat', 'Wait for the needle to stop', 'Find north', 'Read the other directions']
      }
    },
    fr: {
      lesson: 'La boussole',
      subtitle: 'Joue pour comprendre les directions et l usage de la boussole.',
      quiz: [
        { prompt: 'Vers quelle direction l aiguille montre-t-elle d abord ?', options: ['Nord', 'Sud', 'Ouest'], answer: 'Nord' },
        { prompt: 'Qu est-ce qui aide a utiliser la boussole avec les lieux ?', options: ['Une carte', 'Une cuillere', 'Une chaussure'], answer: 'Une carte' },
        { prompt: 'Comment faut-il tenir la boussole ?', options: ['A plat', 'A l envers', 'Dans l eau'], answer: 'A plat' }
      ],
      match: {
        pairs: [
          ['Nord', 'Direction montree par l aiguille'],
          ['Carte', 'Aide a montrer les lieux'],
          ['Est', 'Une des quatre directions']
        ]
      },
      order: {
        prompt: 'Range les etapes pour utiliser la boussole.',
        items: ['Tenir la boussole a plat', 'Attendre que l aiguille s arrete', 'Trouver le nord', 'Lire les autres directions']
      }
    },
    ar: {
      lesson: 'البوصلة',
      subtitle: 'العب لتفهم الاتجاهات وكيفية استعمال البوصلة.',
      quiz: [
        { prompt: 'إلى أي جهة تشير إبرة البوصلة أولاً؟', options: ['الشمال', 'الجنوب', 'الغرب'], answer: 'الشمال' },
        { prompt: 'ما الذي يساعدنا على استعمال البوصلة مع الأماكن؟', options: ['الخريطة', 'الملعقة', 'الحذاء'], answer: 'الخريطة' },
        { prompt: 'كيف نحمل البوصلة بشكل صحيح؟', options: ['بشكل مستقيم', 'مقلوبة', 'داخل الماء'], answer: 'بشكل مستقيم' }
      ],
      match: {
        pairs: [
          ['الشمال', 'الجهة التي تشير إليها الإبرة'],
          ['الخريطة', 'تساعد على معرفة الأماكن'],
          ['الشرق', 'إحدى الجهات الأربع']
        ]
      },
      order: {
        prompt: 'رتب خطوات استعمال البوصلة.',
        items: ['نحمل البوصلة بشكل مستقيم', 'ننتظر حتى تتوقف الإبرة', 'نحدد الشمال', 'نقرأ بقية الاتجاهات']
      }
    }
  },
  pollution: {
    emoji: ['🌍','🚯','💧','♻️'],
    links: ['pollution-quiz.html','pollution-match.html','pollution-order.html'],
    en: {
      lesson: 'Pollution', subtitle: 'Play to understand pollution and how to protect the environment.',
      quiz: [
        { prompt: 'Which one is pollution?', options: ['Smoke in the air', 'Clean water', 'A green tree'], answer: 'Smoke in the air' },
        { prompt: 'What should we do with trash?', options: ['Put it in a bin', 'Throw it in a river', 'Leave it on the road'], answer: 'Put it in a bin' },
        { prompt: 'Which action helps Earth?', options: ['Recycling', 'Burning plastic', 'Dirtying water'], answer: 'Recycling' }
      ],
      match: { pairs: [['Air pollution','Smoke and gases'], ['Water pollution','Dirty rivers'], ['Recycling','Using things again']] },
      order: { prompt: 'Put the clean actions in order from problem to solution.', items: ['See trash on the ground', 'Pick it up safely', 'Put it in the bin', 'Keep the place clean'] }
    },
    fr: {
      lesson: 'La pollution', subtitle: 'Joue pour comprendre la pollution et proteger l environnement.',
      quiz: [
        { prompt: 'Laquelle est une pollution ?', options: ['Fumee dans l air', 'Eau propre', 'Arbre vert'], answer: 'Fumee dans l air' },
        { prompt: 'Que faire avec les dechets ?', options: ['Les mettre a la poubelle', 'Les jeter dans la riviere', 'Les laisser dans la rue'], answer: 'Les mettre a la poubelle' },
        { prompt: 'Quelle action aide la Terre ?', options: ['Recycler', 'Bruler le plastique', 'Salir l eau'], answer: 'Recycler' }
      ],
      match: { pairs: [['Pollution de l air','Fumee et gaz'], ['Pollution de l eau','Rivieres sales'], ['Recyclage','Utiliser encore']] },
      order: { prompt: 'Range les bonnes actions du probleme a la solution.', items: ['Voir des dechets par terre', 'Les ramasser sans danger', 'Les mettre a la poubelle', 'Garder le lieu propre'] }
    },
    ar: {
      lesson: 'التلوث', subtitle: 'العب لتفهم التلوث وكيف نحمي البيئة.',
      quiz: [
        { prompt: 'أي واحد يُعد تلوثاً؟', options: ['الدخان في الهواء', 'الماء النظيف', 'الشجرة الخضراء'], answer: 'الدخان في الهواء' },
        { prompt: 'ماذا نفعل بالقمامة؟', options: ['نضعها في السلة', 'نرميها في النهر', 'نتركها في الطريق'], answer: 'نضعها في السلة' },
        { prompt: 'أي عمل يساعد الأرض؟', options: ['إعادة التدوير', 'حرق البلاستيك', 'تلويث الماء'], answer: 'إعادة التدوير' }
      ],
      match: { pairs: [['تلوث الهواء','دخان وغازات'], ['تلوث الماء','أنهار متسخة'], ['إعادة التدوير','استعمال الأشياء من جديد']] },
      order: { prompt: 'رتب الأعمال الجيدة من المشكلة إلى الحل.', items: ['نرى قمامة على الأرض', 'نلتقطها بأمان', 'نضعها في السلة', 'نحافظ على نظافة المكان'] }
    }
  },
  locomotion: {
    emoji: ['🦅','🐟','🐍','🦘'],
    links: ['locomotion-quiz.html','locomotion-match.html','locomotion-order.html'],
    en: {
      lesson: 'Animal Locomotion', subtitle: 'Play to understand how animals move.',
      quiz: [
        { prompt: 'Which animal swims?', options: ['Fish', 'Eagle', 'Rabbit'], answer: 'Fish' },
        { prompt: 'Which animal flies?', options: ['Bird', 'Snake', 'Frog'], answer: 'Bird' },
        { prompt: 'What helps a fish move?', options: ['Fins', 'Wings', 'Books'], answer: 'Fins' }
      ],
      match: {
        pairs: [
          [{ icon: '🦅', label: 'Eagle' }, { icon: '🪽', label: 'Fly', slotX: '6%', slotY: '8%' }],
          [{ icon: '🐟', label: 'Fish' }, { icon: '🌊', label: 'Swim', slotX: '9%', slotY: '49%' }],
          [{ icon: '🦁', label: 'Lion' }, { icon: '🚶', label: 'Walk', slotX: '30%', slotY: '64%' }],
          [{ icon: '🦘', label: 'Kangaroo' }, { icon: '🦵', label: 'Jump', slotX: '63%', slotY: '56%' }]
        ]
      },
      order: {
        prompt: 'Place each animal into the correct locomotion type.',
        categories: [
          { type: 'swimming', label: 'Swim' },
          { type: 'walking', label: 'Walk' },
          { type: 'jumping', label: 'Jump' },
          { type: 'flying', label: 'Fly' },
          { type: 'crawling', label: 'Crawl' }
        ],
        animals: [
          { icon: '🐟', label: 'Fish', type: 'swimming' },
          { icon: '🦁', label: 'Lion', type: 'walking' },
          { icon: '🦘', label: 'Kangaroo', type: 'jumping' },
          { icon: '🦅', label: 'Bird', type: 'flying' },
          { icon: '🐍', label: 'Snake', type: 'crawling' }
        ]
      }
    },
    fr: {
      lesson: 'La locomotion des animaux', subtitle: 'Joue pour comprendre comment les animaux se deplacent.',
      quiz: [
        { prompt: 'Quel animal nage ?', options: ['Poisson', 'Aigle', 'Lapin'], answer: 'Poisson' },
        { prompt: 'Quel animal vole ?', options: ['Oiseau', 'Serpent', 'Grenouille'], answer: 'Oiseau' },
        { prompt: 'Qu est-ce qui aide le poisson a bouger ?', options: ['Nageoires', 'Ailes', 'Livres'], answer: 'Nageoires' }
      ],
      match: {
        pairs: [
          [{ icon: '🦅', label: 'Aigle' }, { icon: '🪽', label: 'Voler', slotX: '6%', slotY: '8%' }],
          [{ icon: '🐟', label: 'Poisson' }, { icon: '🌊', label: 'Nager', slotX: '9%', slotY: '49%' }],
          [{ icon: '🦁', label: 'Lion' }, { icon: '🚶', label: 'Marcher', slotX: '30%', slotY: '64%' }],
          [{ icon: '🦘', label: 'Kangourou' }, { icon: '🦵', label: 'Sauter', slotX: '63%', slotY: '56%' }]
        ]
      },
      order: {
        prompt: 'Place chaque animal dans le bon type de locomotion.',
        categories: [
          { type: 'swimming', label: 'Nager' },
          { type: 'walking', label: 'Marcher' },
          { type: 'jumping', label: 'Sauter' },
          { type: 'flying', label: 'Voler' },
          { type: 'crawling', label: 'Ramper' }
        ],
        animals: [
          { icon: '🐟', label: 'Poisson', type: 'swimming' },
          { icon: '🦁', label: 'Lion', type: 'walking' },
          { icon: '🦘', label: 'Kangourou', type: 'jumping' },
          { icon: '🦅', label: 'Oiseau', type: 'flying' },
          { icon: '🐍', label: 'Serpent', type: 'crawling' }
        ]
      }
    },
    ar: {
      lesson: 'تنقل الحيوانات', subtitle: 'العب لتفهم كيف تتحرك الحيوانات.',
      quiz: [
        { prompt: 'أي حيوان يسبح؟', options: ['السمكة', 'النسر', 'الأرنب'], answer: 'السمكة' },
        { prompt: 'أي حيوان يطير؟', options: ['الطائر', 'الأفعى', 'الضفدع'], answer: 'الطائر' },
        { prompt: 'ما الذي يساعد السمكة على الحركة؟', options: ['الزعانف', 'الأجنحة', 'الكتب'], answer: 'الزعانف' }
      ],
      match: {
        pairs: [
          [{ icon: '🦅', label: 'النسر' }, { icon: '🪽', label: 'يطير', slotX: '6%', slotY: '8%' }],
          [{ icon: '🐟', label: 'السمكة' }, { icon: '🌊', label: 'يسبح', slotX: '9%', slotY: '49%' }],
          [{ icon: '🦁', label: 'الأسد' }, { icon: '🚶', label: 'يمشي', slotX: '30%', slotY: '64%' }],
          [{ icon: '🦘', label: 'الكنغر' }, { icon: '🦵', label: 'يقفز', slotX: '63%', slotY: '56%' }]
        ]
      },
      order: {
        prompt: 'ضع كل حيوان في نوع الحركة الصحيح.',
        categories: [
          { type: 'swimming', label: 'يَسبَح' },
          { type: 'walking', label: 'يمشي' },
          { type: 'jumping', label: 'يقفز' },
          { type: 'flying', label: 'يطير' },
          { type: 'crawling', label: 'يزحف' }
        ],
        animals: [
          { icon: '🐟', label: 'السمكة', type: 'swimming' },
          { icon: '🦁', label: 'الأسد', type: 'walking' },
          { icon: '🦘', label: 'الكنغر', type: 'jumping' },
          { icon: '🦅', label: 'الطائر', type: 'flying' },
          { icon: '🐍', label: 'الأفعى', type: 'crawling' }
        ]
      }
    }
  },
  breathing: {
    emoji: ['🫁','💨','🫧','⭐'],
    links: ['breathing-quiz.html','breathing-match.html','breathing-order.html'],
    en: {
      lesson: 'Breathing',
      subtitle: 'Play to learn how breathing helps the body.',
      quiz: [
        { prompt: 'Which body part helps us breathe?', options: ['Lungs', 'Shoes', 'Books'], answer: 'Lungs' },
        { prompt: 'What do we take in when we breathe in?', options: ['Oxygen', 'Sand', 'Milk'], answer: 'Oxygen' },
        { prompt: 'How should breathing feel?', options: ['Slow and calm', 'Fast and noisy', 'Held for a long time'], answer: 'Slow and calm' }
      ],
      match: {
        pairs: [
          [{ icon: '🫁', label: 'Lungs' }, { icon: '💨', label: 'Help us breathe' }],
          [{ icon: '👃', label: 'Nose' }, { icon: '⬇️', label: 'Air goes in' }],
          [{ icon: '🕯️', label: 'Blow out' }, { icon: '⬆️', label: 'Air goes out' }],
          [{ icon: '🧘', label: 'Calm body' }, { icon: '⭐', label: 'Slow breaths' }]
        ]
      },
      order: { prompt: 'Put the breathing steps in order.', items: ['Breathe in through the nose', 'Lungs fill with air', 'Breathe out slowly', 'Body feels calm'] }
    },
    fr: {
      lesson: 'La respiration',
      subtitle: 'Joue pour apprendre comment la respiration aide le corps.',
      quiz: [
        { prompt: 'Quelle partie du corps nous aide a respirer ?', options: ['Poumons', 'Chaussures', 'Livres'], answer: 'Poumons' },
        { prompt: 'Que prenons-nous quand nous inspirons ?', options: ['Oxygene', 'Sable', 'Lait'], answer: 'Oxygene' },
        { prompt: 'Comment la respiration doit-elle etre ?', options: ['Lente et calme', 'Rapide et bruyante', 'Bloquee longtemps'], answer: 'Lente et calme' }
      ],
      match: {
        pairs: [
          [{ icon: '🫁', label: 'Poumons' }, { icon: '💨', label: 'Aident a respirer' }],
          [{ icon: '👃', label: 'Nez' }, { icon: '⬇️', label: 'L air entre' }],
          [{ icon: '🕯️', label: 'Souffler' }, { icon: '⬆️', label: 'L air sort' }],
          [{ icon: '🧘', label: 'Corps calme' }, { icon: '⭐', label: 'Respiration lente' }]
        ]
      },
      order: { prompt: 'Range les etapes de la respiration.', items: ['Inspirer par le nez', 'Les poumons se remplissent d air', 'Expirer doucement', 'Le corps se sent calme'] }
    },
    ar: {
      lesson: 'التنفس',
      subtitle: 'العب لتتعلم كيف يساعد التنفس الجسم.',
      quiz: [
        { prompt: 'أي جزء من الجسم يساعدنا على التنفس؟', options: ['الرئتان', 'الحذاء', 'الكتب'], answer: 'الرئتان' },
        { prompt: 'ماذا نأخذ عندما نتنفس إلى الداخل؟', options: ['الأكسجين', 'الرمل', 'الحليب'], answer: 'الأكسجين' },
        { prompt: 'كيف يجب أن يكون التنفس؟', options: ['هادئاً وبطيئاً', 'سريعاً ومزعجاً', 'حبس النفس طويلاً'], answer: 'هادئاً وبطيئاً' }
      ],
      match: {
        pairs: [
          [{ icon: '🫁', label: 'الرئتان' }, { icon: '💨', label: 'تساعدان على التنفس' }],
          [{ icon: '👃', label: 'الأنف' }, { icon: '⬇️', label: 'يدخل منه الهواء' }],
          [{ icon: '🕯️', label: 'الزفير' }, { icon: '⬆️', label: 'يخرج فيه الهواء' }],
          [{ icon: '🧘', label: 'جسم هادئ' }, { icon: '⭐', label: 'أنفاس بطيئة' }]
        ]
      },
      order: { prompt: 'رتب خطوات التنفس.', items: ['نستنشق من الأنف', 'تمتلئ الرئتان بالهواء', 'نزفر ببطء', 'يشعر الجسم بالهدوء'] }
    }
  },
  petswild: {
    emoji: ['🐶','🐱','🦁','🐘'],
    links: ['petswild-quiz.html','petswild-match.html','petswild-order.html'],
    en: {
      lesson: 'Pets and Wild Animals', subtitle: 'Play to tell the difference between pets and wild animals.',
      quiz: [
        { prompt: 'Which animal is usually a pet?', options: ['Dog', 'Lion', 'Tiger'], answer: 'Dog' },
        { prompt: 'Which animal is wild?', options: ['Cat', 'Rabbit', 'Elephant'], answer: 'Elephant' },
        { prompt: 'What does a pet need?', options: ['Food and water', 'A jungle', 'A cave'], answer: 'Food and water' }
      ],
      match: { pairs: [['Dog','Pet'], ['Lion','Wild'], ['Rabbit','Pet']] },
      order: { prompt: 'Put these from home care to wild safety.', items: ['Give clean water', 'Play gently', 'Watch from distance', 'Stay safe with an adult'] }
    },
    fr: {
      lesson: 'Animaux domestiques et sauvages', subtitle: 'Joue pour faire la difference entre domestique et sauvage.',
      quiz: [
        { prompt: 'Quel animal est souvent domestique ?', options: ['Chien', 'Lion', 'Tigre'], answer: 'Chien' },
        { prompt: 'Quel animal est sauvage ?', options: ['Chat', 'Lapin', 'Elephant'], answer: 'Elephant' },
        { prompt: 'De quoi un animal domestique a-t-il besoin ?', options: ['Nourriture et eau', 'Une jungle', 'Une grotte'], answer: 'Nourriture et eau' }
      ],
      match: { pairs: [['Chien','Domestique'], ['Lion','Sauvage'], ['Lapin','Domestique']] },
      order: { prompt: 'Range ces actions du soin a la securite.', items: ['Donner de l eau propre', 'Jouer doucement', 'Observer de loin', 'Rester avec un adulte'] }
    },
    ar: {
      lesson: 'الحيوانات الأليفة والبرية', subtitle: 'العب لتفرق بين الحيوان الأليف والحيوان البري.',
      quiz: [
        { prompt: 'أي حيوان يكون غالباً أليفاً؟', options: ['الكلب', 'الأسد', 'النمر'], answer: 'الكلب' },
        { prompt: 'أي حيوان بري؟', options: ['القط', 'الأرنب', 'الفيل'], answer: 'الفيل' },
        { prompt: 'ماذا يحتاج الحيوان الأليف؟', options: ['الطعام والماء', 'الغابة', 'الكهف'], answer: 'الطعام والماء' }
      ],
      match: { pairs: [['الكلب','أليف'], ['الأسد','بري'], ['الأرنب','أليف']] },
      order: { prompt: 'رتب هذه الأفعال من العناية إلى السلامة.', items: ['نقدّم ماء نظيفاً', 'نلعب بلطف', 'نراقب من بعيد', 'نبقى مع شخص بالغ'] }
    }
  },
  blood: {
    emoji: ['🩸','❤️','🔬','🛡️'],
    links: ['blood-quiz.html','blood-match.html','blood-order.html'],
    en: {
      lesson: 'Blood Components', subtitle: 'Play to understand the parts of blood.',
      quiz: [
        { prompt: 'Which blood part carries oxygen?', options: ['Red blood cells', 'Platelets', 'Plasma'], answer: 'Red blood cells' },
        { prompt: 'Which part fights germs?', options: ['White blood cells', 'Shoes', 'Hair'], answer: 'White blood cells' },
        { prompt: 'Which part helps stop bleeding?', options: ['Platelets', 'Milk', 'Bones'], answer: 'Platelets' }
      ],
      match: { pairs: [['Red blood cells','Carry oxygen'], ['White blood cells','Fight germs'], ['Platelets','Stop bleeding']] },
      order: { prompt: 'Put these body jobs in a helpful order.', items: ['Oxygen enters lungs', 'Red blood cells carry it', 'Cells receive oxygen', 'Body stays active'] }
    },
    fr: {
      lesson: 'Les composants du sang', subtitle: 'Joue pour comprendre les parties du sang.',
      quiz: [
        { prompt: 'Quelle partie du sang transporte l oxygene ?', options: ['Globules rouges', 'Plaquettes', 'Plasma'], answer: 'Globules rouges' },
        { prompt: 'Quelle partie combat les microbes ?', options: ['Globules blancs', 'Chaussures', 'Cheveux'], answer: 'Globules blancs' },
        { prompt: 'Quelle partie aide a arreter le saignement ?', options: ['Plaquettes', 'Lait', 'Os'], answer: 'Plaquettes' }
      ],
      match: { pairs: [['Globules rouges','Transportent l oxygene'], ['Globules blancs','Combattent les microbes'], ['Plaquettes','Arretent le saignement']] },
      order: { prompt: 'Range ces roles du corps dans un ordre utile.', items: ['L oxygene entre dans les poumons', 'Les globules rouges le transportent', 'Les cellules recoivent l oxygene', 'Le corps reste actif'] }
    },
    ar: {
      lesson: 'مكونات الدم', subtitle: 'العب لتفهم أجزاء الدم المختلفة.',
      quiz: [
        { prompt: 'أي جزء من الدم ينقل الأكسجين؟', options: ['كريات الدم الحمراء', 'الصفائح', 'البلازما'], answer: 'كريات الدم الحمراء' },
        { prompt: 'أي جزء يحارب الجراثيم؟', options: ['كريات الدم البيضاء', 'الحذاء', 'الشعر'], answer: 'كريات الدم البيضاء' },
        { prompt: 'أي جزء يساعد على إيقاف النزيف؟', options: ['الصفائح الدموية', 'الحليب', 'العظام'], answer: 'الصفائح الدموية' }
      ],
      match: { pairs: [['كريات الدم الحمراء','تنقل الأكسجين'], ['كريات الدم البيضاء','تحارب الجراثيم'], ['الصفائح الدموية','توقف النزيف']] },
      order: { prompt: 'رتب هذه الوظائف بطريقة مفيدة.', items: ['يدخل الأكسجين إلى الرئتين', 'تنقله الكريات الحمراء', 'تستقبله الخلايا', 'يبقى الجسم نشيطاً'] }
    }
  },
  foodchain: {
    emoji: ['🌞','🌿','🐛','🐸'],
    links: ['foodchain-quiz.html','foodchain-match.html','foodchain-order.html'],
    en: {
      lesson: 'Food Chain', subtitle: 'Play to understand how food and energy move in nature.',
      quiz: [
        { prompt: 'What usually starts a food chain?', options: ['The sun', 'A shoe', 'A table'], answer: 'The sun' },
        { prompt: 'Which one is a producer?', options: ['Plant', 'Fox', 'Snake'], answer: 'Plant' },
        { prompt: 'Which animal may eat a grasshopper?', options: ['Frog', 'Tree', 'Rock'], answer: 'Frog' }
      ],
      match: { pairs: [['Plant','Producer'], ['Rabbit','Consumer'], ['Sun','Gives energy']] },
      order: { prompt: 'Put this food chain in order.', items: ['Sun', 'Grass', 'Grasshopper', 'Frog'] }
    },
    fr: {
      lesson: 'La chaine alimentaire', subtitle: 'Joue pour comprendre comment la nourriture et l energie passent dans la nature.',
      quiz: [
        { prompt: 'Qu est-ce qui commence souvent une chaine alimentaire ?', options: ['Le soleil', 'Une chaussure', 'Une table'], answer: 'Le soleil' },
        { prompt: 'Lequel est un producteur ?', options: ['Plante', 'Renard', 'Serpent'], answer: 'Plante' },
        { prompt: 'Quel animal peut manger une sauterelle ?', options: ['Grenouille', 'Arbre', 'Pierre'], answer: 'Grenouille' }
      ],
      match: { pairs: [['Plante','Producteur'], ['Lapin','Consommateur'], ['Soleil','Donne l energie']] },
      order: { prompt: 'Range cette chaine alimentaire.', items: ['Soleil', 'Herbe', 'Sauterelle', 'Grenouille'] }
    },
    ar: {
      lesson: 'السلسلة الغذائية', subtitle: 'العب لتفهم كيف ينتقل الغذاء والطاقة في الطبيعة.',
      quiz: [
        { prompt: 'ما الذي يبدأ السلسلة الغذائية غالباً؟', options: ['الشمس', 'الحذاء', 'الطاولة'], answer: 'الشمس' },
        { prompt: 'أي واحد يُعد منتجاً؟', options: ['النبات', 'الثعلب', 'الأفعى'], answer: 'النبات' },
        { prompt: 'أي حيوان قد يأكل الجرادة؟', options: ['الضفدع', 'الشجرة', 'الحجر'], answer: 'الضفدع' }
      ],
      match: { pairs: [['النبات','منتج'], ['الأرنب','مستهلك'], ['الشمس','تعطي الطاقة']] },
      order: { prompt: 'رتب هذه السلسلة الغذائية.', items: ['الشمس', 'العشب', 'الجرادة', 'الضفدع'] }
    }
  }
};

function normalizeLanguage(value) {
  return GAME_LANGS.includes(value) ? value : null;
}

function getLanguage() {
  const fromUrl = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
  const fromStorage = normalizeLanguage(localStorage.getItem(GAME_STORAGE_KEY));
  const selected = fromUrl || fromStorage || 'ar';
  localStorage.setItem(GAME_STORAGE_KEY, selected);
  return selected;
}

let currentLang = getLanguage();
const lessonId = document.body.dataset.lesson;
const gameType = document.body.dataset.game;
let score = 0;
let quizIndex = 0;
let selectedLeft = null;
let matchesDone = 0;
let orderChosen = [];
let orderSelected = null;
let placedAnimals = {};
let matchCanvas, matchCtx, isDrawing = false, matchLines = [], activePointer = null;
let motionFullscreenHandler = null;
const LOCOMOTION_MATCH_ART = {
  Eagle: '../photo/eagle.png',
  Aigle: '../photo/eagle.png',
  'النسر': '../photo/eagle.png',
  Fish: '../photo/fish.png',
  Poisson: '../photo/fish.png',
  'السمكة': '../photo/fish.png',
  Lion: '../assests/photo/lion.jpeg',
  'الأسد': '../assests/photo/lion.jpeg',
  Kangaroo: '../photo/kangaroo.png',
  Kangourou: '../photo/kangaroo.png',
  'الكنغر': '../photo/kangaroo.png'
};

function isLocomotionOrderGame() {
  return lessonId === 'locomotion' && gameType === 'order';
}

function isLocomotionMatchGame() {
  return lessonId === 'locomotion' && gameType === 'match';
}

function ui(key) {
  const aliases = {
    'nav.welcome': 'navHome',
    'nav.about': 'navAbout',
    'nav.courses': 'navCourses',
    'nav.games': 'navGames',
    'lang.label': 'langLabel',
    'lang.en': 'langEn',
    'lang.fr': 'langFr',
    'lang.ar': 'langAr'
  };
  const resolvedKey = aliases[key] || key;
  return (GAME_UI[currentLang] || GAME_UI.en)[resolvedKey] || GAME_UI.en[resolvedKey] || key;
}

function lessonData() {
  const lesson = LESSON_GAMES[lessonId];
  return lesson ? (lesson[currentLang] || lesson.en) : null;
}

function otherGameLinks() {
  const links = LESSON_GAMES[lessonId].links;
  const map = {
    quiz: links[0],
    match: links[1],
    order: links[2]
  };
  return Object.entries(map)
    .filter(([key]) => key !== gameType)
    .map(([key, href]) => ({ key, href }));
}

function syncLinks() {
  document.querySelectorAll('a[href]').forEach((anchor) => {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#')) return;
    const url = new URL(rawHref, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.endsWith('.html')) return;
    url.searchParams.set('lang', currentLang);
    anchor.href = `${url.toString()}`;
  });
}

function setStatus(text, success = false) {
  const status = document.getElementById('status');
  if (!status) return;
  status.textContent = text;
  const extraClasses = status.classList.contains('motion-status') ? ' motion-status' : '';
  status.className = `status${success ? ' success' : ''}${extraClasses}`;
}

function renderShell() {
  const data = lessonData();
  const emojis = LESSON_GAMES[lessonId].emoji;
  const badgeKey = gameType === 'quiz' ? 'quizBadge' : gameType === 'match' ? 'matchBadge' : 'orderBadge';
  const page = document.getElementById('game-page');

  page.innerHTML = `
    <section class="hero">
      <div class="hero-badge">${ui(badgeKey)}</div>
      <h1>${data.lesson}</h1>
      <p>${data.subtitle}</p>
      <div class="emoji-row" aria-hidden="true">${emojis.map((emoji) => `<span>${emoji}</span>`).join('')}</div>
    </section>
    <section class="grid">
      <section class="game-card">
        <div class="stage-chip">${ui(badgeKey)}</div>
        <div class="progress" id="progress"></div>
        <div id="game-content"></div>
        <div class="status" id="status"></div>
      </section>
      <aside class="side-card">
        <h2>${ui('nextGame')}</h2>
        <ul class="instructions">
          <li>${data.subtitle}</li>
          <li>${gameType === 'match' ? ui('matchIntro') : gameType === 'order' ? ui('orderIntro') : data.quiz[0].prompt}</li>
        </ul>
        <div class="game-links">
          ${otherGameLinks().map(({ key, href }) => `<a href="${href}">${ui(key === 'quiz' ? 'quizBadge' : key === 'match' ? 'matchBadge' : 'orderBadge')}</a>`).join('')}
        </div>
        <p><strong>${ui('score')}</strong> <span id="score">0</span></p>
      </aside>
    </section>
  `;
}

function updateScore(points) {
  score += points;
  const node = document.getElementById('score');
  if (node) node.textContent = score;
  const motionNode = document.getElementById('motion-score');
  if (motionNode) motionNode.textContent = score;
}

function updateLocomotionRemaining(total, placed) {
  const node = document.getElementById('remaining-count');
  if (node) node.textContent = Math.max(total - placed, 0);
}

function setupMotionFullscreen() {
  const shell = document.querySelector('.motion-game-shell');
  const button = document.getElementById('motion-fullscreen-toggle');
  if (!shell || !button) return;

  const updateButton = () => {
    const active = document.fullscreenElement === shell;
    button.textContent = active ? ui('exitFullscreen') : ui('fullscreen');
    shell.classList.toggle('is-fullscreen', active);
  };

  button.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === shell) {
        await document.exitFullscreen();
      } else {
        await shell.requestFullscreen();
      }
    } catch (error) {
      setStatus(ui('tryAgain'));
    }
  });

  if (motionFullscreenHandler) {
    document.removeEventListener('fullscreenchange', motionFullscreenHandler);
  }
  motionFullscreenHandler = updateButton;
  document.addEventListener('fullscreenchange', updateButton);
  updateButton();
}

async function enterMotionFullscreen() {
  const shell = document.querySelector('.motion-game-shell');
  if (!shell) return;
  try {
    await shell.requestFullscreen();
  } catch (error) {
    shell.classList.remove('is-fullscreen');
  }
}

function renderQuiz() {
  const data = lessonData();
  const current = data.quiz[quizIndex];
  document.getElementById('progress').textContent = ui('question').replace('{current}', quizIndex + 1).replace('{total}', data.quiz.length);
  document.getElementById('game-content').innerHTML = `
    <div class="question-box">
      <div class="question">${current.prompt}</div>
      <div class="options">${current.options.map((option) => `<button class="option-btn" type="button">${option}</button>`).join('')}</div>
    </div>
  `;
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === current.answer) {
        updateScore(1);
        setStatus(ui('good'), true);
      } else {
        setStatus(ui('tryAgain'));
      }
      document.querySelectorAll('.option-btn').forEach((btn) => { btn.disabled = true; });
      setTimeout(() => {
        quizIndex += 1;
        if (quizIndex < data.quiz.length) {
          renderQuiz();
          setStatus('');
        } else {
          document.getElementById('progress').textContent = '';
          document.getElementById('game-content').innerHTML = `<div class="question-box"><div class="question">${ui('good')}</div></div>`;
          setStatus(ui('good'), true);
        }
      }, 800);
    });
  });
}

function normalizeMatchItem(item) {
  if (typeof item === 'object' && item !== null) {
    return {
      icon: item.icon || '',
      label: item.label || '',
      text: item.text || item.label || item.icon || ''
    };
  }
  return { icon: '', label: String(item), text: String(item) };
}

function renderMatchButton(item, side, id) {
  return `
    <button class="match-choice" data-side="${side}" data-id="${id}" type="button" aria-label="${item.label || item.text}">
      ${item.icon ? `<span class="match-icon" aria-hidden="true">${item.icon}</span>` : ''}
      <span class="match-label">${item.label || item.text}</span>
    </button>
  `;
}

function renderLocomotionMatchAnimal(item) {
  const art = item.art || '';
  return `
    <button class="match-choice motion-match-animal" data-side="left" data-id="${item.id}" type="button" draggable="true" data-art="${art}" data-icon="${item.icon || ''}" aria-label="${item.label || item.text}">
      <span class="motion-match-animal-art">${art ? `<img src="${art}" alt="">` : ''}</span>
      <span class="motion-match-animal-name">${item.label || item.text}</span>
    </button>
  `;
}

function renderLocomotionMatchTarget(item, index) {
  const positions = [
    { x: '6%', y: '8%' },
    { x: '30%', y: '64%' },
    { x: '9%', y: '49%' },
    { x: '63%', y: '56%' }
  ];
  const slot = positions[index] || positions[positions.length - 1];
  return `
    <button
      class="match-choice motion-match-target"
      data-side="right"
      data-id="${item.id}"
      type="button"
      aria-label="${item.label || item.text}"
      style="--slot-x:${slot.x}; --slot-y:${slot.y};"
    >
      <span class="motion-match-target-drop" aria-hidden="true"></span>
      <span class="match-label motion-match-target-label">${item.label || item.text}</span>
    </button>
  `;
}

function renderLocomotionDroppedAnimal(button) {
  const art = button.dataset.art || '';
  const icon = button.dataset.icon || '';
  const label = button.querySelector('.motion-match-animal-name')?.textContent || button.getAttribute('aria-label') || '';
  return `
    <span class="motion-match-target-animal">
      <span class="motion-match-target-animal-art">${art ? `<img src="${art}" alt="">` : `<span class="motion-match-target-animal-emoji">${icon}</span>`}</span>
      <span class="motion-match-target-animal-name">${label}</span>
    </span>
  `;
}

function buttonCenter(button) {
  const rect = button.getBoundingClientRect();
  const canvasRect = matchCanvas.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - canvasRect.left,
    y: rect.top + rect.height / 2 - canvasRect.top
  };
}

function resizeMatchCanvas() {
  if (!matchCanvas || !matchCtx) return;
  const grid = document.querySelector('.match-grid');
  if (!grid) return;
  const rect = grid.getBoundingClientRect();
  matchCanvas.width = rect.width;
  matchCanvas.height = rect.height;
  redrawLines();
}

function clearActiveLine() {
  isDrawing = false;
  activePointer = null;
  document.removeEventListener('pointermove', drawLine);
  redrawLines();
}

function drawConnection(start, end) {
  matchCtx.beginPath();
  matchCtx.moveTo(start.x, start.y);
  matchCtx.lineTo(end.x, end.y);
  matchCtx.stroke();
  matchCtx.fillStyle = '#ff3b30';
  matchCtx.beginPath();
  matchCtx.arc(start.x, start.y, 6, 0, Math.PI * 2);
  matchCtx.fill();
  matchCtx.beginPath();
  matchCtx.arc(end.x, end.y, 6, 0, Math.PI * 2);
  matchCtx.fill();
}

function redrawLines() {
  if (!matchCtx || !matchCanvas) return;
  matchCtx.clearRect(0, 0, matchCanvas.width, matchCanvas.height);
  matchLines.forEach((line) => {
    const left = document.querySelector(`[data-side="left"][data-id="${line.leftId}"]`);
    const right = document.querySelector(`[data-side="right"][data-id="${line.rightId}"]`);
    if (!left || !right) return;
    drawConnection(buttonCenter(left), buttonCenter(right));
  });
}

function startMatchDrawing(button, event) {
  document.querySelectorAll('[data-side="left"]').forEach((btn) => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedLeft = button.dataset.id;
  isDrawing = true;
  activePointer = { x: event.clientX, y: event.clientY };
  document.addEventListener('pointermove', drawLine);
  drawLine(event);
}

function finishMatchAttempt(button) {
  if (button.disabled || selectedLeft === null || !isDrawing) return;
  const selectedId = selectedLeft;
  clearActiveLine();
  if (button.dataset.id === selectedId) {
    const left = document.querySelector(`[data-side="left"][data-id="${selectedId}"]`);
    if (!left) return;
    matchLines.push({ leftId: selectedId, rightId: button.dataset.id });
    redrawLines();
    updateScore(1);
    left.disabled = true;
    button.disabled = true;
    left.classList.remove('selected');
    left.classList.add('matched');
    button.classList.add('matched');
    selectedLeft = null;
    matchesDone += 1;
    if (isLocomotionMatchGame()) {
      updateLocomotionRemaining(lessonData().match.pairs.length, matchesDone);
      const celebration = document.getElementById('motion-celebration');
      if (celebration) {
        celebration.classList.add('is-visible');
        window.setTimeout(() => celebration.classList.remove('is-visible'), 900);
      }
    }
    setStatus(ui('good'), true);
    if (matchesDone === lessonData().match.pairs.length) {
      setStatus(ui('matchDone'), true);
    }
  } else {
    setStatus(ui('tryAgain'));
  }
}

function renderMatch() {
  const data = lessonData();
  const leftItems = data.match.pairs.map((pair, index) => {
    const leftItem = normalizeMatchItem(pair[0]);
    return {
      ...leftItem,
      id: index,
      art: LOCOMOTION_MATCH_ART[leftItem.label] || ''
    };
  });
  const rightItems = [...data.match.pairs].map((pair, index) => ({ ...normalizeMatchItem(pair[1]), id: index }));
  selectedLeft = null;
  isDrawing = false;
  activePointer = null;
  document.removeEventListener('pointermove', drawLine);
  if (isLocomotionMatchGame()) {
    document.getElementById('progress').textContent = '';

    const renderMotionMatchWorld = () => {
      document.getElementById('game-content').innerHTML = `
        <div class="motion-game-shell motion-match-shell question-box">
          <div class="motion-hud">
            <div class="motion-hud-pill">
              <span class="motion-hud-icon" aria-hidden="true">🧩</span>
              <span id="remaining-count">${leftItems.length}</span>
            </div>
            <div class="motion-hud-title">${data.lesson}</div>
            <div class="motion-hud-pill">
              <span class="motion-hud-icon" aria-hidden="true">⭐</span>
              <span id="motion-score">${score}</span>
            </div>
          </div>
          <section class="motion-match-grid match-grid">
            <canvas id="match-canvas" class="match-canvas"></canvas>
            <aside class="motion-panel motion-match-bank">
              <h2>🐾 ${ui('motionAnimals')}</h2>
              <p class="motion-panel-copy">${data.subtitle}</p>
              <div class="motion-match-bank-list">
                ${leftItems.map((item) => renderLocomotionMatchAnimal(item)).join('')}
              </div>
            </aside>
            <section class="motion-match-stage">
              <div class="motion-celebration" id="motion-celebration">${ui('good')}</div>
              <div class="motion-match-targets">
                ${rightItems.map((item, index) => renderLocomotionMatchTarget(item, index)).join('')}
              </div>
              <div class="motion-match-footer">
                <div class="motion-prompt">${ui('motionPick')}</div>
                <div class="status motion-status" id="status"></div>
                <div class="actions motion-actions">
                  <button class="action-btn motion-fullscreen-btn" id="motion-fullscreen-toggle" type="button">${ui('fullscreen')}</button>
                  <button class="action-btn" id="reset-match" type="button">${ui('orderReset')}</button>
                </div>
              </div>
            </section>
          </section>
        </div>
      `;

      matchLines = [];
      matchCanvas = document.getElementById('match-canvas');
      matchCtx = matchCanvas.getContext('2d');
      matchCtx.strokeStyle = 'red';
      matchCtx.lineWidth = 3;
      matchCtx.lineCap = 'round';
      resizeMatchCanvas();
      updateLocomotionRemaining(leftItems.length, 0);
      setupMotionFullscreen();

      // Setup drag-and-drop for locomotion match
      document.querySelectorAll('[data-side="left"]').forEach((button) => {
        button.addEventListener('dragstart', (event) => {
          if (button.disabled) return;
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/plain', button.dataset.id);
          button.classList.add('dragging');
          button.classList.add('selected');
          selectedLeft = button.dataset.id;
        });

        button.addEventListener('dragend', () => {
          button.classList.remove('dragging');
          button.classList.remove('selected');
        });
      });

      document.querySelectorAll('[data-side="right"]').forEach((button) => {
        button.addEventListener('dragover', (event) => {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
          button.classList.add('drag-over');
        });

        button.addEventListener('dragleave', () => {
          button.classList.remove('drag-over');
        });

        button.addEventListener('drop', (event) => {
          event.preventDefault();
          button.classList.remove('drag-over');

          const draggedId = event.dataTransfer.getData('text/plain') || selectedLeft;
          if (draggedId === null || draggedId === '') return;

          const leftButton = document.querySelector(`[data-side="left"][data-id="${draggedId}"]`);
          if (!leftButton || leftButton.dataset.id !== button.dataset.id) {
            if (leftButton) {
              leftButton.classList.remove('selected');
            }
            selectedLeft = null;
            setStatus(ui('tryAgain'));
            return;
          }

          const dropZone = button.querySelector('.motion-match-target-drop');
          if (dropZone) {
            dropZone.innerHTML = renderLocomotionDroppedAnimal(leftButton);
          }

          matchLines.push({ leftId: draggedId, rightId: button.dataset.id });
          redrawLines();
          updateScore(1);
          leftButton.disabled = true;
          button.disabled = true;
          leftButton.classList.remove('dragging', 'selected');
          leftButton.classList.add('matched');
          button.classList.add('matched');
          selectedLeft = null;
          matchesDone += 1;
          setStatus(ui('good'), true);
          updateLocomotionRemaining(leftItems.length, matchesDone);
          
          if (matchesDone === lessonData().match.pairs.length) {
            setStatus(ui('matchDone'), true);
          }
        });
      });

      document.getElementById('reset-match').addEventListener('click', () => {
        renderMatch();
        setStatus('');
      });
      window.removeEventListener('resize', resizeMatchCanvas);
      window.addEventListener('resize', resizeMatchCanvas);
    };

    document.getElementById('game-content').innerHTML = `
      <div class="motion-portal-card">
        <div class="motion-portal-glow" aria-hidden="true"></div>
        <div class="motion-portal-badge">${data.lesson}</div>
        <h2>${ui('motionPortalTitle')}</h2>
        <p>${ui('motionPortalText')}</p>
        <button class="motion-portal-button" id="motion-portal-button" type="button">${ui('motionPortalButton')}</button>
      </div>
    `;

    document.getElementById('motion-portal-button').addEventListener('click', async () => {
      renderMotionMatchWorld();
      await enterMotionFullscreen();
    });
    return;
  }

  document.getElementById('progress').textContent = ui('matchIntro');
  document.getElementById('game-content').innerHTML = `
    <div class="question-box">
      <div class="match-grid">
        <canvas id="match-canvas" class="match-canvas"></canvas>
        <div class="column"><h3>${ui('leftColumn')}</h3>${leftItems.map((item) => renderMatchButton(item, 'left', item.id)).join('')}</div>
        <div class="column"><h3>${ui('rightColumn')}</h3>${rightItems.map((item) => renderMatchButton(item, 'right', item.id)).join('')}</div>
      </div>
    </div>
  `;
  matchLines = [];
  matchCanvas = document.getElementById('match-canvas');
  matchCtx = matchCanvas.getContext('2d');
  matchCtx.strokeStyle = 'red';
  matchCtx.lineWidth = 3;
  matchCtx.lineCap = 'round';
  resizeMatchCanvas();
  document.querySelectorAll('[data-side="left"]').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (button.disabled) return;
      startMatchDrawing(button, event);
    });
  });
  document.querySelectorAll('[data-side="right"]').forEach((button) => {
    button.addEventListener('click', () => finishMatchAttempt(button));
  });
  window.removeEventListener('resize', resizeMatchCanvas);
  window.addEventListener('resize', resizeMatchCanvas);
}

function drawLine(event) {
  if (!isDrawing || selectedLeft === null) return;
  activePointer = { x: event.clientX, y: event.clientY };
  const left = document.querySelector(`[data-side="left"][data-id="${selectedLeft}"]`);
  if (!left) return;
  const canvasRect = matchCanvas.getBoundingClientRect();
  const pointer = {
    x: activePointer.x - canvasRect.left,
    y: activePointer.y - canvasRect.top
  };
  redrawLines();
  drawConnection(buttonCenter(left), pointer);
}

function renderOrder() {
  const data = lessonData();
  document.getElementById('progress').textContent = data.order.prompt;

  if (isLocomotionOrderGame() && data.order.categories && data.order.animals) {
    document.getElementById('progress').textContent = '';
    document.getElementById('status').textContent = '';

    const renderMotionWorld = () => {
      const animals = [...data.order.animals].sort(() => Math.random() - 0.5);
      placedAnimals = {};
      orderSelected = null;
      const actionIcons = {
        swimming: '🐟',
        walking: '🚶',
        jumping: '🦘',
        flying: '🕊️',
        crawling: '🐍'
      };
      document.getElementById('game-content').innerHTML = `
        <div class="motion-game-shell question-box">
          <div class="motion-hud">
            <div class="motion-hud-pill">
              <span class="motion-hud-icon" aria-hidden="true">🕒</span>
              <span id="remaining-count">${data.order.animals.length}</span>
            </div>
            <div class="motion-hud-title">${data.lesson}</div>
            <div class="motion-hud-pill">
              <span class="motion-hud-icon" aria-hidden="true">⭐</span>
              <span id="motion-score">${score}</span>
            </div>
          </div>
          <section class="motion-stage-layout">
            <aside class="motion-panel motion-panel-animals">
              <h2>🐾 ${ui('motionAnimals')}</h2>
              <p class="motion-panel-copy">${data.subtitle}</p>
              <div class="motion-animal-bank" id="motion-animal-bank">
                ${animals.map((animal) => `
                  <button class="motion-animal-card order-chip" type="button" draggable="true" data-type="${animal.type}" data-label="${animal.label}">
                    <span class="order-icon">${animal.icon}</span>
                    <span>${animal.label}</span>
                  </button>
                `).join('')}
              </div>
            </aside>
            <section class="motion-center-stage">
              <div class="motion-celebration" id="motion-celebration">${ui('good')}</div>
              <div class="motion-preview" id="motion-preview">
                <div class="motion-preview-label">${ui('motionPick')}</div>
              </div>

              <div class="motion-footer">
                <div class="game-links motion-links">
                  ${otherGameLinks().map(({ key, href }) => `<a href="${href}">${ui(key === 'quiz' ? 'quizBadge' : key === 'match' ? 'matchBadge' : 'orderBadge')}</a>`).join('')}
                </div>
                <div class="actions motion-actions">
                  <button class="action-btn motion-fullscreen-btn" id="motion-fullscreen-toggle" type="button">${ui('fullscreen')}</button>
                  <button class="action-btn" id="check-order" type="button">${ui('orderCheck')}</button>
                  <button class="action-btn" id="reset-order" type="button">${ui('orderReset')}</button>
                </div>
              </div>
            </section>
            <aside class="motion-panel motion-panel-actions">
              <h2>🌙 ${ui('motionActions')}</h2>
              <p class="motion-panel-copy">${ui('orderIntro')}</p>
              <div class="motion-action-list">
                ${data.order.categories.map((cat) => `
                  <button class="motion-action-card category-slot" type="button" data-type="${cat.type}">
                    <span class="motion-action-label">
                      <span class="motion-action-icon" aria-hidden="true">${actionIcons[cat.type] || '✨'}</span>
                      <span>${cat.label}</span>
                    </span>
                    <span class="motion-action-fill"></span>
                  </button>
                `).join('')}
              </div>
            </aside>
          </section>
        </div>
      `;

      const preview = document.getElementById('motion-preview');
      const celebration = document.getElementById('motion-celebration');

      updateLocomotionRemaining(data.order.animals.length, 0);
      setupMotionFullscreen();
      preview.innerHTML = `<div class="motion-preview-label">${ui('motionPick')}</div>`;
      celebration.classList.remove('is-visible');

      function updatePreview(button) {
        if (!button) {
          preview.innerHTML = `<div class="motion-preview-label">${ui('motionPick')}</div>`;
          return;
        }
        preview.innerHTML = `
          <div class="motion-preview-card">
            <span class="order-icon">${button.querySelector('.order-icon').textContent}</span>
            <span>${button.dataset.label}</span>
          </div>
        `;
      }

      function selectAnimal(button) {
        if (!button || button.disabled) return;
        document.querySelectorAll('.motion-animal-card').forEach((card) => card.classList.remove('selected'));
        orderSelected = button;
        button.classList.add('selected');
        updatePreview(button);
      }

      function placeAnimal(slot) {
        if (!orderSelected) {
          setStatus(ui('orderNeedAll'));
          return;
        }

        const animalType = orderSelected.dataset.type;
        const targetType = slot.dataset.type;

        if (animalType !== targetType) {
          setStatus(ui('tryAgain'));
          return;
        }

        const fill = slot.querySelector('.motion-action-fill');
        fill.innerHTML = `
          <span class="motion-placed-animal">
            <span class="order-icon">${orderSelected.querySelector('.order-icon').textContent}</span>
            <span>${orderSelected.dataset.label}</span>
          </span>
        `;
        slot.classList.add('is-matched');
        slot.disabled = true;
        orderSelected.disabled = true;
        orderSelected.classList.remove('selected', 'dragging');
        placedAnimals[orderSelected.dataset.label] = targetType;
        orderSelected = null;
        updatePreview(null);
        updateScore(1);
        updateLocomotionRemaining(data.order.animals.length, Object.keys(placedAnimals).length);
        const motionScore = document.getElementById('motion-score');
        if (motionScore) motionScore.textContent = score;
        setStatus(ui('good'), true);
        celebration.classList.add('is-visible');
        window.setTimeout(() => celebration.classList.remove('is-visible'), 900);
        if (Object.keys(placedAnimals).length === data.order.animals.length) {
          setStatus(ui('orderDone'), true);
        }
      }

      document.querySelectorAll('.motion-animal-card').forEach((button) => {
        button.addEventListener('click', () => selectAnimal(button));
        button.addEventListener('dragstart', (event) => {
          if (button.disabled) {
            event.preventDefault();
            return;
          }
          selectAnimal(button);
          event.dataTransfer.effectAllowed = 'move';
          button.classList.add('dragging');
        });
        button.addEventListener('dragend', () => {
          button.classList.remove('dragging');
        });
      });

      document.querySelectorAll('.motion-action-card').forEach((slot) => {
        slot.addEventListener('click', () => placeAnimal(slot));
        slot.addEventListener('dragover', (event) => {
          event.preventDefault();
          slot.classList.add('drag-over');
        });
        slot.addEventListener('dragleave', () => {
          slot.classList.remove('drag-over');
        });
        slot.addEventListener('drop', (event) => {
          event.preventDefault();
          slot.classList.remove('drag-over');
          placeAnimal(slot);
        });
      });

      document.getElementById('reset-order').addEventListener('click', () => {
        renderMotionWorld();
        setStatus('');
      });

      document.getElementById('check-order').addEventListener('click', () => {
        if (Object.keys(placedAnimals).length !== data.order.animals.length) {
          setStatus(ui('orderNeedAll'));
          return;
        }
        setStatus(ui('orderDone'), true);
      });
    };

    document.getElementById('game-content').innerHTML = `
      <div class="motion-portal-card">
        <div class="motion-portal-glow" aria-hidden="true"></div>
        <div class="motion-portal-badge">${data.lesson}</div>
        <h2>${ui('motionPortalTitle')}</h2>
        <p>${ui('motionPortalText')}</p>
        <button class="motion-portal-button" id="motion-portal-button" type="button">${ui('motionPortalButton')}</button>
      </div>
    `;

    document.getElementById('motion-portal-button').addEventListener('click', async () => {
      renderMotionWorld();
      await enterMotionFullscreen();
    });
    return;
  }

  if (data.order.categories && data.order.animals) {
    const animals = [...data.order.animals].sort(() => Math.random() - 0.5);
    placedAnimals = {};
    orderSelected = null;

    document.getElementById('game-content').innerHTML = `
      <div class="question-box">
        <div class="locomotion-order-grid">
          ${data.order.categories.map((cat) => `
            <div class="category-column" data-type="${cat.type}">
              <h3>${cat.label}</h3>
              <div class="category-slot" data-type="${cat.type}"></div>
            </div>
          `).join('')}
        </div>
        <div class="order-bank">${animals.map((animal) => `
          <button class="order-chip" type="button" draggable="true" data-type="${animal.type}" data-label="${animal.label}">
            <span class="order-icon">${animal.icon}</span>
            <span>${animal.label}</span>
          </button>
        `).join('')}</div>
        <div class="actions">
          <button class="action-btn" id="check-order" type="button">${ui('orderCheck')}</button>
          <button class="action-btn" id="reset-order" type="button">${ui('orderReset')}</button>
        </div>
      </div>
    `;

    document.querySelectorAll('.order-chip').forEach((button) => {
      button.addEventListener('dragstart', (event) => {
        if (button.disabled) {
          event.preventDefault();
          return;
        }
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', button.innerHTML);
        button.classList.add('dragging');
        orderSelected = button;
      });

      button.addEventListener('dragend', () => {
        button.classList.remove('dragging');
      });
    });

    document.querySelectorAll('.category-slot').forEach((slot) => {
      slot.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        slot.classList.add('drag-over');
      });

      slot.addEventListener('dragleave', () => {
        slot.classList.remove('drag-over');
      });

      slot.addEventListener('drop', (event) => {
        event.preventDefault();
        slot.classList.remove('drag-over');
        
        if (!orderSelected) return;
        const animalType = orderSelected.dataset.type;
        const targetType = slot.dataset.type;
        
        if (animalType === targetType) {
          const placed = document.createElement('span');
          placed.className = 'order-chip placed-chip';
          placed.innerHTML = orderSelected.innerHTML;
          slot.appendChild(placed);
          orderSelected.disabled = true;
          orderSelected.classList.remove('dragging');
          orderSelected = null;
          placedAnimals[placed.textContent] = targetType;
          updateScore(1);
          setStatus(ui('good'), true);
          if (Object.keys(placedAnimals).length === data.order.animals.length) {
            setStatus(ui('orderDone'), true);
          }
        } else {
          setStatus(ui('tryAgain'));
        }
      });
    });

    document.getElementById('reset-order').addEventListener('click', () => {
      renderOrder();
      setStatus('');
    });

    document.getElementById('check-order').addEventListener('click', () => {
      if (Object.keys(placedAnimals).length !== data.order.animals.length) {
        setStatus(ui('orderNeedAll'));
        return;
      }
      setStatus(ui('orderDone'), true);
    });
    return;
  }

  const shuffled = [...data.order.items].sort(() => Math.random() - 0.5);
  orderChosen = [];
  document.getElementById('progress').textContent = data.order.prompt;
  document.getElementById('game-content').innerHTML = `
    <div class="question-box">
      <div class="order-slot order-answer" id="order-answer"></div>
      <div class="order-bank">${shuffled.map((item) => `<button class="order-chip" type="button">${item}</button>`).join('')}</div>
      <div class="actions">
        <button class="action-btn" id="check-order" type="button">${ui('orderCheck')}</button>
        <button class="action-btn" id="reset-order" type="button">${ui('orderReset')}</button>
      </div>
    </div>
  `;
  document.querySelectorAll('.order-chip').forEach((button) => {
    button.addEventListener('click', () => {
      button.disabled = true;
      orderChosen.push(button.textContent);
      const slot = document.getElementById('order-answer');
      const chip = document.createElement('span');
      chip.className = 'order-chip';
      chip.textContent = button.textContent;
      chip.disabled = true;
      slot.appendChild(chip);
    });
  });
  document.getElementById('reset-order').addEventListener('click', () => {
    renderOrder();
    setStatus('');
  });
  document.getElementById('check-order').addEventListener('click', () => {
    const correct = lessonData().order.items;
    if (orderChosen.length !== correct.length) {
      setStatus(ui('orderNeedAll'));
      return;
    }
    if (orderChosen.join('||') === correct.join('||')) {
      updateScore(1);
      setStatus(ui('orderDone'), true);
    } else {
      setStatus(ui('tryAgain'));
    }
  });
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = ui(node.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.title = `${lessonData().lesson} | ${ui(gameType === 'quiz' ? 'quizBadge' : gameType === 'match' ? 'matchBadge' : 'orderBadge')}`;
  const langSelect = document.getElementById('lang-select');
  langSelect.value = currentLang;
  [...langSelect.options].forEach((option) => {
    option.textContent = ui(option.value === 'en' ? 'langEn' : option.value === 'fr' ? 'langFr' : 'langAr');
  });
  renderShell();
  if (gameType === 'quiz') renderQuiz();
  if (gameType === 'match') { matchesDone = 0; selectedLeft = null; clearActiveLine(); renderMatch(); }
  if (gameType === 'order') renderOrder();
  syncLinks();
}

document.getElementById('lang-select').addEventListener('change', (event) => {
  const next = event.target.value;
  if (!GAME_LANGS.includes(next)) return;
  currentLang = next;
  localStorage.setItem(GAME_STORAGE_KEY, next);
  score = 0;
  quizIndex = 0;
  matchesDone = 0;
  selectedLeft = null;
  orderChosen = [];
  applyLanguage();
});

applyLanguage();
