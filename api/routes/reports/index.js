const {
    get_all_reports,
    get_one_report,
    post_report,
    put_report,
    delete_one_report,
    delete_all_reports
 } = require("./controllers");

module.exports.run = (app) => {

    app.get('/api/v1/get_all_reports/', get_all_reports)
    app.get('/api/v1/get_one_report/:id', get_one_report)
    app.post('/api/v1/post_report/', post_report)
    app.put('/api/v1/put_report/:id', put_report)
    app.delete('/api/v1/delete_one_report/:id', delete_one_report)
    app.delete('/api/v1/delete_all_reports/', delete_all_reports)
}