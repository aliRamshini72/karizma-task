import axios from 'axios';

const baseUrl: string = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : '';

async function fetch(url: string, method: string, data: any) {
    if ((!data || data === "") || data === null) data = {}; //for get method
    let headers = {
        'Content-Type': 'application/json',
    };
    try {
        // @ts-ignore
        let response = await axios({url: baseUrl + url, data: {...data}, method, headers});
        return response.data;
    } catch (e: any) {
        return {error: e.message}
    }
}


export default fetch
