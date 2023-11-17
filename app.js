const app =  Vue.createApp({
    data() {
        return {
            Nama: 'LULUT PUTRA',
            Usia: 25
        }
    },
    methods: {
        HitungUmur() {
            return this.Usia + 20;
        },
        AcakNomor() {
            return Math.random();
        }
    }
});

app.mount('#assignment')