<template>
    <div class="login-page">
        <div class="login-page__content">
            <div class="login-page__content__banner">
                <img :src="require('../assets/img/banner.png')" alt="">
            </div>
            <div class="login-page__content__login">
                <div class="login-page__content__login__form">
                    <img :src="require('../assets/img/logo.png')" alt="">
                    <div class="form-style">
                        <div class="form">
                            <input type="text" id="username" class="form__input" autocomplete="off" placeholder=" " />
                            <label for="username" class="form__label"> Логин </label>
                        </div>
                        <div class="form">
                            <input v-if="showPassword" type="text" id="password" class="form__input" autocomplete="off" placeholder=" " v-model="password" />
                            <input v-else type="password" id="password" class="form__input" autocomplete="off" placeholder=" " v-model="password">
                            <label for="password" class="form__label"> Пароль </label>
                            <img :src="password_image" @click="toggleShow">
                        </div>
                        <div class="form__submit">
                            <a href="">Забыли пароль?</a>
                            <button>Кириш</button>
                        </div>
                    </div>
                    <div class="login-page__content__login__form__bottom">
                        <p>
                            Безопасность системы осуществлена на базе стандартов<br/>
                            O'zDST 1105:2009 Алгоритм шифрования данных<br/>
                            O'zDST 1192:2009 Процессы формирования и проверки ЭЦП<br/>
                            Версия 3.0 ГУП UNICON.UZ, OOO UNICON-SOFT 2011-2018
                        </p>
                        <button>Ввод ключа</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showPassword: false,
                password: null,
                password_image: require('../assets/img/password-show.png')
            };
        },
        computed: {
            buttonLabel() {
                return (this.showPassword) ? "Hide" : "Show"
            }
        },
        methods: {
            toggleShow() {
                this.showPassword = !this.showPassword
                if (!this.showPassword) {
                    this.password_image = require('../assets/img/password-show.png')
                } else {
                    this.password_image = require('../assets/img/password-hide.png')
                }
            }
        }
    }
</script>