import axios from 'axios';

export default class AppService {
    // abajo: constructor(urlRequerida) {...
    constructor() {
        // abajo: `...src/data/${urlRequerida}.json`
        this.url = 'https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/src/data';
    }

    async list(aea) {
        try {
            return await axios.get(`${this.url}${aea}`);
        } catch (error) {
            throw error;
        }
    }

}
