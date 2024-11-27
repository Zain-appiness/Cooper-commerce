const express= require('express');
const routes= express.Router();

const {createOffice,getAllOffices,getOffice}= require('../controllers/officeController')

routes.use('/office/create',createOffice);
routes.use('/office/get',getAllOffices);
routes.use('/office/getone/:officeCode',createOffice);

module.exports=routes;

