import React from "react";

import { Calendar } from "lucide-react";
const DueDates = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <Calendar className='h-4 w-4 text-gray-500' />
          <span className='font-medium'>Due Date Reminders</span>
        </div>
        <input type='checkbox' className='h-4 w-4' defaultChecked />
      </div>
      <div className='ml-6 text-sm text-gray-600'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <input type='checkbox' className='h-3 w-3' defaultChecked />
            <span>7 days before due date</span>
          </div>
          <div className='flex items-center gap-2'>
            <input type='checkbox' className='h-3 w-3' defaultChecked />
            <span>3 days before due date</span>
          </div>
          <div className='flex items-center gap-2'>
            <input type='checkbox' className='h-3 w-3' defaultChecked />
            <span>On due date</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueDates;
