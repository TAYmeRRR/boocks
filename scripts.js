// Массив книг, добавляйте новые только сюда с нужным category ("adult" или "child")
const books = [
  {
    title: "От Путивля до Новочеркасска",
    author: "Рыжков.В.А",
    info: "Рыжков.В.А От Путивля до Новочеркасска [Текст] / Рыжков.В.А — 978-5-91951-064-2. — Ростов-на-Дону: Альтаир, 2012 — 128 c.",
    cover: "1.1.jpg.jpg",
    modalCover: "1.jpg.jpg",
    category: "adult"
  },
  {
    title: "Сталь перекаленная",
    author: "Шкиря В. Д.",
    info: "Шкиря, В. Д. Сталь перекаленная [Текст] / В. Д. Шкиря — 5-86236-155-3. — Ростов-на-Дону: Приазовский Край, 2005 — 176 c.",
    cover: "2.1.jpg.jpg",
    modalCover: "2.jpg.jpg",
    category: "adult"
  },
  {
    title: "Краски осени",
    author: "Донской Е. П.",
    info: "Донской, Е. П. Краски осени [Текст] / Е. П. Донской — 978-966-427-280-0. — Донецк: Каштан, 2012 — 288 c.",
    cover: "3.1.jpg.jpg",
    modalCover: "3.jpg.jpg",
    category: "adult"
  },
  {
    title: "Биюк-Онларский, Тельманский, Красногвардейский...",
    author: "Готовчиков Н. А.",
    info: "Готовчиков, Н. А. Биюк-Онларский, Тельманский, Красногвардейский... [Текст] / Н. А. Готовчиков — 978-617-7128-10-5. — Симферополь: Крымполиграф, 2017 — 372 c.",
    cover: "4.1.jpg.jpg",
    modalCover: "4.jpg.jpg",
    category: "adult"
  },
  {
    title: "Наше Слово",
    author: "Литературно-художественный альманах №8",
    info: "Литературно-художественный альманах №8 Наше Слово [Текст] / Литературно-художественный альманах №8 — 978-5-91951-748-1. — Ростов-на-Дону: Альтаир, 2023 — 256 c.",
    cover: "5.1.jpg.jpg",
    modalCover: "5.jpg.jpg",
    category: "adult"
  },
  {
    title: "Любви Прекрасные Мгновенья",
    author: "Бурцева Н. К.",
    info: "Бурцева, Н. К. Любви Прекрасные Мгновенья [Текст] / Н. К. Бурцева — 978-5-98517-173-0. — Таганрог: Нюанс, 2012 — 110 c.",
    cover: "6.1.jpg.jpg",
    modalCover: "6.jpg.jpg",
    category: "adult"
  },
  {
    title: "Гамаюн",
    author: "Петров В. С.",
    info: "Петров, В. С. Гамаюн [Текст] / В. С. Петров — 5-88558-008-1. — Ростов-на-Дону: Азов-Приз, 1994 — 256 c.",
    cover: "7.1.jpg.jpg",
    modalCover: "7.jpg.jpg",
    category: "adult"
  },
  {
    title: "Повести о Любви",
    author: "Шкиря В. Д.",
    info: "Шкиря, В. Д. Повести о Любви [Текст] / В. Д. Шкиря — 5-88098-241-6. — Ростов-на-Дону: Литера-Д, 1966 — 216 c.",
    cover: "8.1.jpg.jpg",
    modalCover: "8.jpg.jpg",
    category: "adult"
  },
  {
    title: "Традиция",
    author: "Литвинов В.",
    info: "Литвинов В. Традиция [Текст] / Литвинов В. — 978-5-600-00123-7. — Таганрог: Частная типография на Мечниковском, 2014 — 56 c.",
    cover: "10.1.jpg.jpg",
    modalCover: "10.jpg.jpg",
    category: "adult"
  },
  {
    title: "Святой Иерусалим",
    author: "Ордынская И. Н.",
    info: "Ордынская, И. Н. Святой Иерусалим [Текст] / И. Н. Ордынская — 978-5-4483-9254-2. — : Эхо Бога, 2017 — 98 c.",
    cover: "11.1.jpg.jpg",
    modalCover: "11.jpg.jpg",
    category: "adult"
  },
  {
    title: "А навошта?",
    author: "Яськова Л. А",
    info: "Яськова, Л. А. А навошта? [Текст] / Л. А. Яськова — . — Гомель: , 2022 — 15 c.",
    cover: "9.1.jpg.jpg",
    modalCover: "9.jpg.jpg",
    category: "child"
  },
  {
    title: "Морской ангелок",
    author: "Светоч.С",
    info: "Светоч.С Морской ангелок [Текст] / Светоч.С — . — Луганск: , 2023 — 84 c.",
    cover: "17.1.jpg.jpg",
    modalCover: "17.jpg.jpg",
    category: "adult"
  },
  {
    title: "Повести",
    author: "Дворцов В. В.",
    info: "Дворцов, В. В. Повести [Текст] / В. В. Дворцов — 978-5-91642-129-3. — Москва: Российский писатель, 2015 — 352 c.",
    cover: "15.1.jpg.jpg",
    modalCover: "15.jpg.jpg",
    category: "adult"
  },
  {
    title: "Петр Машеров - Сын белорусского народа",
    author: "Машеров.П",
    info: "Машеров.П Петр Машеров - Сын белорусского народа  [Текст] / Машеров.П — 2-е издание. — Москва: Студия Этника, 2020 — 560 + 56илл.",
    cover: "16.1.jpg.jpg",
    modalCover: "16.jpg.jpg",
    category: "adult"
  },
  {
    title: "Крылья надежды",
    author: "Союз  Писателей Дона",
    info: "Союз  Писателей Дона Крылья надежды  [Текст] / Союз  Писателей Дона — 978-5-98517-112-9. — Таганрог-Минск: Нюанс , 2012 — 84 c.",
    cover: "18.1.jpg.jpg",
    modalCover: "18.jpg.jpg",
    category: "adult"
  },
  {
    title: "Святая Параскева",
    author: "Гаврилович В. Н",
    info: "Гаврилович, В. Н. Святая Параскева [Текст] / В. Н. Гаврилович — 978-985-7156-48-1. — Мозырь: КПУП 'Колор', 2020 — 200 c.",
    cover: "20.1.jpg.jpg",
    modalCover: "20.jpg.jpg",
    category: "adult"
  },
  {
    title: "Canciones lejanas Далёкие песни",
    author: "Фернандо Р.",
    info: "Фернандо Р. Canciones lejanas Далёкие песни [Текст] / Фернандо Р. — 978-5-907439-46-7. — Санкт-Петербург - Москва: Литературный фонд 'Дорога жизни': 'Любавич', 2022 — 480 c.",
    cover: "14.1.jpg.jpg",
    modalCover: "14.jpg.jpg",
    category: "adult"
  },
  {
    title: "Кусочек от рифа Счастья",
    author: "Макарова-Гриценко С. Н.",
    info: "Макарова-Гриценко, С. Н. Кусочек от рифа Счастья [Текст] / С. Н. Гриценко — 978-985-7156-11-5. — Мозырь: КПУП 'Колор', 2023 — 136 c.",
    cover: "13.1.jpg.jpg",
    modalCover: "13.jpg.jpg",
    category: "adult"
  },
  {
    title: "И друг степей калмык",
    author: "Калмыцкая тема в художественной литературе",
    info: "Калмыцкая тема в художественной литературе И друг степей калмык [Текст] / Калмыцкая тема в художественной литературе — 978-5-94587-346-9. — Элиста: 'НПП'Джангар', 2009 — 447 c.",
    cover: "12.1.jpg.jpg",
    modalCover: "12.jpg.jpg",
    category: "adult"
  },
  {
    title: "Степь на ладонях",
    author: "Межрайонное литературное объединение 'Степь'",
    info: "Межрайонное литературное объединение 'Степь' Степь на ладонях [Текст] / Межрайонное литературное объединение 'Степь' — . — : , 2022 — 350 c.",
    cover: "19.1.jpg.jpg",
    modalCover: "19.jpg.jpg",
    category: "adult"
  },{
    title: "И друг степей калмык",
    author: "Калмыцкая тема в художественной литературе",
    info: "Калмыцкая тема в художественной литературе И друг степей калмык [Текст] / Калмыцкая тема в художественной литературе — 978-5-94587-346-9. — Элиста: 'НПП'Джангар', 2009 — 447 c.",
    cover: "12.1.jpg.jpg",
    modalCover: "12.jpg.jpg",
    category: "adult"
  },{
    title: "И друг степей калмык",
    author: "Калмыцкая тема в художественной литературе",
    info: "Калмыцкая тема в художественной литературе И друг степей калмык [Текст] / Калмыцкая тема в художественной литературе — 978-5-94587-346-9. — Элиста: 'НПП'Джангар', 2009 — 447 c.",
    cover: "12.1.jpg.jpg",
    modalCover: "12.jpg.jpg",
    category: "adult"
  },{
    title: "И друг степей калмык",
    author: "Калмыцкая тема в художественной литературе",
    info: "Калмыцкая тема в художественной литературе И друг степей калмык [Текст] / Калмыцкая тема в художественной литературе — 978-5-94587-346-9. — Элиста: 'НПП'Джангар', 2009 — 447 c.",
    cover: "12.1.jpg.jpg",
    modalCover: "12.jpg.jpg",
    category: "adult"
  }
];

// Функция делит массив книг по категориям и на ряды по количеству книг
function splitBooksByCategory(booksArray, countPerRow = 11) {
  const adultBooks = booksArray.filter(b => b.category === "adult");
  const childBooks = booksArray.filter(b => b.category === "child");

  function chunk(arr, size) {
    const chunks = [];
    for(let i=0; i<arr.length; i+=size) {
      chunks.push(arr.slice(i, i+size));
    }
    return chunks;
  }

  return {
    adult: chunk(adultBooks, countPerRow),
    child: chunk(childBooks, countPerRow)
  };
}

// Функция отрисовки книг c волнообразным смещением
function renderBooks(books, containerId) {
  const container = document.getElementById(containerId);
  const waveAmplitude = 50;
  const booksCount = books.length;
  container.style.flexWrap = 'nowrap';
  books.forEach((book,i) => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const y = waveAmplitude * Math.abs(Math.sin(i / (booksCount - 1) * Math.PI || 0));
    const tilt = (i % 2 === 0 ? -1 : 1) * 4;

    card.style.marginTop = y + 'px';
    card.style.transform = `rotate(${tilt}deg)`;
    card.style.zIndex = 100 + i;
    card.style.marginLeft = i === 0 ? '0' : '-48px';
    card.classList.toggle('first-in-row', i === 0);

    card.tabIndex = 0;
    card.innerHTML = `
      <div class="mini-cover-frame">
        <img class="mini-cover" src="${book.cover}" alt="Обложка книги ${book.title}" />
      </div>
      <div class="spine-label">${book.title}</div>
    `;

    container.appendChild(card);

    card.addEventListener('click', () => openModal(book));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        openModal(book);
        e.preventDefault();
      }
    });
  });
}

// Рендер по категориям и рядам
const rows = splitBooksByCategory(books, 11);

rows.adult.forEach((adultRowBooks, idx) => {
  const containerId = idx === 0 ? 'adult-row1' : 'adult-row2';
  renderBooks(adultRowBooks, containerId);
});

rows.child.forEach((childRowBooks, idx) => {
  const containerId = idx === 0 ? 'child-row1' : 'child-row2';
  renderBooks(childRowBooks, containerId);
});

// Модальное окно Bootstrap
const modalEl = document.getElementById('bookModal');
const bsModal = new bootstrap.Modal(modalEl);
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalDesc = document.getElementById('modalDesc');
const modalImg = document.getElementById('modalImg');

function openModal(book) {
  modalTitle.textContent = book.title;
  modalAuthor.textContent = book.author;
  modalDesc.textContent = book.info;
  if(book.modalCover) {
    modalImg.src = book.modalCover;
    modalImg.alt = `Обложка книги ${book.title}`;
    modalImg.style.display = '';
  } else {
    modalImg.style.display = 'none';
  }
  bsModal.show();
}

// Летающие книги на фоне
const floatContainer = document.getElementById('floating-books');
const floatBookSrc = 'https://cdn-icons-png.flaticon.com/512/29/29302.png';
for(let i = 0; i < 25; i++) {
  const img = document.createElement('img');
  img.className = 'float-book';
  img.src = floatBookSrc;
  img.style.left = `${Math.random() * 100}vw`;
  img.style.top = `${Math.random() * 100}vh`;
  img.style.opacity = 0.12 + Math.random() * 0.15;
  img.style.width = `${40 + Math.random() * 60}px`;
  img.dataset.vx = (Math.random() * 0.003) - 0.0015;
  img.dataset.vy = (Math.random() * 0.0025) - 0.00125;
  floatContainer.appendChild(img);
}
function animateFloating() {
  const floatBooks = floatContainer.querySelectorAll('.float-book');
  floatBooks.forEach(b => {
    let x = parseFloat(b.style.left);
    let y = parseFloat(b.style.top);
    x += parseFloat(b.dataset.vx);
    y += parseFloat(b.dataset.vy);
    if(x < -15) x = 115; else if(x > 115) x = -15;
    if(y < -15) y = 115; else if(y > 115) y = -15;
    b.style.left = x + 'vw';
    b.style.top = y + 'vh';
    const scale = 0.8 + 0.25 * Math.sin(Date.now() / 900 + x);
    b.style.transform = `scale(${scale}) rotate(${5 * Math.sin(Date.now() / 1400 + y)}deg)`;
  });
  requestAnimationFrame(animateFloating);
}
animateFloating();

// Частицы пыльцы
const particleCount = 60;
const particleContainer = document.createElement('div');
particleContainer.style.position = 'fixed';
particleContainer.style.top = 0;
particleContainer.style.left = 0;
particleContainer.style.width = '100vw';
particleContainer.style.height = '100vh';
particleContainer.style.pointerEvents = 'none';
particleContainer.style.overflow = 'visible';
particleContainer.style.zIndex = 0;
document.body.appendChild(particleContainer);

const particles = [];
for(let i = 0; i < particleCount; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = 2 + Math.random() * 3;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.top = (Math.random() * 100) + 'vh';
  p.style.left = (Math.random() * 100) + 'vw';
  particleContainer.appendChild(p);

  particles.push({
    el: p,
    x: parseFloat(p.style.left),
    y: parseFloat(p.style.top),
    vx: (Math.random() - 0.5) * 0.02,
    vy: (Math.random() - 0.5) * 0.01,
    alpha: 0.3 + Math.random() * 0.2,
    alphaDir: Math.random() > 0.5 ? 0.002 : -0.002
  });
}
function animateParticles() {
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if(p.x < -2) p.x = 102; else if(p.x > 102) p.x = -2;
    if(p.y < -2) p.y = 102; else if(p.y > 102) p.y = -2;

    p.alpha += p.alphaDir;
    if(p.alpha > 0.5) { p.alpha = 0.5; p.alphaDir *= -1; }
    else if(p.alpha < 0.2) { p.alpha = 0.2; p.alphaDir *= -1; }

    p.el.style.left = p.x + 'vw';
    p.el.style.top = p.y + 'vh';
    p.el.style.background = `rgba(255, 238, 155, ${p.alpha})`;
    p.el.style.filter = `drop-shadow(0 0 5px rgba(255, 238, 155, ${p.alpha * 2}))`;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Светящиеся лучики
const raysContainer = document.getElementById('light-rays-container');
const raysCount = 30;
const rays = [];
for(let i = 0; i < raysCount; i++) {
  const ray = document.createElement('div');
  ray.className = 'light-ray';
  ray.style.left = `${Math.random() * 100}vw`;
  ray.style.top = `${Math.random() * 100}vh`;
  ray.dataset.angle = (Math.random() * 60 - 30);
  ray.style.transform = `rotate(${ray.dataset.angle}deg)`;
  ray.style.opacity = 0.7 + Math.random() * 0.3;
  raysContainer.appendChild(ray);
  rays.push(ray);
}

function animateRays() {
  const now = Date.now();
  rays.forEach((ray, i) => {
    const baseAngle = parseFloat(ray.dataset.angle);
    const sway = 7 * Math.sin(now / 4000 + i);
    ray.style.transform = `rotate(${baseAngle + sway}deg)`;
    const alpha = 0.6 + 0.3 * Math.sin(now / 2000 + i * 1.5);
    ray.style.opacity = alpha.toFixed(2);
  });
  requestAnimationFrame(animateRays);
}
animateRays();
