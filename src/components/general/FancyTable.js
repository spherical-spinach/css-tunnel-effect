import React from 'react'
import { v4 as uuid } from 'uuid'

import '../../css/FancyTable.css'

const FancyTable = ({ headers, contents }) => {
  const tableData = []
  for (let i = 0; i < headers.length; i += 1) {
    tableData[i] = { id: uuid(), header: headers[i], content: contents[i] }
  }

  return (
    <table className="fancyTable">
      <tbody>
        {tableData.map(row => (
          <tr key={row.id}>
            <th>{row.header}</th>
            <td>{row.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FancyTable
