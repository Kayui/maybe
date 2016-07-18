class Jerk {
    constructor(x, y, height, width) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.communicate = false;
        this.mahjing = "";
        this.crapToSay = [
            "You can discover more about a person in an hour of play than in a year of conversation.",
            "I celebrate myself, and sing myself.",
            "On the plus side, death is one of the few things that can be done just as easily lying down.",
            "When you get to the end of your rope, tie a knot and hang on.",
            "The cure for writer's cramp is writer's block.",
            "Never give a party if you will be the most interesting person there.",
            "A pound of pluck is worth a ton of luck.",
            "To do just the opposite is also a form of imitation.",
            "You can tell a lot about a fellow's character by his way of eating jellybeans.",
            "If the facts don't fit the theory, change the facts.",
            "We could never learn to be brave and patient, if there were only joy in the world.",
            "It is easier to stay out than get out.",
            "Only the shallow know themselves."
        ];
    }

    jerkAround(x, y, _ctx) {
        if (x > this.x) {
            this.x += 3;
        } else {
            this.x -= 3;
        }

        if (y > this.y) {
            this.y += 3;
        } else {
            this.y -= 3;
        }

        if (Math.abs(x - this.x) < 10 || Math.abs(y - this.y) < 10) {
            if(!this.communicate){
              this.mahjing = this.crapToSay[Math.floor(Math.random()*this.crapToSay.length)];
              this.communicate = true;
              this.communicateDuration = 60;
            }
        }
        if (this.communicate) {
            this.attemptToCommunicate(_ctx);
            this.communicateDuration--;
            if (this.communicateDuration <= 0) {
                this.communicate = false;
            }
        }

        this.draw(_ctx);
    }

    attemptToCommunicate(_ctx) {
        _ctx.font = "20px Arial";
        _ctx.fillStyle = "red";
        _ctx.textAlign = "center";
        _ctx.fillText(this.mahjing, this.x, this.y + 50);
    }



    draw(_ctx) {
        _ctx.beginPath();
        _ctx.strokeStyle = "#DFE5FA";
        _ctx.lineWidth = 2;
        _ctx.strokeRect(this.x, this.y, this.height, this.width);
        _ctx.closePath();
        _ctx.fill();
    }
}
