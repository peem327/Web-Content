import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
//import "../static/css/style.scss";


class Layout extends Component {

    render() {
        const { children, title = "เฮลตี้ คาเฟ่ บล๊อกเกอร์" } = this.props;
        return (
            <div>
                <Head>
                    <title>{title} </title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="/static/css/style.css"/>
                    <link rel="shortcut icon" href="/static/images/logo/logo.png" />
                </Head>

                <Header />
                {children}
                <Footer company="Peem" email="Peem327@gmail.com" />
            </div>
        )

    }
}

export default Layout;