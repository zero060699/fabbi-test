const dataFavorite = require("../models/favorites");

class favoriteService {
    async getFavorite(){
        try {
            const result = await dataFavorite.findAll();
            return result
        } catch (error) {
            throw Error(error.message)
        }
    }

    async addTrack(id){
        try {
            const favorite = await dataFavorite.findOne();
            if(!favorite) {
                throw Error("track in favorite was not found")
            }
            favorite.tracks.push(id);
            const result = await favorite.save();
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteTrack(id){
        try {
            const favorite = await dataFavorite.findOne();
            if (!favorite || !favorite.tracks.includes(id)) {
              throw Error("Track was not found")
            }
            favorite.tracks = favorite.tracks.filter(id => id !== id);
            const result = await favorite.save();
            return result
          } catch (error) {
            throw Error(error.message)
          }
    }

    async addAlbum(id){
        try {
            const favorite = await dataFavorite.findOne();
            if(!favorite) {
                throw Error("album in favorite was not found")
            }
            favorite.albums.push(id);
            const result = await favorite.save();
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteAlbum(id){
        try {
            const favorite = await dataFavorite.findOne();
            if (!favorite || !favorite.albums.includes(id)) {
              throw Error("Album was not found")
            }
            favorite.albums = favorite.albums.filter(id => id !== id);
            const result = await favorite.save();
            return result
          } catch (error) {
            throw Error(error.message)
          }
    }

    async addArtist(id){
        try {
            const favorite = await dataFavorite.findOne();
            if(!favorite) {
                throw Error("Artist in favorite was not found")
            }
            favorite.artists.push(id);
            const result = await favorite.save();
            return result;
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteArtist(id){
        try {
            const favorite = await dataFavorite.findOne();
            if (!favorite || !favorite.artists.includes(id)) {
              throw Error("Artist was not found")
            }
            favorite.artists = favorite.artists.filter(id => id !== id);
            const result = await favorite.save();
            return result
          } catch (error) {
            throw Error(error.message)
          }
    }
}

module.exports = new favoriteService();