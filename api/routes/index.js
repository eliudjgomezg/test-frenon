const hotels_route = require("./hotels") 
const noifications_route = require("./notifications") 
const users_route = require("./users") 
const reports_route = require("./reports") 
const appUsers_route = require("./app_user") 

module.exports.run = (app) => {
    hotels_route.run(app)
    noifications_route.run(app)
    users_route.run(app)
    reports_route.run(app)
    appUsers_route.run(app)
}   