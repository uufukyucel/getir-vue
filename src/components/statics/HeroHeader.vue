<template>
    <div class="hero-header">
        <div class="slider">
            <div class="slider-inner">
                <img src="@/assets/images/sliders/getir-mainpage-1.jpg" alt="">
                <div class="slider-area">
                    <div class="container">
                        <div class="left-area">
                            <img src="@/assets/images/bimutluluk.svg" alt="">
                            <span class="slogan">
                                Dakikalar içinde <br>
                                kapınızda
                            </span>
                        </div>
                        <div class="right-area">
                            <div class="login">
                                <h5 class="login-title">Giriş yap ve kayıt ol</h5>
                                <div class="input-area">
                                    <div class="phone-code-input">
                                        <label for="phoneCountryCode">Phone</label>
                                        <input type="tel" class="phone-code" placeholder="+90">
                                    </div>
                                    <div class="phone-input">
                                        <label for="phoneNumber">Telefon Numarası</label>
                                        <input type="tel" id="phoneNumber" class="phone-number" placeholder="">
                                    </div>
                                </div>
                                <button class="with-phone-btn">Telefon numarası ile devam et</button>
                                <hr>
                                <button class="with-facebook-btn">
                                    <font-awesome-icon :icon="['fab', 'facebook']" />
                                    <span>Facebook ile devam et</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>