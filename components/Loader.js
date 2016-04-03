export default flight.component(function() {
    this.hideLoader = function() {
        this.$node.removeClass('active');
    };
    this.showLoader = function() {
        this.$node.addClass('active');
    };
    this.after('initialize', function() {
        this.on(document, 'hideLoader', this.hideLoader);
        this.on(document, 'showLoader', this.showLoader);
    });
});