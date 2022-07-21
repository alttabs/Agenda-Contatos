import validator from "validator";

export default class CadastroContato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }
  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      let p = document.createElement('p');
      let message = document.createTextNode('Email Invalido')
      p.appendChild(message);
      p.classList.add('alert-danger');
      emailInput.after(p);
      error = true;
    }

    if (!validator.isMobilePhone(telefoneInput.value, 'pt-BR')) {
      let p = document.createElement('p');
      let message = document.createTextNode('Telefone Invalido')
      p.appendChild(message);
      p.classList.add('alert-danger');
      telefoneInput.after(p);
      error = true;
    }

    if (nomeInput.value.length < 1 || nomeInput.value.length > 25) {
      let p = document.createElement('p');
      let message = document.createTextNode('Nome precisa ser preenchido')
      p.appendChild(message);
      p.classList.add('alert-danger');
      nomeInput.after(p);
      error = true;
    }

    if (sobrenomeInput.value.length < 1 || sobrenomeInput.value.length > 25) {
      let p = document.createElement('p');
      let message = document.createTextNode('Sobrenome precisa ser preenchido')
      p.appendChild(message);
      p.classList.add('alert-danger');
      sobrenomeInput.after(p);
      error = true;
    }
    if (!error) el.submit();
  }
}