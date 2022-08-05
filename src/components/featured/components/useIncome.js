import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
// custom hook - input validation
const useIncome = () => {
  const [dailyEarning, setDailyEarning] = useState(0);
  const [monthlyEarning, setMonthlyEarning] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let todayMeetings = [];
    let monthlyMeetings = [];
    const fetchMeetings = async () => {
      const todayQuery = query(collection(db, "meetings"));
      const todayData = await getDocs(todayQuery);

      todayData.forEach((doc) => {
        console.log(new Date(doc.data().date).getMonth());
        if (
          new Date(doc.data().date).toLocaleDateString() ===
          new Date().toLocaleDateString()
        ) {
          todayMeetings.push(doc.data().serviceAmount);
        }
        if (new Date().getMonth() === new Date(doc.data().date).getMonth()) {
          monthlyMeetings.push(doc.data().serviceAmount);
        }
      });
      const dailyIncome = todayMeetings.reduce((total, item) => {
        return total + item;
      }, 0);
      const monthlyIncome = monthlyMeetings.reduce((total, item) => {
        return total + item;
      }, 0);
      setIsLoading(false);
      setDailyEarning(dailyIncome);
      setMonthlyEarning(monthlyIncome);
    };
    fetchMeetings();
  }, []);
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  //   const valueIsValid = validateValue(enteredValue);
  //   const hasError = !valueIsValid && isTouched;

  //   const valueChangeHandler = (event) => {
  //     setEnteredValue(event.target.value);
  //   };

  //   const inputBlurHandler = (event) => {
  //     setIsTouched(true);
  //   };
  //   const reset = () => {
  //     setEnteredValue("");
  //     setIsTouched(false);
  //   };

  return {
    dailyEarning,
    monthlyEarning,
    isLoading,
  };
};

export default useIncome;
