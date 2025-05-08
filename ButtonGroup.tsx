import React from "react";

interface ButtonGroupProps {
    buttons: string[];
    activeButton: string | null;
    setActiveButton: (button: string) => void;
  }
  
  const ButtonGroup: React.FC<ButtonGroupProps> = ({
    buttons,
    activeButton,
    setActiveButton,
  }) => {
    return (
      <div className="space-x-2 mb-4 p-4">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveButton(btn)}
            className={`px-4 py-2 rounded ${
              activeButton === btn
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-700 text-black dark:text-white border"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonGroup;
  