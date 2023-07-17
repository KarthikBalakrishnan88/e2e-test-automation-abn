require('dotenv').config();

//Environment URLS
const envURL = 'http://localhost:5050';

export function getEnvironmentURL() {
    return envURL;
}

export function getLoginPageURL() {
    return `${envURL}/index.html`;
}