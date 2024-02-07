const albumService = require("../services/albumService")
const responseUtil = require("../utils/responseUtil");
const jsonInstance = require("../utils/jsonUtil");

class albumController {
    async createAlbum(req, res){
        try {
            const responses = {
                name: req?.body.name,
                year: req?.body.year,
                artistId: req?.body.artistId
            };
            const result = await albumService.createAlbum(
                responses.name,
                responses.year,
                responses.artistId
            );
            responseUtil.success200(res, jsonInstance.jsondata("Create album success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }
    
    async getAlbum(req, res) {
        try {
            const responses = {}
            const result = await albumService.getAlbum();
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get album success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
    
    async getAlbumById(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await albumService.getAlbumById(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get album success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async updateAlbum(req, res) {
        try {
            const responses = {
                id:req?.params.id,
                name:req?.body.name,
                year:req?.body.year,
                artistId:req?.body.artistId
            }
            const result = await albumService.updateAlbum(
                responses.id,
                responses.name,
                responses.year,
                responses.artistId
            )
            responseUtil.success200(res, jsonInstance.toJsonWithData("Update album success", result))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }

    async deleteAlbum(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await albumService.deleteAlbum(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete album success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }
}

module.exports = new albumController();