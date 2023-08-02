const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
//index içerisinden verileri alıyorum

const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    // Yeni yılın tarihi
    const currentDate = new Date();
    // Güncel tarih
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    // milisaniyeyi saniyeye çevirdim
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor((totalSeconds / 60) %60);
    const seconds = Math.floor(totalSeconds %60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days,hours,mins, seconds);
    // Bu sayede yeni yıla kalan milisaniye sayısını console bastırıp bu sayıyı
    // saniyeye çevirip daha sonra saniyeyi kullanarak günleri vs elde ediyorum.
    // 3600 saniye = 1 saat
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    // ? işareti burada koşul görevi görüyor yani
    // eğer ki time < 10 sağlanırsa 0 ekleniyor else : normal zamanı yolluyo
    // Eğer 1 dakika kalırsa 1 yerine 01 olarak gözükmesini sağlıyor veya diğerlerinde.
    // yani 10 dan küçük sayılara 0 ekliyor
}


// initial call
countdown();

setInterval(countdown, 1000);
// Her saniye countdownu çalıştırıyor
