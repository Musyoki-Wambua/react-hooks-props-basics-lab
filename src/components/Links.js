import React from "react";
import users from "../data/user"
// const github = "https://github.com/liza"
// const linkedin = "https://www.linkedin.com/in/liza/"

function Links (props) {
    return (
        <div>
            <h3>Links</h3>
            <a href="{props.github}">{props.github}</a>
            <a href="props.linkedin">{props.linkedin}</a>
        </div>
  
    )
}
export default Links;