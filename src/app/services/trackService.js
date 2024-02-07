const dataTrack = require("../models/track");

class trackService {
    async getTrack(){
        try {
            const result = await dataTrack.findAll();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async getTrackById(id){
        try {
            const result = await dataTrack.findByPk(id)
            if (!result) {
                throw Error("get track failed")
            }
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async createTrack( name, artistId, albumId, duration) {
        try {
            let data = {
                name: name,
                artistId: artistId,
                albumId:albumId,
                duration: duration
            }
            const result = await dataTrack.create(data);
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async updateTrack(name, artistId, albumId, duration) {
        try {
            const artist = await dataTrack.findByPk(id);
            if(!artist){
                throw Error("track not found")
            }
            const result = await artist.update({
                name:name,
                artistId:artistId,
                albumId:albumId,
                duration:duration
            })
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteTrack(id){
        try {
            const track = await dataArtist.findByPk(id);
            if(!track){
                throw Error("track not found");
            }
            const result = await track.destroy();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }
}

module.exports = new trackService();