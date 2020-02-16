import Axios from 'axios';

export class RestDataHandler {

    constructor(base_url, errorCallBack) {
        this.BASE_URL = base_url;
        this.handleError = errorCallBack;
    }


    GetData(callback) {
        this.sendRequest('get', this.BASE_URL, callback);
    }


    async GetOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
    }

    async Store(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
    }

    async Update(data, callback) {
        this.SendRequest("put", this.BASE_URL, callback, data);
    }

    async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async sendRequest(method, url, callback, data) {
        try {

            const response = await Axios.request({
                method: method,
                url: url,
                data: data
            });

            callback(response.data);
        } catch (err) {
            this.handleError("Operation Failed: Network Error");
        }
    }
}