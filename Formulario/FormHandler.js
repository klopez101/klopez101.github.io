class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault(); 

        const formData = new FormData(this.form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        localStorage.setItem('formData', JSON.stringify(data));

        window.location.href = 'resultados.html';
    }
}

new FormHandler('registroForm');