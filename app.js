new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            var damage = Math.round(10 * Math.random());
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert('You won!!!');
                this.gameIsRunning = false;
            }
            damage = Math.round(10 * Math.random());
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert('Monster won!!!');
                this.gameIsRunning = false;
            }

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    }
})