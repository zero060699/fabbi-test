const artistService = require("../services/artistService")
const responseUtil = require("../utils/responseUtil");
const jsonInstance = require("../utils/jsonUtil");

class artistController {
    async createArtist(req, res){
        try {
            const responses = {
                name: req?.body.name,
                grammy: req?.body.grammy,
            };
            const result = await artistService.createArtist(
                responses.name,
                responses.grammy,
            );
            responseUtil.success200(res, jsonInstance.jsondata("Create Artist success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }
    
    async getArtist(req, res) {
        try {
            const responses = {}
            const result = await artistService.getArtist();
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get Artist success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
    
    async getArtistById(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await artistService.getArtistById(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get Artist success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async updateArtist(req, res) {
        try {
            const responses = {
                id:req?.params.id,
                name:req?.body.name,
                grammy:req?.body.grammy
            }
            const result = await artistService.updateArtist(
                responses.id,
                responses.name,
                responses.grammy
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Update Artist success", result))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async deleteArtist(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await artistService.deleteArtist(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete Artist success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }
}

module.exports = new artistController();