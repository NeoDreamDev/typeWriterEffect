// const typeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method
// typeWriter.prototype.type = function() {
//   //   current index of word, default word index is 0, arrays are 0 based and thats what the words are
//   const current = this.wordIndex % this.words.length;
//   //   Get Full Text of current word
//   const fullTxt = this.words[current];

//   //   Check if deleting
//   if (this.isDeleting) {
//     //   Remove Character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //   Add Character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   //   insert txt into element, use ES6 backticks so you can use template literal "${this.txt}"
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // initial  type speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     // shorthand for typeSpeed / 2
//     typeSpeed /= 2;
//   }

//   //   if word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // make pause at the end of typing word
//     typeSpeed = this.wait;
//     // set delete to be true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     // move to the next word, "++" increments by one
//     this.wordIndex++;
//     // pause before typing starts
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// ES6 class
class typeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    //   Get Full Text of current word
    const fullTxt = this.words[current];

    //   Check if deleting
    if (this.isDeleting) {
      //   Remove Character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //   Add Character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //   insert txt into element, use ES6 backticks so you can use template literal "${this.txt}"
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // initial  type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      // shorthand for typeSpeed / 2
      typeSpeed /= 2;
    }

    //   if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // make pause at the end of typing word
      typeSpeed = this.wait;
      // set delete to be true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // move to the next word, "++" increments by one
      this.wordIndex++;
      // pause before typing starts
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //   Init TypeWriter
  new typeWriter(txtElement, words, wait);
}
