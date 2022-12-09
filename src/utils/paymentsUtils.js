import moment from "moment";

export const getPaymentsLinks = async (initialDate, biWeeklyAmount) => {
  let currentDate = moment(initialDate);
  let paymentsArrayLinks = [];
  const addToArray = (index, date) => {
    paymentsArrayLinks.push({
      id: index,
      date: date.format("MM/DD/YYYY"),
      amount: biWeeklyAmount,
    });
  };

  const addDaysForSeventeen = (index) => {
    currentDate = currentDate.add(1, "M");
    currentDate = currentDate.add(15, "d");
    addToArray(index, currentDate);
  };
  const addDaysForTwo = (daysInMonth, index) => {
    if (daysInMonth === 31) {
      // console.log("Le sumamos 16 dias");
      currentDate = currentDate.add(16, "d");
      // console.log("=================");
      // console.log(currentDate.format("MM/DD/YYYY"));
      // console.log("=================");
      addToArray(index, currentDate);
    } else if (daysInMonth === 30) {
      currentDate = currentDate.add(15, "d");
      // console.log("=================");
      // console.log(currentDate.format("MM/DD/YYYY"));
      // console.log("=================");
      addToArray(index, currentDate);
    } else if (daysInMonth === 28) {
      currentDate = currentDate.add(13, "d");
      // console.log("=================");
      // console.log(currentDate.format("MM/DD/YYYY"));
      // console.log("=================");
      addToArray(index, currentDate);
    } else {
      currentDate = currentDate.add(14, "d");
      // console.log("=================");
      // console.log(currentDate.format("MM/DD/YYYY"));
      // console.log("=================");
      addToArray(index, currentDate);
    }
  };

  addToArray(0, currentDate);

  for (let i = 1; i < 12; i++) {
    const daysInMonth = currentDate.daysInMonth();
    // console.log("Iniciando turno ", i);
    // console.log("DaysInMonth ", daysInMonth);
    if (i % 2 === 0) {
      //Par
      // console.log("=================");
      // console.log(currentDate.format("MM/DD/YYYY"));
      // console.log("=================");
      addDaysForSeventeen(i);
    } else {
      //Impar
      addDaysForTwo(daysInMonth, i);
    }
  }
  return paymentsArrayLinks;
};
