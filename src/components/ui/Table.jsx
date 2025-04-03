const TableData = [
  {
    "th": "Chapter1",
    "td1": "the life is shorting!!",
    "td2": "23 JAN 2025",
    "td3": "Complete"
  },
  {
    "th": "Chapter2",
    "td1": "the life is shorting!!",
    "td2": "24 JAN 2025",
    "td3": "Pending"
  },
  {
    "th": "Chapter3",
    "td1": "the life is shorting!!",
    "td2": "25 JAN 2025",
    "td3": "Pending"
  },
  {
    "th": "Chapter4",
    "td1": "the life is shorting!!",
    "td2": "26 JAN 2025",
    "td3": "Pending"
  },
]
const Table = () => {
  return (
    <div className='h-auto w-100 ms-0 table-responsive'>
      <table class="table align-middle  table-borderless" style={{ backgroundColor: '#1D1D2A' }}>
        <tbody style={{ backgroundColor: '#1D1D2A' }}>
          {
            TableData.map((data, index) => (
              <tr key={index}>
                <th className='fw-bold fs-4 ps-0 text-white text-start bg-imp' scope="row">{data.th}</th>
                <td className='fw-normal fs-4 ps-0 text-white text-start bg-imp'>{data.td1}</td>
                <td className="color-blue fw-normal fs-4 ps-0 text-start bg-imp">{data.td2}</td>
                <td className="color-yellow fw-normal fs-4 ps-0 text-start bg-imp">{data.td3}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table