import React from "react";

const ColorList = () => {
    const colorList = ["#000000", "#893b3b", "#5ba129"];
    return(
        <div className="list-group text-center">
            {
                colorList.map((color, index) =>
                <button key={index} type="button"
                    className="list-group-item list-group-item-action"
                    aria-current="true"
                    title="Copiar"
                    style={{
                        background: color,
                        fontWeight: "bolder",
                    }}>
                    {color}
                </button>
                )
            }
        </div>
    );
}

export default ColorList;