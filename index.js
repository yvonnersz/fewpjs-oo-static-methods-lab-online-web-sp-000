class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ')
    let firstWord = stringArray[0][0].toUpperCase() + stringArray[0].slice(1)

    let remainderWordsArray = stringArray.slice(1)

    let capRemainderWords = remainderWordsArray.map(word => {
      if (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
          return word
      } else {
          return word[0].toUpperCase() + word.slice(1)
      }
    }).join(' ')

    return firstWord + " " + capRemainderWords
  }
}
