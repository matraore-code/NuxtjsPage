const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

const User = require('../models/user');

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError('Fetching Users failed, please try again later!', 422);
        return next(error);
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid Inputs Passed, Please Check your Data!', 422);
        return next(error);
    }

    const {
        email,
        password,
    } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError('Signing Up Failed, Please Try Again Later!', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('User exists Already, Please Login Instead!', 422);
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError('Could not Create User, Please Try again!', 500);
        return next(error);
    }

    const createdUser = new User({
        formule: req.body.formule,
        photo: req.file && req.file.path || "",
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        codePostal: req.body.codePostal,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        email: email,
        password: hashedPassword,
        telephone: req.body.telephone,
        whatsapp: req.body.whatsapp,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        fax: req.body.fax,
        github: req.body.github,
        biography: req.body.biography,
        notes: [],
        rappels: []
    });

    try {
        await createdUser.save();
    } catch (err) {
        console.log(err);
        const error = new HttpError('Signing Up Failed, Please Try again!', 500);
        return next(error);
    }

    let token;

    try {
        token = jwt.sign(
            { userId: createdUser.id, email: email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new HttpError('Signing Up Failed, Please Try again!', 500);
        return next(error);
    }

    res.status(201).json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Logging In Failed, Please Try again Later!", 500);
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError("Invalid Credentials, Could not Login!", 403);
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError("Could not Log you in, Please check your Credentials and Try again!", 500);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError("Invalid Credentials, Could not Log you in!", 403);
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new HttpError("Logging in Failed, Please Try again!", 500);
        return next(error);
    }

    res.json({ userId: existingUser.id, email: existingUser.email, token: token });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;