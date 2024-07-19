import React from "react";
import CategoryItem from "../../components/Category/CategoryItem";
import ProductList from "../../components/product/ProductList";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle";

const Menu = () => {
  const categories = [
    "Tất cả sản phẩm",
    "Văn học",
    "Kĩ năng sống",
    "Tiểu sử - Hồi kí",
    "Truyện tranh",
    "Giã tưởng",
    "Giáo dục",
    "Tâm lý học",
    "Tiểu thuyết",
  ];

  const authors = [
    "Nguyễn Nhật Ánh",
    "David R. Hawkins",
    "Vãn Tình",
    "The Windy",
    "Cố Mạn",
    "Châu Sa Đáy Mắt",
    "Thạch Lam",
    "Nhất Tiếu Nại Hà",
    "Chân Thủy Vô Hương",
    "Lô Vỹ Vy Vy",
    "Trác Nhã",
  ];

  const publishers = ["NXB Nhã Nam", "NXB Kim Đồng", "NXB Trẻ", "NXB Thanh Niên", "NXB Văn Học"];

  return (
    <div className="mt-8">
      <div className="container mx-auto">
        <nav className="">
          <a href="#" className="text-gray-500">
            Trang chủ
          </a>
          <span className="text-gray-500"> / </span>
          <a href="#" className="text-mainDark font-semibold leading-normal">
            Sản phẩm
          </a>
        </nav>
        <div className="py-14">
          <div className="flex justify-between gap-5 mt-12">
            <div className="max-w-[275px] w-full border rounded-[30px] py-14 px-12">
              <div className="flex flex-col gap-9">
                <CategoryItem title="Danh mục" items={categories} />
                <CategoryItem title="Tác giả" items={authors} />
                <CategoryItem title="Nhà xuất bản" items={publishers} />
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-6">
                <PageTitle title="Tất cả sản phẩm"></PageTitle>
                <div className="flex items-center gap-4">
                  <select
                    className="select select-bordered w-full max-w-xs"
                    defaultValue="Mới nhất">
                    <option disabled value="">
                      Sort by:
                    </option>
                    <option value="Mới nhất">Mới nhất</option>
                    <option value="Giá tăng dần">Giá tăng dần</option>
                    <option value="Giá giảm dần">Giá giảm dần</option>
                  </select>

                  <select className="select select-bordered w-full max-w-xs" defaultValue="12">
                    <option disabled value="">
                      Show:
                    </option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                </div>
              </div>
              <ProductList customItem={true} />
              <ProductList customItem={true} />
              <ProductList customItem={true} />
              <ProductList customItem={true} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-6">
            <span className="w-10 h-10 rounded-full flex items-center justify-center border text-grayText text-[20px] font-semibold hover:bg-mainDark hover:text-white cursor-pointer">
              <FaLongArrowAltLeft />
            </span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-mainDark text-white text-[20px] font-semibold">
              1
            </span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center border text-grayText text-[20px] font-semibold hover:bg-mainDark hover:text-white cursor-pointer">
              2
            </span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center border text-grayText text-[20px] font-semibold hover:bg-mainDark hover:text-white cursor-pointer">
              3
            </span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center border text-grayText text-[20px] font-semibold hover:bg-mainDark hover:text-white cursor-pointer">
              4
            </span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center border text-grayText text-[20px] font-semibold hover:bg-mainDark hover:text-white cursor-pointer">
              <FaLongArrowAltRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
