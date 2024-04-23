// Objeto JavaScript com os dados a serem enviados no corpo da requisição (exemplo)
var postData = {
    title: 'Título do Novo Post',
    body: 'Corpo do Novo Post',
    userId: 22
};

// Opções da requisição, incluindo o método e o corpo da requisição
var options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
};

// Fazendo a requisição usando a API Fetch
fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(function(response) {
        // Verificando se a resposta foi bem-sucedida (código de status 200 a 299)
        if (response.ok) {
            // Convertendo a resposta JSON para um objeto JavaScript e exibindo na console
            return response.json().then(function(data) {
                console.log('Post criado com sucesso:', data);
            });
        } else {
            // Caso contrário, lançamos um erro com a mensagem de status da resposta
            return Promise.reject('Erro ao criar o post: ' + response.statusText);
        }
    })
    .catch(function(error) {
        // Capturando e exibindo erros de rede ou erros de tratamento de resposta
        console.error('Erro:', error);
    });
