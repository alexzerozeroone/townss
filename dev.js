const server = require("express")();
const server_port = 25564;

server.get("/", (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`);
});

server.get("/changelog", (req, res) => {
    res.sendFile(`${__dirname}/html/changelog.html`);
});

server.get("/js/:file", (req, res) => {
    res.sendFile(`${__dirname}/js/${req.params.file}`);
});

server.get("/lib/:file", (req, res) => {
    res.sendFile(`${__dirname}/library/${req.params.file}`);
});

server.get("/css/:file", (req, res) => {
    res.sendFile(`${__dirname}/css/${req.params.file}`);
});

server.get("/data/:file", (req, res) => {
    res.sendFile(`${__dirname}/data/${req.params.file}`);
});

server.get("/assets/:file", (req, res) => {
    res.sendFile(`${__dirname}/assets/${req.params.file}`);
});

server.listen(server_port, () => {
    console.log(`server.start http://localhost:${server_port}`);
});
