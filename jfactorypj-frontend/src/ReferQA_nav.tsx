import "./css/question_answer.css";

import { useState } from "react";
import type { Nav } from "./ReferQA";

type Props = {
    setSelectedNav: React.Dispatch<React.SetStateAction<Nav>>;
};

const ReferQA_nav: React.FC<Props> = (props) => {
    const [selected1, setSelected1] = useState<boolean>(true);
    const [selected2, setSelected2] = useState<boolean>(false);
    const [selected3, setSelected3] = useState<boolean>(false);

    const nav_click = (clickedNav: Nav): void => {
        setSelected1(false);
        setSelected2(false);
        setSelected3(false);

        switch (clickedNav) {
            case "nav1":
                setSelected1(true);
                break;
            case "nav2":
                setSelected2(true);
                break;
            case "nav3":
                setSelected3(true);
                break;
            default:
                break;
        }

        props.setSelectedNav(clickedNav);
    };

    return (
        <div className="section-1-left">
            <div className="explain-head">
                <p className="middle-title">記載事項</p>
            </div>
            <div className="explain-detail">
                {/* テーブルコンテナ */}
                <div className="table-container menu-table qa-menu">
                    <table>
                        <thead>
                            <tr>
                                <th className="code">No</th>
                                <th className="name">記載内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={selected1 ? "selected-contents" : ""} onClick={() => nav_click("nav1")}>
                                <td className="code">1</td>
                                <td className="name">利用規則</td>
                            </tr>
                            <tr className={selected2 ? "selected-contents" : ""} onClick={() => nav_click("nav2")}>
                                <td className="code">2</td>
                                <td className="name">このアプリの使用方法</td>
                            </tr>
                            <tr className={selected3 ? "selected-contents" : ""} onClick={() => nav_click("nav3")}>
                                <td className="code">3</td>
                                <td className="name">使用画像の引用元</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReferQA_nav;
