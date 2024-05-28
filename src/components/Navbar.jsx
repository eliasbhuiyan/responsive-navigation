import { MdOutlineStore } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaHouseUser, FaClipboardList } from "react-icons/fa";
import { MdOutlineViewModule, MdFolderShared } from "react-icons/md";
import { PiStudentBold, PiUserListFill } from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaRegRectangleList } from "react-icons/fa6";
import { FiFolderPlus } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

import { useEffect, useRef, useState } from "react";
import NavRouteItems from "../Utility/NavRouteItems";
import NavItems from "../Utility/NavItems";
import DropDown from "../Utility/DropDown";
import DropDownItems from "../Utility/DropDownItems";
import Profile from "../Utility/Profile";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const mainmenu = useRef(null);
  const dropmenu = useRef(null);
  const handleClickOutside = (event) => {
    if (mainmenu.current && !mainmenu.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handelDrop = (item) => {
    setOpen(true);
    for (let dropitem of dropmenu.current.children) {
      dropitem.classList.add("hidden");
      dropitem.classList.remove("block");
      if (item == dropitem.attributes[0].value) {
        dropitem.classList.remove("hidden");
        dropitem.classList.add("block");
      }
    }
  };
  return (
    <div
      ref={mainmenu}
      onClick={handleClickOutside}
      className="h-full fixed z-50 w-48"
    >
      <div className="pr-2 h-full sidenav overflow-scroll">
        <div className="h-full bg-brand shadow-xl py-2 pl-2 flex flex-col justify-between">
          <h2 className="text-white text-2xl font-bold text-center pr-2">
            Your School
          </h2>
          <div className="flex flex-col gap-5">
            <NavRouteItems to="/admin/dashbord">
              <MdOutlineStore className="m-auto text-xl" />
              <p>Dashbord</p>
            </NavRouteItems>
            <NavItems drop={handelDrop} path="employe">
              <FaHouseUser className="m-auto text-xl" />
              <p>Employees</p>
            </NavItems>
            <NavItems drop={handelDrop} path="course">
              <MdOutlineViewModule className="m-auto text-xl" />
              <p>Courses</p>
            </NavItems>
            <NavItems drop={handelDrop} path="batch">
              <MdFolderShared className="m-auto text-xl" />
              <p>Batches</p>
            </NavItems>
            <NavItems drop={handelDrop} path="admission">
              <FaClipboardList className="m-auto text-xl" />
              <p>Admission</p>
            </NavItems>
            <NavItems drop={handelDrop} path="student">
              <PiStudentBold className="m-auto text-xl" />
              <p>Students</p>
            </NavItems>
          </div>
          <Profile to="/admin/profile" />
        </div>
      </div>
      <div
        ref={dropmenu}
        className={`dropdown absolute h-full transition-all ${
          open ? "left-[95%]" : "-left-full"
        }  top-0 px-5 py-20 bg-slate-300 -z-10`}
      >
        <DropDown path="employe">
          <DropDownItems to="/admin/addemployee">
            <IoMdPersonAdd className="text-xl" />
            <span>Add New Employee</span>
          </DropDownItems>
          <DropDownItems to="/admin/employeelist">
            <PiUserListFill className="text-xl" />
            <span>Employee List</span>
          </DropDownItems>
        </DropDown>
        <DropDown path="course">
          <DropDownItems to="/admin/newcourse">
            <AiOutlineFileAdd className="text-xl" />
            <span>Add New Course</span>
          </DropDownItems>
          <DropDownItems to="/admin/courselist">
            <FaRegRectangleList className="text-xl" />
            <span>Course List</span>
          </DropDownItems>
        </DropDown>
        <DropDown path="batch">
          <DropDownItems to="/admin/addnewbatch">
            <FiFolderPlus className="text-xl" />
            <span>Add New Batch</span>
          </DropDownItems>
          <DropDownItems to="/admin/batchlist">
            <MdOutlineFolderCopy className="text-xl" />
            <span>All Batches</span>
          </DropDownItems>
        </DropDown>
        <DropDown path="admission">
          <DropDownItems to="/admin/admission">
            <IoMdPersonAdd className="text-xl" />
            <span>New Admission</span>
          </DropDownItems>
        </DropDown>
        <DropDown path="student">
          <DropDownItems to="/admin/studentlist">
            <IoMdPersonAdd className="text-xl" />
            <span>Student List</span>
          </DropDownItems>
        </DropDown>
      </div>
    </div>
  );
};

export default Navbar;
