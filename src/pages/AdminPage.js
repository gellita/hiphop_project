import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BattleGrid } from "./BattleGrid/BattleGrid.tsx";
import { getAdminBoard } from "../services/user.service";
export const AdminPage = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        getAdminBoard().then((response) => {
            setContent(response.data);
        }, (error) => {
            const _content = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setContent(_content);
        });
    }, []);
    if (content == "Access is allowed") {
        return (_jsx(BattleGrid, {}));
    }
    else {
        return (_jsx("div", { className: "container", children: _jsx("header", { className: "jumbotron", children: _jsx("h3", { children: content }) }) }));
    }
};
