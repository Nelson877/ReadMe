import React from 'react';
import ProfileSettings from './ProfileSettings';
import ThemePreferences from './ThemePreferences';
import Notifications from './ Notifications';
import AccountManagement from './AccountManagement';

const Setting = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="space-y-6">
        {/* Profile Settings */}
       <ProfileSettings/>

        {/* Theme Preferences */}
       <ThemePreferences/>

        {/* Notifications */}
       <Notifications/>

        {/* Account Management */}
        <AccountManagement/>
      </div>
    </div>
  );
};

export default Setting;
