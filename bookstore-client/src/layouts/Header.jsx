import React, { useState, useEffect } from "react";
import { FaBars, FaPhone, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
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
      <header className="border-b max-md:hidden">
        <div className="container">
          <div className="flex justify-between p-5">
            <div className="flex items-center gap-2">
              <FaPhone />
              <p>0123 456 789</p>
            </div>
            <div className="flex items-center gap-8">
              <CiHeart className="w-7 h-6" />
              <Link to="/sign-in">
                <CiUser className="w-7 h-6" />
              </Link>
              <Link to="/cart">
                <BsBag className="w-5 h-6" />
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
          <div className="navbar py-4 justify-between flex max-md:flex-col max-md:py-5">
            <div>
              <a>
                <img
                  src="./images/logo.png"
                  className="cursor-pointer w-52 max-md:mb-5"
                  alt="logo"
                />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center px-1 gap-20 header-menu">
                {menuList.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) => (isActive ? "text-main" : "hover:text-main")}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex items-center justify-between gap-3  max-2xl:hidden max-md:inline-flex">
              <div className="">
                <FaBars className="w-8 h-8"></FaBars>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <FaSearch />
                <input
                  type="text"
                  className="grow max-md:w-[245px] max-md:h-10"
                  placeholder="Tìm kiếm"
                />
              </label>
              <div className="flex items-center gap-2">
                <FaShoppingBag className="w-8 h-8"></FaShoppingBag>
                <FaUser className="w-8 h-8"></FaUser>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2 max-md:hidden">
              <FaSearch />
              <input
                type="text"
                className="grow max-md:w-[245px] max-md:h-10"
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
