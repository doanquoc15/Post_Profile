const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/update', (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body)
    }, [2000])
});

app.listen(8080, () => {
    console.log('Server running with port : 8080')
})