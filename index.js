// Saniye, dakika ve saat için elementleri seçiyoruz
const sec = document.querySelector('.secs');
const min = document.querySelector('.mins');
const hours = document.querySelector('.hours');

// Saati güncellemek için bir fonksiyon tanımlıyoruz
function tiktak(){
    // Şu anki tarihi ve saati alıyoruz
    let now = new Date();
    // Tarih nesnesinden saniye, dakika ve saati alıyoruz
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    // Her bir akrep için dönme açılarını zamana göre hesaplıyoruz
    // Saniye ve dakika için her birim 6 dereceye karşılık geliyor (360 / 60)
    // Saat için her birim 30 dereceye karşılık geliyor (360 / 12)
    // Akreplerin 12'yi gösteren konumdan başlaması için 180 derece ekliyoruz
    let secAngle = 180 + (second * 6);
    let minAngle = 180 + (minute * 6);
    let hourAngle = 180 + (hour * 30);

    // Elementlere dönme stillerini şablon dizeleri kullanarak uyguluyoruz
    sec.style.transform = `rotate(${secAngle}deg)`;
    min.style.transform = `rotate(${minAngle}deg)`;
    hours.style.transform = `rotate(${hourAngle}deg)`;
}

// setInterval kullanarak fonksiyonu her saniye çağırıyoruz
setInterval(tiktak, 1000);
