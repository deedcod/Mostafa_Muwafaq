// تأثيرات التمرير الاحترافية
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة المراقب للعناصر
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // إزالة المراقب بعد الظهور لتحسين الأداء
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // مراقبة الأقسام
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // مراقبة البطاقات
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // تأثير التمرير على الهيدر
    let lastScrollTop = 0;
    const topBar = document.querySelector('.top-bar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // تأثير التمرير البطيء للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // تأثيرات التفاعل مع الأزرار
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // تأثيرات التفاعل مع البطاقات
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // تأثيرات التفاعل مع إحصائيات البطل
    document.querySelectorAll('.stat-box').forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // عداد الأرقام المتحرك
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(statNumber => {
            const target = parseInt(statNumber.textContent);
// إذا القيمة ليست رقم → تجاهل العنصر
if (isNaN(target)) return;
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    statNumber.textContent = target;
                    clearInterval(timer);
                } else {
                    statNumber.textContent = Math.floor(current);
                }
            }, 20);
        });
    }

    // تشغيل عداد الأرقام عند ظهور الإحصائيات
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // تأثير التحميل التدريجي للصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'all 0.5s ease-out';
    });

    // تأثير التركيز على حقول الإدخال
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary)';
            this.style.boxShadow = '0 0 0 3px rgba(var(--primary-rgb), 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = 'var(--border)';
            this.style.boxShadow = 'none';
        });
    });

    console.log('✨ Professional animations loaded successfully!');
});