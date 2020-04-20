"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
class User {
    constructor(id, name, email, password, birthdate, photo) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.photo = photo;
        this.getId = () => this.id;
        this.getName = () => this.name;
        this.getEmail = () => this.email;
        this.getPassword = () => this.password;
        this.getbirthDate = () => this.birthdate;
        this.getPhoto = () => this.photo;
    }
    static generateToken(id) {
        const jwtKey = process.env.JWT_KEY;
        const token = jwt.sign({ id }, jwtKey, { expiresIn: "24h" });
        return token;
    }
    static getTokenData(token) {
        const jwtKey = process.env.JWT_KEY;
        const tokenData = jwt.verify(token, jwtKey);
        return tokenData;
    }
    static encryptPassword(password) {
        const jwtKey = process.env.JWT_KEY;
        const token = jwt.sign({ password }, jwtKey, { expiresIn: "2400000000000000000000000000000h" });
        return token;
    }
    static checkPassword(password, hashPassword) {
        const jwtKey = process.env.JWT_KEY;
        const tokenData = jwt.verify(hashPassword, jwtKey);
        return (tokenData.password === password);
    }
}
exports.default = User;
