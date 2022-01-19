import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import moment from "moment";

export default function LandingPage({ style = {}, ...props }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("landingPage");
  const [value, setValue] = useState(moment());
  const [valueArr, setValueArr] = useState([moment()]);
  const [calendar, setCalendar] = useState([]);
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const a = new Array(2);

  const setInterval = (day) => {
    a[0] = value;
    a[1] = day;

    setValueArr(a);
  };
  useEffect(() => {
    const temp = [];
    const day = startDay.clone().subtract(1, "day");

    while (day.isBefore(endDay, "day")) {
      temp.push([...Array(7)].map(() => day.add(1, "day").clone()));
    }
    setCalendar(temp);
  }, [value]);

  const isSelected = (day, value) => {
    return value.isSame(day, "day");
  };

  const isLeft = (day) => {
    let tempBefore = [];

    if (valueArr[1]?.isAfter(valueArr[0])) {
      tempBefore = valueArr[0];
    }
    if (valueArr[0]?.isAfter(valueArr[1])) {
      tempBefore = valueArr[1];
    }
    return day.isSame(tempBefore);
  };

  const isRight = (day) => {
    let tempAfter = [];

    if (valueArr[1]?.isAfter(valueArr[0])) {
      tempAfter = valueArr[1];
    }
    if (valueArr[0]?.isAfter(valueArr[1])) {
      tempAfter = valueArr[0];
    }
    return day.isSame(tempAfter);
  };

  const isBetween = (day) => {
    let tempBefore = [];
    let tempAfter = [];

    if (valueArr[0]?.isAfter(valueArr[1])) {
      tempAfter = valueArr[0];
      tempBefore = valueArr[1];
    }
    if (valueArr[1]?.isAfter(valueArr[0])) {
      tempBefore = valueArr[0];
      tempAfter = valueArr[1];
    }

    return day.isBetween(tempBefore, tempAfter);
  };

  const isToday = (day) => {
    return day.isSame(new Date(), "day");
  };

  const dayStyle = (day, value) => {
    //selected date

    //selected date
    if (isToday(day)) {
      return "today";
    }
    if (isBetween(day, value)) {
      return "between";
    }
    if (isLeft(day)) {
      return "border-left";
    }
    if (isRight(day)) {
      return "border-right";
    }
  };

  const currentMonthName = () => {
    return value.format("MMMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };
  const nextMonth = () => {
    return value.clone().add(1, "month");
  };
  console.log({ ...style });
  return (
    <div className="">
      <div className="calendar-container">
        <div className="w-100">
          <div
            className={
              "d-flex flex-row justify-content-between align-content-center calendar-header"
            }
          >
            <div
              className="ms-2 arrows"
              onClick={() => {
                setValue(prevMonth());
              }}
            >
              {String.fromCharCode(171)}
            </div>
            <div className="header-date">
              {`
            ${currentMonthName()} ${currentYear()}
            `}
            </div>
            <div
              className="me-2 arrows"
              onClick={() => {
                setValue(nextMonth());
              }}
            >
              {String.fromCharCode(187)}
            </div>
          </div>
          <div>
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div className="week">{d}</div>
            ))}
          </div>
          <div className="calendar">
            {calendar.map((week) => (
              <div>
                {week.map((day) => (
                  <div
                    className="day"
                    onClick={() => {
                      setValue(day);
                      console.log("setvalue", day);
                      console.log(value);
                      setInterval(day);
                      console.log(a);
                    }}
                  >
                    <div className={dayStyle(day, value)}>
                      {day.format("D")}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
