//sidebar toggle
$(document).ready(function () {
    $("#sidebar-toggle").click(function () {
        $(".sidebar").toggleClass("active");
    });
    $(".menu-toggle").click(function () {
        $("body").toggleClass("widescreen");
    });
    //slim
    $('.nicescroll').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });
//metis menu
    $("#menu").metisMenu();
    
    $(".content-page,.side-menu").equalize({
                });
//tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours > 12 ? ' PM' : ' AM';

var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();
var dayname = date.getDay();

var monthNames = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
var week=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]; 

document.getElementById("jam").innerHTML = hours+"."+minutes+ampm;
document.getElementById("hari").innerHTML = week[dayname];
document.getElementById("tanggal").innerHTML = day+" "+monthNames[month]+" "+year;
});   