const userService = require("../services/userService")
const responseUtil = require("../utils/responseUtil");
const jsonInstance = require("../utils/jsonUtil");

class userController {
    async createUser(req, res){
        try {
            const responses = {
                login: req?.body.login,
                password: req?.body.password,
                version: req?.body.version
            };
            const result = await userService.createUser(
                responses.login,
                responses.password,
                responses.version
            );
            responseUtil.success200(res, jsonInstance.jsondata("Create user success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }
    
    async getUser(req, res) {
        try {
            const responses = {}
            const result = await userService.getUser();
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get user success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
    
    async getUserById(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await userService.getUserById(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get user success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
}

module.exports = new userController();