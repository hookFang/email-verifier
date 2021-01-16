var EmailVerifier = {
  DEFAULT_REGEX:
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[A-Z]{2}|com",
  DEFAULT_TOP_LEVEL_DOMAIN_REGEX: "",  
  UPDATED_REGEX_TOP_LEVEL_DOMAIN: "",
};

EmailVerifier.verify = function (mailID) {
  //Initial Regex String
  var regexString = this.DEFAULT_REGEX;
  //Adding options to the string
  if (!this.UPDATED_REGEX_TOP_LEVEL_DOMAIN) {
    regexString += ")";
  } else {
    regexString += this.UPDATED_REGEX_TOP_LEVEL_DOMAIN;
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
  if(this.UPDATED_REGEX_TOP_LEVEL_DOMAIN) {
    this.UPDATED_REGEX_TOP_LEVEL_DOMAIN = this.DEFAULT_TOP_LEVEL_DOMAIN_REGEX;
  }
  if (!domainsValid) {
    this.UPDATED_REGEX_TOP_LEVEL_DOMAIN += ")";
  } else {
    domainsValid.forEach((value) => {
      this.UPDATED_REGEX_TOP_LEVEL_DOMAIN += "|" + value;
    });
    this.UPDATED_REGEX_TOP_LEVEL_DOMAIN += ")";
  }
};

module.exports = EmailVerifier;
