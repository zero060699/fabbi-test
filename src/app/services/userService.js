const dataUser = require("../models/user")

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
                return reject(error);
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
                
            } catch (error) {
                
            }
        })
    }

    async deleteUser(id) {
        return new Promise(async (resolve, reject) => {
            try {
                
            } catch (error) {
                
            }
        })
    }

}

module.exports = new userService();