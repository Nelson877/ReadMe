import React from 'react';
import {  Clock} from 'lucide-react';
import { BiCategoryAlt } from "react-icons/bi";
import NotificationMethods from './NotificationMethods';
import DueDates from './DueDates';
import HoldNotifications from './HoldNotifications';

const ManageNotifications = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manage Notifications</h1>
        <p className="text-gray-600">Choose how and when you want to receive library updates</p>
      </div>

      <div className="space-y-6">
        {/* Notification Methods */}
       <NotificationMethods/>

        {/* Notification Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              < BiCategoryAlt className="h-5 w-5" />
              Categories
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-6">
              {/* Due Dates */}
             <DueDates/>

              {/* Hold Notifications */}
              <HoldNotifications/>

              {/* Library Updates */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Library Updates</span>
                  </div>
                  <input type="checkbox" className="h-4 w-4" defaultChecked />
                </div>
                <div className="ml-6 text-sm text-gray-600">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-3 w-3" defaultChecked />
                      <span>Library hours changes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-3 w-3" defaultChecked />
                      <span>Special events and programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-3 w-3" defaultChecked />
                      <span>New services announcements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageNotifications;