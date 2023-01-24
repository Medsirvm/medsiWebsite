import moment from "moment";

export const getScheduledPaymentDates = async (initialDate, i) => {

  let currentDate = moment(initialDate);
  const daysInMonth = currentDate.daysInMonth();
  const getDate = currentDate.date();
  let scheduledDate = "";
  
  if (getDate < 17) {
    scheduledDate = currentDate.add(15, "d");
  } else {
    if (daysInMonth === 31) {
      scheduledDate = currentDate.add(16, "d");
    } else if (daysInMonth === 30) {
      scheduledDate = currentDate.add(15, "d");
    } else if (daysInMonth === 28) {
      scheduledDate = currentDate.add(13, "d");
    } else {
      scheduledDate = currentDate.add(14, "d");
    }
  }
  return scheduledDate.format('YYYY-MM-DD');
};
