import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            autoCount: 0,
        }
    },

    computed: {
        ...mapState({
            currentCount: state => state.counter
        })
    },

    methods: {
        ...mapActions(['setCounter']),

        incrementCounter: function () {
            var counter = this.currentCount + 1;
            this.setCounter({ counter: counter });
        },
        resetCounter: function () {
            this.setCounter({ counter: 0 });
            this.autoCount = 0;
        }
    },

    created() {
        setInterval(() => {
            this.autoCount += 1
        }, 1000)
    }
}
