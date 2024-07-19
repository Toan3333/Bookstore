import React, { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { CiHeart } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../../components/Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "../../index.css";
import CommentItem from "../../components/Comment/CommentItem";
import CommentList from "../../components/Comment/CommentList";
import Title from "../../components/Title/Title";
import ProductList from "../../components/Products/ProductList";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="py-10">
      <div className="container">
        <nav className="">
          <a href="#" className="text-gray-500">
            Sản phẩm
          </a>
          <span className="text-gray-500"> / </span>
          <a href="#" className="text-mainDark font-semibold leading-normal">
            Đám trẻ ở đại dương đen
          </a>
        </nav>
        <div className="flex justify-between gap-16 py-10">
          <div className="max-w-[650px] w-full">
            <div className="flex gap-10">
              <div className="max-w-[170px] w-full">
                <div className="flex flex-col gap-2">
                  <div>
                    <img
                      src="./images/product-detail-1.png"
                      alt="product-detail-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <img
                      src="./images/product-detail-1.png"
                      alt="product-detail-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <img
                      src="./images/product-detail-1.png"
                      alt="product-detail-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <img
                      src="./images/product-detail-1.png"
                      alt="product-detail-img"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <img
                    src="./images/product-detail.png"
                    alt="product-detail-img"
                    className="w-full h-[592px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <PageTitle title="Đám Trẻ Ở Đại Dương Đen" className="mb-5"></PageTitle>
            <div className="flex items-center gap-8">
              <div className="text-red">79.000đ</div>
              <div className="flex items-center gap-10">
                <div className="">86.400 đ</div>
                <div className="w-[1px] h-4 bg-text"></div>
                <div className="">333 Đã bán</div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-full flex flex-col gap-6 text-text">
                <div className="">
                  Tác giả: <span className="text-mainDark">Châu Sa Đáy Mắt</span>
                </div>
                <div className="">
                  Nhà xuất bản: <span className="text-mainDark">Nhã Nam</span>
                </div>
                <div className="">
                  Danh mục: <span className="text-mainDark">Tiểu thuyết</span>
                </div>
                <div className="">Kho: 133</div>
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="">Năm xuất bản: 2023</div>
                <div className="">Ngôn ngữ: Tiếng Việt</div>
                <div className="">Số trang: 280</div>
                <div className="">Hình thức: Bìa mềm</div>
              </div>
            </div>
            <div className="mt-10 text-text font-normal">Số lượng :</div>
            <div className="flex items-center mt-5">
              <div className="py-2 px-5 flex items-center border border-gray-300 rounded-xl">
                <button className="px-3 py-1">
                  <FaMinus />
                </button>
                <input
                  type="text"
                  className="quantity-input w-12 text-center border-0 focus:ring-0"
                  defaultValue="1"
                />
                <button className="px-3 py-1">
                  <FaPlus />
                </button>
              </div>
              <div className="flex items-center gap-2 ml-4 text-text font-normal">
                <CiHeart className="w-8 h-8 cursor-pointer"></CiHeart>
                Yêu thích
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <div>
                <Button children="Mua ngay" className="rounded-md w-full"></Button>
              </div>
              <div>
                <Button className="rounded-md button-add w-full bg-white flex items-center justify-center gap-2">
                  <HiOutlineShoppingBag />
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <h3
            className={`text-[18px] font-semibold cursor-pointer ${
              activeTab === "info" ? "text-text" : "text-grayText"
            }`}
            onClick={() => setActiveTab("info")}>
            Thông tin sản phẩm
          </h3>
          <h3
            className={`text-[18px] font-semibold cursor-pointer ${
              activeTab === "comments" ? "text-text" : "text-grayText"
            }`}
            onClick={() => setActiveTab("comments")}>
            Bình luận (3)
          </h3>
        </div>
        {activeTab === "info" && (
          <div className="mt-7">
            <p className="text-text font-normal leading-normal">
              Đám trẻ ở đại dương đen là lời độc thoại và đối thoại của những đứa trẻ ở đại dương
              đen, nơi từng lớp sóng của nỗi buồn và tuyệt vọng không ngừng cuộn trào, lúc âm ỉ, khi
              dữ dội. Những đứa trẻ ấy phải vật lộn trong những góc tối tâm lý, với sự u uất đè nén
              từ tổn thương khi không được sinh ra trong một gia đình toàn vẹn, ấm êm, khi phải mang
              trên đôi vai non dại những gánh nặng không tưởng. Song song đó cũng là quá trình tự
              chữa lành vô cùng khó khăn của đám trẻ, cố gắng vươn mình ra khỏi đại dương đen, tìm
              cho mình một ánh sáng. Và chính những sự nỗ lực xoa dịu chính mình đó đã hóa thành
              những câu từ trong cuốn sách này, bất kể đau đớn thế nào. Cuốn sách được viết bởi Châu
              Sa Đáy Mắt, một tác giả GenZ mong muốn cùng các bạn trẻ bộc bạch và vỗ về những xúc
              cảm chân thật về gia đình, xã hội và chính bản thân.
            </p>
          </div>
        )}
        {activeTab === "comments" && (
          <div className="mt-7">
            <PageTitle title="3 lượt bình luận"></PageTitle>
            <form action="" className="mt-7">
              <div className="flex justify-between items-center">
                <div className="w-[85%]">
                  <input
                    type="text"
                    placeholder="Hãy bình luận gì đó ...."
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="">
                  <Button children="Bình luận"></Button>
                </div>
              </div>
            </form>
            <CommentList></CommentList>
          </div>
        )}
        <div className="mt-10">
          <Title children="Sản phẩm liên quan"></Title>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
