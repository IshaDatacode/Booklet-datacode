import React from 'react'

function Table() {
  const TableData=[
    {
      "th":"Chapter1",
      "td1":"the life is shorting!!",
      "td2":"23 JAN 2025",
      "td3":"Complete"
    },
    {
      "th":"Chapter2",
      "td1":"the life is shorting!!",
      "td2":"24 JAN 2025",
      "td3":"Pending"
    },
    {
      "th":"Chapter3",
      "td1":"the life is shorting!!",
      "td2":"25 JAN 2025",
      "td3":"Pending"
    },
    {
      "th":"Chapter4",
      "td1":"the life is shorting!!",
      "td2":"26 JAN 2025",
      "td3":"Pending"
    },

  ]
  return (
    <div className='h-auto w-100 ms-0 table-responsive'><table class="table align-middle  table-borderless " style={{ backgroundColor: '#1D1D2A' }}>
    
    <tbody style={{ backgroundColor: '#1D1D2A' }}>
      {
        TableData.map((data,index)=>(
          <tr key={index}>
          <th className='fw-bold ps-0 fs-4 text-white text-start' scope="row" style={{ backgroundColor: '#1D1D2A' }}>{data.th}</th>
          <td className='fw-normal ps-0 fs-4 text-white text-start' style={{ backgroundColor: '#1D1D2A' }}>{data.td1}</td>
          <td className="fw-normal fs-4  ps-0 text-start" style={{ backgroundColor: '#1D1D2A',color:"#4A83F6" }}>{data.td2}</td>
          <td className="fw-normal fs-4 ps-0 text-start" style={{ backgroundColor: '#1D1D2A' ,color:'#FFC70E'}}>{data.td3}</td>
        </tr>
        ))
      }
      
    </tbody>
  </table></div>
  )
}

export default Table