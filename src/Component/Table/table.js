import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Table() {
  const [showTable, setTableVew] = useState(false);
  const Data = [
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
    {
      firstColumn: "1m",
      exp_date: "05 July, 2021",
      atm: "7.10",
      r_r25: "-0.2",
      r_r10: "-0.2",
      b_f25: "-0.2",
      b_f10: "-0.2",
    },
  ];

  return (
    <div className="TableContainer">
      <div
        className="ComponentHeading"
        onClick={() => setTableVew((showTable) => !showTable)}
        data-testid="toggle"
      >
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          className={showTable == true ? "rightIcon" : "hide"}
        />
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className={showTable == false ? "rightIcon" : "hide"}
        />
        Single Currency Grid
        <div className="leftDivIcon">
          <FontAwesomeIcon icon={faRobot} className="leftIcon" />
          <FontAwesomeIcon icon={faXmark} className="leftIcon" />
        </div>
      </div>

      <div className={showTable == true ? "LinKContainer" : "hide"} data-testid="tableView">
        <div>
          <button className="applyBorder active">RR/BF Table</button>
          <button>Call/Put Table</button>
          <button>Vol Curve</button>
          <button>Vol Smile</button>
          <button className="applyBorder2">HeatMaps</button>
        </div>
        <table>
          <thead>
            <tr>
              <td className="heading"></td>
              <td className="heading">Exp Date</td>
              <td className="heading">ATM</td>
              <td className="heading">25d R/R</td>
              <td className="heading">10d R/R</td>
              <td className="heading">25d B/F</td>
              <td className="heading">
                10d B/F
                <FontAwesomeIcon icon={faArrowUpLong} className="arrowUpLong" />
              </td>
            </tr>
          </thead>
          <tbody>
            {Data.map((i, key) => {
              return (
                <tr key={key}>
                  <td>{i.firstColumn}</td>
                  <td>{i.exp_date}</td>
                  <td>{i.atm}</td>
                  <td>{i.r_r25}</td>
                  <td>{i.r_r10}</td>
                  <td>{i.b_f25}</td>
                  <td>{i.b_f10}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
