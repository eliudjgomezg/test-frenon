const {
    get_all_notifications,
    get_one_notification,
    post_notification,
    put_notification,
    delete_one_notification,
    delete_all_notifications
 } = require("./controllers");

module.exports.run = (app) => {

    app.get('/api/v1/get_all_notifications/', get_all_notifications)
    app.get('/api/v1/get_one_notification/:id', get_one_notification)
    app.post('/api/v1/post_notification/', post_notification)
    app.put('/api/v1/put_notification/:id', put_notification)
    app.delete('/api/v1/delete_one_notification/:id', delete_one_notification)
    app.delete('/api/v1/delete_all_notifications/', delete_all_notifications)
}