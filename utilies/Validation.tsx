export const isValidAccount = (stringAccount) => (/^[a-zA-Z0-9]+$/.test(stringAccount)) && stringAccount.length>=5;
export const isValidPassword = (stringPassword) => stringPassword.length >= 5;
export const isValidEmail = (stringEmail) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail)) && stringEmail.length>=5;
export const isValidRePassword = (stringRePassword,stringPassword) => stringPassword === stringRePassword;