import { useState, useEffect } from "react";
import ConvertService from "../service/ConvertService";
import CalcTable from "./CalcTable";

const ContentCurrencyTop = () => {
  const convert = new ConvertService();
  const tableHeaders = [
    "Logo",
    "Full Name",
    "Name",
    "1 hour",
    "24 hour",
    "USD",
  ];

  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    convert.getTableData().then((tableData) => {
      setTableContent(tableData);
    });
  }, []);

  return (
    <div className="content-currency">
      <CalcTable headers={tableHeaders}>
        {tableContent.map((content) => {
          return (
            <tr className="calc-table__body-row" key={content.name}>
              <td className="calc-table__body-ceil">
                <img
                  src={content.logo}
                  alt={content.name}
                  className={"calc-table__img"}
                />
              </td>
              <td className="calc-table__body-ceil">{content.fullName}</td>
              <td className="calc-table__body-ceil">{content.name}</td>
              <td
                className={[
                  "calc-table__body-ceil",
                  content.changeHour.isDecrease ? "_warn" : "_success",
                ].join(" ")}
              >
                {content.changeHour.value}
              </td>
              <td
                className={[
                  "calc-table__body-ceil",
                  content.change24Hour.isDecrease ? "_warn" : "_success",
                ].join(" ")}
              >
                {content.change24Hour.value}
              </td>
              <td className="calc-table__body-ceil">{content.usdPrice}</td>
            </tr>
          );
        })}
      </CalcTable>
    </div>
  );
};

export default ContentCurrencyTop;
