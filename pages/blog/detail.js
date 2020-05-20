import React, { Component } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

class Detail extends Component {

    static async getInitialProps({ query }) {
        const res = await axios.get('http://localhost:3001/blogs/' + query.id);
        return { blog: res.data }
    }

    render() {
        const { blog } = this.props;
        // เปลี่ยน วันที่ update ให้ user เข้าใจง่ายขึ้น
        const updated_date = new Date(blog.updated_date);
        return (
            <Layout>

                <div className="container">
                    <h1 className="mt-4 mb-4 title">{blog.subject}</h1>

                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" src={blog.thumbnail} />
                        </div>
                        <div className="col-6">
                            <div className="text-justify detail title">
                                {blog.detail}

                            </div>
                            <hr />
                            <h5 className="text-success">
                                เขียนโดย{blog.created_by.user.firstname} {blog.created_by.user.lastname}
                            </h5>
                            <h5 className="text-muted text-right">
                                แก้ไขเมื่อ {updated_date.toLocaleDateString()}
                            </h5>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .title {
                        color : darkgreen;
                        text-align
                    }
                    .detail{
                        color : black;
                        word-spacing : 8 px; 
                    }`
                    }
                </style>

            </Layout>
        )
    }
}

export default Detail;