
/* 
class formSubmit {
    constructor(settings) {
        this.settings = settings;
        //Selecionando o formulário
        this.form = document.querySelector(settings.form);
        //Selecionando o botão de envio
        this.formButton = document.querySelector(this.settings.button);
        //Se o formulário exister pegamos a url que no caso é o atributo action
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    //Mensagem de sucesso caso o formulario seja enviado
    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    //Mensagem de erro caso o formulario não seja enviado
    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject(){
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event){
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Mensagem enviada"
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    //Metodo para iniciar a classe
    //Se o formulario existir, adicionamos um evento de clica ao botão que
    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.sendForm);
        return this;
    }
}

const formSubmit = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!<h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem<h1>",
});
formSubmit.init();
*/

