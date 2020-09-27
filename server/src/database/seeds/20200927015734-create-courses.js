"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "courses",
            [
                {
                    id: 1,
                    title: "Hoc tieng anh 0 dong",
                    picture:
                        "https://static.ybox.vn/2016/10/5/488d64bc-8aaa-11e6-919c-04011537df01.jpg",
                    portforlio:
                        "Câu lạc bộ ngoại ngữ vì cộng đồng là một tổ chức phi lợi nhuận hoạt động trong lĩnh vực phát triển cộng đồng, Được thành lập vào tháng 10/2015 bởi các giảng viên đang giảng tại ĐH HN và 1 số các giảng viên Bản ngữ đến từ nhiều quốc gia khác nhau.",
                    note_id: 1,
                    image:
                        "https://static.ybox.vn/2016/10/5/488d64bc-8aaa-11e6-919c-04011537df01.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("courses", null, {});
    },
};
