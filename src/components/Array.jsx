import React, { useState } from 'react';

export default function Array({ model, tilt, capacity, isActive, onDelete, isEditable }) {
    const [modelValue, setModelValue] = useState(model);
    const [tiltValue, setTiltValue] = useState(tilt);
    const [capacityValue, setCapacityValue] = useState(capacity);
    const [isActiveValue, setIsActiveValue] = useState(isActive);

    return (
        <div className="array-content">
            <div className="inputs-container">
                <div className="input-label">
                    <label htmlFor="model">{modelValue}</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        readOnly={!isEditable}
                        onChange={(e) => setModelValue(e.target.value)}
                    />
                </div>
                <div className="nb-check">
                    <input
                        type="number"
                        min="0"
                        max="180"
                        className="number"
                        name="tilt"
                        value={tiltValue}
                        readOnly={!isEditable}
                        onChange={(e) => setTiltValue(e.target.value)}
                    />
                    <input
                        type="number"
                        className="number"
                        name="capacity"
                        value={capacityValue}
                        readOnly={!isEditable}
                        onChange={(e) => setCapacityValue(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="isActive"
                        checked={isActiveValue}
                        readOnly={!isEditable}
                        onChange={(e) => setIsActiveValue(e.target.checked)}
                    />
                    {isEditable && (
                        <button className="delete-btn" onClick={onDelete} disabled={isEditable? false : true}>
                            <span className="fa-solid fa-trash-can"></span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
