// Array mit Motivationssprüchen
const motivationalQuotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You don't have to be great to get started, but you have to get started to be great.",
    "Don't dream your life, but live your dreams.",
    "The only way to do great work is to love what you do.",
    "Obstacles cannot stop you. Problems cannot stop you. Other people cannot stop you. Only you can stop yourself.",
    "Believe in yourself and everything will be possible.",
    "Every expert was once a beginner. Every professional was once an amateur.",
    "Success begins with the will - if you think you can, then you can.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Be yourself the change you wish to see in this world.",
    "Impossible is just an opinion.",
    "Those who fight may lose. Those who don't fight have already lost.",
    "The way to success is to stop talking and start doing.",
    "Every day is a new chance to become what you wish to be.",
    "Big dreams require big courage.",
    "You are stronger than you think and braver than you feel.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Motivation gets you going. Habit keeps you running.",
    "The secret of getting ahead is to take the first step."
];

// Einfacher Zufallsgenerator
function zufallsZahl(max) {
    return Math.floor(Math.random() * max);
}

// Zufälligen Spruch auswählen
function zufaelligenSpruchWaehlen() {
    const index = zufallsZahl(motivationalQuotes.length);
    return motivationalQuotes[index];
}

// Neuen Spruch anzeigen
function neuerSpruch() {
    const spruch = zufaelligenSpruchWaehlen();
    const quoteElement = document.getElementById('motivationQuote');

    // Fade-out Effekt
    quoteElement.style.opacity = '0';

    setTimeout(() => {
        quoteElement.textContent = spruch;
        quoteElement.style.opacity = '1';
    }, 300);
}

// Aktuelles Datum anzeigen
function aktuellesDatumAnzeigen() {
    const heute = new Date();
    const optionen = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formatiertesDatum = heute.toLocaleDateString('en-UK', optionen);
    document.getElementById('currentDate').textContent = formatiertesDatum;
}

// Beim Laden der Seite
window.onload = function() {
    neuerSpruch();
    aktuellesDatumAnzeigen();
};