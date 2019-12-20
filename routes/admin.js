const express = require('express');
const router = express.Router();


const ctrlAdmin= require('../controllers/admin/crud');
const uploads= require('../controllers/user/uploadpicture');

router.post('/', ctrlAdmin.addAdmin);
router.get('/:id', ctrlAdmin.readAdmin);
router.put('/:id', ctrlAdmin.updateAdmin);
router.delete('/:id', ctrlAdmin.deleteAdmin);

router.post('/upload',uploads.upload);

module.exports = router;
