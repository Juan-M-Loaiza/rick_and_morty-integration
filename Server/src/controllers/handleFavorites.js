let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    console.log(req.body)

    myFavorites.push(character);

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    const favsFilters = myFavorites.filter((fav) => fav.id !== id);
    console.log(id);
    return res.status(200).json(favsFilters)

};

module.exports = {
    postFav,
    deleteFav
}