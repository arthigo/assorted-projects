const color = document.querySelector(".color");
const rgbToHexBtn = document.getElementById("rgbToHexBtn");
const changeBtn = document.getElementById("changeBtn");

const colorType = Object.freeze({
    rgb: "rgb",
    hex: "hex"
});

let colorState = colorType.rgb;
let currentColor = {
    hex: "#C3E0FE",
    rgb: {r: 195, g: 224, b: 254}
};

changeBtn.addEventListener("click", () => {
    const rgb = getRandomRGBColor();
    updateColorsState(rgb);
    colorState == colorType.rgb ? changeToRgb() : changeToHex();
});

rgbToHexBtn.addEventListener("click", () => {
    colorState == colorType.rgb ? changeToHex() : changeToRgb();
});

function changeToRgb() {
    colorState = colorType.rgb;    
    document.body.style.backgroundColor = color.innerText = `rgb(${currentColor.rgb.r} ${currentColor.rgb.g} ${currentColor.rgb.b})`;
    rgbToHexBtn.innerText = "change to hex";
}

function changeToHex() {
    colorState = colorType.hex;
    color.innerText = currentColor.hex;
    document.body.style.backgroundColor = `rgb(${currentColor.rgb.r} ${currentColor.rgb.g} ${currentColor.rgb.b})`;
    rgbToHexBtn.innerText = "change to rgb";
}

function updateColorsState(rgb) {
    currentColor['rgb'] = rgb;
    currentColor['hex'] = rgbToHex(rgb);
    console.log(currentColor);
}

function rgbToHex(rgb) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function getRandomRGBColor() {
    return { r: getRandomInt(0, 255), g: getRandomInt(0, 255), b: getRandomInt(0, 255) };
}