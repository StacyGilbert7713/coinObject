let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
    },

    toString: function() {
        if (this.state === 0) {
            return 'Heads'
        } else {
            return 'Tails'
        }
    },

    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "./images/heads.png"
            image.style.width = '100px'
        } else {
            image.src = "./images/tails.png"
            image.style.width = '100px'
        }
        return image;
    }
}

    function display20Flips() {
        for (let index = 0; index < 20; index ++) {
            coin.flip()
            let displayFlips = document.createElement('p')
            displayFlips.append(coin.toString())
            document.body.append(displayFlips)
    }
}

    function display20Images() {
        for (let index = 0; index < 20; index ++) {
            coin.flip()
            document.body.append(coin.toHTML())
    }
}

display20Flips()
display20Images()
