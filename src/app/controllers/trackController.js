const trackService = require("../services/trackService")
const responseUtil = require("../utils/responseUtil");
const jsonInstance = require("../utils/jsonUtil");

class trackController {
    async createTrack(req, res){
        try {
            const responses = {
                name: req?.body.name,
                artistId: req?.body.artistId,
                albumId:req?.body.albumId,
                duration: req?.body.duration
            };
            const result = await trackService.createTrack(
                responses.name,
                responses.artistId,
                responses.albumId,
                responses.duration,
            );
            responseUtil.success200(res, jsonInstance.jsondata("Create Track success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }
    
    async getTrack(req, res) {
        try {
            const responses = {}
            const result = await trackService.getTrack();
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get Track success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
    
    async getTrackById(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await trackService.getTrackById(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get Track success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async updateTrack(req, res) {
        try {
            const responses = {
                id:req?.params.name,
                name: req?.body.name,
                artistId: req?.body.artistId,
                albumId:req?.body.albumId,
                duration: req?.body.duration
            }
            const result = await trackService.updateTrack(
                responses.id,
                responses.name,
                responses.artistId,
                responses.albumId,
                responses.duration,
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Update Track success", result))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async deleteTrack(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await trackService.deleteTrack(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete Track success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }
}

module.exports = new trackController();