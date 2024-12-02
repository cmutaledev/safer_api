"use client"

import React, { useEffect, useState } from 'react'
import { DataTable } from './data-table'
import { getVehicleData } from '@/server/getVehicleData';
import { Columns } from './columns';
import DotnumberForm from '@/components/dotnumber-form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';


export default function page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => (
    setDotNumbers((prev: any) => (
      data.dotnumber.split(",")
    )
    ));
  const [dotNumbers, setDotNumbers] = useState<any[]>(['44110', '1650820', '1655100']);
  // console.log(errors);


  useEffect(() => {
    getVehicleData(dotNumbers)
      .then(carriers => {
        console.log('Fetched carriers:', carriers);
        setLoading(false)
        setData(carriers);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
      });
  }, [dotNumbers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>Vehicle Data</h1>
      {/* <DotnumberForm /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-2xl flex flex-col gap-4'>
          <div className="grid w-full gap-2">
            <label htmlFor="dotnumber" className='font-semibold text-sm'>DOT Number</label>
            <Textarea {...register("dotnumber", {})} id='dotnumber' />
          </div>
          <Button>Submit</Button>
        </div>
      </form>

      {/*{JSON.stringify(vehicleData)} */}
      <DataTable columns={Columns} data={data} />
    </div>
  )
}
