const express = require('express');
const router = express.Router();
const PORT = 8080;
const exphbs  = require('express-handlebars');
const app = express();

var hbs = exphbs.create({
    extname: '.hbs'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.static('files'));

const allUploads = require('./routes/uploads');

router.get('/',require('./routes/uploadPage'));
router.use('/vision', require('./routes/vision'));
router.use('/all',allUploads);
router.use('/remove', allUploads);
router.use('/details', require('./routes/uploadDetails'));
router.use('/upload', require('./routes/uploadPost'));

app.use('/', router);
app.listen(PORT);

console.log('Running on port : ' + PORT);
