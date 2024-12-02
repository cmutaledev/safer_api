"use client"

import React, { useEffect, useState } from 'react'
import { DataTable } from './data-table'
import { getVehicleData } from '@/server/getVehicleData';
import { Columns } from './columns';


export default function page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dotNumbers = ['44110', '1650820', '1655100'];
    getVehicleData(dotNumbers)
      .then(carriers => {
        console.log('Fetched carriers:', carriers);
        setData(carriers);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])


  return (
    <div>
      {/*{JSON.stringify(vehicleData)} */}
      <DataTable columns={Columns} data={data} />
    </div>
  )
}
