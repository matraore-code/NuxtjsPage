const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');
const user = require('../models/user');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post('/signup',
    [
        check('formule').not().isEmpty(),
        check('name').not().isEmpty(),
        check('surname').not().isEmpty(),
        check('address').not().isEmpty(),
        check('city').not().isEmpty(),
        check('country').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength( { min: 8 }),
        check('telephone').not().isEmpty(),
        check('biography').not().isEmpty()
    ],
    usersControllers.signup
);

router.post('/login', usersControllers.login);

module.exports = router;