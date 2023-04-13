fetch('http://localhost:3001/', {
    method: 'GET'
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));