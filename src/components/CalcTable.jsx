const CalcTable = ({ headers = [], children }) => {
  return (
    <div className="calc-table--responsive">
      <table className="calc-table">
        <thead className="calc-table__head">
          <tr className="calc-table__head-row">
            {headers.map((title) => {
              return (
                <th className="calc-table__head-ceil" key={title}>
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="calc-table__body">{children}</tbody>
      </table>
    </div>
  );
};

export default CalcTable;
