class Wallet {
 constructor(money) {
  let _money = money;
  //Getting value of my wallet
  this.getWalletValue = () => _money;

  //Checking of user has enought money

  this.checkCanPlay = value => {
   if (_money >= value) return true;
   return false;
  }

  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("wrong action")
    }

   } else {
    console.log(typeof value);
    throw new Error("wrong number")
   }
  }

 }

}

// const wallet = new Wallet(200)
