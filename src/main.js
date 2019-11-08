//Recursos do ES6 ,7 e 8
import api from './api';
//Utilizando os Recursos de classe
class App {
    constructor() {
        this.repository = [];
        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById("repo-list");
        this.registerHandlers();
    }
    registerHandlers() {
        //Utilizando Array functions
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    //Utilizando os Parâmetros padrão em uma função(valor padrão para parâmetros)
    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    //Utilizando o try e catch com async e await
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.lenght === 0)
            return;

        this.setLoading();

        try {
            //Utilizando o template literals
            const response = await api.get(`/repos/${repoInput}`);
            //Utilizando desestruturação de objetos
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repository.push({
                //Utilizando short syntax em objetos
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = ' ';

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }
        this.setLoading(false);
    }
    render() {
        this.listEl.innerHTML = ' ';
        this.repository.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}
new App();
