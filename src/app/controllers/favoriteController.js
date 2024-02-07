const favoriteService = require("../services/favoriteService")
const responseUtil = require("../utils/responseUtil");
const jsonInstance = require("../utils/jsonUtil");

class favoriteController {
    async addTrack(req, res){
        try {
            const responses = {
                id: req?.params.id,
            };
            const result = await favoriteService.addTrack(
                responses.id,
            );
            responseUtil.success200(res, jsonInstance.jsondata("add track success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }
    
    async getFavorite(req, res) {
        try {
            const responses = {}
            const result = await favoriteService.getFavorite();
            responseUtil.success200(res, jsonInstance.toJsonWithData("Get facorite success", result));
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsonNoData(error.message))
        }
    }
    

    async deleteTrack(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await favoriteService.deleteTrack(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete track success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }

    async addAlbum(req, res){
        try {
            const responses = {
                id: req?.params.id,
            };
            const result = await favoriteService.addAlbum(
                responses.id,
            );
            responseUtil.success200(res, jsonInstance.jsondata("add album success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }

    async deleteAlbum(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await favoriteService.deleteAlbum(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete album success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }

    async addArtist(req, res){
        try {
            const responses = {
                id: req?.params.id,
            };
            const result = await favoriteService.addArtist(
                responses.id,
            );
            responseUtil.success200(res, jsonInstance.jsondata("add artist success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))            
        }
    }

    async deleteArtist(req, res) {
        try {
            const responses = {
                id:req?.params.id
            }
            const result = await favoriteService.deleteArtist(
                responses.id
            )
            responseUtil.success200(res, jsonInstance.jsondata("delete artist success"))
        } catch (error) {
            responseUtil.error400(res, jsonInstance.jsondata(error.message))
        }
    }
}

module.exports = new favoriteController();