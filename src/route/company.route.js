const express = require('express');
//import companyController from "../controller/company.controller"
//import userController from "../controller/user.controller"

const router = express.Router()

router.get('/allcompany', (req, res) => {
    bookController.getAll(req, res);
});

router.get('/addCompany', (req, res) => {
    bookController.getAuthors(req, res);
});

router.post('/addCompany', (req, res) => {
    bookController.addBook(req, res);
});

module.exports = router;

//export default router;