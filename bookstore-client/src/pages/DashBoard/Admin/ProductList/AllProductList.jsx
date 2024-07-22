import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaBook,
  FaClipboardList,
  FaPlus,
  FaRegEdit,
  FaTrashAlt,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { AiFillDashboard, AiOutlineBars } from "react-icons/ai";
import "../DashBoard.css";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import HeaderAdmin from "../../../../components/HeaderAdmin/HeaderAdmin";

const AllProductList = () => {
  const isAdmin = true;
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout operations here (e.g., clearing authentication tokens)
    // Then navigate to the home page
    navigate("/");
  };

  return (
    <div>
      <div className="flex min-h-screen border">
        {/* Sidebar */}
        <Sidebar className="relative border p-3 bg-white" width="270px">
          <Menu className="bg-white">
            <div className="flex items-center justify-center mb-6">
              <img src="./images/logo.png" alt="Logo" />
            </div>
            <MenuItem component={<Link to="/dashboard" />}>
              <div className="flex items-center gap-4">
                <AiFillDashboard className="w-5 h-5" />
                Dashboard
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/add-menu" />}>
              <div className="flex items-center gap-4">
                <AiOutlineBars className="w-5 h-5" />
                Quản lý danh mục
              </div>
            </MenuItem>
            <SubMenu label="Quản lý sản phẩm" icon={<FaBook className="w-5 h-5" />}>
              <MenuItem component={<Link to="/dashboard/product-list" />}>
                Danh sách sản phẩm
              </MenuItem>
              <MenuItem component={<Link to="/dashboard/add-product" />}>Thêm sản phẩm</MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/dashboard/manage-items" />}>
              <div className="flex items-center gap-4">
                <FaClipboardList className="w-5 h-5" />
                Quản lý đơn hàng
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/users" />}>
              <div className="flex items-center gap-4">
                <FaUser />
                Quản lý tài khoản
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/manage-blogs" />}>
              <div className="flex items-center gap-4">
                <FaRegEdit />
                Quản lý bài viết
              </div>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <div className="flex items-center gap-4">
                <MdLogout />
                Logout
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>
        {/* Main Content */}
        <div className="flex-1 p-6">
          <HeaderAdmin />
          <div className="flex items-center justify-between pb-8 border-b">
            <PageTitle title="Danh sách sản phẩm" className="text-mainDark" />
            <div>
              <button className="flex items-center gap-2 bg-mainDark py-3 px-5 text-white font-semibold leading-normal rounded-[10px]">
                <FaPlus></FaPlus>Thêm
              </button>
            </div>
          </div>
          <div className="mt-6 border rounded-[30px] p-5">
            <table className="table w-full">
              <thead className="text-[16px] font-semibold text-black">
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên sách</th>
                  <th>Tác giả</th>
                  <th>Danh mục</th>
                  <th>Nhà xuất bản</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th className="text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="./images/product.png" className="w-20 h-20" alt="" />
                  </td>
                  <td>Cây cam ngọt của tôi</td>
                  <td>José Mauro de Vasconcelos</td>
                  <td>Văn học</td>
                  <td>Hội Nhà Văn</td>
                  <td>199000đ</td>
                  <td className="px-3 text-center">120 quyển</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <Link to="/dashboard/edit-product">
                        <FaUserEdit className="w-5 h-5 text-main" />
                      </Link>
                      <a href="#">
                        <FaTrashAlt className="w-5 h-4 text-red" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="./images/product.png" className="w-20 h-20" alt="" />
                  </td>
                  <td>Cây cam ngọt của tôi</td>
                  <td>José Mauro de Vasconcelos</td>
                  <td>Văn học</td>
                  <td>Hội Nhà Văn</td>
                  <td>199000đ</td>
                  <td className="px-3 text-center">120 quyển</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <Link to="/dashboard/edit-product">
                        <FaUserEdit className="w-5 h-5 text-main" />
                      </Link>
                      <a href="#">
                        <FaTrashAlt className="w-5 h-4 text-red" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="./images/product.png" className="w-20 h-20" alt="" />
                  </td>
                  <td>Cây cam ngọt của tôi</td>
                  <td>José Mauro de Vasconcelos</td>
                  <td>Văn học</td>
                  <td>Hội Nhà Văn</td>
                  <td>199000đ</td>
                  <td className="px-3 text-center">120 quyển</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <Link to="/dashboard/edit-product">
                        <FaUserEdit className="w-5 h-5 text-main" />
                      </Link>
                      <a href="#">
                        <FaTrashAlt className="w-5 h-4 text-red" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
};

export default AllProductList;
