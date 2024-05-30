class SOTIETKIEM {
            constructor(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui) {
                this.maSo = maSo;
                this.loaiTietKiem = loaiTietKiem;
                this.hoTen = hoTen;
                this.cmnd = cmnd;
                this.ngayMoSo = ngayMoSo;
                this.soTienGui = soTienGui;
            }
        }

        let sotietkiem = new SOTIETKIEM("1", "thường", "lê quang việt", "12345", "13/9", "500000");
        let sotietkiem1 = new SOTIETKIEM("1", "thường", "lê quang việt", "12345", "13/9", "500000");
        let sotietkiem2 = new SOTIETKIEM("1", "thường", "lê quang việt", "12345", "13/9", "500000");
        let arr = [sotietkiem, sotietkiem1, sotietkiem2];

        function display() {
            let str = "";
            for (let i = 0; i < arr.length; i++) {
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td>" + arr[i].maSo + "</td>";
                str += "<td>" + arr[i].loaiTietKiem + "</td>";
                str += "<td>" + arr[i].hoTen + "</td>";
                str += "<td>" + arr[i].cmnd + "</td>";
                str += "<td>" + arr[i].ngayMoSo + "</td>";
                str += "<td>" + arr[i].soTienGui + "</td>";
                str += "<td><button onclick='updateDel(" + i + ")'>Delete</button></td>";
                str += "</tr>";
            }
            document.getElementById("display").innerHTML = str;
        }

        display();

        function clearMen() {
            document.getElementById('maSo').value = '';
            document.getElementById('loaiTietKiem').value = '';
            document.getElementById('hoTen').value = '';
            document.getElementById('cmnd').value = '';
            document.getElementById('ngayMoSo').value = '';
            document.getElementById('soTienGui').value = '';
        }

        function add() {
            let maSo = document.getElementById("maSo").value;
            let loaiTietKiem = document.getElementById("loaiTietKiem").value;
            let hoTen = document.getElementById("hoTen").value;
            let cmnd = document.getElementById("cmnd").value;
            let ngayMoSo = document.getElementById("ngayMoSo").value;
            let soTienGui = document.getElementById("soTienGui").value;

            if (maSo && loaiTietKiem && hoTen && cmnd && ngayMoSo && soTienGui) {
                let addSotietkiem = new SOTIETKIEM(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui);
                arr.push(addSotietkiem);
                display();
                clearMen();
            }
        }

        function updateDel(index) {
            let student = arr[index];
            let check = confirm("Có chắc muốn xóa " + '"' + student.hoTen + '"' + " không???");
            if (check) {
                arr.splice(index, 1);
                display();
            } else {
                alert("Hủy xóa.");
            }
        }