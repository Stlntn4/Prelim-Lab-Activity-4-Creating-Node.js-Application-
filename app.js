const express = require('express');
const app = express();
const port = 3000;

const root = require('./modules/root');       
const about = require('./modules/about');
const contact = require('./modules/contact');

const userName = "John Smith";

app.get('/', (req, res) => {
    const content = root(userName);            
    res.send(`
        ${content}
        <footer><hr><p>Sherene Tolentino | 2025-07-14 | WD-302</p></footer>
    `);
});

app.get('/about', (req, res) => {
    const content = about(userName);
    res.send(`
        ${content}
        <footer><hr><p>Sherene Tolentino | 2025-07-14 | WD-302</p></footer>
    `);
});

app.get('/contact', (req, res) => {
    const content = contact(userName);
    res.send(`
        ${content}
        <footer><hr><p>Sherene Tolentino | 2025-07-14 | WD-302</p></footer>
    `);
});

app.get('/gallery', (req, res) => {
    res.send(`
        <h1>This is the Gallery Page</h1>
        <footer><hr><p>Sherene Tolentino | 2025-07-14 | WD-302</p></footer>
    `);
});

app.use((req, res) => {
    res.status(404).send(`
        <h1>Invalid Request</h1>
        <p>The page you requested does not exist.</p>
        <footer><hr><p>Sherene Tolentino | 2025-07-14 | WD-302</p></footer>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
