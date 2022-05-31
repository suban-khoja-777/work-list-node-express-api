const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


const API = {
    BASE : 'https://worklist1-935b.restdb.io/rest/',
    ENDPOINTS : {
        work_entry : "work-entry",
        client : "client"
    },
    HEADERS : {
        CONTENT_TYPE : "application/json",
        API_KEY : process.env.APIKEY
    }
}

const PATH = {
    APP_TRACKER : 'tracker',
    APP_EDITOR : 'editor'
}

module.exports = {API,PATH};
