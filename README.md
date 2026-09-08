# 🎮 SQL DDL ARCADE — SENIOR EDITION 🕹️

[![Angular](https://img.shields.io/badge/Angular-19.2-DD0031?style=for-the-badge&logo=angular)](https://angular.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-22c55e?style=for-the-badge&logo=github)](https://noemi2005.github.io/sql-arcade-game/)

> Un videojuego arcade educativo web interactivo diseñado para dominar la teoría de bases de datos relacionales y el lenguaje de definición de datos (**SQL DDL: Data Definition Language**) con una estética retro de los años 80/90.

🌐 **Jugar en línea:** [https://noemi2005.github.io/sql-arcade-game/](https://noemi2005.github.io/sql-arcade-game/)

---

## 🕹️ Características del Juego

- 👾 **Estética Arcade Retro:** Gabinete retro-futurista de arcade con efectos visuales de tubo de rayos catódicos (CRT), destellos neón, tipografía retro y animaciones fluidas.
- 🔊 **Efectos de Sonido 8-Bit:** Retroalimentación sonora para selecciones, respuestas correctas, errores, game over y cambio de nivel.
- 🧠 **Banco Dinámico de Preguntas:** Banco de preguntas con teoría esencial y desafíos prácticos de SQL DDL.
- ⚡ **Sistema de Avance Progresivo:** Cada partida selecciona **25 preguntas aleatorias** organizadas en 9 niveles de dificultad ascendente.
- ⏱️ **Temporizador de 50s por Pregunta:** Tiempo justo para analizar el código SQL y la teoría sin perder el dinamismo arcade.
- 🏆 **Tabla de Récords Locales:** Persistencia de mejores puntuaciones en `localStorage` con rachas de aciertos y precisión.

---

## 🗺️ Estructura de Niveles

El jugador avanza automáticamente de nivel **cada 3 preguntas** completadas en la partida:

| Nivel | Categoría | Descripción y Temas |
| :---: | :--- | :--- |
| 🟢 **1** | **Teoría Básica** | Conceptos fundamentales: Tabla, Registro/Fila, Columna, Tipos de datos (`INT`, `VARCHAR`, `DECIMAL`, `DATE`, `BOOLEAN`), Claves (`PK`, `FK`), Clasificación de comandos (`DDL`, `DML`, `DQL`, `DCL`, `TCL`) y operaciones básicas (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`). |
| 🟢 **2** | **DDL Fundamental** | Sintaxis básica de `CREATE TABLE`, definición de campos e identificadores relacionales. |
| 🔵 **3** | **Claves Primarias y Restricciones** | Uso de `PRIMARY KEY`, restricción `NOT NULL`, `UNIQUE` y valores predeterminados `DEFAULT`. |
| 🔵 **4** | **Claves Foráneas y Relaciones** | Modelado de relaciones relacionales, declaración de `FOREIGN KEY` y referencias entre tablas. |
| 🟣 **5** | **Acciones Referenciales** | Comportamiento en cascada: `ON DELETE CASCADE`, `ON UPDATE SET NULL`, `RESTRICT` y `NO ACTION`. |
| 🟣 **6** | **Modificación de Tablas (ALTER)** | Alteración de estructuras existentes: `ALTER TABLE ADD`, `DROP COLUMN`, `MODIFY` / `ALTER COLUMN`. |
| 🔴 **7** | **Eliminación Segura y Dependencias** | Eliminación limpia de objetos DDL: `DROP TABLE`, `TRUNCATE TABLE`, uso de `CASCADE` y `RESTRICT`. |
| 🔴 **8** | **Depurador DDL Avanzado** | Detección de errores de sintaxis, conflictos de tipos y ambigüedades en código DDL real. |
| ⚡ **9** | **Desafío de Orden de Ejecución** | Orden de ejecución DDL, dependencias entre tablas y prueba final Senior DDL. |

---

## 🎮 Reglas del Juego

1. **Partida Estándar:** Cada intento consta de **25 preguntas seleccionadas al azar**.
2. **Subida de Nivel:** El nivel aumenta cada **3 preguntas** respondidas.
3. **Vidas:** Inicias con **3 vidas (🕹️🕹️🕹️)**. Cada respuesta incorrecta o agotamiento del tiempo descuenta 1 vida.
4. **Tiempo por Pregunta:** Cuentas con **50 segundos** por pregunta.
5. **Navegación:** Al responder o agotarse el tiempo, verás la explicación detallada de la respuesta. Puedes avanzar presionando la tecla <kbd>Enter</kbd> o haciendo clic en **Adelantar ahora [Enter]**.

---

## 🛠️ Tecnologías Utilizadas

- **Framework Core:** [Angular 19](https://angular.dev/) (Standalone Components, Signals & RxJS)
- **Estilos & Diseño:** [Tailwind CSS 3.4](https://tailwindcss.com/) & CSS Vanilla Custom Utilities
- **Lenguaje:** [TypeScript 5.7](https://www.typescriptlang.org/)
- **Audio:** Web Audio API (Sintetizador Web Synth de tonos 8-Bit retro)
- **Despliegue:** GitHub Actions & GitHub Pages

---

## 🚀 Instalación y Ejecución Local

Si deseas clonar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Noemi2005/sql-arcade-game.git
cd sql-arcade-game
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm start
```

Abre tu navegador y entra a `http://localhost:4200/`.

---

## 📦 Compilación para Producción

Para compilar la aplicación para producción:

```bash
npm run build:ghpages
```

Los archivos generados se ubicarán en el directorio `dist/sql-ddl-arcade/browser`.

---

## 📜 Licencia

Proyecto educativo desarrollado con fines académicos. ¡Libre para jugar, aprender y mejorar! 🎓 SQL DDL Arcade Senior Edition.
