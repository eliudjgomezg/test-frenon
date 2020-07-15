const {
    get_all_AppUsers,
    get_one_AppUser,
    login_post,
    post_AppUser,
    put_AppUser,
    delete_one_totel,
    delete_all_AppUsers
 } = require("./controllers");

module.exports.run = (app) => {

    app.get('/api/v1/get_all_AppUsers/', get_all_AppUsers)
    app.get('/api/v1/get_one_AppUser/:id', get_one_AppUser)
    app.post('/api/v1/post_loginAppUser/', login_post)
    app.post('/api/v1/post_AppUser/', post_AppUser)
    app.put('/api/v1/put_AppUser/:id', put_AppUser)
    app.delete('/api/v1/delete_one_totel/:id', delete_one_totel)
    app.delete('/api/v1/delete_all_AppUsers/', delete_all_AppUsers)
}