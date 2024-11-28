const express= require('express');
const routes= express.Router();

const {createOffice,getAllOffices,getOffice}= require('../controllers/officeController')

routes.post('/office/create',createOffice);
routes.get('/office/get',getAllOffices);
routes.get('/office/getone/:officeCode',getOffice);

module.exports=routes;

