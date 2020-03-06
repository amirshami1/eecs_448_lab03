function changer() {
	let width = document.getElementById("width");
	let red = document.querySelector("#red");
    let green = document.querySelector("#green");
    let blue = document.querySelector("#blue");

    let red2 = document.querySelector("#red2");
    let green2 = document.querySelector("#green2");
    let blue2 = document.querySelector("#blue2");

    let p = document.getElementById("paragraph")

    p.style.borderColor = '#' + red.value + green.value + blue.value;
    p.style.borderWidth = width.value;
    p.style.background = '#' + red2.value + green2.value + blue2.value;

    return
}
