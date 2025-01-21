import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { VscSymbolMethod } from "react-icons/vsc";
const NotificationMethods = () => {
  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200'>
      <div className='p-4 border-b border-gray-200'>
        <h2 className='text-lg font-semibold flex items-center gap-2'>
          <VscSymbolMethod className='h-5 w-5' />
          Methods
        </h2>
      </div>
      <div className='p-4'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Mail className='h-4 w-4 text-gray-500' />
              <span>Email Notifications</span>
            </div>
            <input type='checkbox' className='h-4 w-4' defaultChecked />
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <MessageSquare className='h-4 w-4 text-gray-500' />
              <span>SMS Notifications</span>
            </div>
            <input type='checkbox' className='h-4 w-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMethods;
