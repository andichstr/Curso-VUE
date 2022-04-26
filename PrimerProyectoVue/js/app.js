var app = new Vue({
    el: "#app",
    data: {
        mensajeInicial: "Primer proyecto Vue 2",
        numA: 10,
        numB: 5,
    },
    methods: {
        restarBporA() {
        return this.numB - this.numA;
        },
    },
    computed: {
        dividirAporB() {
            return this.numA / this.numB;
        }
    }
});