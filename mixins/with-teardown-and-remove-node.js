function withTeardownAndRemoveNode() {
    this.teardownAndRemoveNode = function () {
        this.$node.remove();
        this.teardown();
    }
}

export default withTeardownAndRemoveNode