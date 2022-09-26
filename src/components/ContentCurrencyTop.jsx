import { useState, useEffect } from "react";
import ConvertService from "../service/ConvertService";
import CalcTable from "./CalcTable";

const ContentCurrencyTop = () => {
  const convert = new ConvertService();
  const [tableHeaders, setTableHeaders] = useState([
    "Logo",
    "Full Name",
    "Name",
    "1 hour",
    "24 hour",
    "USD",
    "Compare",
  ]);
  const [tableContent, setTableContent] = useState([]);
  const [comparedCurrency, setComparedCurrency] = useState([]);

  useEffect(() => {
    convert.getTableData().then((tableData) => {
      setTableContent(tableData);
    });

    const fromLocalStorage = [];

    if (localStorage.getItem("convertFrom")) {
      fromLocalStorage.push(localStorage.getItem("convertFrom"));
    }

    if (localStorage.getItem("convertTo")) {
      fromLocalStorage.push(localStorage.getItem("convertTo"));
    }

    if (fromLocalStorage.length > 0) {
      setTableHeaders([...tableHeaders, "Delete"]);
    }

    setComparedCurrency([...comparedCurrency, ...fromLocalStorage]);
  }, []);

  const clickCompareBtn = function (currencyId) {
    if (comparedCurrency.length === 2) {
      return;
    }
    setComparedCurrency([currencyId, ...comparedCurrency]);

    if (comparedCurrency.length === 0) {
      localStorage.setItem("convertFrom", currencyId);
    }

    if (comparedCurrency.length === 1) {
      localStorage.setItem("convertTo", currencyId);
    }

    if (!tableHeaders.includes("Delete")) {
      setTableHeaders([...tableHeaders, "Delete"]);
    }
  };

  const clickResetCompareBtn = function (currencyId) {
    const idCurrencyFromArray = comparedCurrency.indexOf(currencyId);
    const comparedArray = [...comparedCurrency];
    comparedArray.splice(idCurrencyFromArray, 1);
    setComparedCurrency(comparedArray);

    if (localStorage.getItem("convertFrom") === currencyId) {
      localStorage.removeItem("convertFrom");
    } else if (localStorage.getItem("convertTo") === currencyId) {
      localStorage.removeItem("convertTo");
    }

    if (comparedArray.length === 0) {
      const tableHeadersArray = [...tableHeaders];
      tableHeadersArray.pop();
      setTableHeaders(tableHeadersArray);
    }
  };

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
              <td className="calc-table__body-ceil">
                <button
                  className="calc-table__button"
                  onClick={() => {
                    clickCompareBtn(content.name);
                  }}
                >
                  Add to compare
                </button>
              </td>
              {comparedCurrency.includes(content.name) ? (
                <td className="calc-table__body-ceil">
                  <button
                    className="calc-table__button calc-table__button--reset"
                    onClick={() => {
                      clickResetCompareBtn(content.name);
                    }}
                  >
                    Remove from compare
                  </button>
                </td>
              ) : (
                ""
              )}
            </tr>
          );
        })}
      </CalcTable>
    </div>
  );
};

export default ContentCurrencyTop;
