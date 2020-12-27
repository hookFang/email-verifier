# Email Verifier 
![CodeQL](https://github.com/hookFang/email-verifier/workflows/CodeQL/badge.svg)
[![NpmVersion](https://img.shields.io/npm/v/@hookfang/email-verifier?label=NPM&logo=npm)](https://www.npmjs.com/package/@hookfang/email-verifier)
![DownloadsWeekly](https://img.shields.io/npm/dw/@hookfang/email-verifier?color=blue&label=Downloads&logo=npm)
[![License](https://img.shields.io/npm/l/@hookfang/email-verifier?color=black&label=License)](https://github.com/hookFang/email-verifier/blob/master/LICENSE)

This is a NPM package that allows users to verify the E-mail entered by the user. It only checks the syntax of the E-mail ID entered by the user.
Gives the option to provide different domain names to change the Regex of the validator

## NPM Install

    npm i @hookfang/email-verifier
  
## Usage
```sh
# Import Package 
import EmailVerifier from "@hookfang/email-verifier"

#Add any specific Domain names, by default Domain Name: "com"
EmailVerifier.domainsValid({ domainsValid: ["com", "bix", "gov"] });

#Verify E-mail- Returns a true value if its a valid E-mail
EmailVerifier.verify("testing@gmail.com")

