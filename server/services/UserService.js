import models from "../models/index.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class UserService {
    createUser = async (userData) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new models.User({
            ...userData,
            password: hashedPassword
        });
        await user.save();
    };

    login = async (email, password) => {
        const user = await models.User.findOne({ email });
        if (!user) {
            const msg = "User not found"
            throw new Error(msg)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const msg = "Invalid password"
            throw new Error(msg)
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {token, user}
    }

    static async hashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        } catch (error) {
            logger.error("Error while hashing password", error.message)
            throw new Error(message);
        }
    }

    getUser = async(req) =>{
        const users = await models.User.findAll({
            attributes: ["id", "first_name", "last_name", "email", "phone"]
        })
        return users
    }

    getUserById = async (id) => {
        return await models.User.findByPk(id,{
            attributes: ["id", "first_name", "last_name", "email", "phone"]
        });
    };

    updateUserById = async (userId, userData) => {
        return await models.User.findByIdAndUpdate(userId, userData, { new: true });
    };

    deleteUserById = async (userId) => {
        return await models.User.findByIdAndDelete(userId);
    };

}