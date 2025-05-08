import React from "react";
import { useEffect, useState } from "react";

interface DataGridProps {
  activeButton: string;
}

const DataGrid = ({ activeButton }: DataGridProps) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  // Automatically select first row on load
  useEffect(() => {
    setSelectedRow(0);
  }, [activeButton]);

  if (!activeButton) return null;

  return (
    <div className="flex overflow-auto">
      {/* Grid */}
      <div className="overflow-auto w-[80%] max-h-[600px]">
        <div className="grid grid-cols-[repeat(20,200px)] auto-rows-min gap-2">
          {[...Array(20).keys()].map((col) => (
            <div
              key={`col-${col}`}
              className="bg-blue-200 p-2 font-semibold text-center sticky top-0 z-10"
            >
              Column {col + 1}
            </div>
          ))}
          {[...Array(20).keys()].map((row) => (
            <div key={`row-${row}`} className="contents">
              {[...Array(20).keys()].map((col) => (
                <div
                  key={`cell-${row}-${col}`}
                  onClick={() => setSelectedRow(row)}
                  className={`border p-2 min-h-[50px] text-sm cursor-pointer ${
                    selectedRow === row ? "bg-yellow-100" : ""
                  }`}
                >
                  Row {row + 1}, Col {col + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Details Panel */}
      <div className="w-[20%] p-4 border-l bg-white dark:bg-gray-900 dark:text-white">
        <h3 className="font-semibold mb-2">Row Details</h3>
        {selectedRow !== null ? (
          <ul className="text-sm space-y-1">
            {[...Array(20).keys()].map((col) => (
              <li key={`detail-${col}`}>Row {selectedRow + 1}, Col {col + 1}</li>
            ))}
          </ul>
        ) : (
          <p>Select a row</p>
        )}
      </div>
    </div>
  );
};

export default DataGrid;
