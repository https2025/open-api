export default function handler(req, res) {
  const quotes = [
    "Hidup bukan soal menunggu badai reda, tapi belajar menari di tengah hujan.",
    "Kamu lebih kuat dari yang kamu kira.",
    "Jangan menyerah hari ini, karena besok belum tentu lebih mudah.",
    "Kadang diam bukan karena kalah, tapi karena cukup paham mana yang pantas diperjuangkan.",
    "Rasa sakit hari ini adalah kekuatan untuk esok hari."
  ];

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json({
    status: true,
    author: "Leon",
    waktu: new Date().toISOString(),
    quote: random
  });
}
