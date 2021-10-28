<template>
    <div style="height: 100%">
        <Header/>
        <div class="main">
            <Sidebar />
            <div class="main__content">
                <Nav></Nav>
                <div class="main__content__data">
                    <Lists></Lists>
                    <Content></Content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from '../components/Header.vue'
    import Sidebar from '../components/Sidebar.vue'
    import Nav from '../components/Nav.vue'
    import Lists from '../components/Lists.vue'
    import Content from '../components/Content.vue'

    export default {
        components: {
            Header,
            Sidebar,
            Nav,
            Lists,
            Content
        }
    }
</script>