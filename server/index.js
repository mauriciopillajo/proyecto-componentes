const express = requiere('express');
const app = express();

app.get('/api',(req, res)=>{
res.send('Hello word from express!');
});

app.listen(1234);

