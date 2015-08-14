"use strict";
class GitProxy {
    constructor() {
        this.domain = "https://api.github.com/repos";
        //ToDo: Pass in json to set these values.
        this.user = "jpmedley";
        this.repo = "canary";
        this.path = this.domain + "/" + this.user + "/" + this.repo + "/";
    }
    getURL(state) {
        return this.path + "pulls?state=" + state;
    }
    getInit() {
        var getHeaders = new Headers();
        getHeaders.append('Accept', 'application/json');
        getHeaders.append('Origin','https://www.google.com');
        var getInit = { method: 'GET',
                        headers: getHeaders,
                        mode: 'cors',
                        cache: 'default' };
        return getInit;

    }
    getRequest(state) {
        return new Request(this.getURL(state), this.getInit());
    }
    getMerges(state) {
        return fetch(this.getURL(state), this.getInit())
        .then(function(response) {
              //console.log(response);
              return response.text();
              })
        .then(function(response) {
              //console.log(response);
              return JSON.parse(response);
              })
    }
}
