import React from 'react'

import { Book } from 'lucide-react';

const HoldNotifications = () => {
  return (
    <div>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Book className="h-4 w-4 text-gray-500" />
        <span className="font-medium">Hold Notifications</span>
      </div>
      <input type="checkbox" className="h-4 w-4" defaultChecked />
    </div>
    <div className="ml-6 text-sm text-gray-600">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-3 w-3" defaultChecked />
          <span>When item becomes available</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-3 w-3" defaultChecked />
          <span>Hold expiration reminder (2 days before)</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HoldNotifications