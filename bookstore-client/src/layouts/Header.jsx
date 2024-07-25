import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import "../index.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuList = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Sản phẩm", link: "/menu" },
    { id: 3, name: "Về chúng tôi", link: "/about-us" },
    { id: 4, name: "Bài viết", link: "/blog" },
    { id: 5, name: "Liên hệ", link: "/contact-us" },
  ];
  return (
    <>
      <header className="border-b max-md:hidden max-lg:hidden">
        <div className="container">
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-2">
              <BiPhoneCall className="w-6 h-6" />
              <p>0123 456 789</p>
            </div>
            <div className="flex items-center gap-8">
              <CiHeart className="w-7 h-6 hover:text-mainDark cursor-pointer" />
              <Link to="/sign-in">
                <CiUser className="w-7 h-6 hover:text-mainDark cursor-pointer" />
              </Link>
              <Link to="/cart">
                <BsBag className="w-5 h-6 hover:text-mainDark cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`shadow-custom ${
          isSticky ? "fixed top-0 left-0 w-full shadow-custom z-50 bg-white" : "shadow-custom"
        }`}>
        <div className="container">
          <div className="navbar py-2 justify-between flex max-md:flex-col max-md:py-5 max-lg:flex-col max-lg:py-5">
            <div>
              <a>
                <img
                  src="./images/logo.png"
                  className="cursor-pointer w-52 max-md:mb-5 max-lg:mb-5"
                  alt="logo"
                />
              </a>
            </div>
            <div className="navbar-center max-lg:hidden lg:flex">
              <ul className="flex items-center px-1 gap-20 header-menu max-xl:gap-7">
                {menuList.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "text-mainDark" : "hover:text-mainDark"
                      }>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex items-center justify-between gap-3  2xl:hidden max-2xl:hidden max-md:inline-flex max-sm:inline-flex max-lg:inline-flex">
              <div className="">
                <FaBars className="w-8 h-8"></FaBars>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <FaSearch />
                <input
                  type="text"
                  className="grow max-md:w-[245px] max-md:h-10 max-lg:w-[485px] max-sm:w-[200px]"
                  placeholder="Tìm kiếm"
                />
              </label>
              <div className="flex items-center gap-2">
                <FaShoppingBag className="w-8 h-8"></FaShoppingBag>
                <FaUser className="w-8 h-8"></FaUser>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2 max-md:hidden max-lg:hidden">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                className="grow max-md:w-[245px] h-full max-md:h-10"
                placeholder="Tìm kiếm"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
