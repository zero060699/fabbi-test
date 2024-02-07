const dataUser = require("../models/user");
const bcrypt = require('bcrypt');

class userService {
    async createUser(login, password, version){
        try{
            const passwordHash = await bcrypt.hash(password, 10);
            const dateUser = Date.now();
            let data = {
                login: login,
                password: passwordHash,
                version: version,
                createdAt: dateUser,
                updatedAt: null
            }
            return new Promise(async (resolve, reject)=>{
                try {
                    const result = await dataUser.create(data);
                    if(!result) {
                        return reject(new Error("Created user failed"))
                    }
                    return resolve(result.get({ plain: true }))
                } catch (error) {
                    return reject(error.message)
                }
            })
        }catch(error){
            throw Error(error);
        }
    }

    async getUser(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await dataUser.findAll({
                    attributes: ["id", "login", "version", "createdAt", "updatedAt"],
                    // offset: parseInt((page -1) * perpage),
                    // limit: parseInt(perpage),
                    raw: true,
                });
                if (!result) {
                    return reject(new Error("get user failed"));
                }
                return resolve(result);
            } catch (error) {
                return reject(error.message);
            }
        })
    }

    async getUserById(id){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await dataUser.find({
                    where:{
                        id:id
                    },
                    attributes: ["id", "login", "version", "createdAt", "updatedAt"],
                    raw: true,
                });
                if (!result) {
                    return reject(new Error("get user failed"));
                }
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

    async updatePassWord(id, oldPass, newPass) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await dataUser.findByPk(id);
                const updateAt = Date.now()
                if (!user) {
                    throw new Error('User not found');
                }

                const isPasswordCorrect = await bcrypt.compare(oldPass, user.password);
                if (!isPasswordCorrect) {
                    throw new Error('Incorrect old password')
                }

                const hashedPassword = await bcrypt.hash(newPass, 10);
                result = await dataUser.update(
                    { password: hashedPassword , updatedAt: updateAt}, { where: { id: id } });
                return resolve(result)
            } catch (error) {
                return reject(error)
            }
        })
    }

    async deleteUser(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = dataUser.destroy({
                    where:{
                        id:id
                    }
                })
                if (!result) {
                    return reject(new Error("delete user failed"));
                }
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

}

module.exports = new userService();