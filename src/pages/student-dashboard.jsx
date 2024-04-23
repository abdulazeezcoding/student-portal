import React from "react";
import student from "../assets/images/student.png";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import StudentDashboardContent from "../components/student-dashboard-content";
import { CiLogout } from "react-icons/ci";


export default function StudentDashboard() {
  return (
    <>
    <div className="fixed left-0 top-0 w-64 h-full bg-blue-500 p-4">
      <a href="#" className="flex items-center pb-4 border-b border-b-white">
        <img src={student} alt="" className="w-7 h-7 rounded object-cover"/>
        <span className="text-white text-lg font-bold ml-3">STUDENT ADMIN</span>
      </a>
      <ul className="mt-4">
      <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <MdDashboard className="mr-3 text-lg " />
                <span className="text-sm  font-bold">OVERVIEW</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <MdDashboard className="mr-3 text-lg " />
                <span className="text-sm  font-bold">REGISTRATION</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <BsCart3 className="mr-3 text-lg " />
                <span className="text-sm  font-bold">DEPARTMENT</span>
              </Link>
          </li>
        
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">RESIDENTIAL</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">ASSESSMENTS</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">ATTENDANCE</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">DISCIPLINARY</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">E-PAYMENTS</span>
              </Link>
          </li>
          <li className="mb-2">
        <Link to="/" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
          <CiLogout className="mr-3 text-lg " />
          <span className="text-sm  font-bold">LOGOUT </span>
        </Link>
    </li>
      </ul>
    </div>
    <StudentDashboardContent />
    </>
  );
}