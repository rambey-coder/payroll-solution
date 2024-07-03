import React from "react";

export const Review = () => {
  return (
    <div className="my-[3rem] bg-white p-8 rounded shadow">
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-2">Review payroll</h1>
        <p className="text-[#495057]">
          Please spend a brief moment reviewing the payroll
        </p>
      </div>

      <div className="bg-[#f4effe] rounded-md p-6 w-full flex items-start gap-10 mb-10">
        <div>
          <p className="">
            This payment will be made from your - master card
            {/* company would add method of payment */}
          </p>
          <h1 className="font-bold text-3xl my-3">$223,343,000</h1>
          <p>
            This payment would be made on ---
            {/* selected date of payment */}
          </p>
        </div>
      </div>

      <div className="outline outline-slate-100 rounded p-4 max-w-[500px] w-[90%]">
        <h2 className="font-bold text-1xl mb-3">Detail Payment</h2>

        <div className="flex flex-col gap-8 mt-8">
          <div className="flex items-center justify-between">
            <p>Total salary</p>
            <p>$200,000</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total Allowance</p>
            <p>$20,000</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total Deduction</p>
            <p>$20,000</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total Bonus</p>
            <p>$20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
