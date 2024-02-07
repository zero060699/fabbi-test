const dataAlbum = require("../models/album");

class albumService {
    async getAlbum(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await dataAlbum.findAll()
                if (!result) {
                    return reject(new Error("get album failed"))
                }
                return resolve(result)
            } catch (error) {
                return reject(error.message)
            }
        })
    }

    async getAlbumById(id){
        try {
            const result = await dataAlbum.findByPk(id)
            if (!result) {
                throw Error("get album failed")
            }
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async createAlbum(name, year, artistId){
        try {
            let data = {
                name: name,
                year: year,
                artistId: artistId
            }
            const result = await dataAlbum.create(data)
            if(!result) {
                throw Error("create album failed")
            }
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async updateAlbum(id, name, year, artistId){
        try {
            const album = dataAlbum.findByPk(id)
            if (!album) {
                throw Error("Album is not found")
            }
            const result = await album.update({
                name:name,
                year: year,
                artistId: artistId
            })
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteAlbum(id){
        try {
            const album = await dataAlbum.findByPk(id);
            if (!album) {
                throw Error("Album is not found")
            }
            const result = await album.destroy();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }
}

module.exports = new albumService();