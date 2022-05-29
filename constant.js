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

const REQUESTS = {
    GET_ALL_CLIENTS : () => {
        return {
            method: 'get',
            url : API.BASE + API.ENDPOINTS.client,
            headers : {
                'Content-Type' : API.HEADERS.CONTENT_TYPE,
                'x-apikey' : process.env.APIKEY
            }
        }
    },
    GET_ALL_WORK_ENTRIES : () => {
        return {
            method: 'get',
            url : API.BASE + API.ENDPOINTS.work_entry,
            headers : {
                'Content-Type' : API.HEADERS.CONTENT_TYPE,
                'x-apikey' : process.env.APIKEY
            }
        }
    }
}

const PATH = {
    APP_TRACKER : 'tracker',
    APP_EDITOR : 'editor'
}

module.exports = {API,REQUESTS,PATH};
