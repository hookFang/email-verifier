var EmailVerifier = {
  DEFAULT_REGEX:
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[A-Z]{2}|com",
  UPDATED_REGEX: "",
};

EmailVerifier.verify = function (mailID) {
  //Initial Regex String
  var regexString = this.DEFAULT_REGEX;
  //Adding options to the string
  if (!this.UPDATED_REGEX) {
    regexString += ")";
  } else {
    regexString += this.UPDATED_REGEX;
    console.log(regexString);
  }

  //Create the Regex with the Properties
  const emailFormater = new RegExp(regexString);

  if (emailFormater.test(mailID)) {
    return true;
  } else {
    return false;
  }
};

EmailVerifier.domainsValid = function ({ domainsValid }) {
  if (!domainsValid) {
    this.UPDATED_REGEX += ")";
  } else {
    domainsValid.forEach((value) => {
      console.log(value);
      this.UPDATED_REGEX += "|" + value;
    });
    this.UPDATED_REGEX += ")";
    console.log(this.UPDATED_REGEX);
  }
};

module.exports = EmailVerifier;
