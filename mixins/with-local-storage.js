export default function() {
    this.localStorage = {};

    this.localStorage.set = function(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    this.localStorage.get = function(key) {
        let value = window.localStorage.getItem(key);
        return JSON.parse(value);
    };
}