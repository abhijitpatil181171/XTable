const Table = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tableRow, index) => (
            <tr key={`${index}+${Math.random()}}`}>
              <td>{tableRow.date}</td>
              <td>{tableRow.views}</td>
              <td>{tableRow.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
