import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const notifications = [
  { id: 1, message: "New user signed up" },
  { id: 2, message: "Server restarted" },
  { id: 3, message: "New comment on post" },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full relative"
        aria-label="Notifications"
      >
        <BellIcon className="h-6 w-6 text-gray-700 dark:text-white" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center">
            {notifications.length}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 z-50">
          <div className="p-4">
            <h4 className="font-semibold text-sm mb-2">Notifications</h4>
            <ul className="text-sm space-y-1">
              {notifications.map((note) => (
                <li
                  key={note.id}
                  className="p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {note.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;