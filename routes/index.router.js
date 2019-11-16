const express = require('express');
const router = express.Router();


const ctrlAdmin= require('../controllers/admin/crud');
router.post('/newAdmin', ctrlAdmin.addAdmin);
router.get('/readAdmin/:id', ctrlAdmin.readAdmin);
router.put('/updateAdmin/:id', ctrlAdmin.updateAdmin);
router.delete('/deleteAdmin/:id', ctrlAdmin.deleteAdmin);


module.exports = router;
