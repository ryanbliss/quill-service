import express from 'express';
import bodyParser from 'body-parser';
const { convertHtmlToDelta, convertDeltaToHtml, convertTextToDelta, } = require('node-quill-converter');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/delta', (req, res) => {
    const html = req.body.html;
    res.send(convertHtmlToDelta(html));
});

app.post('/html', (req, res) => {
    const delta = req.body;
    res.send(convertDeltaToHtml(delta));
});

app.post('/text', (req, res) => {
    const delta = req.body.delta;
    res.send(convertTextToDelta(delta));
});

app.listen(3000, function() {
    console.log('Quill service listening on port 3000!');
});