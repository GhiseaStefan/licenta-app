const router = require('express').Router();
const { registerUser, loginUser, authUser, logoutUser, modifyUser, forgotPasswordUser, resetPasswordUser, updateCart, getCart } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/auth').get(authUser);
router.route('/logout').get(logoutUser);
router.route('/modify').put(modifyUser);
router.route('/forgotPassword').post(forgotPasswordUser);
router.route('/resetPassword/:token').post(resetPasswordUser);
router.route('/updateCart').put(updateCart).get(getCart);

module.exports = router;