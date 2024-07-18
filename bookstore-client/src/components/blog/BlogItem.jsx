import React from "react";

const BlogItem = () => {
  return (
    <div>
      <div className="">
        <a href="#" className="w-full">
          <img src="./images/new 1.png" className="w-full object-cover rounded-[30px]" alt="" />
        </a>
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-gray-400 font-light text-sm">12/08/2024</p>
          <h3 className="font-semibold leading-normal">
            <a href="#" className="cursor-pointer hover:text-main">
              Không cần phải là nhà kinh tế học mới đọc được iconomix
            </a>
          </h3>
          <p className="text-text text-sm font-light leading-normal">
            Tất cả những vấn đề trên đều sẽ được giải đáp theo cách sáng tạo và dễ hiểu trong cuốn
            sách về kinh tế - ECONOMIX....
          </p>
          <div>
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
