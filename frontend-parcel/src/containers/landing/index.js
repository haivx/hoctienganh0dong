import React from "react";
import { TwitterOutlined, CustomerServiceOutlined, TeamOutlined, ThunderboltOutlined } from "@ant-design/icons";
import img from "~/src/assets/1.jpeg";
import { useHistory } from 'react-router-dom'
import Layout from "~/src/components/layout";
import teacherHref from "~/src/assets/teacher.png";
import classHref from "~/src/assets/class.png";
import coachHref from "~/src/assets/coach.png";
import methodHref from "~/src/assets/method.png";
import course1 from "~/src/assets/english.png";
import course2 from "~/src/assets/korean.png";
import course3 from '~/src/assets/japanese.png';

const HomePage = () => {

    return (
        <Layout>
            <div className="slider flex">
                <img src={img} />
            </div>
            <div className="titleReason">
                <div className="text-center mt-15">
                    <h2>ĐIỂM KHÁC BIỆT CỦA CHÚNG TÔI ?</h2>
                    <p className="text-center mb-4 mt-1">
                        Với chúng tôi, giúp học viên thành công là niềm hạnh phúc. Quan tâm tới học viên là phương châm
                        hoạt động của chúng tôi
                    </p>
                </div>
                <div className="flex">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="specialBox">
                            <div className="specialImage">
                                <img src={teacherHref} className="img-fluid" alt="" />
                            </div>
                            <div className="specialIcon">
                                <TwitterOutlined />
                            </div>
                            <div className="specialContent">
                                <h4>Giảng viên</h4>
                                <p>Đội ngũ giảng viên bản xứ giúp bạn thực hành và gạt bỏ những rào cản về giao tiếp</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="specialBox">
                            <div className="specialImage">
                                <img src={classHref} className="img-fluid" alt="" />
                            </div>
                            <div className="specialIcon">
                                <CustomerServiceOutlined />{" "}
                            </div>
                            <div className="specialContent">
                                <h4>Mô hình học CHOC</h4>
                                <p>
                                    Là sự kết hợp hoàn hảo giữa Online và Offline,giúp bạn tiết kiệm được 55% thời gian,
                                    tăng 100% hiệu quả học tập.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="specialBox">
                            <div className="specialImage">
                                <img src={coachHref} className="img-fluid" alt="" />
                            </div>
                            <div className="specialIcon">
                                <TeamOutlined />
                            </div>
                            <div className="specialContent">
                                <h4>Coach</h4>
                                <p>
                                    Đội ngũ Coach luôn theo dõi và đốc thúc học viên đạt mục tiêu theo Action Plan chi
                                    tiết đến từng buổi học
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="specialBox">
                            <div className="specialImage">
                                <img src={methodHref} className="img-fluid" alt="" />
                            </div>
                            <div className="specialIcon">
                                <ThunderboltOutlined />
                            </div>
                            <div className="specialContent">
                                <h4>Phương Pháp V.A.K</h4>
                                <p>
                                    Phương pháp học V.A.K (Hình ảnh - Âm thanh - Vận động trò chơi) giúp học viên nhớ
                                    bài ngay tại lớp học
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="titleReason">
                <div className="text-center mt-15">
                    <h2>CÁC KHÓA HỌC</h2>
                </div>

                <div className="flex p-3">
                    <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="title-courses">
                            <h3 className="mb-3">Khóa học của chúng tôi</h3>
                            <p>
                                Học tập là không có điểm dừng. Không phải bạn đọc xong một cuốn sách, qua một kì thi hay
                                kết thúc một chương trình học. Trong cả cuộc đời mình, từ lúc bạn sinh ra là bạn đã bắt
                                đầu học....
                                <br />
                            </p>
                            <blockquote className="blockquote">
                                <i>Education is the most powerful weapon which you can use to change the world.</i>
                                <footer className="blockquote-footer">Nelson Mandela</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="courses">
                            <div className="featured_image_courses">
                                <div className="icon"></div>
                                <img src={course1} alt="" className="img-fluid" />
                            </div>
                            <div className="course_text_content">
                                <a>
                                    <button>Tiếng Anh 0 đồng Basic</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="courses">
                            <div className="featured_image_courses">
                                <div className="icon"></div>
                                <img src={course2} alt="" className="img-fluid" />
                            </div>
                            <div className="course_text_content">
                                <a>
                                    <button>Tiếng Hàn 0 đồng</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="courses">
                            <div className="featured_image_courses">
                                <div className="icon"></div>
                                <img src={course3} alt="" className="img-fluid" />
                            </div>
                            <div className="course_text_content">
                                <a>
                                    <button>Tiếng Anh 0 đồng Advanced</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
