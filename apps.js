/** project requirement */
/** change the background color by generating RGB color by clicking a button */
// step
//step1- create onload handler
window.onload = () => {
    main();
}

function main() {
    let root = document.getElementById('root')
    const btn = document.getElementById('change_btn')

    btn.addEventListener('click', function() {
        //alert('action')
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}
//step2. random color generator function
function generateRGBColor() {
    // rgb(0,0,0), rgb(255,255,255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}
//step3. collect all necessary  reference(selector)
//step4. handle the click event
//alert(hi);