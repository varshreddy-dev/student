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
};