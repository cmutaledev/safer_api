import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function DotnumberForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data.dotnumber.split(","));
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='max-w-2xl flex flex-col gap-4'>
                <div className="grid w-full gap-2">
                    <label htmlFor="dotnumber" className='font-semibold text-sm'>DOT Number</label>
                    <Textarea {...register("dotnumber", {})} id='dotnumber' />
                </div>
                <Button>Submit</Button>
            </div>
        </form>
    );
}