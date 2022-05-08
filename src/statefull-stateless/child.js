import React from "react";

const Child = (props) => {
    return (
        <>
            <h4>{props.nilai}</h4>
            <br />
            <h4>{props.nilaiBiasa}</h4>
        </>
    );
};

export default Child;
