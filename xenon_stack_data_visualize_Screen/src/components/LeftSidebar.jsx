const LeftSidebar = () => {
    const icons = [
      {
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.25v17.5m6.75-8.75H5.25"
            />
          </svg>
        ),
      },
      {
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4.5 4.5"
            />
          </svg>
        ),
      },
      {
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12h18m-9-9v18"
            />
          </svg>
        ),
      },
      {
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.25v17.5m6.75-8.75H5.25"
            />
          </svg>
        ),
      },
    ];
  
    return (
      <div
        className="flex flex-col justify-between bg-white shadow-md"
        style={{
          width: "90px",
          height: "calc(100vh - 50px)",
          borderRadius: "22px 0 0 0",
          border: "1px solid #E7E7E7",
          position: "fixed",
          top: "25px",
          left: "25px",
        }}
      >
        <div className="flex flex-col items-center py-4">
          {/* Top Icon */}
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4.5 4.5"
              />
            </svg>
          </div>
  
          {/* Navigation Icons */}
          <div className="space-y-4 mt-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm"
              >
                {icon.svg}
              </div>
            ))}
          </div>
        </div>
  
        {/* Bottom Icon */}
        <div className="flex items-center justify-center pb-4">
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default LeftSidebar;
  