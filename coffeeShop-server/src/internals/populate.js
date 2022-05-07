import { connectToMongoose } from '../models/products';

export const collectionName = 'products';

const data = [
  {
    name: 'LAVAZZA CREMA E AROMA',
    brand: 'LAVAZZA',
    description:
      'Lavazza Crema e Aroma to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. Idealnie wyważona kompozycja średnio palonych ziaren gatunku Arabica (40%) oraz Robusta (60%). Każde przygotowane espresso czyni wyjątkowym, zyskującym intrygujący, silny aromat. Smak jest równie intensywny, długo utrzymuje się na podniebieniu. Cechą charakterystyczną kawy jest doskonała, gęsta crema. Dzięki Lavazza Crema e Aroma poczujemy się jak w prawdziwej włoskiej kawiarni, pijąc znakomite cappuccino lub latte macchiato.',
    available: 40,
    unitPrice: 53.9,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11597/Lavazza-Crema-e-Aroma-1-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'LAVAZZA QUALITA ORO',
    brand: 'LAVAZZA',
    description:
      'Lavazza Qualita Oro to chyba najbardziej charakterystyczny produkt pochodzący z palarni Lavazza. Złoty kolor opakowania natychmiast rzuca się w oczy i tkwi w pamięci razem z niesamowitym smakiem i aromatem tej kompozycji ziaren wyłącznie z gatunku Arabica (100%) pochodzących z Ameryki Środkowej i Afryki. Kawa ta jest średnio palona i wyjątkowo słodka, a do tego niezbyt mocna.',
    available: 40,
    unitPrice: 65.9,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11865/Lavazza-Qualita-Oro-1-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'PELLINI ESPRESSO BAR VIVACE',
    brand: 'PELLINI',
    description:
      'Pellini Espresso Bar Vivace to produkt zaprezentowany szerszemu gronu odbiorców dopiero w 2013 roku, gdy zapadła decyzja o zakończeniu produkcji kawy Pellini Classico. W związku z tym Pellini Espresso Bar Vivace stała się jej naturalnym i de facto lepiej dopracowanym następcą. Trwające kilka lat prace nad tą kompozycją zaowocowały powstaniem wyjątkowego blendu ziaren gatunku Arabica (70%) z domieszką najwyższej jakości Robusty. Chociaż samo pochodzenie ziaren jest pilnie strzeżoną tajemnicą palarni Pellini, wiemy iż zostały wypalone w średniej temperaturze i powoli przez czas 20-22 minut. Dzięki temu udało uzyskać się zbalansowany i lekko pikantny smak oraz wyraźny orzechowy posmak, bez cienia niepożądanej kwaskowatości i nadmiaru goryczki. Kawa Pellini Espresso Bar Vivace na filiżance espresso buduje wspaniałą, grubą cremę, a pod dodaniu mleka tworzy wyśmienite cappuccino oraz latte macchiato. ',
    available: 30,
    unitPrice: 51.9,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/14911/11262.jpg',
    isSale: true,
    categories: 'coffee beans',
  },
  {
    name: 'DALLMAYR CREMA D ORO SELEKTION DES JAHRES HAKUNA MATATA',
    brand: 'DALLMAYR',
    description:
      'Crema d Oro Selektion des Jahres to wyjątkowa seria kaw, selekcjonowanych co roku przez specjalistów z palarni Dallmayr spośród najlepszych światowych odmian. W tym roku tę unikalną kompozycję tworzą ziarna gatunku Arabica (100%). Crema d Oro Selektion des Jahres Hakuna Matata to kwintesencja tego egzotycznego klimatu. Wyraźniej wyczuwalny jest w niej aromat ciemnej czekolady . Łączy w nuty kwaskowe z oszałamiającą słodyczą. Znakomita jako espresso, ale też w innych odsłonach. Stworzona do delektowania się jej wyjątkowym smakiem.',
    available: 30,
    unitPrice: 53.9,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/15177/dilmah-d-oro-hakuna-matata-1kg.png',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'DALLMAYR PRODOMO',
    brand: 'DALLMAYR',
    description:
      'Dallmayr Prodomo to ziarna Arabica (100%) z najlepszych światowych upraw, w tym z Etiopii.  Dojrzałe, czerwone ziarna kawy zrywane są z dziko rosnących krzewów kawowych lub na małych rolniczych plantacjach. Dallmayr Prodomo zawiera pobudzającą kofeinę, jednakże w procesie palenia poprzez specjalne uszlachetnienie pozbawiona zostaje goryczy i wielu substancji drażniących. Ten ostrożny i naturalny proces wyciąga z kawy trudno przyswajalne substancje, takie jak np. wosk kawowy. Kończące proces palenie wydobywające pełny aromat sprawia, że Dallmayr Prodomo daje największą rozkosz picia nawet tym, którzy zazwyczaj wrażliwie reagują na kawę.',
    available: 30,
    unitPrice: 28.9,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/9600/Dallmayr-Prodomo-0%2C5-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'JACOBS BARISTA CAFE CREMA INTENSE',
    brand: 'JACOBS',
    description:
      'Jacobs Barista Cafe Crema Intense to bardzo aromatyczna propozycja z cenionej serii premium uznanego niemieckiego producenta kawy. Powstała z połączenia szlachetnych ziaren Arabica i drobiazgowo wyselekcjonowanych odmian Robusty. Swój wyjątkowy smak zawdzięcza odpowiednim proporcjom oraz powolnemu i pieczołowitemu paleniu. Wyróżnia się intensywnością, delikatnymi nutami czekolady i cytrusów. Filiżankę wieńczy gęsta orzechowa pianka. Jacobs Barista Cafe Crema Intense doskonale sprawdzi się jako baza do przygotowania kawy z dodatkiem mleka. Jej wyrazisty charakter nie zostanie zdominowany dodatkami, a dzięki nim nabierze wręcz jeszcze pełniejszego aromatu.',
    available: 5,
    unitPrice: 48.9,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/14199/Jacobs-Barista-Cafe-Crema-Intense-1-kg-ziarnista.png',
    isSale: true,
    categories: 'coffee beans',
  },
  {
    name: 'JACOBS KRONUNG',
    brand: 'JACOBS',
    description:
      'Jacobs Kronung to prawdziwa klasyka i wiele lat najlepszych tradycji palarni Jacobs. Co więcej kawa Jacobs Kronung jest najbardziej znaną i zarazem niezwykle cenioną kompozycją najlepszych ziaren gatunku Arabica (100%) spośród wszystkich produktów tej szacownej, niemieckiej marki.',
    available: 90,
    unitPrice: 19.49,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11730/Jacobs-Kronung-0%2C5-kg-ziarnista.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'LAVAZZA CAFFE ESPRESSO 1 KG',
    brand: 'LAVAZZA',
    description:
      'Kawa ziarnista Lavazza Caffe Espresso 1 kg to średnio palona mieszanka najlepszych ziaren pochodzących wyłącznie z gatunku Arabica (100%), których staranny dobór gwarantuje najwykwintniejszy aromat oraz intensywny, jedwabisty smak prawdziwego włoskiego espresso. Niemniej jednak, poza wspaniałym espresso, bez trudu można z niej przyrządzić wyśmienite kawowe napoje mleczne, takie jak kremowe cappucino, czy pyszne latte macchiato. Lavazza Caffe Espresso to niewątpliwie wybór dla koneserów, ceniących sobie najwyższą jakość spożywanego codziennie naparu.',
    available: 70,
    unitPrice: 62.49,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/10662/kawa-ziarnista-Lavazza-Caffe-Espresso-1-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'TCHIBO FEINE MILDE',
    brand: 'TCHIBO',
    description:
      'Po starannym zbiorze owoce kawy są powoli i dokładnie wypalane co zapewnia wyborny smak kompozycji Tchibo Feine Milde. Ta 100% Arabica wprost zachwyca swą subtelnością i jedwabistością oraz wykwintnym aromatem. Dbałość marki Tchibo o detale powoduje, iż w przypadku Tchibo Feine Milde mamy gwarancję najwyższej jakości i powtarzalności smaku doskonałej kawy w każdej filiżance. Wyborna jako klasyczne espresso lub kawa czarna, idealna także z mlekiem w postaci cappuccino oraz latte.',
    available: 90,
    unitPrice: 19.99,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11396/Tchibo-Feine-Milde-0%2C5-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'COSTA COFFEE THE BRIGHT BLEND',
    brand: 'COSTA',
    description:
      'Costa The Bright Blend to kompozycja znakomitych ziaren Arabica (100%) z renomowanych i certyfikowanych plantacji. Miejsca, gdzie dojrzewają owoce kawowca, muszą spełniać rygorystyczne warunki i zachowywać naturalny charakter uprawy. Dzięki temu Costa The Bright Blend składa się wyłącznie z najlepszych ziaren, które poddano pieczołowitemu paleniu w stopniu średnim. Ten sposób obróbki pomógł uwolnić oszałamiające nuty smakowe. W wersji espresso wyczujemy akcenty wyraźnej słodyczy i owoców. W kawach mlecznych uwalniają się zaś smaki miodu i ciasteczek.',
    available: 20,
    unitPrice: 15.99,
    grammage: 200,
    img: 'https://sklepkawa.pl/userdata/public/gfx/13061/Costa-Coffee-The-Bright-Blend-0%2C2-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'STARBUCKS ESPRESSO BLONDE ROAST',
    brand: 'STARBUCKS',
    description:
      'Starbucks Blonde Espresso Roast to kawa, którą doskonale znają bywalcy znanej na całym świecie sieci kawiarni. Teraz jej smakiem możemy delektować się także w domowym zaciszu. Skomponowana z aromatycznych ziaren Arabica (100%), delikatnie palona, lekka, przyjemnie słodka, pozbawiona goryczki. Rozpieszcza podniebienia miłośników łagodniejszej odsłony klasycznego espresso. Świetna także z dodatkiem mleka.',
    available: 20,
    unitPrice: 20.99,
    grammage: 200,
    img: 'https://sklepkawa.pl/userdata/public/gfx/12788/Starbucks-Espresso-Blonde-Roast-200g.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'KIMBO EXTRA CREAM 1 KG',
    brand: 'KIMBO',
    description:
      'Kompozycja Kimbo Extra Cream składa się zarówno ze starannie wyselekcjonowanych, wysokogórskich odmian ziaren gatunku Arabika (50%), jak również z bardzo wysokiej jakości ziaren gatunku Robusta (50%) . Dzięki takiemu połączeniu wprost idealnie nadaje się do przygotowania napojów mlecznych, takich jak cappuccino, czy też wszelkich odmian latte. W smaku kawa Kimbo Extra Cream przejawia przyjemną słodką nutę, posiada delikatny aromat i jak wskazuje jej nazwa - na filiżance tworzy piękną, grubą cremę.',
    available: 40,
    unitPrice: 50.99,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/12967/Kimbo-Extra-Cream-1-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'PELLINI TOP 0,25 KG MIELONA PUSZKA',
    brand: 'PELLINI',
    description:
      'Pellini Top jest flagową mieszanką palarni Pellini składającą się w 100% z ziaren gatunku Arabica - tworzy ją osiem najlepszych górskich odmian - które po lekkim wypaleniu dają łagodny i subtelny smak oraz niezwykle przyjemny aromat. Jest to kompozycja stworzona specjalnie dla prawdziwych koneserów kawy.',
    available: 40,
    unitPrice: 21.99,
    grammage: 250,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11263/Pellini-Top-0%2C25-kg.jpg',
    isSale: false,
    categories: 'coffee powder',
  },
  {
    name: 'LAVAZZA CREMA E GUSTO DELICATO 2 X 0,25 KG MIELONA',
    brand: 'LAVAZZA',
    description:
      'Kawa Lavazza Crema e Gusto Dolce to delikatna, średnio palona kompozycja ziaren gatunku Arabica (50%) pochodzących z wyselekcjonowanych plantacji z dodatkiem wysokogatunkowej Robusty. Jej cechą charakterystyczną jest niespotykana słodycz, jaką można odkryć w każdej filiżance wybornego naparu przyrządzonego z mieszanki Lavazza Crema e Gusto Dolce. Ponadto dzięki swojej subtelności, doskonale łączy się z mlekiem. Idealna do przyrządzenia przy pomocy kafetiery (moka) oraz ekspresach przelewowych.',
    available: 25,
    unitPrice: 26.99,
    grammage: 250,
    img: 'https://sklepkawa.pl/userdata/public/gfx/14484/dolce.jpg',
    isSale: false,
    categories: 'coffee powder',
  },
  {
    name: 'OQUENDO COFIBOX ELITE TORREFACTO 0,5 KG MIELONA',
    brand: 'OQUENDO',
    description:
      'Kawa mielona Oquendo Cofibox Elite Torrefacto to jeden ze sztandarowych produktów palarni Oquendo, która zastosowała do jej przechowywania opatentowane i autorskie opakowanie Cofibox®. Kolejnym unikalnym rozwiązaniem jest paczkowanie zmielonej kawy niezwłocznie po jej wypaleniu, co jest możliwe dzięki użyciu wentyli odprowadzających wytwarzane przez kawę gazy, podobnie jak w przypadku kaw ziarnistych. Wszystko to gwarantuje kawie Oquendo Cofibox Elite Torrefacto niepowtarzalną świeżość zarówno przed, jak i po otwarciu paczki.',
    available: 70,
    unitPrice: 44.99,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/11112/Oquendo-Cofibox-Elite-Torrefacto-0%2C5-kg.jpg',
    isSale: true,
    categories: 'coffee powder',
  },
  {
    name: 'EXCELSIOR GUSTO ITALIANO ESPRESSO 0,25 KG MIELONA',
    brand: 'EXCELSIOR',
    description:
      'Excelsior Gusto Italiano to mieszanka najwyższej jakości ziaren kawy z gatunku Arabica (100%), pochodzących ze Środkowej Ameryki oraz wyżynnych terenów Wschodniej Afryki. Jest to blend 9 odmian ziaren, wybranych z najlepszych plantacji na świecie. Excelsior Gusto Italiano wyróżnia się intensywnym aromatem i mocnym smakiem, z wyraźnie wyczuwalną nutą czekolady. Dzięki zastosowaniu drobnego mielenia, kawa sprawdzi się przede wszystkim do przygotowania jej w ekspresach ciśnieniowych.',
    available: 50,
    unitPrice: 22.99,
    grammage: 250,
    img: 'https://sklepkawa.pl/userdata/public/gfx/15163/cafe-excelsior-macinato-espresso250g.png',
    isSale: false,
    categories: 'coffee powder',
  },
  {
    name: 'JACOBS KRONUNG 0,5 KG MIELONA',
    brand: 'JACOBS',
    description:
      'Jacobs Kronung to prawdziwa klasyka i wiele lat najlepszych tradycji palarni Jacobs. Co więcej kawa Jacobs Kronung jest najbardziej znaną i zarazem niezwykle cenioną kompozycją najlepszych ziaren gatunku Arabica (100%) spośród wszystkich produktów tej szacownej, niemieckiej marki.',
    available: 45,
    unitPrice: 19.99,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/15035/jacobs-kronung-0%2C5.png',
    isSale: false,
    categories: 'coffee powder',
  },
  {
    name: 'ILLY INTENSO 0,25 KG MIELONA',
    brand: 'ILLY',
    description:
      'illy Espresso Dark powstaje wyłącznie z dziewięciu najwyższych rodzajów ziaren gatunku Arabica (100%). Ponad połowa rodzajów pochodzi z Brazylii, co jest niezwykle istotne dla ciała i aromatu samej mieszanki. Pozostałe rodzaje wywodzą się z Afryki i Ameryki Centralnej - pozwala to wyczuć w kawie illy Espresso Dark niesamowitą nutę słodyczy.',
    available: 50,
    unitPrice: 29.99,
    grammage: 250,
    img: 'https://sklepkawa.pl/userdata/public/gfx/10418/Illy-Intenso-0%2C25-kg.jpg',
    isSale: false,
    categories: 'coffee powder',
  },
  {
    name: 'MOVENPICK SCHUMLI 1 KG',
    brand: 'MOVENPICK',
    description:
      'Movenpick Schumli to znakomita mieszanka specjalnie wyselekcjonowanych ziaren Arabica (100%). Jej głęboki i zrównoważony smak to efekt połączenia kilku odmian kawy oraz starannej obróbki. Ziarna poddane zostały procesowi długiego i powolnego palenia, dzięki czemu uwolniły swój niezwykły bukiet. Movenpick Schumli charakteryzuje się subtelnym smakiem, gęstą cremą, aromatem z lekko wyczuwalnymi nutami goryczy i kwasku. Zawiera niewielką ilość kofeiny. Filiżanką ulubionej kawy możemy więc cieszyć się dowolnej porze dnia.',
    available: 30,
    unitPrice: 51.99,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/14288/Movenpick-Schumli-1-kg.png',
    isSale: true,
    categories: 'coffee beans',
  },
  {
    name: 'MOVENPICK ESPRESSO 1 KG',
    brand: 'MOVENPICK',
    description:
      'Kawa Movenpick Espresso to niezwykła mieszanka starannie dobranych ziaren gatunku Arabica (80%), pochodzących wyłącznie z wysokogórskich plantacji w Ameryce Środkowej i Południowej, uzupełnionych niewielką domieszką indonezyjskiej Robusty. Ich wolne i stosunkowo mocne wypalanie daje efekt w postaci gęstego naparu o pełnym, intensywnym smaku oraz wspaniałym aromacie, który zwieńczony jest grubą cremą. Dzięki temu kawa Movenpick Espresso nadaje się idealnie do przyrządzenia wspaniałego i wyrazistego espresso.',
    available: 30,
    unitPrice: 51.99,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/14925/movenpick-barista-espresso-1kg.png',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'NOVELL ESPECIAL CAFETERIAS 1 KG',
    brand: 'NOVELL',
    description:
      'Kompozycja Especcial Cafeterias hiszpańskiej palarni Novell to doskonały materiał na klasyczne włoskie espresso. Odpowiednio zestawione, wysokojakościowe ziarna z gatunku Arabica (70%) oraz Robusta, pozwalają uzyskać niezwykle aromatyczny napar o gęstej cremie oraz wyczuwalnych nutach lukrecji, drzewa cedrowego oraz karmelu i ziaren słonecznika, zwieńczonych zapachowymi akcentami rumianku i zbóż. Świetnie sprawdza się także z dodatkiem mleka, a wysoki poziom kofeiny gwarantuje błyskawiczny przypływ energii oraz poprawę koncentracji.',
    available: 30,
    unitPrice: 79.99,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/13667/Novell-Especial-Cafeteria-1-kg.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
  {
    name: 'BOGANI SPECIAL 1 KG',
    brand: 'BOGANI',
    description:
      'Kawa Bogani Special jest wypalana w portugalskiej palarni, stworzona została z najwyższej jakości ziaren z gatunku Arabica (40%) oraz Robusta (60%). Intensywne, korzenne aromaty (czekolada, kakao) łączą się z delikatniejszymi nutami owocowymi (limonka, czerwona porzeczka), w sposób niezwykle zbalansowany. Bogani Special charakteryzuje się grubą i gęstą cremą, ale to co ją wyróżnia najbardziej to bogactwo smaków i aromatów. W połączeniu z mlekiem idealnie cappuccino, niemniej jednak z powodzeniem można z niej przyrządzić także klasyczne włoskie espresso.',
    available: 70,
    unitPrice: 47.99,
    grammage: 1000,
    img: 'https://sklepkawa.pl/userdata/public/gfx/9318/Bogani-Special-1-kg.jpg',
    isSale: true,
    categories: 'coffee beans',
  },
  {
    name: 'JACOBS BARISTA CAFE CREMA 0.5 KG ZIARNISTA',
    brand: 'JACOBS',
    description:
      'Jacobs Barsita Crema to mieszanka ziaren z najlepszych upraw na świecie. Delikatna i zrównoważona jasno palona. Aromatyczna, o zdecydowanym wytrawnym charakterze z wyczuwalną nutą cytrusową.',
    available: 10,
    unitPrice: 24.99,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/12637/JACOBS-EDITIONS-CREMA-1KG-ZIARNISTA.jpg',
    isSale: true,
    categories: 'coffee beans',
  },
  {
    name: 'PLUTON GOLD 0,5 KG',
    brand: 'PLUTON',
    description:
      'Pluton Gold to wykwintna kompozycja ręcznie zbieranych ziaren 100% Arabica, pochodzących z Brazylii a palonych w Polsce. Delikatny smak, z wyjątkowym aromatem mlecznej czekolady i prażonych orzechów, wydobywa się dzięki tradycyjnej, rzemieślniczej metodzie palenia. Z bębnowego pieca ziarna trafiają prosto do paczki i w ten sposób dłużej zachowują świeżość.',
    available: 25,
    unitPrice: 40.99,
    grammage: 500,
    img: 'https://sklepkawa.pl/userdata/public/gfx/12637/JACOBS-EDITIONS-CREMA-1KG-ZIARNISTA.jpg',
    isSale: false,
    categories: 'coffee beans',
  },
];

(async function () {
  const db = await connectToMongoose();
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
