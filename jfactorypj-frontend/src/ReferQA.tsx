import { useState } from "react";
import ReferQA_nav from "./ReferQA_nav";
import ReferQA_section from "./ReferQA_section";

import "./css/question_answer.css";

export type Nav = "nav1" | "nav2" | "nav3";

const ReferQA: React.FC = () => {
    const [selectedNav, setSelectedNav] = useState<Nav>("nav1");

    return (
        <>
            <ReferQA_nav setSelectedNav={setSelectedNav} />
            <ReferQA_section selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        </>
    );
};

export default ReferQA;