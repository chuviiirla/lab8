document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // В реальном проекте здесь был бы AJAX-запрос на сервер
            // Для учебного проекта просто покажем сообщение
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим на ${email} в течение 24 часов.`);
            
            // Очищаем форму
            feedbackForm.reset();
        });
    }
    
    // Анимация при загрузке страницы
    const productCards = document.querySelectorAll('.product-card, .category');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});