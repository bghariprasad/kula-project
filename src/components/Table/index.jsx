function Table({ collection, colData }) {
  return (
    <>
      <table className="table-auto text-left border-2 border-collapse border-gray-600 ml-8 mt-8">
        <thead>
          <tr>
            {colData?.map((col, index) => (
              <th
                className="border-2 border-gray-400 px-1 py-2"
                key={col + index}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {collection?.map((data) => (
            <tr key={data.id}>
              {colData?.map((col, index) => (
                <td
                  className="border-2 border-gray-200 px-1"
                  key={data.id + col}
                >
                  {data[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
