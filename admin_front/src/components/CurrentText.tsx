import React, { useState, useEffect } from "react";
import IconButton from "./IconButton";

interface CurrentTextProps {
  data: {
    id: number;
    username: string;
    text: string;
    time: number; // in minutes
    donate: number;
    imagesrc?: string; // optional
  };
  onEditClick: () => void;
  onRemoveClick: () => void;
}

const CurrentText: React.FC<CurrentTextProps> = ({
  data,
  onEditClick,
  onRemoveClick,
}) => {
  // Destructure the data object
  const { id, username, text, time, donate, imagesrc } = data;
  // State to hold the remaining time
  const [remainingTimeSeconds, setRemainingTime] = useState(time * 60);

  // Update the remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTimeSeconds > 0) {
        setRemainingTime(remainingTimeSeconds - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [remainingTimeSeconds]);

  // Format the remaining time as minutes and seconds
  const minutes = Math.floor(remainingTimeSeconds / 60);
  const seconds = remainingTimeSeconds % 60;
  return (
    <div className="flex flex-col space-y-4">
      <div id="Header-box" className="flex flex-col items-center">
        <h1 id="Header" className="text-xl font-bold">
          ข้อความที่กำลังแสดงบนจอ
        </h1>
      </div>
      <div id="TetxImageButton" className="flex justify-between">
        <div
          id="text-container"
          className="flex items-center text-center xl:mx-5 w-20 md:w-36  xl:w-full"
        >
          <span id="text" className="overflow-y-auto max-h-48">{text}</span>
        </div>
        <img
          className="max-h-48 rounded-lg mx-10"
          src={imagesrc}
          alt="current displaying"
        />
        <div id="buttons" className="flex flex-col self-center xl:mx-5">
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118Zm-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625l8.518-8.519Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="white"
                  d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516Z"
                />
              </svg>
            }
            text="แก้ไข"
            onClick={onEditClick}
            bgColor="purple-btn"
            hoverColor="dark-purple-highlight"
          />
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M10 5h4a2 2 0 1 0-4 0ZM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5H8.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576l1.158 11.967Z"
                />
              </svg>
            }
            text="ลบ"
            onClick={onRemoveClick}
            bgColor="red-cancel"
            hoverColor="dark-red-cancel"
          />
        </div>
      </div>
      <div id="UserTimeDonate" className="flex justify-between ">
        <div id="Username" className="text-dark-purple-highlight font-bold ">
          @{username}
        </div>
        <div id="TimeLeft" className="flex flex-row gap-2 content-end mx-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-8 4.414l-4-4V5.5h2v6.086L16.414 15L15 16.414Z"
            />
          </svg>
          <p>เวลาที่เหลือ</p>
          <span>{`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}</span>
        </div>
        <div id="donateAmt" className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" />
              <path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35Zm17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002ZM16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.438-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274Zm-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916Z" />
            </g>
          </svg>
          <div className="mx-2">{donate.toLocaleString()} บาท</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentText;
