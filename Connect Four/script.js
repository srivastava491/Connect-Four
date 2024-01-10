let entry = Array.from(document.querySelectorAll(".entry div"));
let token = true;
let entryfield = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
entry.forEach((element, idx) => {
    element.addEventListener("click", (e) => {
        let i = idx;

        while (entryfield[i] == 0 && (i + 14) / 14 < 9) {
            console.log("working")
            i += 14;
        }
        i -= 14;
        document.getElementById(i + 1).classList.remove("empty");
        if (token) {
            document.getElementById(i + 1).classList.add("red");
        }
        else {
            document.getElementById(i + 1).classList.add("blue");
        }
        if (token) {
            entryfield[i] = 1;
        }
        else {
            entryfield[i] = -1;
        }
        token = !token
        if (win(i)) {
            alert(!token ? "Red player won!" : "Blue player won!");
            entryfield = Array(112).fill("0");

            for(let j=1;j<=112;j++){
                document.getElementById(j).classList.remove("red");
                document.getElementById(j).classList.remove("blue");
                document.getElementById(j).classList.add("empty");
            }
        }
    })
})

function win(e) {
    for (let i = 0; i < 4; i++) {
        if (entryfield[e - i] == entryfield[e + 1 - i] && entryfield[e - i + 1] == entryfield[e + 2 - i] && entryfield[e - i + 2] == entryfield[e + 3 - i]) {
            return true;
        }
    }
    for (let i = 0; i < 4; i++) {
        if (entryfield[e - 14 * i] == entryfield[e + 14 - 14 * i] && entryfield[e + 14 - 14 * i] == entryfield[e + 28 - 14 * i] && entryfield[e - 14 * i] == entryfield[e + 42 - 14 * i]) {
            return true;
        }
    }
    for (let i = 0; i < 4; i++) {
        if (entryfield[e-15*i]==entryfield[e+15-15*i] && entryfield[e-15*i]==entryfield[e+30-15*i] && entryfield[e-15*i]==entryfield[e+45-15*i]) {
            return true;
        }
    }
    for (let i = 0; i < 4; i++) {
        if (entryfield[e-13*i]==entryfield[e+13-13*i] && entryfield[e-13*i]==entryfield[e+26-13*i] && entryfield[e-13*i]==entryfield[e+39-13*i]) {
            return true;
        }
    }
    return false;
}
