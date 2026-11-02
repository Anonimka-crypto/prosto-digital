const orderBtn = document.getElementById('orderBtn');
const toast = document.getElementById('toast');
const orderMessage = 'Здравствуйте! Хочу узнать о покупке цифрового набора «Старт продаж» от PROSTO DIGITAL за 4 490 ₸. Подскажите, когда будет доступна оплата и получение файлов?';
orderBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(orderMessage);
    toast.textContent = 'Текст запроса скопирован. Оплата пока не подключена.';
  } catch (e) {
    toast.textContent = orderMessage;
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4200);
});
