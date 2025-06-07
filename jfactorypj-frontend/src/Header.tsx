import "./css/common.css";
import "./css/modal_common.css";
import "./css/modal_login.css";

import test_user_img from "./img/test_user_img.png";
import zf_title_phone from "./img/zf_title_phone.png";
import zf_title_pc from "./img/zf_title_pc.png";
import zero_frontie_img from "./img/zero_frontie_img.png";
import test_pkmn_disp_img from "./img/test_pkmn_disp_img.png";
import test_party_img from "./img/test_party_img.png";
import test_notice_img from "./img/test_notice_img.png";

const Header: React.FC = () => {
    return (
        <>
            {/* モーダルのHTML */}
            <div className="fragments-header">
                <div className="phone-side-back hidden"></div>
                <div className="phone-side-header">
                <div className="phone-side-contents">
                    <div className="phone-side-obj function-header-TOP">TOP画面</div>
                    <div className="phone-side-obj function-header-referPokemon">ポケモン一覧画面</div>
                    <div className="phone-side-obj function-header-QA">Q&amp;A</div>
                </div>
            </div>
            <header>
                <div className="header-contents">
                    <div className="header-back"></div>
                    <div className="header-login header-detail-obj">
                        <div className="login-user-disp">
                            <div className="disp-contents">
                                {/* <th:inline th:if="${session.loginUser == null}">ユーザ：ゲスト</th:inline>
                                <th:inline th:unless="${session.loginUser == null}"> ユーザ：[[${session.loginUser.disp_user_name}]]
                                </th:inline> */}
                            </div>
                            <div className="disp-contents">
                                {/* <th:inline th:if="${session.loginUser == null}">レンタル：未レンタル</th:inline>
                                <th:inline th:unless="${session.loginUser == null}"> レンタル：[[${session.loginUser.rental_kbn}
                                    == '0' ? '未レンタル' : (${session.loginUser.rental_kbn} == '1' ? 'レンタル中' : 'レンタル済')]]
                                </th:inline> */}
                            </div>
                        </div>
                        <div className="login-user-img">
                            <img className="disp-image" src={test_user_img} alt="Pokemon Image" />
                        </div>
                    </div>
                    <div className="header-title header-detail-obj">
                        <img className="disp-image phone-disp-judge phone-title-img" src={zf_title_phone} />
                        <img className="disp-image pc-disp-judge" src={zf_title_pc} />
                    </div>
                    <div className="header-function header-detail-obj">
                        <div className="header-detail-parent">
                            {/* TOP */}
                            <div className="function-detail function-header-TOP" title="TOP画面に遷移します">
                                <img className="disp-image" src={zero_frontie_img} />
                            </div>
                            {/* ポケモン一覧< */}
                            <div className="function-detail	function-header-referPokemon" title="ポケモン一覧画面に遷移します">
                                <img className="disp-image" src={test_pkmn_disp_img} />
                            </div>
                            {/* パーティ確認 */}
                            <div className="function-detail function-header-user disabled-element" title="参加者一覧画面に遷移します（現在非公開）">
                                <img className="disp-image" src={test_party_img} />
                            </div>
                            {/* おしらせ */}
                            <div className="function-detail function-header-QA" title="QA画面に遷移します">
                                <img className="disp-image" src={test_notice_img} />
                            </div>
                        </div>
                    </div>
                    <div className="phone-menu-button">≡</div>
                </div>
            </header>
            {/*  TOP画面遷移時の送信form  */}
            <form id="toPageZeroFrontieInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
            {/*  ポケモン一覧画面の送信form  */}
            <form id="toPageReferPkmnListInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
            {/*  レンタル実行時の送信form  */}
            <form id="toPageRentalInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
            {/*  対戦実績の送信form  */}
            <form id="toPageRentalResultInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
            {/*  大会履歴の送信form  */}
            <form id="toPageMatchHistoryInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
            {/*  QAの送信form  */}
            <form id="toPageQAInfo">
                <input type="hidden" name="tmp" value="" />
            </form>
        </div>
    </>
    );
}

export default Header