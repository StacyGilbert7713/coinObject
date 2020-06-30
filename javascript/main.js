let coin = {
    state: 0,

    flip: function() {
        this.state= Math.round(Math.random(0,1));
    },
    
    toString: function() {
    
        if(this.state === 0) {
           return 'Heads'
        }

        if(this.state === 1) {
           return 'Tails'
        }      
    },

    toHTML: function() {
  
        let Heads = document.createElement('img');
        let Tails = document.createElement('img');
        Heads.src = './images/Heads.png'
        Tails.src = './images/Tails.png'
        Heads.style.height = '100px'
        Tails.style.height = '100px'

        if (this.state === 0) {
            return document.body.appendChild(Heads) 
        }

        if (this.state === 1) {
            return document.body.appendChild(Tails)
        }
    },
    