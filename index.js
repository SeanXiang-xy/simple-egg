const Application = require('./lib/application');

const app = new Application();
const port = app.config.port || 3000;
app.start(port);