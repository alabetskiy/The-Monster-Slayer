new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
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
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();

        },
        specialAttack: function () {
            var damage = this.calculateDamage('specialAttack');
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
            this.checkWin();
        },
        heal: function () {
            this.playerHealth += 10;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
                this.monsterAttack();
                return;
            }

            this.monsterAttack();

        },
        giveUp: function () {
            this.gameIsRunning = false;
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
        monsterAttack: function () {
            damage = this.calculateDamage('attack');
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        }
    }
})