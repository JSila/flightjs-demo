import store from '../store'

function withRedux() {
    this.store = {};
    this.store.subscribe = function(callback) {
        store.subscribe(function() {
            callback(store.getState());
        })
    }

    this.store.dispatch = function(action) {
        store.dispatch(action);
    }
}

export default withRedux