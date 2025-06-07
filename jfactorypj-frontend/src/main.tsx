import { createRoot } from "react-dom/client";

import "./css/common.css";

import Header from "./Header";
import ReferQA from "./ReferQA";
import React from "react";
import Footer from "./Footer";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="body-background">
            <Header />
            <div className="main-contents">
                <h1>QA画面</h1>
                <div className="section-1">
                    <ReferQA />
                </div>
                <Footer />
            </div>
        </div>
    </React.StrictMode>
);
