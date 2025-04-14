# Your Energy 🏋️‍♀️

**Your Energy** is a web application focused on fitness, allowing users to explore, search, and save their favorite exercises. Users can filter exercises by muscles, body parts, or equipment, view detailed instructions and ratings, manage a personal favorites list, and get daily fitness quotes. This project was developed by Team 5 as the final project for the GoIT Advanced JavaScript course.

✨ **Live Demo:** [**https://uanvi.github.io/goit-adv-js-final-project-team-5/**](https://uanvi.github.io/goit-adv-js-final-project-team-5/) ✨

## 📋 Table of Contents

* [Features](#-features)
* [Technologies Used](#-technologies-used)
* [Installation & Setup (for Development)](#-installation--setup-for-development)
* [Usage](#-usage)
* [API Used](#-api-used)
* [Project Structure](#-project-structure)
* [Team](#-team)
* [Acknowledgements](#-acknowledgements)

## ✨ Features

* **Exercise Filters:** Browse exercises categorized by Muscles, Body Parts, and Equipment.
* **Exercise Search:** Search for specific exercises within selected categories.
* **Exercise Details:** View detailed information for each exercise (GIF demonstration, rating, target muscle, body part, equipment, calories burned, description) in a modal window.
* **Favorites:** Add exercises to / remove exercises from a personal "Favorites" list stored locally [cite: goit-adv-js-final-project-team-5/src/js/utils/favoritesStorage.js].
* **Favorites Page:** View all saved favorite exercises on a dedicated page (`favorites.html`) [cite: goit-adv-js-final-project-team-5/src/favorites.html, goit-adv-js-final-project-team-5/src/js/favorites.js].
* **Exercise Rating:** Submit ratings for exercises via a dedicated modal [cite: goit-adv-js-final-project-team-5/src/partials/modal.html, goit-adv-js-final-project-team-5/src/js/modal.js].
* **Daily Quote:** Displays a "Quote of the Day" related to fitness [cite: goit-adv-js-final-project-team-5/src/partials/quotes.html, goit-adv-js-final-project-team-5/src/js/quote.js].
* **Pagination:** Navigate through exercise lists and categories [cite: goit-adv-js-final-project-team-5/src/js/exercises.js].
* **Responsive Design:** Adapts to various screen sizes.
* **Subscription Form:** Footer includes a form to subscribe for updates [cite: goit-adv-js-final-project-team-5/src/partials/footer.html, goit-adv-js-final-project-team-5/src/js/subscription.js].
* **Scroll-Up Button:** Easily navigate back to the top of the page [cite: goit-adv-js-final-project-team-5/src/js/components/scroll-up-button.js].
* **Mobile Menu:** Navigation accessible on smaller screens [cite: goit-adv-js-final-project-team-5/src/partials/mobmenu.html, goit-adv-js-final-project-team-5/src/js/mobmenu.js].

## 🛠️ Technologies Used

* **HTML5:** Semantic markup.
* **CSS3:** Styling the application (compiled from SASS/SCSS using Vite/PostCSS) [cite: goit-adv-js-final-project-team-5/src/css/styles.css, goit-adv-js-final-project-team-5/vite.config.js, goit-adv-js-final-project-team-5/package.json].
* **JavaScript (ES6+ Modules):** Core application logic, interactivity, API communication [cite: goit-adv-js-final-project-team-5/src/js/main.js].
* **Vite:** Frontend tooling for development server and building [cite: goit-adv-js-final-project-team-5/vite.config.js, goit-adv-js-final-project-team-5/package.json].
* **Axios:** Promise-based HTTP client for API requests [cite: goit-adv-js-final-project-team-5/src/js/your-energy-api.js, goit-adv-js-final-project-team-5/package.json].
* **Your Energy API:** External API (`your-energy.b.goit.study/api`) as the data source [cite: goit-adv-js-final-project-team-5/src/js/your-energy-api.js].
* **iziToast:** Library for displaying notifications [cite: goit-adv-js-final-project-team-5/src/js/modal.js, goit-adv-js-final-project-team-5/package.json].
* **LocalStorage:** Browser storage for persisting favorite exercises [cite: goit-adv-js-final-project-team-5/src/js/utils/favoritesStorage.js].
* **Git & GitHub:** Version control.

## 🚀 Installation & Setup (for Development)

To run this project locally:

1.  **Prerequisites:**
  * Node.js (LTS version recommended - e.g., v18 or v20) and npm. Download from [nodejs.org](https://nodejs.org/).
  * Git.

2.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/uanvi/goit-adv-js-final-project-team-5.git](https://github.com/uanvi/goit-adv-js-final-project-team-5.git)
    ```

3.  **Navigate to the Project Directory:**
    ```bash
    cd goit-adv-js-final-project-team-5
    ```

4.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This installs dependencies listed in `package.json` [cite: goit-adv-js-final-project-team-5/package.json].

5.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This starts the Vite development server (usually at `http://localhost:5173` or similar) [cite: goit-adv-js-final-project-team-5/package.json].

6.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command creates an optimized build in the `dist/` folder [cite: goit-adv-js-final-project-team-5/package.json, goit-adv-js-final-project-team-5/vite.config.js].

## 💡 Usage

* **Live Version:** Visit the [Live Demo URL](https://uanvi.github.io/goit-adv-js-final-project-team-5/).
* **Local Development:** Follow the [Installation & Setup](#-installation--setup-for-development) steps and run `npm run dev`.

## 🌐 API Used

This project utilizes the **Your Energy API** hosted at `https://your-energy.b.goit.study/api` to fetch exercise data, categories, and daily quotes [cite: goit-adv-js-final-project-team-5/src/js/your-energy-api.js].

## 📁 Project Structure (Source Files in `src/`)
```plaintext
├── src/
│   ├── css/              # Compiled CSS files (from SASS)
│   ├── images/           # Static image assets
│   ├── js/               # JavaScript modules (API, components, logic)
│   │   ├── api/
│   │   ├── components/
│   │   ├── models/
│   │   ├── utils/
│   │   └── ...
│   ├── partials/         # Reusable HTML partials (header, footer, etc.)
│   ├── index.html        # Main entry point (Homepage)
│   ├── favorites.html    # Favorites page
│   ├── privacy-policy.html # Privacy Policy page
│   └── terms.html        # Terms of Service page
├── .gitignore
├── CONTRIBUTING.md     # Contribution guidelines
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 👥 Team (Team 5)

* **[Андрій Брелик (Andriy Belyk)](https://github.com/Westflag)** - Hero section, Favorites page
* **[Павло Рогожин (Pavlo Rohozhyn)](https://github.com/PavloRohozhyn)** (Scrum Master) - Header, Bugfixes
* **[Максим Новік (Maksym Novik)](https://github.com/novikor)** - Quote of the Day, Bugfixes
* **[Вячеслав Патеров (Viacheslav Paterov)](https://github.com/TortP)** - Scroll-up, Async events loader
* **[Андрій Вітюк (Andriy Vitiuk)](https://github.com/uanvi)** - Footer
* **[Юрій Кравченко (Yurii Kravchenko)](https://github.com/krav-yurii)** - Privacy Policy + Terms, Bugfixes
* **[Євген Худоліїв (Yevhen Khudoliiv)](https://github.com/shikigami12)** (Team Lead) - Filters, Exercises, Pagination, Categories, Bugfixes
* **[Роман Кльокта (Roman Klokta)](https://github.com/RomanKlokta)** - Exercise Modal, Rating Modal

## 🙏 Acknowledgements

* **GoIT** - For the educational program.
* **Your Energy API** (`your-energy.b.goit.study/api`) - For the exercise and quote data.
* **Vite** - Frontend tooling.
* **Axios**, **iziToast** - Useful libraries.