"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const controllers_1 = require("./controllers");
let app = express_1.default();
app.use(bodyParser.json());
app.get('/page', (req, res) => {
    res.status(200).send({
        title: 'Hello, Express!',
        content: '...'
    });
});
// app.get('/data', (req: Request, res: Response) => peoples.get);
app.get('/peoples', (req, res) => controllers_1.peoples.get()
    .then(people => res.status(200).send(people)));
app.post('/peoples', (req, res) => {
    return controllers_1.peoples.create(req.body)
        .then(people => res.status(200).send(people));
});
exports.default = app;
//# sourceMappingURL=app.js.map