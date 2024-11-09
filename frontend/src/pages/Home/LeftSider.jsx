import React from "react";
import "../../App.css";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:pb-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 cursor-pointer sm:flex-row">
          <a
            href="https://www.linkedin.com/in/sai-kishan-58b444247/"
            className="glow-icon"
          >
            <i className="ri-linkedin-line text-gray-400 text-xl"></i>
          </a>
          <a
            href="https://www.facebook.com/psaikishan.rao/"
            className="glow-icon"
          >
            <i className="ri-facebook-circle-line text-gray-400 text-xl"></i>
          </a>
          <a href="mailto:saikishan785@gmail.com" className="glow-icon">
            <i className="ri-mail-line text-gray-400 text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/sai_kishan_rao"
            className="glow-icon"
          >
            <i className="ri-instagram-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://github.com/Psaikishanrao" className="glow-icon">
            <i className="ri-github-line text-gray-400 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden "></div>
      </div>
    </div>
  );
}

export default LeftSider;
