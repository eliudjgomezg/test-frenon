const {
    get_all_hotels,
    get_one_hotel,
    post_hotel,
    put_hotel,
    delete_one_totel,
    delete_all_hotels
 } = require("./controllers");

module.exports.run = (app) => {

    app.get('/api/v1/get_all_hotels/', get_all_hotels)
    app.get('/api/v1/get_one_hotel/:id', get_one_hotel)
    app.post('/api/v1/post_hotel/', post_hotel)
    app.put('/api/v1/put_hotel/:id', put_hotel)
    app.delete('/api/v1/delete_one_totel/:id', delete_one_totel)
    app.delete('/api/v1/delete_all_hotels/', delete_all_hotels)
}