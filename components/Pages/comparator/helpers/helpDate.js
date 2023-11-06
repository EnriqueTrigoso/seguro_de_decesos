import { regexTest } from "utils/regex";

const MAX_AGE_ACCEPTED = 101;

function msToYears(milliseconds) {
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365.25; // Usamos 365.25 para tener en cuenta años bisiestos
  return years;
}

export const validateDate = (date) => {

  // console.log('validateDAte')

  //VALIDANDO FORMATO
  let isFormatCorrect = Boolean(date.match(regexTest));
  // console.log({isFormatCorrect})
  // console.log({date})

  if (!isFormatCorrect) return false;

  //VALIDANDO SI NO ES FECHA POSTERIOR A LA ACTUAL
  let [day, month, year] = date.split('/');
  const formattedDate = new Date(`${month}/${day}/${year}`);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (formattedDate > currentDate) {
    return false;
  }

  //VALIDANDO QUE NO PASE DE 120 AÑOS
  const age = msToYears(currentDate - formattedDate)
  if (age > MAX_AGE_ACCEPTED) return false;

  //INVIERTIENDO Y VALIDANDO FORMATO
  let splitDate = date.split("/").reverse();
  let formatToDate = splitDate.join("-");
  if (Date.parse(formatToDate) === 0) return true;

  let isDateCorrect = Boolean(Date.parse(formatToDate));

  if (!isDateCorrect) return false;

  return true;
};
