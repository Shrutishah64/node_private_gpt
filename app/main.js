let express = require("express");
const bodyParser = require("body-parser");

const indexRouter = require('./routes/index');

let app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb' }));

app.use('/', indexRouter);	

app.listen(3003, () => {
	console.log('hello.... server ................');
})
