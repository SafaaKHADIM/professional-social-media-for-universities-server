const express = require('express');
const router = express.Router();


const ctrlAdmin= require('../controllers/admin/crud');
router.post('/', ctrlAdmin.addAdmin);
router.get('/:id', ctrlAdmin.readAdmin);
router.put('/:id', ctrlAdmin.updateAdmin);
router.delete('/:id', ctrlAdmin.deleteAdmin);


module.exports = router;
