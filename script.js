/* Основные стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: #f5f5f5;
    color: #333;
    min-height: 100vh;
}

/* Авторизация */
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.auth-card {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.logo {
    font-size: 32px;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 10px;
}

.logo span {
    color: #ff5722;
}

.auth-subtitle {
    color: #666;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-input {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-input:focus {
    outline: none;
    border-color: #007bff;
}

.submit-btn {
    width: 100%;
    padding: 14px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 10px;
}

.submit-btn:hover {
    background: #0056b3;
}

.btn-register {
    background: #28a745;
}

.btn-register:hover {
    background: #1e7e34;
}

.btn-guest {
    background: #6c757d;
}

.btn-guest:hover {
    background: #545b62;
}

.auth-info {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
}

/* Главная страница */
.main-page {
    display: none;
}

.header {
    background: white;
    padding: 15px 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-controls {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logout-btn {
    padding: 8px 16px;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h2 {
    margin: 20px 0;
    color: #333;
}

/* Сетка объявлений */
.ads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.ad-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.ad-card:hover {
    transform: translateY(-5px);
}

.ad-image {
    height: 180px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
}

.ad-content {
    padding: 15px;
}

.ad-title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
}

.ad-price {
    color: #ff5722;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
}

.ad-location {
    color: #666;
    font-size: 14px;
}

.add-ad-container {
    text-align: center;
    margin-top: 40px;
}

.add-ad-btn {
    padding: 15px 30px;
    background: #ff5722;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

/* Модальное окно */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
}

/* Адаптивность */
@media (max-width: 768px) {
    .auth-card {
        padding: 30px 20px;
    }
    
    .ads-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .header {
        flex-direction: column;
        gap: 15px;
    }
}