const express = require('path'),
const session = require('express-session');
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const expressHandlebars = require('express-handlebars');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

const secret = {
    secret: 'anyone',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(secret));

const handle = expressHandlebars.create({ helpers });

app.engine('handlebars', handle.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers/'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
