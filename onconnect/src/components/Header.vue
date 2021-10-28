<template>
    <div class="header">
        <img :src="require('../assets/img/header-logo.svg')" />
        <div class="header__right">
            <div class="header__right__lang cursor_pointer">
                <p>ru</p>
                <img :src="require('../assets/img/lang.svg')" />
            </div>
            <div class="header__right__t header__right__m-16 cursor_pointer">
                <img :src="require('../assets/img/T.svg')" />
            </div>
            <div class="header__right__full header__right__m-16 cursor_pointer">
                <img :src="require('../assets/img/fullscreen.svg')" />
            </div>
            <div class="header__right__search header__right__m-16 cursor_pointer">
                <img :src="require('../assets/img/search-gray.svg')" />
            </div>
            <div class="header__right__avatar header__right__m-16">
                <div class="header__right__avatar__fullname">
                    <p>Name</p>
                    <span>Admin</span>
                </div>
                <div class="header__right__avatar__img">
                    <img :src="require('../assets/img/profile-img.jpg')" />
                </div>
                <div>
                    <img :src="require('../assets/img/avatar_arrow.svg')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>