function generateRandomNumber() {
    const exclusions = [111, 222, 333, 444, 555, 666, 777, 888, 999];  
    let randomNumber = Math.floor(Math.random() * 899)+100;
    console.log(`randomNumber 1st pass is: ${randomNumber}`);
    while (exclusions.includes(randomNumber) && randomNumber.length < 3){
      randomNumber = Math.floor(Math.random() * 1000);
    }
    const correctNumber = Array.from(String(randomNumber), Number);
    // this.setState({ correctCode: correctNumber});
    return correctNumber;
}


    for(let i =0; i < 1000; i++) {
        console.log(generateRandomNumber());
    }

  