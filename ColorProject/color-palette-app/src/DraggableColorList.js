import React from 'react';
import DraggableColorBox from "./DraggableColorBox";
import {SortableContainer} from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height: "100%"}}>
            {colors.map((color, idx) =>
                <DraggableColorBox
                    color={color.color}
                    name={color.name}
                    key={color.name}
                    removeColor={removeColor}
                    index={idx}
                />)}
        </div>
    );
});

export default DraggableColorList;