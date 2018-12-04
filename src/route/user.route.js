const express = require('express');
//const userController = require('"../controller/user.controller"');

const router = express.Router()

// Login routers details
router.get('/logout', (req, res) => {
    
});
// Login routers details
router.get('/login', (req, res) => {

});
router.post('/login', (req, res) => {
    userController.checkUser(req,res);
});

module.exports = router;

//export default router;