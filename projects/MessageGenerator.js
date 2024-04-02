/* Uses switch statements and random function to generate a user message
    
let num = Math.floor(Math.random() * 9);

const MessageGenerator = (num) => {

   switch (num) {
       case 0:
       return 'Your day will be sunny and bright!'
       break;

       case 1:
       return 'It will be rainy tomorrow.'
       break;

       case 2:
       return 'Your boyfriend will dump you.'
       break;
       
       case 3:
       return 'You will be rich in 5 years!'
       break;

       case 4:
       return 'A present will arrive to you from your mother!'
       break;

       case 5:
       return 'Your wife will birth you a son!'
       break;

       case 6:
       return 'You will break your phone in a few days.'
       break;

       case 7:
       return 'You have won the lottery!'
       break;

       case 8:
       return 'You will die in a few months.'
       break;

       case 9:
       return 'A dog will come to you soon and give you children'
       break;
   }
}

console.log(`Hello I am a fortune teller! Your number for today is: ${num}`);

console.log(`Your message for today is:  [${MessageGenerator(num)}]`); */

/* Uses arrays and creates a function to join the array together to form a message */

const MessageGenerator = {
    subjectArray: ['I am', 'You are', 'We are', 'They did'],
    endArray: ['James', 'married', 'working', 'dinner'] ,

    set subArr (subjectArray) {
        this.subjectArray = subjectArray;
    },

    set endArr (endArray) {
        this.endArray = endArray;
    },

    get MessageJoiner () {
        
        let num1 = Math.floor(Math.random() * 4);
        let num2 = Math.floor(Math.random() * 4);

        let newArray = [];

        let subIndex = this.subjectArray[num1];
        let endIndex = this.endArray[num2];

        newArray.push(this.subjectArray[num1]);
        newArray.filter((item, subIndex) => this.subjectArray[num1] === subIndex);
                    
        newArray.push(this.endArray[num2]);
        newArray.filter((item, endIndex) => this.endArray[num2] === endIndex);
                    
                

        while (newArray.length > 4) {
                newArray.slice(1, 2);
                newArray.length = 2;
        }


            

            
        
        return newArray.join(" ");
 }
}


let button = document.getElementById("button");

button.addEventListener("onclick", MessageGenerator.MessageJoiner)
