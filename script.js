const menuButton = document.querySelector('.menu-hamburger')
const menu = document.querySelector('.navigation')
const closeMenu = document.querySelector('.close-icon')
const closeServices = document.querySelector('.close-services')
const menuLinks = document.querySelectorAll('.link')
const options = document.querySelectorAll('.single-tile')
const popup = document.querySelector('.popup')
const popHeader = document.querySelector('.popup-heading')
const popupPrice = document.querySelector('.popup-price')
const serviceDescription = document.querySelector('.service-description')
const background = document.querySelector('.blur-background')
const joinTrialClasses = document.querySelectorAll('.join-trial-classes')
const popupImage = document.querySelector('.popup-image')
const expandableList = document.querySelector('.expandable-list')
// const subLiks = document.querySelectorAll('.sub-menu-link')
// const subMenu = document.querySelector('.sub-menu')
//toggle menu visibility
menuButton.addEventListener('click', () => {
  menu.classList.add('menu-visible')

})
// toggle zamiast tego???
closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-visible')
  expandableList.style.display = "none"
  expandableList.style.transform = "rotate(180deg)"


})
menuLinks.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('menu-visible')
  expandableList.style.display = "none"
  expandableList.style.transform = "rotate(180deg)"
}))

// subMenu.addEventListener('click', (e) => {
//   e.preventDefault()
// })
// expandableList.addEventListener('click', (e) => {
//   console.log(e.target)
//   subLiks.forEach(link => link.style.display = "block")
//   expandableList.style.transform = "rotate(180deg)"

// })

// toggle services display
options.forEach(link => link.addEventListener('click', (e) => {
  if (popup) {
    popup.classList.remove('visible')
  }
  const id = e.target.id - 1
  // move to another func
  console.log(e.target.id)
  popupImage.style.backgroundImage = `url('./img/photos/${services[id].photo}')`
  popHeader.textContent = services[id].name
  popupPrice.textContent = services[id].price
  serviceDescription.innerHTML = services[id].description
  background.classList.add('visible')
  popup.classList.add('visible')

}))

background.addEventListener('click', () => {
  popup.classList.remove('visible')
  background.classList.remove('visible')
})

closeServices.addEventListener('click', () => {
  popup.classList.remove('visible')
  background.classList.remove('visible')
})


// on click zapisz się na zajęcia próbne
joinTrialClasses.forEach(button => button.addEventListener('click', () => {
  console.log('join now!')
}))


// lazy load images
document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;
  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})











const services = [
  {
    name: 'Diagnoza Si',
    photo: 'diagnoza-si.jpg',

    price: 'Cena: 300 zł (3-4 spotkania)',
    id: 1,
    description: `Diagnoza procesów integracji sensorycznej to wywiad z rodzicami, szczegółowa obserwacja zachowania dziecka, zastosowanie odpowiednich testów oraz analiza ich wyników.<br>
    Głównym celem diagnozy jest określenie czy u podłoża trudności dziecka leżą zaburzenia procesów integracji sensorycznej. <br>
    Na podstawie wyników uzyskanych z diagnozy terapeuta przygotowuje szczegółowy program terapeutyczny dla dziecka.<br>
    Składa się 3-4 spotkań podczas których terapeuta obserwuje spontaniczne zachowanie dziecka podczas swobodnej zabawy, jego reakcje na stymulację sensoryczną (użycie specjalistycznego sprzętu) oraz wykonuje określone testy.`,
  }, {
    name: 'Diagnoza logopedyczna',
    photo: 'diagnoza-logopedy.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 2,
    description: `Głównym celem diagnozy logopedycznej jest rozpoznanie z jakimi zaburzeniami mowy mamy do czynienia u pacjenta.<br>
  Wstępne badanie polega na ocenie poziomu rozwoju mowy, określeniu sfer i rozmiaru jego opóźnienia oraz rozpoznaniu rodzaju zaburzeń.<br>    
    Jednym z ważniejszych elementów postępowania diagnostycznego jest obserwacja, w trakcie której logopeda ustala poziom kompetencji językowych dziecka i ich zgodność z normami rozwojowymi.<br>    
    Na podstawie zebranych danych logopeda ustala zakres potrzeb, rodzaj niezbędnej pomocy oraz opracowuje program terapii.
    `,
  }, {
    name: 'Diagnoza psychologiczna',
    photo: 'diagnoza-psycholog.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 3,
    description: `Polega na rozpoznaniu przyczyn trudności w uczeniu się lub w zachowaniu dziecka. <br>
    Ma na celu wyjaśnienie czynników i mechanizmów psychologicznych wpływających na powstawanie zgłaszanych problemów oraz genezy tychże problemów.<br>
    Jest idealnym narzędziem do poznania dziecka, jego możliwości rozwoju, zachowań w różnych sytuacjach czy ewentualnych problemów w relacjach między rówieśnikami lub rodzinie.
    Określa udział czynników organicznych, środowiskowych i psychologicznych w powstawaniu i podtrzymywaniu się nieprawidłowych form zachowań i funkcjonowania.<br>
    Szczegółowy wywiad pozwala na wstępne zdiagnozowanie problemu i wskazanie odpowiednich form pomocy terapeutycznej.`,
  }, {
    name: 'Terapia Si',
    photo: 'terapia-si.jpg',

    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 4,
    description: `Terapia SI to grupa aktywności, ćwiczeń i zabaw mających na celu stymulować ośrodek układu nerwowego oraz mózg dziecka.
    Zaletą odbywających się zajęć jest wykorzystanie różnego rodzaju huśtawek, lin, deskorolki, drabinek do wspinania, trampoliny, basenu z piłeczkami i innych. 
    Głównym celem ćwiczeń jest balansowanie na granicy możliwości dziecka, które poprawia organizację ośrodkowego układu nerwowego i wpływa na zmianę zachowania w sferze motorycznej i emocjonalnej.
    Zaletą tej terapii jest jej indywidualny charakter dostosowany do dla każdego dziecka i jego konkretnych potrzeb.`,
  }, {
    name: 'Terapia logopedyczna',
    photo: 'terapia-logopedyczna.jpg',

    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 5,
    description: `Ma na celu usprawnienie funkcji komunikacyjnej poprzez stopniowe korygowanie zakłóceń występujących podczas porozumiewania się. Pomocna jest również przy wskazaniu autyzmu, porażenia mózgowego czy jąkania.
    Każdorazowo terapia poprzedzona jest szczegółowym wywiadem, obserwacją oraz przeprowadzeniem testów. Takie działania umożliwiają podjęcie fachowej diagnozy i opracowaniu skutecznego programu leczenia wad.
    
    Korzyści terapii:
    <br>• usprawnienie motoryki narządów mowy,
    <br>• skorygowanie wad wymowy,
    <br>• poprawienie jakości funkcji językowej, oddechowej, fonacyjnej,
    <br>• wypracowanie alternatywnych zachowań komunikacyjnych.`,
  }, {
    name: 'Terapia psychologiczna',
    photo: 'terapia-psycholog.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 6,
    description: `Terapia psychologiczna ma na celu pomóc w rozwiązaniu problemu związanego ze zdrowym rozwojem dziecka oraz zdrowej relacji rodzice-dziecko.

    Na pierwszym spotkaniu psycholog  przeprowadza krótki wywiad z rodzicami w celu wykrycia i zdiagnozowania problemu. 
    
    Dopiero na kolejnym spotkaniu przeprowadza indywidualne rozmowy z dzieckiem.
    
    Celem jest stworzenie bezpiecznej relacji między dzieckiem a psychologiem. 
    
    Relacja taka pozwoli na zebranie informacji na temat sytuacji psychologicznej dziecka oraz relacji jakie panują w jego otoczeniu m.in. w domu, szkole.
    
    Dzięki takim zabiegom psycholog jest w stanie zaproponować najlepsze rozwiązanie dla dalszego przebiegu spotkań.
    `,
  }, {
    name: 'Terapia ręki',
    photo: 'terapia-reki.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 7,
    description: `
    Terapia opierająca się w głównej mierze na usprawnianiu małej motoryki, czyli precyzyjnych ruchów rąk, dłoni i palców.
<br>
   <b> Terapia przeznaczona jest dla dzieci: </b>
   <br> + z zaburzeniem napięcia mięśniowego,
   <br> + z zaburzeniem precyzji ruchu (trudności w drobnych ruchach),
   <br> + z brakiem koordynacji ruchów kończyny górnej,
   <br> + z zaburzeniami koordynacji wzrokowo-ruchowej,
   <br> + z opóźnieniem w zakresie czynności samoobsługowych,
   <br> + z zaburzeniami zmysłu dotyku (dziecko nie lubi zabaw np. z plasteliną, nie lubi lekkiego dotyku i nowych ubrań, wkłada przedmioty do ust, wybiera twarde przedmioty).
    <br>
   <b> Co wnoszą / korzyści: </b>
   <br> + rozwijanie ogólnej koordynacji ruchowej;
   <br> + rozwijanie koordynacji obustronnej; 
   <br> + udoskonalenie sprawności manipulacyjnej ręki; 
   <br> + doskonalenie umiejętności chwytu;
   <br> + doskonalenie techniki pisania; 
   <br> + poprawa koncentracji; 
   <br> + wzmacnianie poczucia własnej wartości poprzez 
   <br> + budzenie wiary we własne możliwości.

        `,
  },
  {
    name: 'Pedagog',
    photo: 'pedagog.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 8,
    description: `
    Podczas zajęć pedagogicznych, wspieramy dziecko we wszystkich sferach jego rozwoju stymulując rozwój poznawczy, emocjonalny i społeczny. Każda aktywność dobierana jest indywidualnie w zależności od potrzeb dziecka tak, by jednocześnie edukowała oraz dawała radość i zabawę. Bawiąc się z dziećmi szczególną uwagę zwracamy na usprawnianie funkcji słuchowych, wzrokowych, ruchowych i ich właściwej koordynacji. Stymulujemy i wspieramy rozwój potrzeb i oczekiwań dzieci związanych z poznawaniem świata, potrzebą aktywności.

    Zadaniem pedagoga jest:
    + pogłębianie oraz uzupełnianie działań dydaktyczno-wychowawczych prowadzonych przez wychowawców w placówce,
    + rozpoznawanie indywidualnych potrzeb dzieci,
    + prowadzenie działań diagnostycznych, określanie form i sposobów udzielania dzieciom pomocy pedagogicznej,
    + połączenie działań służących wspomaganiu rozwoju dzieci z deficytami rozwojowymi.
    
    Cele terapii pedagogicznej:
    + stymulowanie rozwoju dziecka - jest to cel nadrzędny,
    + wyrównywanie braków w umiejętnościach,
    + eliminowanie niepowodzeń emocjonalno-społecznych i ich konsekwencji.

        `,
  },
  {
    name: 'Gotowość szkolna',
    photo: 'gotowosc-szkolna.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 9,
    description: `
    Gotowość szkolna to nic innego jak dojrzałość dziecka do podjęcia nauki w szkole.
    Na gotowość szkolną dzieci składają się osiągnięcia rozwojowe rozpatrywane w strefie: fizycznej, umysłowej i emocjonalno-społecznej.
    Gotowość szkolna pomaga stwierdzić czy dziecko jest gotowe do pójścia do szkoły czy też nie. 
    <br>
    Badanie możliwości do podjęcia nauki w szkole polega na obserwacja zachowania dziecka przez nauczyciela zerówki lub przedszkola. 
    Zdolność dziecka do podjęcia nauki szkolnej jest oceniana przez wykonanie specjalnych testów. <br>
    Na ich podstawie rodzice dowiadują się czy ich dziecko jest samodzielne oraz czy nie ma innych problemów mogących uniemożliwić pójście do szkoły.

        `,
  },
  {
    name: 'Trening Umiejętności Społecznych',
    photo: 'trening-um-spolecznych.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 10,
    description: `
    Zajęcie te mają na celu nauczenie dzieci prawidłowych zachowań społecznych.<br>
    Polegają one na niwelowaniu różnych trudności od lęku w kontakcie z innymi aż po nieśmiałość.
    Dzieci uczone są prawidłowej komunikacji, zasad przyjmowania i radzenie sobie z krytyką oraz kontroli nad swoimi emocjami.<br>
    Ponadto zajęcia umożliwiają zdobycie wiedzy potrzebnej do okazywania szacunku innym oraz wiary w swoje i innych możliwości.<br>
    Umiejętności społeczne będą ćwiczone poprzez zabawę oraz możliwość doświadczania sytuacji społecznych w bezpiecznych warunkach warsztatowych.
    
        `,
  },
  {
    name: 'Gimnastyka korekcyjna',
    photo: 'gimnastyka-korekcyjna.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 11,
    description: `
    Zestaw ćwiczeń mający na celu skorygowanie wad postawy.

    Jest to profilaktyka i korekta zaburzeń statyki ciała i schorzeń kostno-stawowych, zwiększenie wytrzymałości organizmu, siły mięśni oraz kształtowanie i utrwalanie  nawyku utrzymywania prawidłowej postawy. 
    
    Jedną z ważnych ról w gimnastyce korekcyjnej pełnią także ćwiczenia oddechowe rozwijające klatkę piersiową, płuca oraz poprawiające krążenie i dotleniające organizm.
    
    Gimnastyka korekcyjna wzmacnia mięśnie grzbietu i brzucha, odpowiedzialne za utrzymanie kręgosłupa we właściwym położeniu oraz za utrzymanie właściwej postawy, dlatego ważne jest, żeby regularnie wykonywać zalecone ćwiczenia.
    
    Skuteczne podjęte działania mogą całkowicie wyleczyć pacjenta lub w znacznym stopniu skorygować wady.
    
    Ma zastosowanie przy wadach postawy m.in. garbienie się oraz przy skrzywieniach kręgosłupa. 
    
        `,
  },
  {
    name: 'Fizjoterapia',
    photo: 'fizjoterapia.jpg',

    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 12,
    description: `
    Ma na celu przywrócenie pełnej sprawności ruchowej i motorycznej. <br>
    Polega on na leczeniu dysfunkcji układu  nerwowo mięśniowego, mięśniowo szkieletowego, oddechowego i sercowo naczyniowego.<br>
    Fizjoterapia jest jedną z formą leczenia wszelkich zmian po przebytych udarach , urazach wielonarządowych, złamaniach kości, uszkodzeniu stawów , urazach rdzenia kręgowego. <br>
    Stosowana może być również przy leczeniu schorzeń przewlekłych czy astmy.<br>
    Również wszelkie zmiany czy bóle kręgosłupa mogą być skutecznie usunięte dzięki zastosowaniu odpowiednich metod fizjoterapii. <br>
    Fizjoterapia przyczynia się do wznowienie codziennych czynności, w tym pracy, szkoły, zajęć rekreacyjnych i opieki osobistej.
        `,
  },
  {
    name: 'Sensoplastyka',
    photo: 'sensoplastyka.jpg',
    price: 'Cena: 300 zł (2-3 spotkania)',
    id: 13,
    description: `
    Głównym celem diagnozy logopedycznej jest rozpoznanie z jakimi zaburzeniami mowy mamy do czynienia u pacjenta. <br>
    Wstępne badanie polega na ocenie poziomu rozwoju mowy, określeniu sfer i rozmiaru jego opóźnienia oraz rozpoznaniu rodzaju zaburzeń.<br>
    Jednym z ważniejszych elementów postępowania diagnostycznego jest obserwacja, w trakcie której logopeda ustala poziom kompetencji językowych dziecka i ich zgodność z normami rozwojowymi.<br>
    Na podstawie zebranych danych logopeda ustala zakres potrzeb, rodzaj niezbędnej pomocy oraz opracowuje program terapii.<br>
    
        `,
  },
  {
    name: 'Wydanie opinii',
    photo: 'wydanie-opinii.jpg',
    price: 'Cena: 80 zł (1 spotkanie)',
    id: 14,
    description: `
    Każdorazowo proces diagnostyki dziecka kończy się wydaniem specjalistycznej opinii.<br>
    W Naszym Centrum mogą Państwo otrzymać opinie:
    
   <br> - logopedyczną,
   <br> - pedagogiczną,
   <br> - psychologiczną,
   <br> - rozwoju procesów integracji sensorycznej,
   <br> - o gotowości do podjęcia nauki szkolnej,
   <br> - fitoterapeutyczną.
        `,
  },
]

// pictures carousel

const pictures = document.querySelectorAll('.picture')
const imageView = document.querySelector('.image-view')
const imageBox = document.querySelector('.image-box')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')


let currentImageId = 0;

imageView.addEventListener('click', function () {
  this.style.display = "none"
  imageBox.style.display = "none"
})

pictures.forEach(function (picture, index) {
  picture.addEventListener('click', function () {
    imageView.style.display = "block"
    imageBox.style.display = "block"
    currentImageId = index + 1


    console.log(currentImageId)
    currentImageDisplay(currentImageId)
  })
})

function currentImageDisplay(pictureId) {
  imageBox.style.backgroundSize = "cover"
  imageBox.style.background = `url("./img/photos/Zdjecie${pictureId}.jpg") center/cover no-repeat`
  imageBox.classList.add(`display${pictureId}`)
  if (imageBox.classList.contains('display3')) {
    console.log(currentImageId)
  }
}

prevBtn.addEventListener('click', () => {
  currentImageId--
  if (currentImageId === 0) {
    currentImageId = pictures.length
  }

  currentImageDisplay(currentImageId)
})
nextBtn.addEventListener('click', () => {
  currentImageId++
  if (currentImageId > pictures.length) {
    currentImageId = 1
  }

  currentImageDisplay(currentImageId)
})