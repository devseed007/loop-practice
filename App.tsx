// app/App.tsx
import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import DataGrid from './components/DataGrid';
import Tabs from './components/Tabs';

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];
  const tabs = ["Users", "Orders", "Products", "Messages"];
  const [activeTab, setActiveTab] = useState("Users");
  return (
    <AppLayout>
      <div className="space-x-2 mb-4">
        {/* {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveButton(btn)}
            className={`px-4 py-2 rounded ${
              activeButton === btn
                ? "bg-blue-600 text-white"
                : "bg-white text-black border dark:bg-gray-700 dark:text-white"
            }`}
          >
            {btn}
          </button>
        ))} */}
         <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={Object.keys(tabs)}
      />
      </div>
      {activeTab && <DataGrid activeButton={activeTab} />}
    </AppLayout>
  );
};

export default App;
