const STANDALONE_STORAGE_KEY = 'petWildLang';
const STANDALONE_SUPPORTED_LANGS = ['en', 'fr', 'ar'];

const STANDALONE_TRANSLATIONS = {
  animalscourse: {
    en: {
      brand: 'Future Adventurers',
      title: 'Pet and Wild Animals Lesson',
      navHome: 'Welcome',
      navAbout: 'About Us',
      navCourses: 'Courses',
      navGames: 'Games',
      langLabel: 'Language',
      heroBadge: 'Fun lesson for kids',
      heroTitle: 'Pet and Wild Animals Lesson',
      heroText: 'In this lesson we learn the difference between animals that live with people and animals that live in nature. We discover where they live, what they eat, and how to act safely around them.',
      petTitle: 'What Are Pets?',
      petText: 'Pets are animals that can live with people at home or on a farm. People care for them every day with food, water, cleaning, play, and kindness.',
      pet1: 'They live close to people and get used to them.',
      pet2: 'They need food, water, and a clean place.',
      pet3: 'We should treat them gently and never hurt them.',
      pet4: 'Examples: dog, cat, rabbit, fish, and pet bird.',
      wildTitle: 'What Are Wild Animals?',
      wildText: 'Wild animals live in nature such as forests, deserts, savannas, or mountains. They do not need to live with people and each one has an environment that suits it.',
      wild1: 'They live in nature, not inside the house.',
      wild2: 'They search for their own food.',
      wild3: 'Some are strong, fast, or need large spaces.',
      wild4: 'Examples: lion, tiger, elephant, fox, and bear.',
      compareTitle: 'How Do We Tell the Difference?',
      compare1Title: 'Place to live',
      compare1Text: 'If the animal lives with people at home or on a farm, it is often a pet. If it lives in nature, it is wild.',
      compare2Title: 'Food',
      compare2Text: 'A pet often depends on people for food, while a wild animal finds its own food.',
      compare3Title: 'How to act',
      compare3Text: 'We can care for pets gently, but wild animals should be watched from far away.',
      compare4Title: 'Right environment',
      compare4Text: 'Every animal needs the right place. Fish need water, lions need wide nature, and cats can live with people.',
      rightTitle: 'How Do We Treat Animals Correctly?',
      right1Title: 'With pets',
      right1Text: 'We give them food and water, keep them clean, and play with them gently.',
      right2Title: 'With wild animals',
      right2Text: 'We keep a safe distance, do not touch or feed them, and ask an adult for help.',
      right3Title: 'Safety rule',
      right3Text: 'If we do not know the animal well, the best choice is to stay away and watch quietly.',
      examplesTitle: 'Examples That Help Us Understand',
      ex1: 'Dog: a pet that lives with people and needs care and play.',
      ex2: 'Cat: a pet that likes the house, food, and a warm place.',
      ex3: 'Rabbit: a small pet that needs care and suitable food.',
      ex4: 'Lion: a wild animal that lives in nature and does not belong in a home.',
      ex5: 'Tiger: a strong wild animal that depends on itself in nature.',
      footer: 'Learning can be fun when we observe animals carefully and kindly.'
    },
    fr: {
      brand: 'Aventuriers du Futur',
      title: 'Lecon des animaux domestiques et sauvages',
      navHome: 'Accueil',
      navAbout: 'A propos',
      navCourses: 'Cours',
      navGames: 'Jeux',
      langLabel: 'Langue',
      heroBadge: 'Lecon amusante pour enfants',
      heroTitle: 'Lecon des animaux domestiques et sauvages',
      heroText: 'Dans cette lecon, nous apprenons la difference entre les animaux qui vivent avec les humains et ceux qui vivent dans la nature. Nous decouvrons leur habitat, leur nourriture et les regles de securite.',
      petTitle: 'Que sont les animaux domestiques ?',
      petText: 'Les animaux domestiques peuvent vivre avec les humains a la maison ou a la ferme. Les humains s occupent d eux chaque jour avec nourriture, eau, nettoyage, jeu et douceur.',
      pet1: 'Ils vivent pres des humains et s habituent a eux.',
      pet2: 'Ils ont besoin de nourriture, d eau et d un endroit propre.',
      pet3: 'Nous devons les traiter avec douceur et sans leur faire mal.',
      pet4: 'Exemples : chien, chat, lapin, poisson et oiseau domestique.',
      wildTitle: 'Que sont les animaux sauvages ?',
      wildText: 'Les animaux sauvages vivent dans la nature comme la foret, le desert, la savane ou la montagne. Ils n ont pas besoin de vivre avec les humains.',
      wild1: 'Ils vivent dans la nature et non dans la maison.',
      wild2: 'Ils cherchent leur nourriture eux-memes.',
      wild3: 'Certains sont forts, rapides ou ont besoin de grands espaces.',
      wild4: 'Exemples : lion, tigre, elephant, renard et ours.',
      compareTitle: 'Comment faire la difference ?',
      compare1Title: 'Lieu de vie',
      compare1Text: 'Si l animal vit avec les humains a la maison ou a la ferme, c est souvent un animal domestique. S il vit dans la nature, il est sauvage.',
      compare2Title: 'Nourriture',
      compare2Text: 'Un animal domestique depend souvent des humains pour sa nourriture, alors qu un animal sauvage la cherche lui-meme.',
      compare3Title: 'Comportement',
      compare3Text: 'Nous pouvons prendre soin des animaux domestiques avec douceur, mais les animaux sauvages doivent etre observes de loin.',
      compare4Title: 'Bon environnement',
      compare4Text: 'Chaque animal a besoin du bon milieu. Le poisson a besoin d eau, le lion d une grande nature, et le chat peut vivre avec les humains.',
      rightTitle: 'Comment bien traiter les animaux ?',
      right1Title: 'Avec les animaux domestiques',
      right1Text: 'Nous leur donnons de la nourriture et de l eau, nous gardons leur espace propre et nous jouons doucement avec eux.',
      right2Title: 'Avec les animaux sauvages',
      right2Text: 'Nous gardons une distance de securite, nous ne les touchons pas et nous demandons l aide d un adulte.',
      right3Title: 'Regle de securite',
      right3Text: 'Si nous ne connaissons pas bien l animal, le meilleur choix est de rester loin et d observer calmement.',
      examplesTitle: 'Des exemples pour mieux comprendre',
      ex1: 'Chien : un animal domestique qui vit avec les humains et a besoin de soins et de jeu.',
      ex2: 'Chat : un animal domestique qui aime la maison, la nourriture et un endroit chaud.',
      ex3: 'Lapin : un petit animal domestique qui a besoin de soins et de bonne nourriture.',
      ex4: 'Lion : un animal sauvage qui vit dans la nature et ne doit pas vivre a la maison.',
      ex5: 'Tigre : un animal sauvage fort qui depend de lui-meme dans la nature.',
      footer: 'Apprendre devient amusant quand nous observons les animaux avec attention et douceur.'
    },
    ar: {
      brand: 'مغامرو المستقبل',
      title: 'درس الحيوانات الأليفة والبرية',
      navHome: 'الصفحة الرئيسية',
      navAbout: 'من نحن',
      navCourses: 'الدروس',
      navGames: 'الألعاب',
      langLabel: 'اللغة',
      heroBadge: 'درس ممتع للأطفال',
      heroTitle: 'درس الحيوانات الأليفة والحيوانات البرية',
      heroText: 'في هذا الدرس سنتعرّف إلى الفرق بين الحيوانات التي تعيش مع الإنسان والحيوانات التي تعيش في الطبيعة. سنتعلم مكان عيش كل حيوان، وطعامه، وطريقة التعامل الآمنة معه.',
      petTitle: 'ما هي الحيوانات الأليفة؟',
      petText: 'الحيوانات الأليفة هي الحيوانات التي يمكن أن تعيش مع الإنسان في المنزل أو في المزرعة، ويهتم بها الإنسان كل يوم من خلال الطعام والماء والنظافة واللعب والرعاية.',
      pet1: 'تعيش قريباً من الإنسان وتعتاد وجوده.',
      pet2: 'تحتاج إلى الطعام والماء والمكان النظيف.',
      pet3: 'يجب معاملتها بلطف وعدم إيذائها.',
      pet4: 'من أمثلتها: الكلب، القط، الأرنب، السمكة، والطائر الأليف.',
      wildTitle: 'ما هي الحيوانات البرية؟',
      wildText: 'الحيوانات البرية هي الحيوانات التي تعيش في الطبيعة مثل الغابة أو الصحراء أو السافانا أو الجبال، ولا تحتاج إلى أن تعيش مع الإنسان. لكل حيوان بري بيئة مناسبة تساعده على العيش.',
      wild1: 'تعيش في الطبيعة وليس في البيت.',
      wild2: 'تبحث عن غذائها بنفسها.',
      wild3: 'بعضها قوي أو سريع أو يحتاج إلى مساحات واسعة.',
      wild4: 'من أمثلتها: الأسد، النمر، الفيل، الثعلب، والدب.',
      compareTitle: 'كيف نميّز بين الحيوان الأليف والحيوان البري؟',
      compare1Title: 'مكان العيش',
      compare1Text: 'إذا كان الحيوان يعيش مع الإنسان في البيت أو المزرعة فهو غالباً أليف، أما إذا كان يعيش في الغابة أو الطبيعة فهو بري.',
      compare2Title: 'طريقة الغذاء',
      compare2Text: 'الحيوان الأليف يعتمد غالباً على الإنسان في الطعام، بينما الحيوان البري يبحث عن غذائه بنفسه.',
      compare3Title: 'طريقة التعامل',
      compare3Text: 'يمكن رعاية الحيوان الأليف بحذر ولطف، أما الحيوان البري فيجب مراقبته من بعيد وعدم الاقتراب منه.',
      compare4Title: 'البيئة المناسبة',
      compare4Text: 'لكل حيوان بيئة مناسبة؛ فالسمكة تحتاج الماء، والأسد يحتاج الطبيعة الواسعة، والقط يناسبه العيش مع الإنسان.',
      rightTitle: 'كيف نتعامل مع الحيوانات بطريقة صحيحة؟',
      right1Title: 'مع الحيوانات الأليفة',
      right1Text: 'نقدّم لها الطعام المناسب، ونوفّر لها الماء، ونحافظ على نظافتها، ونلعب معها بلطف.',
      right2Title: 'مع الحيوانات البرية',
      right2Text: 'نحافظ على المسافة، ولا نحاول لمسها أو إطعامها، ونطلب مساعدة شخص بالغ عند رؤيتها.',
      right3Title: 'قاعدة السلامة',
      right3Text: 'إذا لم نعرف الحيوان جيداً، فالأفضل ألا نقترب منه وأن نراقبه بهدوء فقط.',
      examplesTitle: 'أمثلة تساعدنا على الفهم',
      ex1: 'الكلب: حيوان أليف يعيش مع الإنسان ويحتاج إلى الرعاية واللعب.',
      ex2: 'القط: حيوان أليف يحب البيت والطعام والمكان الدافئ.',
      ex3: 'الأرنب: حيوان أليف صغير يحتاج إلى العناية والغذاء المناسب.',
      ex4: 'الأسد: حيوان بري يعيش في الطبيعة ولا يصلح للعيش في المنزل.',
      ex5: 'النمر: حيوان بري قوي وسريع ويعتمد على نفسه في الطبيعة.',
      footer: 'التعلّم يصبح ممتعاً عندما نراقب الحيوانات بلطف واهتمام.'
    }
  },
  memory: {
    en: {
      brand: 'Future Adventurers',
      title: 'Memory Game',
      navHome: 'Welcome',
      navAbout: 'About Us',
      navCourses: 'Courses',
      navGames: 'Games',
      langLabel: 'Language',
      pageTitle: 'Memory Match',
      subtitle: 'Turn the cards one by one and find the matching pairs.',
      scoreLabel: 'Score:',
      win: 'Great job! You won and got {score} points.'
    },
    fr: {
      brand: 'Aventuriers du Futur',
      title: 'Jeu de memoire',
      navHome: 'Accueil',
      navAbout: 'A propos',
      navCourses: 'Cours',
      navGames: 'Jeux',
      langLabel: 'Langue',
      pageTitle: 'Jeu de memoire',
      subtitle: 'Retourne les cartes une par une et trouve les paires identiques.',
      scoreLabel: 'Score :',
      win: 'Bravo ! Tu as gagne avec {score} points.'
    },
    ar: {
      brand: 'مغامرو المستقبل',
      title: 'لعبة الذاكرة',
      navHome: 'الصفحة الرئيسية',
      navAbout: 'من نحن',
      navCourses: 'الدروس',
      navGames: 'الألعاب',
      langLabel: 'اللغة',
      pageTitle: 'لعبة الذاكرة',
      subtitle: 'اقلب البطاقات بطاقةً تلو الأخرى، ثم حاول العثور على البطاقتين المتطابقتين لتكوين كل زوج.',
      scoreLabel: 'النتيجة:',
      win: 'مبروك! لقد فزتَ وحصلتَ على {score} نقطة.'
    }
  },
  sentencegame: {
    en: {
      brand: 'Future Adventurers',
      title: 'Sentence Game',
      navHome: 'Welcome',
      navAbout: 'About Us',
      navCourses: 'Courses',
      navGames: 'Games',
      langLabel: 'Language',
      scoreLabel: 'Stars:',
      heroBadge: 'New game for kids',
      heroTitle: 'Complete and Build Sentences',
      heroText: 'This game has two fun stages. First, choose the missing word. Then, sort words to build a correct sentence.',
      howTitle: 'How do we play?',
      how1: 'In stage 1 choose the correct word to complete the sentence.',
      how2: 'When you finish all the sentences, you move to stage 2.',
      how3: 'In stage 2 tap the words in order to build a correct sentence.',
      how4: 'If you make a mistake, you can try again until you succeed.',
      footer: 'Each correct answer gives you a new star.',
      stage1: 'Stage 1: Complete the sentence',
      stage2: 'Stage 2: Sort the words',
      finished: 'Game finished',
      sentenceProgress: 'Sentence {current} of {total}',
      fillPrompt: 'Start by choosing the correct word to complete the sentence.',
      fillGood: 'Great answer! Let us go to the next sentence.',
      fillWrong: 'This is a wrong sentence: {sentence}',
      stage2Intro: 'Well done! Now we sort words to build correct sentences.',
      stage2StartText: 'You finished the first stage. Press the button to start sorting words.',
      stage2StartBtn: 'Start stage 2',
      stage2Ready: 'Get ready for stage 2!',
      sortPrompt: 'Sort the words to make a correct sentence:',
      checkBtn: 'Check sentence',
      resetBtn: 'Reset order',
      resetMsg: 'The words were reset. Try again.',
      chooseAll: 'Choose all the words first, then check the sentence.',
      sortGood: 'Excellent! You sorted the sentence correctly.',
      sortWrong: 'The order is not correct yet. Try again.',
      winText: 'Great work! You finished both stages successfully.',
      winSubtext: 'You completed the missing words and sorted the correct sentences.',
      replay: 'Play again',
      fullScore: 'Final score: {score} stars',
      allDone: 'Congratulations! You finished the whole game.'
    },
    fr: {
      brand: 'Aventuriers du Futur',
      title: 'Jeu de phrases',
      navHome: 'Accueil',
      navAbout: 'A propos',
      navCourses: 'Cours',
      navGames: 'Jeux',
      langLabel: 'Langue',
      scoreLabel: 'Etoiles :',
      heroBadge: 'Nouveau jeu pour enfants',
      heroTitle: 'Completer et construire des phrases',
      heroText: 'Ce jeu a deux etapes amusantes. D abord, choisis le mot manquant. Ensuite, range les mots pour faire une phrase correcte.',
      howTitle: 'Comment jouer ?',
      how1: 'Dans l etape 1, choisis le bon mot pour completer la phrase.',
      how2: 'Quand tu termines toutes les phrases, tu passes a l etape 2.',
      how3: 'Dans l etape 2, appuie sur les mots dans le bon ordre pour construire une phrase correcte.',
      how4: 'Si tu te trompes, tu peux recommencer jusqu a reussir.',
      footer: 'Chaque bonne reponse donne une nouvelle etoile.',
      stage1: 'Etape 1 : Complete la phrase',
      stage2: 'Etape 2 : Range les mots',
      finished: 'Jeu termine',
      sentenceProgress: 'Phrase {current} sur {total}',
      fillPrompt: 'Commence par choisir le bon mot pour completer la phrase.',
      fillGood: 'Bonne reponse ! Passons a la phrase suivante.',
      fillWrong: 'C est une phrase incorrecte : {sentence}',
      stage2Intro: 'Bravo ! Maintenant nous rangeons les mots pour construire des phrases correctes.',
      stage2StartText: 'Tu as termine la premiere etape. Appuie sur le bouton pour commencer la deuxieme etape.',
      stage2StartBtn: 'Commencer l etape 2',
      stage2Ready: 'Prepare-toi pour l etape 2 !',
      sortPrompt: 'Range les mots pour former une phrase correcte :',
      checkBtn: 'Verifier la phrase',
      resetBtn: 'Recommencer',
      resetMsg: 'Les mots ont ete remis au debut. Essaie encore.',
      chooseAll: 'Choisis tous les mots d abord, puis verifie la phrase.',
      sortGood: 'Excellent ! Tu as bien range la phrase.',
      sortWrong: 'L ordre n est pas encore correct. Essaie encore.',
      winText: 'Bravo ! Tu as termine les deux etapes avec succes.',
      winSubtext: 'Tu as complete les mots manquants et range les phrases correctes.',
      replay: 'Rejouer',
      fullScore: 'Score final : {score} etoiles',
      allDone: 'Felicitations ! Tu as termine tout le jeu.'
    },
    ar: {
      brand: 'Future Adventurers',
      title: 'لعبة تكوين الجملة',
      navHome: 'الصفحة الرئيسية',
      navAbout: 'من نحن',
      navCourses: 'الدروس',
      navGames: 'الألعاب',
      langLabel: 'اللغة',
      scoreLabel: 'النجوم:',
      heroBadge: 'لعبة جديدة للأطفال',
      heroTitle: 'لعبة إكمال الجملة وترتيب الكلمات',
      heroText: 'في هذه اللعبة نمر بمرحلتين ممتعتين. أولاً نختار الكلمة الناقصة لإكمال الجملة، وبعد ذلك نرتب الكلمات حتى نصنع جملة صحيحة ومفيدة.',
      howTitle: 'كيف نلعب؟',
      how1: 'في المرحلة الأولى اختر الكلمة الصحيحة لإكمال الجملة.',
      how2: 'عندما تنهي كل الجمل بنجاح تنتقل إلى المرحلة الثانية.',
      how3: 'في المرحلة الثانية اضغط على الكلمات بالترتيب لتكوين جملة سليمة.',
      how4: 'إذا أخطأت يمكنك المحاولة مرة أخرى حتى تنجح.',
      footer: 'كل إجابة صحيحة تمنحك نجمة جديدة.',
      stage1: 'المرحلة 1: أكمل الجملة',
      stage2: 'المرحلة 2: رتب الكلمات',
      finished: 'انتهت اللعبة',
      sentenceProgress: 'الجملة {current} من {total}',
      fillPrompt: 'ابدأ باختيار الكلمة الصحيحة لإكمال الجملة.',
      fillGood: 'إجابة رائعة! لننتقل إلى الجملة التالية.',
      fillWrong: 'هذه جملة خاطئة: {sentence}',
      stage2Intro: 'أحسنت! الآن نرتب الكلمات لصنع جمل صحيحة.',
      stage2StartText: 'لقد أنهيت المرحلة الأولى بنجاح. اضغط على الزر التالي لبدء ترتيب الكلمات.',
      stage2StartBtn: 'ابدأ المرحلة الثانية',
      stage2Ready: 'استعد للمرحلة الثانية!',
      sortPrompt: 'رتب الكلمات لتكوين جملة صحيحة:',
      checkBtn: 'تحقق من الجملة',
      resetBtn: 'أعد الترتيب',
      resetMsg: 'تمت إعادة ترتيب الكلمات. جرّب من جديد.',
      chooseAll: 'اختر جميع الكلمات أولاً ثم تحقق من الجملة.',
      sortGood: 'ممتاز! رتبت الجملة بشكل صحيح.',
      sortWrong: 'الترتيب غير صحيح بعد. أعد المحاولة.',
      winText: 'أحسنت! أنهيت المرحلتين بنجاح.',
      winSubtext: 'لقد أكملت الكلمات الناقصة ورتبت الجمل الصحيحة.',
      replay: 'العب مرة أخرى',
      fullScore: 'مجموعك النهائي: {score} نجوم',
      allDone: 'مبروك! لقد أنهيت اللعبة كلها.'
    }
  },
  pettable: {
    en: {
      brand: 'Future Adventurers',
      title: 'Sort the Animals',
      navHome: 'Welcome',
      navAbout: 'About Us',
      navCourses: 'Courses',
      navGames: 'Games',
      langLabel: 'Language',
      pageTitle: 'Sort the Animals',
      subtitle: 'Drag each animal to the correct table. Put pets in the pets table and wild animals in the wild animals table.',
      moodStart: 'Happiness meter: let us start playing!',
      boxTitle: 'Animal Box',
      petTitle: 'Pets',
      wildTitle: 'Wild Animals',
      checkBtn: 'Check answer',
      popupOk: 'OK',
      returned: 'You moved the animal back to the box.',
      correctMove: 'Great! You placed the animal in the right spot.',
      wrongMove: 'Careful! This animal does not belong in this table.',
      successTitle: 'Excellent!',
      successMessage: 'Wonderful! You sorted all the animals correctly.',
      retryTitle: 'Try again',
      retryMessage: 'Some animals were in the wrong place, so they were sent back to the animal box. Try again.'
    },
    fr: {
      brand: 'Aventuriers du Futur',
      title: 'Trie les animaux',
      navHome: 'Accueil',
      navAbout: 'A propos',
      navCourses: 'Cours',
      navGames: 'Jeux',
      langLabel: 'Langue',
      pageTitle: 'Trie les animaux',
      subtitle: 'Fais glisser chaque animal vers le bon tableau. Mets les animaux domestiques dans leur tableau et les animaux sauvages dans le leur.',
      moodStart: 'Barre de bonheur : commencons a jouer !',
      boxTitle: 'Boite des animaux',
      petTitle: 'Animaux domestiques',
      wildTitle: 'Animaux sauvages',
      checkBtn: 'Verifier la reponse',
      popupOk: 'D accord',
      returned: 'Tu as remis l animal dans la boite.',
      correctMove: 'Bravo ! Tu as place l animal au bon endroit.',
      wrongMove: 'Attention ! Cet animal ne va pas dans ce tableau.',
      successTitle: 'Excellent !',
      successMessage: 'Bravo ! Tu as bien trie tous les animaux.',
      retryTitle: 'Essaie encore',
      retryMessage: 'Quelques animaux etaient au mauvais endroit. Ils ont ete renvoyes dans la boite. Essaie encore.'
    },
    ar: {
      brand: 'مغامرو المستقبل',
      title: 'صنّف الحيوانات',
      navHome: 'الصفحة الرئيسية',
      navAbout: 'من نحن',
      navCourses: 'الدروس',
      navGames: 'الألعاب',
      langLabel: 'اللغة',
      pageTitle: 'صنّف الحيوانات',
      subtitle: 'اسحب كل حيوان إلى الجدول المناسب له. ضع الحيوانات الأليفة في جدول الحيوانات الأليفة، وضع الحيوانات البرية في جدول الحيوانات البرية.',
      moodStart: 'مؤشر السعادة: لنبدأ اللعب!',
      boxTitle: 'صندوق الحيوانات',
      petTitle: 'حيوانات أليفة',
      wildTitle: 'حيوانات برية',
      checkBtn: 'تحقّق من الإجابة',
      popupOk: 'حسنًا',
      returned: 'أعدتَ الحيوان إلى الصندوق.',
      correctMove: 'رائع! وضعتَ الحيوان في المكان الصحيح.',
      wrongMove: 'انتبه! هذا الحيوان ليس في الجدول المناسب.',
      successTitle: 'ممتاز!',
      successMessage: 'أحسنت! لقد صنّفت جميع الحيوانات بطريقة صحيحة.',
      retryTitle: 'حاول مرة أخرى',
      retryMessage: 'بعض الحيوانات كانت في المكان غير المناسب، لذلك أُعيدت إلى صندوق الحيوانات. حاول مرة أخرى.'
    }
  },
  cartes: {
    en: {
      brand: 'Future Adventurers',
      title: 'Learning Cards',
      navHome: 'Welcome',
      navAbout: 'About Us',
      navCourses: 'Courses',
      navGames: 'Games',
      langLabel: 'Language',
      dogTitle: 'Dog',
      dog1: 'Pet animal',
      dog2: 'Lives with people',
      dog3: 'A loyal friend',
      lionTitle: 'Lion',
      lion1: 'Predator animal',
      lion2: 'Lives in the wild',
      lion3: 'King of the forest',
      eyeTitle: 'Eye',
      eye1: 'Sense of sight',
      eye2: 'Helps us see things',
      eye3: 'Helps us notice colors'
    },
    fr: {
      brand: 'Aventuriers du Futur',
      title: 'Cartes educatives',
      navHome: 'Accueil',
      navAbout: 'A propos',
      navCourses: 'Cours',
      navGames: 'Jeux',
      langLabel: 'Langue',
      dogTitle: 'Chien',
      dog1: 'Animal domestique',
      dog2: 'Vit avec les humains',
      dog3: 'Un ami fidele',
      lionTitle: 'Lion',
      lion1: 'Animal predateur',
      lion2: 'Vit dans la nature',
      lion3: 'Roi de la foret',
      eyeTitle: 'Oeil',
      eye1: 'Sens de la vue',
      eye2: 'Nous aide a voir',
      eye3: 'Nous aide a reconnaitre les couleurs'
    },
    ar: {
      brand: 'مغامرو المستقبل',
      title: 'بطاقات تعليمية',
      navHome: 'الصفحة الرئيسية',
      navAbout: 'من نحن',
      navCourses: 'الدروس',
      navGames: 'الألعاب',
      langLabel: 'اللغة',
      dogTitle: 'الكلب',
      dog1: 'حيوان أليف',
      dog2: 'يعيش مع الإنسان',
      dog3: 'صديق وفي',
      lionTitle: 'الأسد',
      lion1: 'حيوان مفترس',
      lion2: 'يعيش في الغابة',
      lion3: 'ملك الغابة',
      eyeTitle: 'العين',
      eye1: 'حاسة البصر',
      eye2: 'نرى بها الأشياء',
      eye3: 'نميز الألوان'
    }
  }
};

function normalizeStandaloneLanguage(value) {
  return STANDALONE_SUPPORTED_LANGS.includes(value) ? value : null;
}

function getStandaloneInitialLanguage() {
  const fromUrl = normalizeStandaloneLanguage(new URLSearchParams(window.location.search).get('lang'));
  const fromStorage = normalizeStandaloneLanguage(localStorage.getItem(STANDALONE_STORAGE_KEY));
  const selected = fromUrl || fromStorage || 'ar';
  localStorage.setItem(STANDALONE_STORAGE_KEY, selected);
  return selected;
}

let standaloneLang = getStandaloneInitialLanguage();

function standaloneText(page, key) {
  const translations = STANDALONE_TRANSLATIONS[page] || {};
  const langMap = translations[standaloneLang] || translations.en || {};
  const fallback = translations.en || {};
  const aliases = {
    'nav.welcome': 'navHome',
    'nav.about': 'navAbout',
    'nav.courses': 'navCourses',
    'nav.games': 'navGames',
    'lang.label': 'langLabel'
  };
  const resolvedKey = aliases[key] || key;
  return langMap[resolvedKey] || fallback[resolvedKey] || key;
}

function standaloneFormat(page, key, values = {}) {
  let text = standaloneText(page, key);
  Object.entries(values).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

function applyStandaloneTranslations() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = standaloneText(page, node.dataset.i18n);
  });

  const select = document.getElementById('lang-select');
  if (select) {
    select.value = standaloneLang;
    const optionLabels = {
      en: { en: 'English', fr: 'French', ar: 'Arabic' },
      fr: { en: 'Anglais', fr: 'Francais', ar: 'Arabe' },
      ar: { en: 'الإنجليزية', fr: 'الفرنسية', ar: 'العربية' }
    };
    [...select.options].forEach((option) => {
      option.textContent = optionLabels[standaloneLang][option.value] || option.textContent;
    });
  }

  document.documentElement.lang = standaloneLang;
  document.documentElement.dir = standaloneLang === 'ar' ? 'rtl' : 'ltr';
  document.title = standaloneText(page, 'title');

  document.querySelectorAll('a[href]').forEach((anchor) => {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#')) return;
    const url = new URL(rawHref, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.endsWith('.html')) return;
    url.searchParams.set('lang', standaloneLang);
    anchor.href = `${url.toString()}`;
  });
}

function setupStandaloneLanguageSwitcher(onChange) {
  const select = document.getElementById('lang-select');
  if (!select) return;
  select.value = standaloneLang;
  select.addEventListener('change', (event) => {
    const next = event.target.value;
    if (!STANDALONE_SUPPORTED_LANGS.includes(next)) return;
    standaloneLang = next;
    localStorage.setItem(STANDALONE_STORAGE_KEY, standaloneLang);
    applyStandaloneTranslations();
    if (onChange) onChange();
  });
}

window.standaloneI18n = {
  get lang() {
    return standaloneLang;
  },
  t(key) {
    return standaloneText(document.body.dataset.page, key);
  },
  tf(key, values) {
    return standaloneFormat(document.body.dataset.page, key, values);
  },
  apply: applyStandaloneTranslations,
  setup: setupStandaloneLanguageSwitcher
};
