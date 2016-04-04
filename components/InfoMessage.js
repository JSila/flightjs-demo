export default flight.component(function() {

    this.after('initialize', function() {
        this.$node.find('.close').on('click', function() {
            $(this).closest('.message').transition('fade');
        })
    })
})