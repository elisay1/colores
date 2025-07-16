# 🎨 Panel Interactivo de Colores

Un panel interactivo y educativo para aprender colores con síntesis de voz, diseñado especialmente para niños y personas que están aprendiendo español.

## ✨ Características

- **🎵 Síntesis de voz**: Pronuncia el nombre del color en español
- **🎭 Animaciones dinámicas**: Efectos visuales atractivos al seleccionar colores
- **🔊 Múltiples voces**: Cambio entre diferentes voces disponibles
- **📱 Responsivo**: Adaptado para dispositivos móviles y desktop
- **🎨 30 colores**: Amplia gama de colores básicos y avanzados
- **🔄 Interactividad**: Retroalimentación visual y auditiva inmediata

## 🚀 Demo

Simplemente abre el archivo `index.html` en tu navegador favorito y comienza a explorar los colores.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del panel
- **CSS3**: Estilos modernos con animaciones y efectos
- **JavaScript ES6**: Lógica interactiva y Web Speech API
- **Speech Synthesis API**: Para la pronunciación de colores

## 📂 Estructura del Proyecto

```
colores/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica del panel interactivo
├── voice-message.png   # Icono de voz
└── README.md          # Este archivo
```

## 🎯 Funcionalidades

### 🎨 Colores Disponibles
- **Básicos**: Rojo, Azul, Verde, Amarillo, Negro, Blanco
- **Intermedios**: Morado, Anaranjado, Rosado, Marrón, Gris
- **Avanzados**: Cian, Magenta, Turquesa, Lavanda, Esmeralda, Índigo
- **Especiales**: Oro, Plata, Bronce, Chocolate, Caramelo, Coral

### 🔊 Sistema de Voz
- Soporte para múltiples voces del sistema
- Prioridad para voces en español (es-ES)
- Cambio dinámico de voz mediante clic en el icono

### 🎭 Animaciones
- `slide-in-fwd-center`: Deslizamiento hacia el centro
- `blur-out-expand`: Efecto de desenfoque y expansión
- Selección aleatoria sin repetición consecutiva

## 🚀 Instalación y Uso

1. **Clona el repositorio**:
```bash
git clone https://github.com/elisay1/colores.git
```

2. **Navega al directorio**:
```bash
cd colores
```

3. **Abre en el navegador**:
```bash
# Opción 1: Doble clic en index.html
# Opción 2: Usar un servidor local
python -m http.server 8000
# Luego visita http://localhost:8000
```

## 🎮 Cómo Usar

1. **Selecciona un color**: Haz clic en cualquier panel de color
2. **Escucha la pronunciación**: El sistema pronunciará el nombre del color
3. **Disfruta la animación**: Observa el efecto visual en pantalla completa
4. **Cambia la voz**: Haz clic en el icono de voz para alternar entre voces

## 🎨 Personalización

### Agregar Nuevos Colores
```javascript
// En script.js, agrega al array colors:
{ name: 'Nuevo Color', hex: '#HEX_CODE' }
```

### Modificar Animaciones
```javascript
// En script.js, agrega al array animations:
const animations = [
    'slide-in-fwd-center',
    'blur-out-expand',
    'tu-nueva-animacion'
];
```

### Personalizar Estilos
```css
/* En styles.css */
.color-panel {
    /* Modifica las propiedades del panel */
}
```

## 🌐 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Móvil
- **APIs**: Web Speech API (síntesis de voz)

## 🔧 Requisitos

- Navegador web moderno con soporte para:
  - CSS3 Animations
  - JavaScript ES6
  - Web Speech API
  - Audio habilitado

## 📈 Mejoras Futuras

- [ ] Modo oscuro/claro
- [ ] Guardado de preferencias de voz
- [ ] Más idiomas de pronunciación
- [ ] Juegos interactivos con colores
- [ ] Exportar paleta de colores
- [ ] Mezcla de colores interactiva

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Elisay Jiménez**

- 🌐 Website: [elisaycode.com](https://elisaycode.com)
- 📧 Email: elisaycode@gmail.com
- 💼 LinkedIn: [linkedin.com/in/elisaycode](https://linkedin.com/in/elisaycode)
- 🐦 Twitter: [@elisaycode](https://twitter.com/elisaycode)
- 📘 Facebook: [facebook.com/elisaycode](https://facebook.com/elisaycode)
- 📸 Instagram: [@elisaycode](https://instagram.com/elisaycode)
- 🎵 TikTok: [@elisaycode](https://tiktok.com/@elisaycode)
- 💻 GitHub: [github.com/elisay1](https://github.com/elisay1)
- 🎬 YouTube: [youtube.com/@elisaycode](https://youtube.com/@elisaycode)

## 🎯 Casos de Uso

- **Educación**: Enseñanza de colores a niños
- **Terapia**: Apoyo para personas con discapacidad visual
- **Idiomas**: Aprendizaje de pronunciación en español
- **Diseño**: Referencia rápida de colores y códigos HEX

## 🙏 Agradecimientos

- Comunidad de desarrolladores por las APIs web
- Inspiración en metodologías de enseñanza interactiva
- Usuarios que han probado y mejorado el proyecto

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!

🚀 **¡Explora, aprende y diviértete con los colores!**