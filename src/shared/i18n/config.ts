import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Base i18n configuration for the app (feature bundles register themselves separately)
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    resources: {
      en: {
        translation: {
          // Loading screen
          loadingText: 'Loading...',
          renderingText: 'Rendering the universe...',
          readyText: 'Ready!',
          loadingWelcomeText: 'Welcome to the ',

          // NavBar
          home: 'Home',
          characters: 'Characters',
          chapters: 'Chapters',
          readNow: 'Read Now',
          readerTitle: 'Rithual Reader in production!',
          readerText:
            "We are developing the Rithual Reader platform so you can have the best experience reading this manga. While it's not ready, you can read it on Tapas.io.",
          readerLinkText: 'https://tapas.io/series/-Rithual-manga-en/info',

          // Header
          welcomeText: 'Welcome to <br/>(૨¡Ƭષαℓ',
          headerDescription:
            "(૨¡Ƭષαℓ is a Brazilian manga about a world that witnesses bloody conflicts between humans and demons who vie for influence over society. In this story, you will follow the life of <strong class='text-blue-300 text-glow-blue'>Singer</strong>, a shy and very smiling boy who is discovering the world for the first time alongside his friends <strong class='text-pink-300 text-glow-pink'>Aika</strong>, <strong class='text-orange-300 text-glow-orange'>San</strong> and <strong class='text-green-300 text-glow-green'>Madger</strong>.",
          headerButton: 'Chapters',
          headerKnowMoreButton: 'Know more about this universe!',
          parasiteTitle: 'I see you',
          parasiteText:
            'and all of them raised their heads to the sky with an explicit look of terror, fearing what they would find in their futures. Suddenly, the darkness of death consumed them in its cruel embrace.',
          parasiteButton: 'SUFFER',

          // Characters
          characterSectionTitle: 'Characters',
          ageOfCharacter: 'Age',
          noRegister: 'Still no register...',
          singerDescription:
            'a young adventurer who was born in the Uxclavasa village and dreams of knowing the world and the wonders of the kingdoms of Belgadina and Ázuma!',
          madgerDescription:
            'Martial artist born in the Yasáshi village, after a short and bloody battle, Madger lost precious people when he was still a child, now he seeks to honor those who fought for him in his old village!',
          málanusDescription:
            "Singer's older brother, Málanus seeks to become one of the leaders of the resistance, in order to find the mysterious demon with a visor that caused him so much pain.",
          kaononaiDescription:
            `Known as "The faceless one," Kaononai is a bounty hunter who, in exchange for money, seeks people who have done terrible things. His motivations are still a mystery, and his real existence is questioned by the population of Belgadina and Ázuma, who think it is just an urban legend to scare children.`,

          // footer
          footerText: 'a manga created by',

          // app
          nothingText: 'Nothing here yet, buddy...',
        },
      },
      pt: {
        translation: {
          // Loading screen
          loadingText: 'Carregando...',
          renderingText: 'Renderizando o universo...',
          readyText: 'Pronto!',
          loadingWelcomeText: 'Bem vindos ao ',

          // NavBar
          home: 'Home',
          characters: 'Personagens',
          chapters: 'Capítulos',
          readNow: 'Ler agora',
          readerTitle: 'Rithual Reader em produção!',
          readerText:
            'Estamos desenvolvendo o leitor do Rithual para que você possa ter a melhor experiência lendo esse mangá. Enquanto ele não está pronto, você pode ler no Tapas.io.',
          readerLinkText: 'https://tapas.io/series/Rithual_manga/info',

          // Header
          welcomeText: 'Bem vindos ao <br/>(૨¡Ƭષαℓ',
          headerDescription:
            "(૨¡Ƭષαℓ é um mangá brasileiro sobre um mundo que presencia conflitos sangrentos entre humanos e demônios que disputam influência sobre a sociedade. Nesta história, você irá acompanhar a vida de <strong class='text-blue-300 text-glow-blue'>Singer</strong>, um garoto tímido e bastante sorridente que está descobrindo o mundo pela primeira vez ao lado de seus amigos <strong class='text-pink-300 text-glow-pink'>Aika</strong>, <strong class='text-orange-300 text-glow-orange'>San</strong> e <strong class='text-green-300 text-glow-green'>Madger</strong>.",
          headerButton: 'Capítulos',
          headerKnowMoreButton: 'Conheça mais esse universo!',
          parasiteTitle: 'Eu vejo você',
          parasiteText:
            'e todos eles ergueram suas cabeças ao céu com um olhar explícito de terror, temendo o que encontrariam em seus futuros. Repentinamente, a escuridão da morte os consumiu em seu abraço cruel.',
          parasiteButton: 'SOFRA',

          // Characters
          characterSectionTitle: 'Personagens',
          ageOfCharacter: 'Idade',
          noRegister: 'Ainda sem registro...',
          singerDescription:
            'um jovem aventureiro que nasceu no vilarejo Uxclavasa e sonha em conhecer o mundo e as maravilhas do reino de Belgadina e Ázuma!',
          madgerDescription:
            'Artista marcial nascido na vila Yasáshi, após uma batalha curta e sangrenta, Madger perdeu pessoas preciosas quando ainda era criança, agora, ele busca honrar aqueles que lutaram por ele em sua antiga vila!',
          málanusDescription:
            'Irmão mais velho de Singer, Málanus busca se tornar um dos líderes da resistência, para assim, encontrar o misterioso demônio de visor que lhe causou tanta dor.',
          kaononaiDescription:
            `Conhecido como "O sem rosto", Kaononai é um caçador de recompensas que busca, em troca de dinheiro, pessoas que fizeram coisas terríveis. Suas motivações ainda são um mistério, e sua real existência é questionada pela população de Belgadina e Ázuma, que acham que se trata apenas de uma lenda urbana para dar medo em crianças.`,

          // footer
          footerText: 'um mangá criado por',

          // app
          nothingText: 'Nada aqui ainda, amigo...',
        },
      },
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
