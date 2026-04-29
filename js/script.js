document.addEventListener("DOMContentLoaded", function () {

    const table = document.getElementById("anggotaTable");

    if (!table) return;

    let data = JSON.parse(localStorage.getItem("anggota")) || [];

    tampilkanData();

    function tampilkanData() {
        table.innerHTML = "";

        data.forEach(function (a, index) {
            const row = `
                <tr>
                    <td>${a.nama}</td>
                    <td>${a.email}</td>
                    <td>${a.minat}</td>
                    <td>
                        <button onclick="hapusData(${index})">Hapus</button>
                    </td>
                </tr>
            `;
            table.innerHTML += row;
        });
    }

    // biar bisa dipanggil dari HTML
    window.hapusData = function(index) {
        if (confirm("Yakin mau hapus data ini?")) {
            data.splice(index, 1);
            localStorage.setItem("anggota", JSON.stringify(data));
            tampilkanData();
        }
    };

});