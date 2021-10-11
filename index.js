class User {
  constructor(username) {
    this.username = username;
    this.currency = "dollar";
    this.balance = 100;
    this.betHistory = [];
    this.unShuffledReels = {
      reel1: [
        "7",
        "bar",
        "bar",
        "bar",
        "watermelon",
        "watermelon",
        "bell",
        "peach",
        "peach",
        "peach",
        "peach",
        "peach",
        "peach",
        "peach",
        "mandarin",
        "mandarin",
        "mandarin",
        "mandarin",
        "mandarin",
        "cherry",
        "cherry",
      ],
      reel2: [
        "7",
        "bar",
        "bar",
        "watermelon",
        "watermelon",
        "bell",
        "bell",
        "bell",
        "bell",
        "bell",
        "peach",
        "peach",
        "peach",
        "mandarin",
        "mandarin",
        "mandarin",
        "mandarin",
        "mandarin",
        "cherry",
        "cherry",
        "cherry",
        "cherry",
        "cherry",
        "cherry",
      ],
      reel3: [
        "7",
        "bar",
        "watermelon",
        "watermelon",
        "bell",
        "bell",
        "bell",
        "bell",
        "bell",
        "bell",
        "bell",
        "bell",
        "peach",
        "peach",
        "peach",
        "mandarin",
        "mandarin",
        "mandarin",
        "mandarin",
        "lemon",
        "lemon",
        "lemon",
        "lemon",
      ],
    };
    this.shuffledReels = {
      reel1: [],
      reel2: [],
      reel3: [],
    };

    this.selectedSymbols = [];
  }

  bet(amount) {
    if (this.balance - amount >= 0) {
      let prize;

      this.shuffledReels = {
        reel1: this.shuffle(this.unShuffledReels.reel1),
        reel2: this.shuffle(this.unShuffledReels.reel2),
        reel3: this.shuffle(this.unShuffledReels.reel3),
      };
      this.selectedSymbols = [
        this.shuffledReels.reel1[5],
        this.shuffledReels.reel2[5],
        this.shuffledReels.reel3[5],
      ];

      const ss = this.selectedSymbols;

      const isAllEqual = (arr) => arr.every((v) => v === arr[0]);
      const switchValue = isAllEqual(ss)
        ? ss.join(" ")
        : !isAllEqual(ss) && ss[0] === "cherry"
        ? [ss[0], "win", "win"].join(" ")
        : !isAllEqual(ss) && isAllEqual(ss.slice(0, 2))
        ? [ss[0], ss[1], "win"].join(" ")
        : ss.join(" ");

      switch (switchValue) {
        case "7 7 7":
          prize = amount * 200;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "bar bar bar":
          prize = amount * 100;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "watermelon watermelon watermelon":
          prize = amount * 100;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "watermelon watermelon bar":
          prize = amount * 100;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "bell bell bell":
          prize = amount * 18;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "bel bel bar":
          prize = amount * 18;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "peach peach peach":
          prize = amount * 14;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "peach peach bar":
          prize = amount * 14;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "bar bar bar":
          prize = amount * 10;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "mandarin mandarin mandarin":
          prize = amount * 10;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "mandarin mandarin bar":
          prize = amount * 5;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "cherry cherry cherry":
          prize = amount * 10;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "cherry chery win":
          prize = amount * 5;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
        case "cherry win win":
          prize = amount * 2;
          this.balance = this.balance + prize;
          console.log(
            `Congratz ${this.username}! You won ${prize} ${this.currency}!`
          );
          break;
      }
    } else {
      console.log("Not enough balance");
    }
  }

  shuffle(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}

const serhan = new User("serhanelmali");

serhan.bet(20);
