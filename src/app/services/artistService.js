const dataArtist = require("../models/artist");

class artistService {
    async getArtist(){
        try {
            const result = await dataArtist.findAll();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async getArtistById(id){
        try {
            const result = await dataArtist.findByPk(id)
            if (!result) {
                throw Error("get artist failed")
            }
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async createArtist(name, grammy) {
        try {
            let data = {
                name: name,
                grammy: grammy
            }
            const result = await dataArtist.create(data);
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async updateArtist(id, name, grammy) {
        try {
            const artist = await dataArtist.findByPk(id);
            if(!artist){
                throw Error("artist not found")
            }
            const result = await artist.update({
                name:name,
                grammy:grammy
            })
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteArtist(id){
        try {
            const artist = await dataArtist.findByPk(id);
            if(!artist){
                throw Error("Artist not found");
            }
            const result = await artist.destroy();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }
}

module.exports = new artistService();