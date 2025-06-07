import "./css/question_answer.css";
import "./css/common.css";

import polisy_img1 from "./img/polisy_page1.jpg";
import polisy_img2 from "./img/polisy_page2.jpg";
import polisy_img3 from "./img/polisy_page3.jpg";

import explain_img1 from "./img/role_page1.jpg";
import explain_img2 from "./img/role_page2.jpg";
import explain_img3 from "./img/role_page3.jpg";
import explain_img4 from "./img/role_page4.jpg";
import explain_img5 from "./img/role_page5.jpg";

import citation_list_img1 from "./img/citation_list_page1.jpg";

import type { Nav } from "./ReferQA";
import { useEffect, useState } from "react";

// 利用規約
const polisy_images = [polisy_img1, polisy_img2, polisy_img3];
// このアプリの使用方法
const explain_images = [explain_img1, explain_img2, explain_img3, explain_img4, explain_img5];
// 使用画像の引用元
const citation_list_images = [citation_list_img1];

type Props = {
    selectedNav: Nav,
    setSelectedNav: React.Dispatch<React.SetStateAction<Nav>>;
};

// 表示する画像リストを取得
const getImages = (selectedNav: Nav): string[] => {
    switch (selectedNav) {
        case "nav1":
            return polisy_images;
        case "nav2":
            return explain_images;
        case "nav3":
            return citation_list_images;
        default:
            break;
    }

    return [];
};

const ReferQA_section: React.FC<Props> = (props) => {
    // 選択されたボタン
    const [selectedButton, setButton] = useState<number>(0);

    // 選択された記載内容から、表示する画像を取得
    const images = getImages(props.selectedNav);

    // 記載内容を変更時、一番左のボタンが選択された状態に更新
    useEffect(() => {
        setButton(0);
    }, [props.selectedNav]);

    // ボタンの生成
    const page_buttons = images.map((_, index) => {
        // 選択されたボタンの場合、cssを追加
        const selectedClassName = selectedButton === index ? "common-button-selected" : "";

        return (
            <div
                key={index}
                className={"img-page-obj common-button " + selectedClassName}
                onClick={() => {
                    setButton(index);
                }}
            >
                {index + 1}
            </div>
        );
    });

    // モバイル
    const nav_click = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        props.setSelectedNav(e.target.value as Nav);
    };

    return (
        <div className="section-1-right">

            {/* モバイル版のみ */}
            <div className="phone-select-obj">
                <div className="explain-head">
                    <p className="middle-title">記載事項</p>
                </div>
                <select className="select-parts select-title-big-little min-title" value={props.selectedNav} onChange={ (e) => nav_click(e) }>
                    <option className="phone-option-obj" value="nav1">
                        1. 利用するにあたって
                    </option>
                    <option className="phone-option-obj" value="nav2">
                        2. アプリの使用方法
                    </option>
                    <option className="phone-option-obj" value="nav3">
                        3. 使用画像の引用元
                    </option>
                </select>
            </div>

            {/* コンテンツ画像 */}
            <div className="img-flame-section">
                <img className="disp-image explain_img" src={images[selectedButton]} />
            </div>

            {/* ページングボタン */}
            <div className="img-page-section">{page_buttons}</div>
        </div>
    );
};

export default ReferQA_section;
