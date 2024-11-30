import React from 'react'
import { DataTable } from './data-table'
import { Columns } from './columns'

const API_URL = 'https://mobile.fmcsa.dot.gov/qc/services/'

async function getData(dotNumber: string) {
  const response = await fetch(API_URL + `carriers/${dotNumber}?webKey=d92a939adbc307a4922cfea3ff902a62090af1dd`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  // console.log(data)
  return [data.content.carrier];
}

export default async function page() {
  const dotNumber = '44110'
  const dotNumber2 = '1650820'

  const vehicleData = await getData(dotNumber);
  // console.log(vehicleData)

  return (
    <div>
      {/* Page:
      {JSON.stringify(vehicleData)} */}
      <DataTable columns={Columns} data={vehicleData} />
    </div>
  )
}
