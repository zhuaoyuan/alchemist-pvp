var vapp = new Vue({
    el: '#vapp',
    data: {
        n1: 'x'
    },
    methods: {
        alert: function () {
            alert(this.n1)
        }
    },
    watch: {
    },
    mounted: function () {
    }
});
