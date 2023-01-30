function Hitung(){
  //Ini Bukan Rumus
alert("Habis di copy jangan lupa tambah titik angka jutaannya ya cuy ..")
var months= ['1','2','3','4','5','6','7','8','9','10','11','12'];
let d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
document.getElementById("tgl").innerHTML= day+'/'+months[month]+'/'+year;
document.getElementById("cy").innerHTML=months[month]+'/'+year+'*';
hari = document.getElementById("hari").value;
kshift1 = document.getElementById("kshift1").value;
kshift2 = document.getElementById("kshift2").value;
netsalesakhir = document.getElementById("netsalesakhir").value;
document.getElementById("harisales").innerHTML = parseInt(kshift1)+parseInt(kshift2);
 netsales = parseInt(kshift1)+parseInt(kshift2)+parseInt(netsalesakhir);
 acSPD = parseInt(netsales)/parseInt(hari);
 acSPDn = acSPD.toFixed(0);
 document.getElementById("acSPD").innerHTML = acSPDn;
 document.getElementById("tnetsales").innerHTML = netsales;
 //Mulai rumus rumit geng
var max;
var nih = document.querySelector('option[name="toqo"]:checked').value;
    if (nih == 'Cendrawasih') {
        document.getElementById('tspda').innerHTML = "Rp.8.000.000 / Rp.240.000.000";
        max = 240000000;
    }
    else{document.getElementById('tspda').innerHTML = "Rp.6.000.000 / Rp.180.000.000";
   max = 180000000;
    }
 var persen = (netsales/max)*100;
 persenn = persen.toFixed(2);
 document.getElementById("progress").innerHTML = persenn;
 document.getElementById("garing").innerHTML = ' / Rp.';
 document.getElementById("sen").innerHTML = '%';
 cabang = document.getElementById("cabang").value;
 document.getElementById("toko").innerHTML = cabang;
document.getElementById("toko2").innerHTML = cabang+' malam ini 🙏';
}