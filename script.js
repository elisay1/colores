const colors = [
    { name: 'Rojo', hex: '#FF0000' },
    { name: 'Azul', hex: '#0000FF' },
    { name: 'Verde', hex: '#00FF00' },
    { name: 'Amarillo', hex: '#FFFF00' },
    { name: 'Morado', hex: '#800080' },
    { name: 'Naranja', hex: '#FFA500' },
    { name: 'Rosa', hex: '#FFC0CB' },
    { name: 'Marrón', hex: '#A52A2A' },
    { name: 'Negro', hex: '#000000' },
    { name: 'Blanco', hex: '#FFFFFF' },
    { name: 'Gris', hex: '#808080' },
    { name: 'Cian', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Lima', hex: '#00FF00' },
    { name: 'Oliva', hex: '#808000' },
    { name: 'Turquesa', hex: '#40E0D0' },
    { name: 'Lavanda', hex: '#E6E6FA' },
    { name: 'Beige', hex: '#F5F5DC' },
    { name: 'Durazno', hex: '#FFDAB9' },
    { name: 'Coral', hex: '#FF7F50' },
    { name: 'Salmón', hex: '#FA8072' },
    { name: 'Menta', hex: '#F5FFFA' },
    { name: 'Oro', hex: '#FFD700' },
    { name: 'Plata', hex: '#C0C0C0' },
    { name: 'Bronce', hex: '#CD7F32' },
    { name: 'Chocolate', hex: '#D2691E' },
    { name: 'Caramelo', hex: '#E39B8D' },
    { name: 'Esmeralda', hex: '#50C878' },
    { name: 'Violeta', hex: '#EE82EE' },
    { name: 'Índigo', hex: '#4B0082' },
];

const animations = [
    'slide-in-fwd-center', 'blur-out-expand'
];

const colorWall = document.getElementById('color-wall');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');
const voiceIcon = document.getElementById('voice-icon');
let voices = [];
let selectedVoice = null;

function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    selectedVoice = voices.find(voice => voice.lang === 'es-ES') || voices[0];
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function getRandomAnimation(usedAnimations) {
    let animation;
    do {
        animation = animations[Math.floor(Math.random() * animations.length)];
    } while (usedAnimations.includes(animation));
    usedAnimations.push(animation);
    if (usedAnimations.length === animations.length) {
        usedAnimations.length = 0; // Reset the used animations
    }
    return animation;
}

const usedAnimations = [];

colors.forEach(color => {
    const panel = document.createElement('div');
    panel.className = 'color-panel';
    panel.style.backgroundColor = color.hex;
    panel.setAttribute('data-color', color.name);

    const colorName = document.createElement('span');
    colorName.textContent = color.name;
    panel.appendChild(colorName);

    panel.addEventListener('click', () => {
        document.querySelectorAll('.color-panel').forEach(p => p.classList.remove('active'));
        panel.classList.add('active');

        const msg = new SpeechSynthesisUtterance(color.name);
        if (selectedVoice) {
            msg.voice = selectedVoice;
        }
        msg.lang = 'es-ES';
        window.speechSynthesis.speak(msg);

        overlay.style.backgroundColor = color.hex;
        overlayText.textContent = color.name;
        overlay.style.display = 'flex';

        const animation = getRandomAnimation(usedAnimations);
        overlay.style.animation = `${animation} 5s linear both`;

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 5000);
    });

    colorWall.appendChild(panel);
});

voiceIcon.addEventListener('click', () => {
    const voiceIndex = voices.indexOf(selectedVoice);
    selectedVoice = voices[(voiceIndex + 1) % voices.length];
    alert(`Voz cambiada a: ${selectedVoice.name}`);
});
