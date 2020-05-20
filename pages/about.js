import React from "react";
import Layout from "../components/Layout";

const About = () => {
    return (
        <Layout title="เกี่ยวกับเรา">
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    เราคือร้านอาหารที่เน้นอาหารอร่อย ไม่ให้ความสำคัญกับสุขภาพเท่าไหร่พราะสุขภาะที่ดีนั้นคุณสามารถสร้างด้วยการ "ออกกำลังกาย" ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
                    </p>
                <h4 className="text-success"> จาก เฮลตี้ คาเฟ่</h4>
            </div>
        </Layout>

    )
}

export default About;