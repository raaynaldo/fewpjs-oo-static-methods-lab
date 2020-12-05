class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let arrOfWord = string.split(" ");
    arrOfWord.forEach((word, idx) => {
      if (!exceptions.includes(word) || idx == 0) {
        arrOfWord[idx] = this.capitalize(word);
      }
    });
    return arrOfWord.join(" ");
  }
}
