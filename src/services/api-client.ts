

import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '4d511884fdae4c5c8b940d06ef45ec57'
    }
})