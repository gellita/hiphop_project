import { useState, useEffect } from "react";
import {BattleGrid} from "./BattleGrid/BattleGrid.tsx";

import { getAdminBoard } from "../services/user.service";



export const AdminPage = () => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    if (content == "Access is allowed"){
       return( <BattleGrid/>);
    }
    else {return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );}


};

