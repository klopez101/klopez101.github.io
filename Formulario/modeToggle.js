class ModeToggle {
    constructor() {
        this.toggleButton = document.getElementById('toggleMode');
        this.body = document.body;
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';

        this.applyMode();
        this.toggleButton.addEventListener('click', this.toggleMode.bind(this));
    }

    applyMode() {
        if (this.isDarkMode) {
            this.body.classList.add('dark-mode');
            this.body.classList.remove('light-mode');
            this.toggleButton.textContent = 'Modo Claro';
        } else {
            this.body.classList.add('light-mode');
            this.body.classList.remove('dark-mode');
            this.toggleButton.textContent = 'Modo Oscuro';
        }
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyMode();
    }
}


new ModeToggle();