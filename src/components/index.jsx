import { useState } from "react";
import "./index.css";


function RandomColorGen() {
    const [typeOfColor, setTypeOfColor] = useState("HEX");
    const [color, setColor] = useState("#FFFFFF");

    const generateHexColor = () => {
        const hexChars = "0123456789ABCDEF";
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexChars[Math.floor(Math.random() * 16)];
        }
        setColor(hexColor);
    }

    const generateRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <>

            <div className="colorGen">
                <div className="colorGen-wrapper">
                    <div style={{
                        backgroundColor: `${color}`,
                        width: "100%",
                        height: "100vh",

                    }}
                        className="colorGen-bg"
                    >

                        <h1>{color}</h1>
                        <div className="colorButt">
                            <button onClick={() => generateHexColor()}>Generate HEX Color</button>
                            <button onClick={() => generateRgbColor()}>Generate RGB Color</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default RandomColorGen;


















