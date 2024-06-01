const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const expenseRouters = require('./routers/expense');

const Expense = require('./models/expense');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

app.expenseRouters = require('./models/expense');

app.use(bodyParser.json({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expense', expenseRouters);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'expense.html'));
})

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));