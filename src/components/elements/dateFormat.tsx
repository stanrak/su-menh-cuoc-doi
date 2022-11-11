import { getNextMonday } from "../../utils/getNextMonday";

const d = getNextMonday();
const mm = d.getMonth() + 1;
const dd = d.getDate();
const yyyy = d.getFullYear();

export const mondayStr = dd + "/" + mm + "/" + yyyy;

const DateFormat = () => {
  return <>{mondayStr}</>;
};

export default DateFormat;
