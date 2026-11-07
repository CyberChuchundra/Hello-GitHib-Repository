
// Наші фрази
const quotes = [
    "Маленькі кроки також ведуть до великих мрій.",
    "Кожна подорож починається з першого кроку.",
    "Ніколи не пізно навчитися чомусь новому.",
    "Збирай моменти, а не речі.",
    "Твоя історія ще пишеться."
];

// Знаходимо елементи на сторінці
const quoteText = document.querySelector("#quoteText");
const quoteButton = document.querySelector("#quoteButton");

// Реакція на натискання кнопки
quoteButton.addEventListener("click", function () {

    // Випадковий номер фрази
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Виводимо фразу на сторінку
    quoteText.textContent = quotes[randomIndex];

});

// Знаходимо всі фотографії галереї
const galleryPhotos = document.querySelectorAll(".gallery-grid img");

// Знаходимо елементи вікна перегляду
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");

const closeButton = document.querySelector("#closeLightbox");
const prevButton = document.querySelector("#prevPhoto");
const nextButton = document.querySelector("#nextPhoto");

const photoCounter = document.querySelector("#photoCounter");

// Поточний номер фотографії
let currentPhoto = 0;


// Відкриття фотографії
function openPhoto(index) {

    currentPhoto = index;

    lightboxImage.src = galleryPhotos[currentPhoto].src;
    lightboxImage.alt = galleryPhotos[currentPhoto].alt;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${galleryPhotos.length}`;

    lightbox.classList.add("active");
}


// Закриття галереї
function closePhoto() {
    lightbox.classList.remove("active");
}


// Наступна фотографія
function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= galleryPhotos.length) {
        currentPhoto = 0;
    }

    openPhoto(currentPhoto);
}


// Попередня фотографія
function prevPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = galleryPhotos.length - 1;
    }

    openPhoto(currentPhoto);
}


// Натискання на фотографії
galleryPhotos.forEach(function(photo, index) {

    photo.addEventListener("click", function() {
        openPhoto(index);
    });

});


// Кнопки керування
closeButton.addEventListener("click", closePhoto);

nextButton.addEventListener("click", nextPhoto);

prevButton.addEventListener("click", prevPhoto);


// Закриття при натисканні на затемнений фон
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closePhoto();
    }

});


// Керування клавіатурою
document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        prevPhoto();
    }

});
// Перемикання світлої та темної теми
const themeButton = document.querySelector("#themeButton");

// Перевіряємо, чи була раніше збережена темна тема
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "☀️ Світла тема";
}

// Реакція на натискання кнопки
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Світла тема";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Темна тема";
    }
});