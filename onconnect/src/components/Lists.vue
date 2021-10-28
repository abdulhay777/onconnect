<template>
    <div class="lists-content">
        <div class="lists">
            <div class="lists__search">
                <img :src="require('../assets/img/filter_alt_black_24dp.svg')" class="lists__search__filter" alt="">
                <div class="lists__search__input">
                    <input type="text" placeholder="Поиск">
                    <img :src="require('../assets/img/search.svg')" alt="">
                </div>
            </div>
            <div class="lists__lists">
                <div class="lists__list">
                    <div class="lists__list__top">
                        <p class="number">
                            1-2676-2021/5677
                        </p>
                        <div>
                            <img :src="require('../assets/img/file_download_black_24dp.svg')" alt="">
                            12.02.2021
                        </div>
                        <div class="m-62">
                            <img :src="require('../assets/img/gavel_black_24dp.svg')" alt="">
                            12.02.2021 - 12:00
                        </div>
                    </div>
                    <p>
                        10- Сайлов комиссиясининг харакатлари низолаш тугрисида
                    </p>
                    <span>Тулик канаотлантирилган</span>
                </div>
                <div class="lists__list">
                    <div class="lists__list__top">
                        <p class="number">
                            1-2676-2021/5677
                        </p>
                        <div>
                            <img :src="require('../assets/img/file_download_black_24dp.svg')" alt="">
                            12.02.2021
                        </div>
                        <div class="m-62">
                            <img :src="require('../assets/img/gavel_black_24dp.svg')" alt="">
                            12.02.2021 - 12:00
                        </div>
                    </div>
                    <p>
                        10- Сайлов комиссиясининг харакатлари низолаш тугрисида
                    </p>
                    <span>Тулик канаотлантирилган</span>
                </div>
            </div>
            <div class="lists__pagination">
                <div class="lists__pagination__much">
                    (7 тадан 7)
                </div>
                <div class="lists__pagination__nav">
                    <ul>
                        <li class="arrow">
                            <img :src="require('../assets/img/navigate_next_black_24dp.svg')" alt="">
                        </li>
                        <li>1</li>
                        <li class="arrow">
                            <img :src="require('../assets/img/navigate_next_black_24dp-1.svg')" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lists-content__toggle">
            <img :src="require('../assets/img/Group 1670.svg')" alt="">
        </div>
    </div>
</template>