let table = 9;
let result = "";
for (let i = 1; i <= 10; i++) {
    result += table + "*" + i + "=" + table * i + "<br>";
}
document.getElementById("js_for_loop").innerHTML = result;

let add = 6;
let answer = "";
let b = 3;
while (b <= 15) {
    answer += add + "+" + b + "=" + (add + b) + "<br>";
    b++;
}
document.getElementById("js_while_loop").innerHTML = answer;

let subtract = 15;
let ans = "";
let s = 3;
do {
    ans += subtract + "-" + s + "=" + (subtract - s) + "<br>";
    s++;
} while (s < 13);

document.getElementById("js_do_while_loop").innerHTML = ans;