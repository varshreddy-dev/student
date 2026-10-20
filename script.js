f.onsubmit = e => {
e.preventDefault();
let row = s.insertRow();
[n.value,r.value,d.value,y.value].forEach(v =>
row.insertCell().textContent = v);
let b = document.createElement("button");
b.textContent = "Delete";
b.onclick = () => row.remove();
row.insertCell().appendChild(b);
f.reset();

document.getElementById("msg").textContent =
    "Student registered successfully!";
};

document.getElementById("search").oninput = function() {
    let q = this.value.toLowerCase();

    [...s.rows].forEach(row => {
        row.hidden = !row.innerText.toLowerCase().includes(q);
    });


};