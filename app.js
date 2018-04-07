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
            var damage = this.calculateDamage('attack');
            this.monsterHealth -= damage;

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
            this.checkWin();
        },
        specialAttack: function () {
            var damage = this.calculateDamage('specialAttack');
            this.monsterHealth -= damage;

            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
            this.checkWin();
        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function (attackType) {
            if (attackType === 'attack') {
                return Math.round(10 * Math.random());
            }

            if (attackType === 'specialAttack') {
                return Math.round(30 * Math.random());
            }

        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    alert('You won!')
                    this.gameIsRunning = false;
                }
                return true;
            }

            if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack : function () {
            damage = this.calculateDamage('attack');
            this.playerHealth -= damage;
        }
    }
})