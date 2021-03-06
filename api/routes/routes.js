const express = require('express');

const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  const router = express.Router();
  // Todo: Fill in your routes here
  router.route('/budget').post(budgetControllers.createBudget);

  router.route('/budget').get(budgetControllers.getBudgets);

  router.route('/budget/:id/summary').get(budgetControllers.getBudgetSummary);

  router.route('/category').post(categoryControllers.createCategory);

  router.route('/category').get(categoryControllers.getCategories);

  router.route('/expense').post(expenseControllers.createExpense);

  router.route('/expense').get(expenseControllers.getExpenses);

  router.route('/expenses').get(expenseControllers.getCategoryExpenses);

  app.use('/api', router);
};
