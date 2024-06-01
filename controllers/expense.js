const Expense = require('../models/expense');

const addExpense = async (req, res, next) => {
    try{
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await Expense.create({amount: amount, description: description, category: category});
        res.status(201).json({newExpenseDetail: data});
    } catch(error) {
        res.status(500).json({error})
    }
}

const getExpenses = async (req, res, next) => {
    try{
        const expenses = await Expense.findAll();
        res.status(200).json({allExpenses: expenses});
    } catch(error) {
        console.log('Get user is falling', json.stringify(error));
        res.status(500).json({error: error})
    }
}

const deleteExpense = async (req, res) => {
    try {
        if(req.params.id === 'undefined') {
            console.log('ID is missing')
            return res.status(400).json({error: 'ID is missing'})
        }
        const eId = req.params.id;
        await Expense.destroy({where: {id: eId}});
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = {
    addExpense,
    getExpenses,
    deleteExpense
}