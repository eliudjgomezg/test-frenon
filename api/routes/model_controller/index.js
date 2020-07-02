const {
    get_all_collection,
    get_one_collection,
    post_collection,
    put_collection,
    delete_one_collection,
    delete_all_collection
 } = require("./controllers");

module.exports.run = (app) => {

    app.get('/api/v1/get_all_collection/', get_all_collection)
    app.get('/api/v1/get_one_collection/:id', get_one_collection)
    app.post('/api/v1/post_collection/', post_collection)
    app.put('/api/v1/put_collection/:id', put_collection)
    app.delete('/api/v1/delete_one_collection/:id', delete_one_collection)
    app.delete('/api/v1/delete_all_collection/', delete_all_collection)
}