const TRANSLATIONS = {
  en: {
    brand: 'Future Adventurers',
    'nav.welcome': 'Welcome',
    'nav.about': 'About Us',
    'nav.courses': 'Courses',
    'nav.games': 'Games',
    'lang.label': 'Language',
    'lang.en': 'English',
    'lang.fr': 'French',
    'lang.ar': 'Arabic',
    'title.home': 'Welcome | Future Adventurers',
    'title.courses': 'Courses | Future Adventurers',
    'title.resumes': 'Resumes | Future Adventurers',
    'title.games': 'Games | Future Adventurers',
    'title.about': 'About Us | Future Adventurers',
    'title.coursePage': 'Course | Future Adventurers',
    'home.eyebrow': 'eLearning for Kids',
    'home.greeting': 'Hi kids! Welcome to our happy learning world with Mo8amer!',
    'home.title': 'Welcome to a Website Full of Courses and Games',
    'home.subtitle': 'Discover many animal courses, colorful reviews, and fun games that help kids learn step by step.',
    'home.ctaLearn': 'Start Courses',
    'home.ctaPlay': 'Play Games',
    'home.marquee1': 'Welcome Friends',
    'home.marquee2': 'Learn with Mo8amer',
    'home.marquee3': 'Play, Smile, Discover',
    'home.marquee4': 'Math, Science, Games',
    'home.feature1Title': 'Understand Animals',
    'home.feature1Text': 'Kids learn where animals live, what they eat, and how to treat them kindly through many simple lessons.',
    'home.videoLearningTitle': 'Learn Through Videos',
    'home.videoLearningText': 'Watch engaging videos to learn about animals, available in English, French, and Arabic.',
    'home.feature2Title': 'Many Easy Courses',
    'home.feature2Text': 'The website offers many short courses with simple words to make learning easy for young students.',
    'home.feature3Title': 'Play and Practice',
    'home.feature3Text': 'Many interactive games help children practice, remember, and enjoy learning every day.',
    'home.popupEyebrow': 'Welcome!',
    'home.popupTitle': 'This website has many courses and many games',
    'home.popupText': 'Explore lessons, reviews, and fun activities in Arabic, French, or English.',
    'courses.eyebrow': 'Learning Path',
    'courses.title': 'Courses for Kids',
    'courses.subtitle': 'Choose a short course and learn step by step.',
    'courses.c1Title': 'Course 1: The Compass',
    'courses.c1Text': 'Learn what a compass is, how it shows directions, and how to use it to find north, south, east, and west.',
    'courses.c2Title': 'Course 2: Pollution',
    'courses.c2Text': 'Discover air, water, and land pollution and learn easy actions that help protect our planet.',
    'courses.c3Title': 'Course 3: The Locomotion in Animals',
    'courses.c3Text': 'Explore how animals walk, fly, swim, jump, and crawl in different environments.',
    'courses.c4Title': 'Course 4: Pets and Wild Animals',
    'courses.c4Text': 'Compare animals that live with people and animals that live freely in nature.',
    'courses.c5Title': 'Course 5: The Blood Components',
    'courses.c5Text': 'Learn the main parts of blood and how they help carry oxygen, fight germs, and stop bleeding.',
    'courses.c6Title': 'Course 6: Food Chain',
    'courses.c6Text': 'Discover how plants and animals depend on one another for food and balance in nature.',
    'courses.c7Title': 'Course 7: Breathing',
    'courses.c7Text': 'Discover how breathing helps the body take in oxygen and stay strong and calm.',
    'courses.cta': 'Continue to Games',
    'resumes.eyebrow': 'Quick Revision',
    'resumes.title': 'Course Resumes',
    'resumes.subtitle': 'Short summaries for fast review.',
    'resumes.r1Title': 'Resume 1: Pets',
    'resumes.r1Text': 'Pets live with people and depend on us for food, water, clean space, and kind care.',
    'resumes.r2Title': 'Resume 2: Wild Animals',
    'resumes.r2Text': 'Wild animals belong to nature and protect balance in forests, oceans, and grasslands.',
    'resumes.r3Title': 'Resume 3: Homes',
    'resumes.r3Text': 'Home animals and wild animals have different habitats; matching homes helps us understand them.',
    'resumes.r4Title': 'Resume 4: Safety Rule',
    'resumes.r4Text': 'Safety first: be calm, be gentle, and stay with an adult near animals.',
    'resumes.cta': 'Practice with Games',
    'games.eyebrow': 'Interactive Learning',
    'games.title': 'Play and Learn',
    'games.subtitle': 'Choose a game and earn stars while practicing.',
    'games.libraryEyebrow': 'Lesson Games',
    'games.libraryTitle': 'Game Library',
    'games.librarySubtitle': 'Open three practice games for each lesson.',
    'games.lesson.compass': 'Compass',
    'games.lesson.pollution': 'Pollution',
    'games.lesson.locomotion': 'Locomotion in Animals',
    'games.lesson.breathing': 'Breathing',
    'games.lesson.petswild': 'Pets and Wild Animals',
    'games.lesson.blood': 'Blood Components',
    'games.lesson.foodchain': 'Food Chain',
    'games.linkQuiz': 'Quiz',
    'games.linkMatch': 'Match',
    'games.linkOrder': 'Order',
    'games.tabSort': 'Sort Game',
    'games.tabQuiz': 'Quick Quiz',
    'games.tabMemory': 'Memory Match',
    'games.sortTitle': 'Game 1: Pet or Wild Sort',
    'games.sortSteps': 'Step 1: Tap an animal. Step 2: Tap the correct box.',
    'games.sortPets': 'Pets',
    'games.sortWild': 'Wild Animals',
    'games.noAnimals': 'No animals yet.',
    'games.pickFirst': 'Choose an animal first.',
    'games.pickStart': 'Pick an animal to begin.',
    'games.selected': 'Selected: {name}. Now tap Pets or Wild Animals.',
    'games.correct': 'Great! {name} is correct.',
    'games.wrong': 'Nice try! {name} is a {target}.',
    'games.finished': 'Finished! You got {score} out of {total} correct.',
    'games.quizTitle': 'Game 2: Quick Quiz',
    'games.quizStatus': 'Question {current} of {total} | Stars: {score}',
    'games.quizGood': 'Great answer!',
    'games.quizTry': 'Good try! Correct answer: {answer}',
    'games.quizDoneTitle': 'Quiz Complete',
    'games.quizDoneText': 'You earned {score} out of {total} stars.',
    'games.quizReplay': 'Play Quiz Again',
    'games.memoryTitle': 'Game 3: Memory Match',
    'games.memoryText': 'Find the matching animals.',
    'games.memoryStatus': 'Pairs found: {pairs}/{total} | Turns: {turns}',
    'games.memoryDone': 'Amazing memory! You finished in {turns} turns.',
    'course.objectives': 'What You Will Learn',
    'course.missions': 'Fun Missions',
    'course.tip': 'Super Tip',
    'course.picture': 'Picture Idea',
    'course.imageLink': 'Helpful Link',
    'course.breathCoach': 'Breathe with Mo8amer',
    'course.breathVideo': 'Watch How Breathing Works',
    'course.breathPractice': 'Mini Breathing Practice',
    'course.breathIn': 'Breathe in',
    'course.breathOut': 'Breathe out',
    'course.breathGame': 'Breathing Game',
    'course.breathKidsTitle': 'Breathing Game for 8-9 Year Olds',
    'course.breathKidsText': 'A simple breathing practice game for young learners to build calm and focus.',
    'course.breathKidsPlay': 'Play the Breathing Game',
    'course.breathGameText': 'Tap breathe in, then breathe out, to help the happy lungs collect calm stars.',
    'course.breathReady': 'Press breathe in to start the calm breathing game.',
    'course.breathInReact': 'Great inhale! The lungs are getting bigger.',
    'course.breathOutReact': 'Soft exhale! You finished one calm breath.',
    'course.breathNeedIn': 'Start with breathe in first.',
    'course.breathWin': 'Amazing! You completed 3 calm breaths.',
    'course.videoFallback': 'Your browser does not support the breathing video.',
    'course.backToCourses': 'Back to Courses',
    'course.playGame': 'Practice in Games',
    'course.notFoundTitle': 'Course Not Found',
    'course.notFoundText': 'Please go back to the courses page and choose a lesson.',
    'footer.text': '2026 Future Adventurers Kids eLearning'
  },
  fr: {
    brand: 'Aventuriers du Futur',
    'nav.welcome': 'Accueil',
    'nav.about': 'A propos',
    'nav.courses': 'Cours',
    'nav.games': 'Jeux',
    'lang.label': 'Langue',
    'lang.en': 'Anglais',
    'lang.fr': 'Francais',
    'lang.ar': 'Arabe',
    'title.home': 'Accueil | Aventuriers du Futur',
    'title.courses': 'Cours | Aventuriers du Futur',
    'title.resumes': 'Resumes | Aventuriers du Futur',
    'title.games': 'Jeux | Aventuriers du Futur',
    'title.about': 'A propos | Aventuriers du Futur',
    'title.coursePage': 'Cours | Aventuriers du Futur',
    'home.eyebrow': 'eLearning pour enfants',
    'home.greeting': 'Bonjour les enfants ! Bienvenue dans notre monde joyeux d apprentissage avec Mo8amer !',
    'home.title': 'Bienvenue sur un site rempli de cours et de jeux',
    'home.subtitle': 'Decouvre de nombreux cours sur les animaux, des resumes colores et des jeux amusants pour apprendre pas a pas.',
    'home.ctaLearn': 'Commencer les cours',
    'home.ctaPlay': 'Jouer',
    'home.marquee1': 'Bienvenue les amis',
    'home.marquee2': 'Apprends avec Mo8amer',
    'home.marquee3': 'Joue, souris, decouvre',
    'home.marquee4': 'Maths, sciences, jeux',
    'home.feature1Title': 'Comprendre les animaux',
    'home.feature1Text': 'Les enfants apprennent ou vivent les animaux, ce qu ils mangent et comment etre gentils avec eux grace a plusieurs lecons simples.',
    'home.videoLearningTitle': 'Apprendre par vidéos',
    'home.videoLearningText': 'Regardez des vidéos engageantes pour apprendre sur les animaux, disponibles en anglais, français et arabe.',
    'home.feature2Title': 'Beaucoup de cours faciles',
    'home.feature2Text': 'Le site propose plusieurs petits cours avec des mots simples pour rendre l apprentissage facile.',
    'home.feature3Title': 'Jouer et pratiquer',
    'home.feature3Text': 'De nombreux jeux interactifs aident les enfants a pratiquer, memoriser et apprendre avec plaisir.',
    'home.popupEyebrow': 'Bienvenue !',
    'home.popupTitle': 'Ce site contient beaucoup de cours et beaucoup de jeux',
    'home.popupText': 'Explore des lecons, des resumes et des activites amusantes en arabe, en francais ou en anglais.',
    'courses.eyebrow': 'Parcours d apprentissage',
    'courses.title': 'Cours pour enfants',
    'courses.subtitle': 'Choisis un petit cours et apprends etape par etape.',
    'courses.c1Title': 'Cours 1 : La boussole',
    'courses.c1Text': 'Apprends ce qu est une boussole, comment elle montre les directions et comment trouver le nord, le sud, l est et l ouest.',
    'courses.c2Title': 'Cours 2 : La pollution',
    'courses.c2Text': 'Decouvre la pollution de l air, de l eau et du sol et apprends des gestes simples pour proteger la planete.',
    'courses.c3Title': 'Cours 3 : La locomotion chez les animaux',
    'courses.c3Text': 'Observe comment les animaux marchent, volent, nagent, sautent et rampent dans differents milieux.',
    'courses.c4Title': 'Cours 4 : Les animaux domestiques et sauvages',
    'courses.c4Text': 'Compare les animaux qui vivent avec les humains et ceux qui vivent librement dans la nature.',
    'courses.c5Title': 'Cours 5 : Les composants du sang',
    'courses.c5Text': 'Apprends les principales parties du sang et comment elles transportent l oxygene, combattent les microbes et arretent le saignement.',
    'courses.c6Title': 'Cours 6 : La chaine alimentaire',
    'courses.c6Text': 'Decouvre comment les plantes et les animaux dependent les uns des autres pour se nourrir et garder l equilibre de la nature.',
    'courses.c7Title': 'Cours 7 : La respiration',
    'courses.c7Text': 'Decouvre comment la respiration aide le corps a prendre de l oxygene et a rester fort et calme.',
    'courses.cta': 'Continuer vers les jeux',
    'resumes.eyebrow': 'Revision rapide',
    'resumes.title': 'Resumes des cours',
    'resumes.subtitle': 'Des resumes courts pour reviser vite.',
    'resumes.r1Title': 'Resume 1 : Animaux domestiques',
    'resumes.r1Text': 'Les animaux domestiques vivent avec nous et dependent de notre soin quotidien.',
    'resumes.r2Title': 'Resume 2 : Animaux sauvages',
    'resumes.r2Text': 'Les animaux sauvages appartiennent a la nature et protègent l equilibre des habitats.',
    'resumes.r3Title': 'Resume 3 : Habitats',
    'resumes.r3Text': 'Chaque animal a son habitat; bien associer l animal et sa maison aide a mieux comprendre.',
    'resumes.r4Title': 'Resume 4 : Regle de securite',
    'resumes.r4Text': 'Securite d abord: reste calme, sois gentil et reste avec un adulte pres des animaux.',
    'resumes.cta': 'Pratiquer avec les jeux',
    'games.eyebrow': 'Apprentissage interactif',
    'games.title': 'Jouer et apprendre',
    'games.subtitle': 'Choisis un jeu et gagne des etoiles en pratiquant.',
    'games.libraryEyebrow': 'Jeux des lecons',
    'games.libraryTitle': 'Bibliotheque de jeux',
    'games.librarySubtitle': 'Ouvre trois jeux pour pratiquer chaque lecon.',
    'games.lesson.compass': 'La boussole',
    'games.lesson.pollution': 'La pollution',
    'games.lesson.locomotion': 'La locomotion des animaux',
    'games.lesson.breathing': 'La respiration',
    'games.lesson.petswild': 'Animaux domestiques et sauvages',
    'games.lesson.blood': 'Les composants du sang',
    'games.lesson.foodchain': 'La chaine alimentaire',
    'games.linkQuiz': 'Quiz',
    'games.linkMatch': 'Associer',
    'games.linkOrder': 'Ranger',
    'games.tabSort': 'Jeu de tri',
    'games.tabQuiz': 'Quiz rapide',
    'games.tabMemory': 'Memory',
    'games.sortTitle': 'Jeu 1 : Domestique ou sauvage',
    'games.sortSteps': 'Etape 1 : Choisis un animal. Etape 2 : Choisis la bonne boite.',
    'games.sortPets': 'Animaux domestiques',
    'games.sortWild': 'Animaux sauvages',
    'games.noAnimals': 'Aucun animal pour le moment.',
    'games.pickFirst': 'Choisis d abord un animal.',
    'games.pickStart': 'Choisis un animal pour commencer.',
    'games.selected': 'Selectionne : {name}. Maintenant choisis la bonne boite.',
    'games.correct': 'Bravo ! {name} est correct.',
    'games.wrong': 'Bien essaye ! {name} est un animal {target}.',
    'games.finished': 'Termine ! Tu as {score} bonnes reponses sur {total}.',
    'games.quizTitle': 'Jeu 2 : Quiz rapide',
    'games.quizStatus': 'Question {current} sur {total} | Etoiles : {score}',
    'games.quizGood': 'Bonne reponse !',
    'games.quizTry': 'Bonne tentative ! Reponse correcte : {answer}',
    'games.quizDoneTitle': 'Quiz termine',
    'games.quizDoneText': 'Tu as gagne {score} etoiles sur {total}.',
    'games.quizReplay': 'Rejouer le quiz',
    'games.memoryTitle': 'Jeu 3 : Memory',
    'games.memoryText': 'Trouve les paires d animaux.',
    'games.memoryStatus': 'Paires trouvees : {pairs}/{total} | Tours : {turns}',
    'games.memoryDone': 'Super memoire ! Tu as fini en {turns} tours.',
    'course.objectives': 'Ce que tu vas apprendre',
    'course.missions': 'Missions amusantes',
    'course.tip': 'Super conseil',
    'course.picture': 'Idee d image',
    'course.imageLink': 'Lien utile',
    'course.breathCoach': 'Respire avec Mo8amer',
    'course.breathVideo': 'Regarde comment on respire',
    'course.breathPractice': 'Mini exercice de respiration',
    'course.breathIn': 'Inspire',
    'course.breathOut': 'Expire',
    'course.breathGame': 'Jeu de respiration',
    'course.breathKidsTitle': 'Jeu de respiration pour 8-9 ans',
    'course.breathKidsText': 'Un jeu de respiration simple pour aider les enfants à se calmer et rester concentrés.',
    'course.breathKidsPlay': 'Jouer au jeu de respiration',
    'course.breathGameText': 'Appuie sur inspire puis expire pour aider les poumons joyeux a gagner des etoiles calmes.',
    'course.breathReady': 'Appuie sur inspire pour commencer le jeu de respiration calme.',
    'course.breathInReact': 'Bravo ! Les poumons deviennent plus grands.',
    'course.breathOutReact': 'Expire doucement ! Tu as termine une respiration calme.',
    'course.breathNeedIn': 'Commence d abord par inspire.',
    'course.breathWin': 'Super ! Tu as termine 3 respirations calmes.',
    'course.videoFallback': 'Ton navigateur ne peut pas lire la video de respiration.',
    'course.backToCourses': 'Retour aux cours',
    'course.playGame': 'Pratiquer dans les jeux',
    'course.notFoundTitle': 'Cours introuvable',
    'course.notFoundText': 'Retourne a la page des cours et choisis une lecon.',
    'footer.text': '2026 Aventuriers du Futur eLearning enfants'
  },
  ar: {
    brand: 'مغامرو المستقبل',
    'nav.welcome': 'الصفحة الرئيسية',
    'nav.about': 'من نحن',
    'nav.courses': 'الدروس',
    'nav.games': 'الألعاب',
    'lang.label': 'اللغة',
    'lang.en': 'الإنجليزية',
    'lang.fr': 'الفرنسية',
    'lang.ar': 'العربية',
    'title.home': 'الرئيسية | مغامرو المستقبل',
    'title.courses': 'الدروس | مغامرو المستقبل',
    'title.resumes': 'الملخصات | مغامرو المستقبل',
    'title.games': 'الألعاب | مغامرو المستقبل',
    'title.about': 'من نحن | مغامرو المستقبل',
    'title.coursePage': 'الدرس | مغامرو المستقبل',
    'home.eyebrow': 'تعلم إلكتروني للأطفال',
    'home.greeting': 'مرحباً يا أطفال! أهلاً بكم في عالمنا السعيد للتعلم مع مغامر!',
    'home.title': 'مرحباً في موقع مليء بالدروس والألعاب',
    'home.subtitle': 'اكتشف العديد من الدروس عن الحيوانات والملخصات الملوّنة والألعاب الممتعة التي تساعد الأطفال على التعلم خطوة بخطوة.',
    'home.ctaLearn': 'ابدأ الدروس',
    'home.ctaPlay': 'ابدأ الألعاب',
    'home.marquee1': 'مرحباً يا أصدقاء',
    'home.marquee2': 'تعلّم مع مغامر',
    'home.marquee3': 'العب وابتسم واكتشف',
    'home.marquee4': 'رياضيات وعلوم وألعاب',
    'home.feature1Title': 'فهم الحيوانات',
    'home.feature1Text': 'يتعلم الأطفال أين تعيش الحيوانات وماذا تأكل وكيف نتعامل معها بلطف من خلال دروس كثيرة وبسيطة.',
    'home.videoLearningTitle': 'تعلم من خلال الفيديوهات',
    'home.videoLearningText': 'شاهد فيديوهات مشوقة لتعلم عن الحيوانات، متوفرة بالإنجليزية والفرنسية والعربية.',
    'home.feature2Title': 'دروس كثيرة وسهلة',
    'home.feature2Text': 'يقدّم الموقع العديد من الدروس القصيرة بكلمات بسيطة تساعد الأطفال على التعلم بسهولة.',
    'home.feature3Title': 'العب وتدرّب',
    'home.feature3Text': 'توجد ألعاب تفاعلية كثيرة تساعد الأطفال على التدريب والتذكر والاستمتاع بالتعلم كل يوم.',
    'home.popupEyebrow': 'مرحباً!',
    'home.popupTitle': 'هذا الموقع يحتوي على الكثير من الدروس والكثير من الألعاب',
    'home.popupText': 'استكشف الدروس والملخصات والأنشطة الممتعة بالعربية أو الفرنسية أو الإنجليزية.',
    'courses.eyebrow': 'مسار التعلم',
    'courses.title': 'دروس للأطفال',
    'courses.subtitle': 'اختر درساً قصيراً وتعلم خطوة بخطوة.',
    'courses.c1Title': 'الدرس 1: البوصلة',
    'courses.c1Text': 'تعلّم ما هي البوصلة، وكيف تُظهر الاتجاهات، وكيف نستخدمها لمعرفة الشمال والجنوب والشرق والغرب.',
    'courses.c2Title': 'الدرس 2: التلوث',
    'courses.c2Text': 'اكتشف تلوث الهواء والماء والتربة وتعلّم خطوات بسيطة لحماية كوكبنا.',
    'courses.c3Title': 'الدرس 1: انماط التنقل عند الحيوانات',
    'courses.c3Text': 'استكشف كيف تمشي الحيوانات وتطير وتسبح وتقفز وتزحف في بيئات مختلفة.',
    'courses.c4Title': 'الدرس 4: الحيوانات الأليفة والبرية',
    'courses.c4Text': 'قارن بين الحيوانات التي تعيش مع الإنسان والحيوانات التي تعيش بحرية في الطبيعة.',
    'courses.c5Title': 'الدرس 5: مكونات الدم',
    'courses.c5Text': 'تعرّف على الأجزاء الرئيسية للدم وكيف تساعد الجسم على نقل الأكسجين ومحاربة الجراثيم وإيقاف النزيف.',
    'courses.c6Title': 'الدرس 6: السلسلة الغذائية',
    'courses.c6Text': 'اكتشف كيف تعتمد النباتات والحيوانات على بعضها بعضاً في الغذاء وتوازن الطبيعة.',
    'courses.c7Title': 'الدرس 2: حركات القفص الصّدري',
    'courses.c7Text': 'اكتشف كيف يساعد التنفس الجسم على أخذ الأكسجين والبقاء قوياً وهادئاً.',
    'courses.pollutionTitle': 'الدرس 3 :حماية البيئة ومقاومة التلوث',
    'courses.pollutionText': 'تعلم عن التلوث وكيفية حماية بيئتنا.',
    'courses.cta': 'تابع إلى الألعاب',
    'resumes.eyebrow': 'مراجعة سريعة',
    'resumes.title': 'ملخصات الدروس',
    'resumes.subtitle': 'ملخصات قصيرة للمراجعة بسرعة.',
    'resumes.r1Title': 'الملخص 1: الحيوانات الأليفة',
    'resumes.r1Text': 'الحيوانات الأليفة تعيش معنا وتعتمد علينا في العناية اليومية.',
    'resumes.r2Title': 'الملخص 2: الحيوانات البرية',
    'resumes.r2Text': 'الحيوانات البرية تنتمي للطبيعة وتساعد في توازن البيئة.',
    'resumes.r3Title': 'الملخص 3: أماكن العيش',
    'resumes.r3Text': 'لكل حيوان مكان عيش مناسب، وربط الحيوان ببيئته يساعدنا على الفهم الصحيح.',
    'resumes.r4Title': 'الملخص 4: قاعدة السلامة',
    'resumes.r4Text': 'السلامة أولاً: كن هادئاً ولطيفاً وابقَ مع شخص بالغ قرب الحيوانات.',
    'resumes.cta': 'تدرّب بالألعاب',
    'games.eyebrow': 'تعلم تفاعلي',
    'games.title': 'العب وتعلم',
    'games.subtitle': 'اختر لعبة واجمع نجوماً أثناء التدريب.',
    'games.libraryEyebrow': 'ألعاب الدروس',
    'games.libraryTitle': 'مكتبة الألعاب',
    'games.librarySubtitle': 'افتح ثلاث ألعاب تدريبية لكل درس.',
    'games.lesson.compass': 'البوصلة',
    'games.lesson.pollution': 'التلوث',
    'games.lesson.locomotion': 'تنقل الحيوانات',
    'games.lesson.breathing': 'التنفس',
    'games.lesson.petswild': 'الحيوانات الأليفة والبرية',
    'games.lesson.blood': 'مكونات الدم',
    'games.lesson.foodchain': 'السلسلة الغذائية',
    'games.linkQuiz': 'اختبار',
    'games.linkMatch': 'وصل',
    'games.linkOrder': 'ترتيب',
    'games.tabSort': 'لعبة التصنيف',
    'games.tabQuiz': 'اختبار سريع',
    'games.tabMemory': 'لعبة الذاكرة',
    'games.sortTitle': 'اللعبة 1: أليف أم بري',
    'games.sortSteps': 'الخطوة 1: اختر حيواناً. الخطوة 2: اختر الصندوق الصحيح.',
    'games.sortPets': 'حيوانات أليفة',
    'games.sortWild': 'حيوانات برية',
    'games.noAnimals': 'لا توجد حيوانات بعد.',
    'games.pickFirst': 'اختر حيواناً أولاً.',
    'games.pickStart': 'اختر حيواناً للبدء.',
    'games.selected': 'تم اختيار: {name}. الآن اختر الصندوق المناسب.',
    'games.correct': 'رائع! {name} إجابة صحيحة.',
    'games.wrong': 'محاولة جيدة! {name} حيوان {target}.',
    'games.finished': 'انتهيت! حصلت على {score} من {total}.',
    'games.quizTitle': 'اللعبة 2: اختبار سريع',
    'games.quizStatus': 'السؤال {current} من {total} | النجوم: {score}',
    'games.quizGood': 'إجابة ممتازة!',
    'games.quizTry': 'محاولة جيدة! الإجابة الصحيحة: {answer}',
    'games.quizDoneTitle': 'انتهى الاختبار',
    'games.quizDoneText': 'حصلت على {score} من {total} نجوم.',
    'games.quizReplay': 'أعد الاختبار',
    'games.memoryTitle': 'اللعبة 3: الذاكرة',
    'games.memoryText': 'ابحث عن البطاقات المتطابقة.',
    'games.memoryStatus': 'الأزواج المكتشفة: {pairs}/{total} | المحاولات: {turns}',
    'games.memoryDone': 'ذاكرة ممتازة! أنهيت اللعبة في {turns} محاولة.',
    'course.objectives': 'ماذا ستتعلم',
    'course.missions': 'مهام ممتعة',
    'course.tip': 'نصيحة رائعة',
    'course.picture': 'فكرة صورة',
    'course.imageLink': 'رابط مفيد',
    'course.breathCoach': 'تنفّس مع مغامر',
    'course.breathVideo': 'شاهد كيف يعمل التنفس',
    'course.breathPractice': 'تمرين تنفس صغير',
    'course.breathIn': 'خذ شهيقاً',
    'course.breathOut': 'أخرج زفيراً',
    'course.breathGame': 'لعبة التنفس',
    'course.breathKidsTitle': 'لعبة تنفس للأطفال 8-9 سنوات',
    'course.breathKidsText': 'لعبة تنفس بسيطة للأطفال لتقوية الهدوء والتركيز.',
    'course.breathKidsPlay': 'العب لعبة التنفس',
    'course.breathGameText': 'اضغط على خذ شهيقاً ثم أخرج زفيراً لتساعد الرئتين السعيدتين على جمع نجوم الهدوء.',
    'course.breathReady': 'اضغط على خذ شهيقاً لتبدأ لعبة التنفس الهادئ.',
    'course.breathInReact': 'رائع! الرئتان تكبران مع الشهيق.',
    'course.breathOutReact': 'زفير لطيف! أنهيت نفساً هادئاً واحداً.',
    'course.breathNeedIn': 'ابدأ أولاً بزر خذ شهيقاً.',
    'course.breathWin': 'ممتاز! أكملت 3 أنفاس هادئة.',
    'course.videoFallback': 'المتصفح لا يدعم عرض فيديو التنفس.',
    'course.backToCourses': 'العودة إلى الدروس',
    'course.playGame': 'تدرّب في الألعاب',
    'course.notFoundTitle': 'الدرس غير موجود',
    'course.notFoundText': 'ارجع إلى صفحة الدروس واختر درساً مناسباً.',
    'footer.text': '2026 مغامرو المستقبل تعلم إلكتروني للأطفال'
  }
};

const AVATAR_ASK_TEXT = {
  en: {
    title: 'Ask Mo8amer',
    ready: 'Mo8amer is ready for your question.',
    text: 'Write a question and watch the avatar answer by itself.',
    placeholder: 'Ask Mo8amer here',
    button: 'Ask now'
  },
  fr: {
    title: 'Demande a Mo8amer',
    ready: 'Mo8amer est pret pour ta question.',
    text: 'Ecris une question et regarde l avatar repondre tout seul.',
    placeholder: 'Ecris ta question ici',
    button: 'Demander'
  },
  ar: {
    title: 'اسأل مغامر',
    ready: 'مغامر جاهز لسؤالك.',
    text: 'اكتب سؤالك وشاهد الصورة الرمزية وهي ترد وحدها.',
    placeholder: 'اكتب سؤالك هنا',
    button: 'اسأل الآن'
  }
};

const GAME_CONTENT = {
  en: {
    animals: [
      { name: 'Dog 🐶', type: 'pet' },
      { name: 'Cat 🐱', type: 'pet' },
      { name: 'Rabbit 🐰', type: 'pet' },
      { name: 'Fish 🐠', type: 'pet' },
      { name: 'Lion 🦁', type: 'wild' },
      { name: 'Elephant 🐘', type: 'wild' },
      { name: 'Tiger 🐯', type: 'wild' },
      { name: 'Fox 🦊', type: 'wild' }
    ],
    quizQuestions: [
      {
        prompt: 'Which one is usually a pet at home?',
        options: ['Dog 🐶', 'Tiger 🐯', 'Lion 🦁'],
        answer: 'Dog 🐶'
      },
      {
        prompt: 'Which one is a wild animal?',
        options: ['Cat 🐱', 'Rabbit 🐰', 'Elephant 🐘'],
        answer: 'Elephant 🐘'
      },
      {
        prompt: 'A pet needs this every day:',
        options: ['Food and water', 'Car tires', 'Television remote'],
        answer: 'Food and water'
      },
      {
        prompt: 'Wild animals mostly live in...',
        options: ['Jungle and forest', 'Kitchen and bedroom', 'School bag'],
        answer: 'Jungle and forest'
      },
      {
        prompt: 'Which habitat matches a shark?',
        options: ['Ocean', 'Living room', 'Tree house'],
        answer: 'Ocean'
      },
      {
        prompt: 'Which habitat matches a lion?',
        options: ['Savanna', 'Bathtub', 'Classroom'],
        answer: 'Savanna'
      },
      {
        prompt: 'What should you do near a wild animal?',
        options: ['Keep distance with an adult', 'Run to touch it', 'Feed it candy'],
        answer: 'Keep distance with an adult'
      },
      {
        prompt: 'Which action is kind to pets?',
        options: ['Give clean water', 'Pull the tail', 'Shout loudly'],
        answer: 'Give clean water'
      }
    ]
  },
  fr: {
    animals: [
      { name: 'Chien 🐶', type: 'pet' },
      { name: 'Chat 🐱', type: 'pet' },
      { name: 'Lapin 🐰', type: 'pet' },
      { name: 'Poisson 🐠', type: 'pet' },
      { name: 'Lion 🦁', type: 'wild' },
      { name: 'Elephant 🐘', type: 'wild' },
      { name: 'Tigre 🐯', type: 'wild' },
      { name: 'Renard 🦊', type: 'wild' }
    ],
    quizQuestions: [
      {
        prompt: 'Lequel est souvent un animal domestique ?',
        options: ['Chien 🐶', 'Tigre 🐯', 'Lion 🦁'],
        answer: 'Chien 🐶'
      },
      {
        prompt: 'Lequel est un animal sauvage ?',
        options: ['Chat 🐱', 'Lapin 🐰', 'Elephant 🐘'],
        answer: 'Elephant 🐘'
      },
      {
        prompt: 'Un animal domestique a besoin chaque jour de...',
        options: ['Nourriture et eau', 'Pneus', 'Telecommande'],
        answer: 'Nourriture et eau'
      },
      {
        prompt: 'Les animaux sauvages vivent surtout dans...',
        options: ['La foret et la jungle', 'La cuisine et la chambre', 'Le cartable'],
        answer: 'La foret et la jungle'
      },
      {
        prompt: 'Quel habitat correspond au requin ?',
        options: ['Ocean', 'Salon', 'Cabane'],
        answer: 'Ocean'
      },
      {
        prompt: 'Quel habitat correspond au lion ?',
        options: ['Savane', 'Baignoire', 'Classe'],
        answer: 'Savane'
      },
      {
        prompt: 'Que faut-il faire pres d un animal sauvage ?',
        options: ['Garder la distance avec un adulte', 'Courir pour le toucher', 'Lui donner des bonbons'],
        answer: 'Garder la distance avec un adulte'
      },
      {
        prompt: 'Quel geste est gentil avec un animal domestique ?',
        options: ['Donner de l eau propre', 'Tirer la queue', 'Crier fort'],
        answer: 'Donner de l eau propre'
      }
    ]
  },
  ar: {
    animals: [
      { name: 'كلب 🐶', type: 'pet' },
      { name: 'قطة 🐱', type: 'pet' },
      { name: 'أرنب 🐰', type: 'pet' },
      { name: 'سمكة 🐠', type: 'pet' },
      { name: 'أسد 🦁', type: 'wild' },
      { name: 'فيل 🐘', type: 'wild' },
      { name: 'نمر 🐯', type: 'wild' },
      { name: 'ثعلب 🦊', type: 'wild' }
    ],
    quizQuestions: [
      {
        prompt: 'أي واحد غالباً يكون حيواناً أليفاً في المنزل؟',
        options: ['كلب 🐶', 'نمر 🐯', 'أسد 🦁'],
        answer: 'كلب 🐶'
      },
      {
        prompt: 'أي واحد حيوان بري؟',
        options: ['قطة 🐱', 'أرنب 🐰', 'فيل 🐘'],
        answer: 'فيل 🐘'
      },
      {
        prompt: 'الحيوان الأليف يحتاج يومياً إلى...',
        options: ['الطعام والماء', 'إطارات السيارة', 'جهاز التحكم'],
        answer: 'الطعام والماء'
      },
      {
        prompt: 'الحيوانات البرية تعيش غالباً في...',
        options: ['الغابة والأدغال', 'المطبخ وغرفة النوم', 'الحقيبة المدرسية'],
        answer: 'الغابة والأدغال'
      },
      {
        prompt: 'ما المكان المناسب للقرش؟',
        options: ['المحيط', 'غرفة الجلوس', 'بيت الشجرة'],
        answer: 'المحيط'
      },
      {
        prompt: 'ما المكان المناسب للأسد؟',
        options: ['السافانا', 'حوض الاستحمام', 'الفصل الدراسي'],
        answer: 'السافانا'
      },
      {
        prompt: 'ماذا نفعل قرب حيوان بري؟',
        options: ['نحافظ على المسافة مع شخص بالغ', 'نركض للمسّه', 'نطعمه حلوى'],
        answer: 'نحافظ على المسافة مع شخص بالغ'
      },
      {
        prompt: 'أي تصرف يعتبر لطيفاً مع الحيوان الأليف؟',
        options: ['تقديم ماء نظيف', 'شد الذيل', 'الصراخ بصوت عالٍ'],
        answer: 'تقديم ماء نظيف'
      }
    ]
  }
};

const COURSE_DETAILS = {
  en: {
    compass: {
      title: 'Course 1: The Compass',
      subtitle: 'A compass helps us know directions wherever we go.',
      intro: 'The compass is a useful tool for finding direction. It helps us identify north, south, east, and west, especially when we travel or explore.',
      objectives: ['Identify the four main directions.', 'Understand how the compass needle points north.', 'Use a compass in simple daily situations.'],
      missions: [
        { title: 'Mission 1', text: 'Point to the north, south, east, and west on a classroom map.' },
        { title: 'Mission 2', text: 'Describe how a child could use a compass during a walk outside.' }
      ],
      tip: 'Hold the compass flat and wait for the needle to stop moving before you read it.',
      pictureIdea: 'Use a picture of a child holding a compass over a simple map with the four directions marked clearly.',
      pictureLink: 'https://en.wikipedia.org/wiki/Compass'
    },
    pollution: {
      title: 'Course 2: Pollution',
      subtitle: 'Pollution harms air, water, soil, animals, and people.',
      intro: 'Pollution happens when harmful waste makes the environment dirty. Children can learn to notice pollution and help keep the Earth clean.',
      objectives: ['Recognize air, water, and land pollution.', 'Explain how pollution affects living things.', 'Suggest easy actions that reduce pollution.'],
      missions: [
        { title: 'Mission 1', text: 'Name one example of air pollution, one example of water pollution, and one example of land pollution.' },
        { title: 'Mission 2', text: 'Choose three clean habits such as recycling, saving water, or using a trash bin.' }
      ],
      tip: 'Small actions like throwing trash in the bin and saving water make a big difference.',
      pictureIdea: 'Use a split picture showing a clean park on one side and a polluted park with smoke and litter on the other side.',
      pictureLink: 'https://en.wikipedia.org/wiki/Pollution'
    },
    'animal-locomotion': {
      title: 'Course 3: The Locomotion in Animals',
      subtitle: 'Animals move in different ways to live, eat, and stay safe.',
      intro: 'Some animals walk, some fly, some swim, and others crawl or jump. Their bodies help them move in the best way for their habitats.',
      objectives: ['Name different ways animals move.', 'Match movement types to animals.', 'Understand how body parts help locomotion.'],
      missions: [
        { title: 'Mission 1', text: 'Match: bird -> fly, fish -> swim, snake -> crawl, kangaroo -> jump.' },
        { title: 'Mission 2', text: 'Explain why fins help fish and wings help birds.' }
      ],
      tip: 'When you study an animal, look at its legs, wings, fins, or body shape to understand how it moves.',
      pictureIdea: 'Use a chart with several animals, each showing a different movement such as flying, swimming, crawling, and jumping.',
      pictureLink: 'https://en.wikipedia.org/wiki/Animal_locomotion'
    },
    'pets-wild-animals': {
      title: 'Course 4: Pets and Wild Animals',
      subtitle: 'Some animals live with people, and others belong in nature.',
      intro: 'Pets can live with families and need care every day. Wild animals live in natural habitats and should stay in the wild.',
      objectives: ['Tell the difference between pets and wild animals.', 'Give examples of each group.', 'Describe safe and kind behavior with animals.'],
      missions: [
        { title: 'Mission 1', text: 'Sort six animals into Pets and Wild Animals.' },
        { title: 'Mission 2', text: 'Say one rule for caring for a pet and one rule for staying safe near a wild animal.' }
      ],
      tip: 'A pet needs care at home, but a wild animal needs freedom and space in nature.',
      pictureIdea: 'Use a comparison picture with a pet dog at home on one side and a lion in the savanna on the other side.',
      pictureLink: 'https://en.wikipedia.org/wiki/Pet'
    },
    'blood-components': {
      title: 'Course 5: The Blood Components',
      subtitle: 'Blood has different parts that work together inside the body.',
      intro: 'Blood travels through the body and helps us live. It carries oxygen and food, fights germs, and helps stop bleeding when we are hurt.',
      objectives: ['Name red blood cells, white blood cells, platelets, and plasma.', 'Understand the role of each blood component.', 'Connect blood functions to health and protection.'],
      missions: [
        { title: 'Mission 1', text: 'Match each blood component to its job: carry oxygen, fight germs, stop bleeding, or carry materials.' },
        { title: 'Mission 2', text: 'Explain why blood is important for the whole body.' }
      ],
      tip: 'Think of blood as a team where each part has a special job.',
      pictureIdea: 'Use a colorful diagram showing red blood cells, white blood cells, platelets, and plasma with labels and simple arrows.',
      pictureLink: 'https://en.wikipedia.org/wiki/Blood'
    },
    breathing: {
      title: 'Course 7: Breathing',
      subtitle: 'Breathing helps the body get oxygen and feel full of energy.',
      intro: 'Breathing is how the body takes in oxygen and sends out carbon dioxide. We breathe all day, and our lungs help us stay active, calm, and healthy.',
      objectives: ['Know that breathing brings oxygen into the body.', 'Recognize that the lungs help us breathe.', 'Practice simple habits that support healthy breathing.'],
      missions: [
        { title: 'Mission 1', text: 'Put your hand on your chest and notice how it moves when you breathe in and out.' },
        { title: 'Mission 2', text: 'Name two good habits for healthy lungs, like fresh air and exercise.' }
      ],
      tip: 'Slow deep breaths can help your body calm down and relax.',
      coachBubble: 'Hello superstar! Let us fill our lungs slowly like two happy balloons.',
      videoCaption: 'Watch the chest and lungs move while air goes in and out.',
      breathSteps: ['Smell the flower for 3 seconds.', 'Hold the air for 1 second.', 'Blow out gently like cooling soup.'],
      lungCaption: 'These cartoon lungs grow bigger when you breathe in and softer when you breathe out.',
      pictureIdea: 'Use a colorful child-friendly drawing of the nose, lungs, and arrows showing breathing in and breathing out.',
      pictureLink: 'https://en.wikipedia.org/wiki/Breathing'
    }
  },
  fr: {
    compass: {
      title: 'Cours 1 : La boussole',
      subtitle: 'La boussole nous aide a connaitre les directions.',
      intro: 'La boussole est un outil utile pour se reperer. Elle aide a trouver le nord, le sud, l est et l ouest pendant les promenades et les explorations.',
      objectives: ['Identifier les quatre directions principales.', 'Comprendre que l aiguille indique le nord.', 'Utiliser une boussole dans des situations simples.'],
      missions: [
        { title: 'Mission 1', text: 'Montre le nord, le sud, l est et l ouest sur une carte simple.' },
        { title: 'Mission 2', text: 'Explique comment un enfant peut utiliser une boussole pendant une sortie.' }
      ],
      tip: 'Tiens la boussole bien a plat et attends que l aiguille s arrete avant de lire la direction.',
      pictureIdea: 'Utilise une image d un enfant tenant une boussole au-dessus d une carte simple avec les quatre directions.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Boussole'
    },
    pollution: {
      title: 'Cours 2 : La pollution',
      subtitle: 'La pollution abime l air, l eau, le sol, les animaux et les humains.',
      intro: 'La pollution apparait lorsque des dechets ou des fumées salissent l environnement. Les enfants peuvent apprendre a la reconnaitre et a proteger la nature.',
      objectives: ['Reconnaitre la pollution de l air, de l eau et du sol.', 'Expliquer comment la pollution affecte les etres vivants.', 'Proposer des gestes simples pour reduire la pollution.'],
      missions: [
        { title: 'Mission 1', text: 'Donne un exemple de pollution de l air, de l eau et du sol.' },
        { title: 'Mission 2', text: 'Choisis trois bonnes habitudes comme recycler, economiser l eau ou jeter les dechets a la poubelle.' }
      ],
      tip: 'Les petits gestes comme utiliser la poubelle et economiser l eau aident beaucoup la planete.',
      pictureIdea: 'Utilise une image partagee en deux montrant un parc propre d un cote et un parc pollue avec fumee et dechets de l autre cote.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Pollution'
    },
    'animal-locomotion': {
      title: 'Cours 3 : La locomotion chez les animaux',
      subtitle: 'Les animaux se deplacent de plusieurs facons pour vivre et se proteger.',
      intro: 'Certains animaux marchent, d autres volent, nagent, rampent ou sautent. Leur corps est adapte a leur maniere de se deplacer.',
      objectives: ['Nommer plusieurs modes de deplacement.', 'Associer les animaux a leur locomotion.', 'Comprendre le role des parties du corps dans le mouvement.'],
      missions: [
        { title: 'Mission 1', text: 'Associe : oiseau -> voler, poisson -> nager, serpent -> ramper, kangourou -> sauter.' },
        { title: 'Mission 2', text: 'Explique pourquoi les nageoires aident le poisson et les ailes aident l oiseau.' }
      ],
      tip: 'Observe les pattes, les ailes, les nageoires ou la forme du corps pour comprendre comment l animal se deplace.',
      pictureIdea: 'Utilise un tableau avec plusieurs animaux montrant differents mouvements comme voler, nager, ramper et sauter.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Locomotion_animale'
    },
    'pets-wild-animals': {
      title: 'Cours 4 : Les animaux domestiques et sauvages',
      subtitle: 'Certains animaux vivent avec les humains et d autres vivent dans la nature.',
      intro: 'Les animaux domestiques vivent avec les familles et ont besoin de soins. Les animaux sauvages vivent dans leur habitat naturel et doivent y rester.',
      objectives: ['Faire la difference entre animaux domestiques et sauvages.', 'Donner des exemples de chaque groupe.', 'Decrire des comportements gentils et prudents avec les animaux.'],
      missions: [
        { title: 'Mission 1', text: 'Trie six animaux en deux groupes : domestiques et sauvages.' },
        { title: 'Mission 2', text: 'Dis une regle pour prendre soin d un animal domestique et une regle de securite pres d un animal sauvage.' }
      ],
      tip: 'Un animal domestique a besoin de soins a la maison, tandis qu un animal sauvage a besoin de liberte dans la nature.',
      pictureIdea: 'Utilise une image de comparaison avec un chien a la maison d un cote et un lion dans la savane de l autre cote.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Animal_domestique'
    },
    'blood-components': {
      title: 'Cours 5 : Les composants du sang',
      subtitle: 'Le sang contient plusieurs parties qui travaillent ensemble dans le corps.',
      intro: 'Le sang circule dans le corps et aide a vivre. Il transporte l oxygene et les nutriments, combat les microbes et aide a arreter le saignement.',
      objectives: ['Nommer les globules rouges, les globules blancs, les plaquettes et le plasma.', 'Comprendre le role de chaque composant.', 'Relier le sang a la protection et a la sante du corps.'],
      missions: [
        { title: 'Mission 1', text: 'Associe chaque composant du sang a son role : transporter l oxygene, combattre les microbes, arreter le saignement, ou transporter des substances.' },
        { title: 'Mission 2', text: 'Explique pourquoi le sang est important pour tout le corps.' }
      ],
      tip: 'Imagine que le sang est une equipe dans laquelle chaque partie a une mission speciale.',
      pictureIdea: 'Utilise un schema colore montrant les globules rouges, les globules blancs, les plaquettes et le plasma avec des etiquettes simples.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Sang'
    },
    breathing: {
      title: 'Cours 7 : La respiration',
      subtitle: 'La respiration aide le corps a prendre de l oxygene et a rester plein d energie.',
      intro: 'La respiration permet au corps de prendre de l oxygene et de rejeter le dioxyde de carbone. Nous respirons toute la journee, et les poumons nous aident a rester actifs, calmes et en bonne sante.',
      objectives: ['Savoir que la respiration apporte de l oxygene au corps.', 'Reconnaitre que les poumons nous aident a respirer.', 'Pratiquer des habitudes simples pour bien respirer.'],
      missions: [
        { title: 'Mission 1', text: 'Pose ta main sur ta poitrine et observe son mouvement quand tu inspires et expires.' },
        { title: 'Mission 2', text: 'Nomme deux bonnes habitudes pour des poumons en bonne sante, comme l air pur et le sport.' }
      ],
      tip: 'Respirer lentement et profondement peut aider le corps a se calmer.',
      coachBubble: 'Salut champion ! Gonflons nos poumons doucement comme deux ballons joyeux.',
      videoCaption: 'Observe la poitrine et les poumons qui bougent quand l air entre et sort.',
      breathSteps: ['Sens une fleur pendant 3 secondes.', 'Garde l air 1 seconde.', 'Souffle doucement comme pour refroidir une soupe.'],
      lungCaption: 'Ces poumons de dessin s agrandissent quand tu inspires et se reposent quand tu expires.',
      pictureIdea: 'Utilise un dessin colore pour enfants montrant le nez, les poumons et les fleches de l inspiration et de l expiration.',
      pictureLink: 'https://fr.wikipedia.org/wiki/Respiration'
    }
  },
  ar: {
    compass: {
      title: 'الدرس 1: البوصلة',
      subtitle: 'تساعدنا البوصلة على معرفة الاتجاهات أينما كنا.',
      intro: 'البوصلة أداة مفيدة لمعرفة الاتجاه. تساعدنا على تحديد الشمال والجنوب والشرق والغرب أثناء التنقل أو الاستكشاف.',
      objectives: ['التعرّف على الاتجاهات الأربعة الأساسية.', 'فهم أن إبرة البوصلة تشير إلى الشمال.', 'استخدام البوصلة في مواقف بسيطة من الحياة اليومية.'],
      missions: [
        { title: 'المهمة 1', text: 'أشر إلى الشمال والجنوب والشرق والغرب على خريطة بسيطة.' },
        { title: 'المهمة 2', text: 'اشرح كيف يمكن لطفل أن يستخدم البوصلة أثناء نزهة.' }
      ],
      tip: 'امسك البوصلة بشكل مستقيم وانتظر حتى تتوقف الإبرة قبل قراءة الاتجاه.',
      pictureIdea: 'استخدم صورة لطفل يمسك بوصلة فوق خريطة بسيطة تظهر عليها الاتجاهات الأربعة بوضوح.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%A8%D9%88%D8%B5%D9%84%D8%A9'
    },
    pollution: {
      title: 'الدرس 2: التلوث',
      subtitle: 'التلوث يضر الهواء والماء والتربة والكائنات الحية.',
      intro: 'يحدث التلوث عندما تجعل النفايات أو الدخان البيئة غير نظيفة. يمكن للأطفال أن يتعلموا كيف يلاحظون التلوث ويساعدون في حماية الطبيعة.',
      objectives: ['التعرّف على تلوث الهواء والماء والتربة.', 'فهم كيف يؤثر التلوث في الكائنات الحية.', 'اقتراح خطوات بسيطة لتقليل التلوث.'],
      missions: [
        { title: 'المهمة 1', text: 'اذكر مثالاً على تلوث الهواء ومثالاً على تلوث الماء ومثالاً على تلوث التربة.' },
        { title: 'المهمة 2', text: 'اختر ثلاث عادات جيدة مثل إعادة التدوير أو توفير الماء أو رمي القمامة في السلة.' }
      ],
      tip: 'التصرفات الصغيرة مثل رمي القمامة في مكانها وتوفير الماء تساعد كثيراً في حماية الأرض.',
      pictureIdea: 'استخدم صورة مقسومة إلى جانبين: حديقة نظيفة من جهة وحديقة ملوثة بالدخان والنفايات من الجهة الأخرى.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AA%D9%84%D9%88%D8%AB'
    },
    'animal-locomotion': {
      title: 'الدرس 1: انماط التنقل عند الحيوان ت',
      subtitle: 'تتحرك الحيوانات بطرق مختلفة لكي تعيش وتأكل وتحمي نفسها.',
      intro: 'بعض الحيوانات تمشي، وبعضها يطير، وبعضها يسبح، وبعضها يزحف أو يقفز. تساعد أعضاء الجسم كل حيوان على الحركة بالطريقة المناسبة لبيئته.',
      objectives: ['معرفة أنواع مختلفة من حركة الحيوانات.', 'ربط نوع الحركة بالحيوان المناسب.', 'فهم كيف تساعد أعضاء الجسم على التنقل.'],
      missions: [
        { title: 'المهمة 1', text: 'صل: الطائر -> يطير، السمكة -> تسبح، الأفعى -> تزحف، الكنغر -> يقفز.' },
        { title: 'المهمة 2', text: 'اشرح لماذا تساعد الزعانف السمكة وتساعد الأجنحة الطائر.' }
      ],
      tip: 'عند دراسة حركة أي حيوان، انظر إلى رجليه أو جناحيه أو زعانفه أو شكل جسمه.',
      pictureIdea: 'استخدم لوحة فيها عدة حيوانات، وكل حيوان يظهر نوع حركة مختلفاً مثل الطيران والسباحة والزحف والقفز.',
      pictureLink: 'https://en.wikipedia.org/wiki/Animal_locomotion'
    },
    'pets-wild-animals': {
      title: 'الدرس 4: الحيوانات الأليفة والبرية',
      subtitle: 'بعض الحيوانات تعيش مع الإنسان وبعضها يعيش في الطبيعة.',
      intro: 'تعيش الحيوانات الأليفة مع العائلات وتحتاج إلى رعاية يومية. أما الحيوانات البرية فتعيش في بيئاتها الطبيعية ويجب أن تبقى هناك.',
      objectives: ['التمييز بين الحيوانات الأليفة والحيوانات البرية.', 'ذكر أمثلة من كل مجموعة.', 'تعلّم سلوك آمن ولطيف مع الحيوانات.'],
      missions: [
        { title: 'المهمة 1', text: 'صنّف ستة حيوانات إلى مجموعتين: أليفة وبرية.' },
        { title: 'المهمة 2', text: 'اذكر قاعدة للعناية بحيوان أليف وقاعدة للسلامة قرب حيوان بري.' }
      ],
      tip: 'الحيوان الأليف يحتاج إلى رعاية في البيت، أما الحيوان البري فيحتاج إلى الحرية والمساحة في الطبيعة.',
      pictureIdea: 'استخدم صورة مقارنة يظهر فيها كلب أليف داخل البيت من جهة وأسد في السافانا من الجهة الأخرى.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AD%D9%8A%D9%88%D8%A7%D9%86_%D8%A3%D9%84%D9%8A%D9%81'
    },
    'blood-components': {
      title: 'الدرس 5: مكونات الدم',
      subtitle: 'يتكوّن الدم من أجزاء مختلفة تعمل معاً داخل الجسم.',
      intro: 'يسير الدم في جميع أنحاء الجسم ويساعدنا على الحياة. فهو ينقل الأكسجين والغذاء، ويحارب الجراثيم، ويساعد على إيقاف النزيف عند الإصابة.',
      objectives: ['معرفة كريات الدم الحمراء وكريات الدم البيضاء والصفائح الدموية والبلازما.', 'فهم وظيفة كل مكوّن من مكونات الدم.', 'ربط أهمية الدم بالصحة وحماية الجسم.'],
      missions: [
        { title: 'المهمة 1', text: 'صل بين كل مكوّن من مكونات الدم ووظيفته: نقل الأكسجين، محاربة الجراثيم، إيقاف النزيف، أو نقل المواد.' },
        { title: 'المهمة 2', text: 'اشرح لماذا يعتبر الدم مهماً لكل أجزاء الجسم.' }
      ],
      tip: 'تخيّل أن الدم فريق عمل، ولكل جزء فيه مهمة خاصة.', 
      pictureIdea: 'استخدم رسماً توضيحياً ملوّناً يبيّن كريات الدم الحمراء وكريات الدم البيضاء والصفائح الدموية والبلازما مع تسميات بسيطة.',
      pictureLink: 'https://ar.wikipedia.org/wiki/%D8%AF%D9%85'
    },
    breathing: {
      title: 'الدرس 2: حركات القفص الصّدري',
      subtitle: 'يساعد التنفس الجسم على أخذ الأكسجين والبقاء مليئاً بالطاقة.',
      intro: 'التنفس هو الطريقة التي يدخل بها الأكسجين إلى الجسم ويخرج بها ثاني أكسيد الكربون. نحن نتنفس طوال اليوم، وتساعدنا الرئتان على البقاء نشيطين وهادئين وأصحاء.',
      objectives: ['معرفة أن التنفس يُدخل الأكسجين إلى الجسم.', 'فهم أن الرئتين تساعداننا على التنفس.', 'ممارسة عادات بسيطة تدعم التنفس الصحي.'],
      missions: [
        { title: 'المهمة 1', text: 'ضع يدك على صدرك ولاحظ كيف يتحرك عندما تأخذ شهيقاً وتخرج زفيراً.' },
        { title: 'المهمة 2', text: 'اذكر عادتين جيدتين لصحة الرئتين مثل الهواء النقي والرياضة.' }
      ],
      tip: 'أخذ أنفاس بطيئة وعميقة يمكن أن يساعد الجسم على الهدوء والراحة.',
      coachBubble: 'مرحباً يا بطل! لنملأ الرئتين ببطء مثل بالونين سعيدين.',
      videoCaption: 'شاهد كيف يتحرك الصدر والرئتان عندما يدخل الهواء ويخرج.',
      breathSteps: ['تخيّل أنك تشم زهرة لمدة 3 ثوانٍ.', 'احبس النفس لثانية واحدة.', 'أخرج الهواء بهدوء كأنك تبرد حساءً ساخناً.']
    }
  }
};

const MEMORY_ICONS = ['🐶', '🐱', '🦁', '🐘'];
const STORAGE_KEY = 'petWildLang';
const SUPPORTED_LANGS = ['en', 'fr', 'ar'];
let currentLang = getInitialLanguage();

const gameArea = document.getElementById('game-area');
const tabs = [...document.querySelectorAll('.tab-btn')];

const state = {
  currentGame: '',
  sort: {
    selected: null,
    pets: [],
    wild: [],
    used: [],
    correct: 0
  },
  quiz: {
    index: 0,
    score: 0
  },
  memory: {
    cards: [],
    first: null,
    lock: false,
    pairs: 0,
    turns: 0
  }
};

function normalizeLanguage(value) {
  return SUPPORTED_LANGS.includes(value) ? value : null;
}

function avatarAskText(key) {
  return (AVATAR_ASK_TEXT[currentLang] || AVATAR_ASK_TEXT.en)[key] || AVATAR_ASK_TEXT.en[key] || key;
}

function getInitialLanguage() {
  const fromUrl = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
  const fromStorage = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
  const selected = fromUrl || fromStorage || 'ar';

  localStorage.setItem(STORAGE_KEY, selected);
  return selected;
}

function syncLanguageLinks() {
  document.querySelectorAll('a[href]').forEach((anchor) => {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#')) return;

    const url = new URL(rawHref, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.endsWith('.html')) return;

    url.searchParams.set('lang', currentLang);
    anchor.setAttribute('href', `${url.toString()}`);
  });
}

function t(key) {
  const map = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return map[key] || TRANSLATIONS.en[key] || key;
}

function tf(key, values = {}) {
  let text = t(key);
  Object.entries(values).forEach(([field, value]) => {
    text = text.replaceAll(`{${field}}`, String(value));
  });
  return text;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  const select = document.getElementById('lang-select');
  if (select) select.value = currentLang;

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = t(titleKey);

  syncLanguageLinks();
}

function setupLanguageSwitcher() {
  const select = document.getElementById('lang-select');
  if (!select) return;

  select.value = currentLang;
  select.addEventListener('change', (event) => {
    const next = event.target.value;
    if (!SUPPORTED_LANGS.includes(next)) return;
    currentLang = next;
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyTranslations();
    renderCoursePage();

    if (gameArea) {
      mountGame(state.currentGame || 'sort');
    }
  });
}

function initWelcomePopup() {
  const popup = document.getElementById('welcome-popup');
  const closeBtn = document.getElementById('welcome-popup-close');
  if (!popup || !closeBtn) return;

  const popupKey = 'petWildWelcomePopupSeen';
  if (!sessionStorage.getItem(popupKey)) {
    popup.classList.add('show');
    popup.setAttribute('aria-hidden', 'false');
    sessionStorage.setItem(popupKey, '1');
  }

  function closePopup() {
    popup.classList.remove('show');
    popup.setAttribute('aria-hidden', 'true');
  }

  closeBtn.addEventListener('click', closePopup);
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closePopup();
  });
}

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function setActiveTab(game) {
  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.game === game);
  });
}

function getAnimals() {
  return GAME_CONTENT[currentLang].animals;
}

function getQuizQuestions() {
  return GAME_CONTENT[currentLang].quizQuestions;
}

function mountGame(game) {
  if (!gameArea) return;

  state.currentGame = game;
  setActiveTab(game);

  if (game === 'sort') renderSortGame();
  if (game === 'quiz') {
    state.quiz.index = 0;
    state.quiz.score = 0;
    renderQuizGame();
  }
  if (game === 'memory') initMemory();
}

function renderSortGame() {
  state.sort = { selected: null, pets: [], wild: [], used: [], correct: 0 };
  const animals = shuffle(getAnimals());

  gameArea.innerHTML = `
    <div class="game-panel">
      <h3>${t('games.sortTitle')}</h3>
      <p>${t('games.sortSteps')}</p>
      <div class="animal-bank">
        ${animals
          .map(
            (animal) => `<button class="animal-chip" data-name="${animal.name}" data-type="${animal.type}">${animal.name}</button>`
          )
          .join('')}
      </div>
      <div class="sort-zones">
        <div class="zone" data-zone="pet">
          <h4>${t('games.sortPets')}</h4>
          <div class="zone-list" id="pet-list">${t('games.noAnimals')}</div>
        </div>
        <div class="zone" data-zone="wild">
          <h4>${t('games.sortWild')}</h4>
          <div class="zone-list" id="wild-list">${t('games.noAnimals')}</div>
        </div>
      </div>
      <p class="status" id="sort-status">${t('games.pickStart')}</p>
    </div>
  `;

  const chips = [...document.querySelectorAll('.animal-chip')];
  const zones = [...document.querySelectorAll('.zone')];

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      if (chip.disabled) return;
      state.sort.selected = {
        name: chip.dataset.name,
        type: chip.dataset.type,
        element: chip
      };
      chips.forEach((button) => {
        button.style.outline = 'none';
      });
      chip.style.outline = '3px solid #ffb62e';
      setSortStatus(tf('games.selected', { name: chip.dataset.name }));
    });
  });

  zones.forEach((zone) => {
    zone.addEventListener('click', () => {
      if (!state.sort.selected) {
        setSortStatus(t('games.pickFirst'));
        return;
      }

      const selected = state.sort.selected;
      const chosenZone = zone.dataset.zone;
      selected.element.disabled = true;
      selected.element.style.outline = 'none';
      state.sort.used.push(selected.name);

      if (chosenZone === 'pet') state.sort.pets.push(selected.name);
      if (chosenZone === 'wild') state.sort.wild.push(selected.name);

      if (chosenZone === selected.type) {
        state.sort.correct += 1;
        setSortStatus(tf('games.correct', { name: selected.name }));
      } else {
        const target = selected.type === 'pet' ? t('games.sortPets') : t('games.sortWild');
        setSortStatus(tf('games.wrong', { name: selected.name, target }));
      }

      state.sort.selected = null;
      renderSortLists();

      if (state.sort.used.length === getAnimals().length) {
        setSortStatus(tf('games.finished', { score: state.sort.correct, total: getAnimals().length }));
      }
    });
  });
}

function renderSortLists() {
  const petList = document.getElementById('pet-list');
  const wildList = document.getElementById('wild-list');
  petList.textContent = state.sort.pets.length ? state.sort.pets.join(' | ') : t('games.noAnimals');
  wildList.textContent = state.sort.wild.length ? state.sort.wild.join(' | ') : t('games.noAnimals');
}

function setSortStatus(text) {
  const status = document.getElementById('sort-status');
  if (status) status.textContent = text;
}

function renderQuizGame() {
  const questions = getQuizQuestions();
  const current = questions[state.quiz.index];

  gameArea.innerHTML = `
    <div class="game-panel">
      <h3>${t('games.quizTitle')}</h3>
      <p>${current.prompt}</p>
      <div class="inline-choice" id="quiz-options"></div>
      <p class="status" id="quiz-status">${tf('games.quizStatus', {
        current: state.quiz.index + 1,
        total: questions.length,
        score: state.quiz.score
      })}</p>
    </div>
  `;

  const optionsWrap = document.getElementById('quiz-options');
  current.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => answerQuiz(option));
    optionsWrap.appendChild(button);
  });
}

function answerQuiz(choice) {
  const questions = getQuizQuestions();
  const current = questions[state.quiz.index];
  const status = document.getElementById('quiz-status');

  if (choice === current.answer) {
    state.quiz.score += 1;
    status.textContent = t('games.quizGood');
  } else {
    status.textContent = tf('games.quizTry', { answer: current.answer });
  }

  setTimeout(() => {
    state.quiz.index += 1;
    if (state.quiz.index < questions.length) {
      renderQuizGame();
    } else {
      showQuizResult();
    }
  }, 800);
}

function showQuizResult() {
  const total = getQuizQuestions().length;

  gameArea.innerHTML = `
    <div class="game-panel">
      <h3>${t('games.quizDoneTitle')}</h3>
      <p>${tf('games.quizDoneText', { score: state.quiz.score, total })}</p>
      <button class="btn primary" id="replay-quiz">${t('games.quizReplay')}</button>
    </div>
  `;

  const replayBtn = document.getElementById('replay-quiz');
  replayBtn.addEventListener('click', () => mountGame('quiz'));
}

function initMemory() {
  const deck = shuffle([...MEMORY_ICONS, ...MEMORY_ICONS]).map((icon, index) => ({
    id: index,
    icon,
    revealed: false,
    matched: false
  }));

  state.memory = {
    cards: deck,
    first: null,
    lock: false,
    pairs: 0,
    turns: 0
  };

  renderMemory();
}

function renderMemory() {
  gameArea.innerHTML = `
    <div class="game-panel">
      <h3>${t('games.memoryTitle')}</h3>
      <p>${t('games.memoryText')}</p>
      <div class="memory-grid" id="memory-grid"></div>
      <p class="status" id="memory-status">${tf('games.memoryStatus', {
        pairs: state.memory.pairs,
        total: MEMORY_ICONS.length,
        turns: state.memory.turns
      })}</p>
    </div>
  `;

  const grid = document.getElementById('memory-grid');
  state.memory.cards.forEach((card) => {
    const button = document.createElement('button');
    button.className = `memory-card ${card.revealed ? 'revealed' : ''} ${card.matched ? 'matched' : ''}`;
    button.textContent = card.revealed || card.matched ? card.icon : '?';
    button.disabled = card.matched;
    button.addEventListener('click', () => flipCard(card.id));
    grid.appendChild(button);
  });
}

function flipCard(id) {
  const card = state.memory.cards.find((item) => item.id === id);
  if (!card || card.revealed || card.matched || state.memory.lock) return;

  card.revealed = true;
  renderMemory();

  if (state.memory.first === null) {
    state.memory.first = id;
    return;
  }

  const firstCard = state.memory.cards.find((item) => item.id === state.memory.first);
  const secondCard = card;
  state.memory.turns += 1;

  if (firstCard.icon === secondCard.icon) {
    firstCard.matched = true;
    secondCard.matched = true;
    state.memory.pairs += 1;
    state.memory.first = null;
    renderMemory();

    if (state.memory.pairs === MEMORY_ICONS.length) {
      const status = document.getElementById('memory-status');
      status.textContent = tf('games.memoryDone', { turns: state.memory.turns });
    }
  } else {
    state.memory.lock = true;
    setTimeout(() => {
      firstCard.revealed = false;
      secondCard.revealed = false;
      state.memory.first = null;
      state.memory.lock = false;
      renderMemory();
    }, 700);
  }
}

function initGames() {
  if (!gameArea || !tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => mountGame(tab.dataset.game));
  });

  mountGame('sort');
}

function renderCoursePage() {
  const container = document.getElementById('course-detail');
  if (!container) return;

  const courseId = new URLSearchParams(window.location.search).get('course');
  const courseByLang = COURSE_DETAILS[currentLang] || COURSE_DETAILS.en;
  const course = courseByLang[courseId] || null;

  if (!course) {
    container.innerHTML = `
      <article class="course-block">
        <h3>${t('course.notFoundTitle')}</h3>
        <p>${t('course.notFoundText')}</p>
        <div class="course-actions">
          <a class="btn primary" href="index.html">${t('course.backToCourses')}</a>
        </div>
      </article>
    `;
    syncLanguageLinks();
    return;
  }

  const breathingFeature = courseId === 'breathing'
    ? `
      <article class="course-block breathing-feature">
        <div class="breathing-feature-grid">
          <section class="breathing-coach-card">
            <div class="breathing-avatar-wrap">
              <img class="breathing-avatar" src="../photo/mo8amer.jpg" alt="Mo8amer avatar" />
              <div class="breathing-bubble" data-avatar-bubble>${course.coachBubble}</div>
            </div>
            
            <div class="course-avatar-qa" data-avatar-ask>
              <div class="course-avatar-qa-copy">
                <p class="eyebrow">${avatarAskText('title')}</p>
                <h3>${avatarAskText('ready')}</h3>
                <p class="breathing-video-caption">${avatarAskText('text')}</p>
              </div>
              <form class="avatar-qa-form" data-avatar-ask-form>
                <input class="avatar-qa-input" type="text" data-avatar-ask-input placeholder="${avatarAskText('placeholder')}" />
                <button class="avatar-qa-button" type="submit">${avatarAskText('button')}</button>
              </form>
              <p class="avatar-qa-reply" data-avatar-ask-reply aria-live="polite"></p>
            </div>
          </section>

          <section class="breathing-video-card">
            <p class="eyebrow">${t('course.breathVideo')}</p>
            <video class="breathing-video" controls autoplay loop muted playsinline>
              <source src="../assests/video/breathing.mp4" type="video/mp4" />
              ${t('course.videoFallback')}
            </video>
            <p class="breathing-video-caption">${course.videoCaption}</p>
          </section>
        </div>

        <section class="breathing-lungs-card">
          <div class="breathing-lungs-head">
            <p class="eyebrow">${t('course.breathIn')} • ${t('course.breathOut')}</p>
            <h3>${t('course.picture')}</h3>
          </div>
          <img src="../photo/breathing.gif" alt="Breathing animation" class="breathing-animation" style="max-width: 100%; width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 16px;" />
          <p class="breathing-video-caption">${course.lungCaption}</p>

          
            <div class="breathing-stars" aria-hidden="true">
              <span class="breath-star" data-breath-star="0">⭐</span>
              <span class="breath-star" data-breath-star="1">⭐</span>
              <span class="breath-star" data-breath-star="2">⭐</span>
            </div>
            <p class="breathing-game-status" id="breathing-game-status">${t('course.breathReady')}</p>
          </div>
        </section>
      </article>
    `
    : '';

  container.innerHTML = `
    <article class="course-hero">
      <p class="eyebrow">${t('courses.eyebrow')}</p>
      <h1>${course.title}</h1>
      <p class="course-subtitle">${course.subtitle}</p>
      <p class="course-intro">${course.intro}</p>
    </article>

    ${breathingFeature}

    <article class="course-block">
      <h3>${t('course.objectives')}</h3>
      <ul class="course-list">
        ${course.objectives.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </article>

    <article class="course-block">
      <h3>${t('course.missions')}</h3>
      <div class="course-missions">
        ${course.missions
          .map(
            (mission) => `
              <div class="mission-card">
                <h4>${mission.title}</h4>
                <p>${mission.text}</p>
              </div>
            `
          )
          .join('')}
      </div>
    </article>

    <article class="course-block">
      <h3>${t('course.tip')}</h3>
      <p>${course.tip}</p>
      <div class="picture-card">
        <h3>${t('course.picture')}</h3>
        <p>${course.pictureIdea}</p>
        <p><a class="course-link" href="${course.pictureLink}" target="_blank" rel="noopener noreferrer">${t('course.imageLink')}</a></p>
      </div>
      <div class="course-actions">
        <a class="btn ghost" href="index.html">${t('course.backToCourses')}</a>
        <a class="btn primary" href="../games/index.html">${t('course.playGame')}</a>
      </div>
    </article>
  `;

  document.title = `${course.title} | ${t('brand')}`;
  syncLanguageLinks();
  setupBreathingInteractions(courseId);
  setupAvatarAskInteractions(container);
}

function setupAvatarAskInteractions(scope = document) {
  const widgets = [...scope.querySelectorAll('[data-avatar-ask]')];
  if (!widgets.length) return;

  const courseId = new URLSearchParams(window.location.search).get('course');
  const avatarAnswersByCourse = {
    breathing: ['breathing 1', 'breathing 2', 'breathing 3']
  };

  widgets.forEach((widget) => {
    if (widget.dataset.avatarAskBound === 'true') return;
    widget.dataset.avatarAskBound = 'true';

    const form = widget.querySelector('[data-avatar-ask-form]');
    const input = widget.querySelector('[data-avatar-ask-input]');
    const reply = widget.querySelector('[data-avatar-ask-reply]');
    const bubble = scope.querySelector('[data-avatar-bubble]');
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
  });
}

function setupBreathingInteractions(courseId) {
  if (courseId !== 'breathing') return;

  const scene = document.querySelector('.lungs-scene');
  const status = document.getElementById('breathing-game-status');
  const inhaleBtn = document.querySelector('[data-breath-action="in"]');
  const exhaleBtn = document.querySelector('[data-breath-action="out"]');
  const stars = [...document.querySelectorAll('.breath-star')];

  if (!scene || !status || !inhaleBtn || !exhaleBtn) return;

  let lastAction = null;
  let completedBreaths = 0;

  function updateStars() {
    stars.forEach((star, index) => {
      star.classList.toggle('is-earned', index < completedBreaths);
    });
  }

  inhaleBtn.addEventListener('click', () => {
    scene.classList.remove('is-exhaling');
    scene.classList.add('is-inhaling');
    inhaleBtn.classList.add('is-active');
    exhaleBtn.classList.remove('is-active');
    status.textContent = t('course.breathInReact');
    lastAction = 'in';
  });

  exhaleBtn.addEventListener('click', () => {
    if (lastAction !== 'in') {
      status.textContent = t('course.breathNeedIn');
      exhaleBtn.classList.add('is-wiggle');
      window.setTimeout(() => exhaleBtn.classList.remove('is-wiggle'), 400);
      return;
    }

    scene.classList.remove('is-inhaling');
    scene.classList.add('is-exhaling');
    exhaleBtn.classList.add('is-active');
    inhaleBtn.classList.remove('is-active');
    completedBreaths = Math.min(completedBreaths + 1, stars.length);
    updateStars();
    status.textContent = completedBreaths === stars.length ? t('course.breathWin') : t('course.breathOutReact');
    lastAction = null;
  });
}

applyTranslations();
setupLanguageSwitcher();
initWelcomePopup();
renderCoursePage();
initGames();
