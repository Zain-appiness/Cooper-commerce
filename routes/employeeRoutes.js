const express= require('express');
const router= express.Router();

const {createEmployee,getEmployee}= require('../controllers/employeeController');

router.post('/employee/create',createEmployee);router
router.get('/employee/get',getEmployee);

module.exports= router;