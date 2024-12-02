"use client"

import React, { useEffect, useState } from 'react'
import { DataTable } from '../components/data-table'
import { getVehicleData } from '@/server/getVehicleData';
import { Columns } from '../components/columns';
import DotnumberForm from '@/components/dotnumber-form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { extractData } from '@/server/getData';


export default function page() {
  const [data, setData] = useState<any[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const { register, handleSubmit } = useForm();

  const [dotNumbers, setDotNumbers] = useState<any[]>(['44110', '1650820', '1655100']);

  const onSubmit = (data: any) => {
    if (!data.dotnumber || data.dotnumber.trim() === "") {
      setErrors(["Please provide a DOT number."]);
      return; // Prevent form submission if no DOT number
    }

    // Check if the DOT number contains only digits
    const dotNumbersArray = data.dotnumber.split(",");

    // Filter out invalid DOT numbers (those that do not consist only of digits)
    const validDotNumbers = dotNumbersArray.filter((dot: string) => /^\d+$/.test(dot.trim()));
    const invalidDotNumbers = dotNumbersArray.filter((dot: string) => !/^\d+$/.test(dot.trim()));

    if (invalidDotNumbers.length > 0) {
      // If any DOT number is invalid, show an error
      setErrors([`Invalid DOT number(s): ${invalidDotNumbers.join(", ")}`]);
      return; // Prevent form submission if no DOT number
    }

    // If all DOT numbers are valid, proceed with the submission
    setDotNumbers(validDotNumbers);
    setErrors([]);

    // If there are invalid DOT numbers, show an error message but don't stop the submission
    // if (invalidDotNumbers.length > 0) {
    //   console.log("here")
    //   setErrors([`Invalid DOT number(s): ${invalidDotNumbers.join(", ")}`]);
    //   console.log("here")
    // } else {
    //   setErrors([]); // Clear any previous errors if all DOT numbers are valid
    // }
  };



useEffect(() => {
  setLoading(true);
  setErrors([]);
  getVehicleData(dotNumbers)
    .then(results => {
      console.log(results)
      // Ensure each result is checked for validity
      const validData = results
        .filter((res: any) => res && !res.error && res.data) // Check for valid data
        .map((res: any) => res.data);

      const failedRequests = results
        .filter((res: any) => res && res.error) // Check for errors
        .map((res: any) => `${res.dotNumber || 'Unknown'}: ${res.error}`);

      setData(validData);
      setErrors(failedRequests);
    })
    .catch(error => {
      console.error('Error:', error);
      setErrors([`Unexpected error: ${error.message}`]);
    })
    .finally(() => {
      setLoading(false);
    });
}, [dotNumbers]);

if (loading) {
  return <div>Loading...</div>;
}

// if (error) {
//   return <div>Error: {error}</div>;
// }

{/* <button id="extractButton" onClick={extractData()}>Extract Data</button> */}

return (
  <div className='p-4 space-y-4'>
    {/* ############################ Dummy button ############################ */}
    <button id="extractButton" onClick={extractData()}>Extract Data</button> 
    {/* ############################ Dummy button ############################ */}
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

    {errors.length > 0 && (
      <div className="text-red-500">
        <h2 className="font-bold text-lg">Errors</h2>
        <ul className="list-disc pl-5">
          {errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
      </div>
    )}

    

    {/*{JSON.stringify(vehicleData)} */}
    <DataTable columns={Columns} data={data} />
  </div>
)
}
