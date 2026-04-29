document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formAnggota");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const minat = document.getElementById("minat").value;

        const anggotaBaru = { nama, email, minat };

        // ambil data lama
        let data = localStorage.getItem("anggota");

        if (data) {
            data = JSON.parse(data);
        } else {
            data = [];
        }

        data.push(anggotaBaru);

        localStorage.setItem("anggota", JSON.stringify(data));

        alert("Data berhasil disimpan!");

        // redirect ke home
        window.location.href = "index.html";
    });

});