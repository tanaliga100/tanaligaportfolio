<template>
    <div class="wrapper">
        <div class="middle">
            <div class="links">
                <a target="_blank"  :href="link1"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"/></a>
            </div>
            <div class="links">
                <a target="_blank"   :href="link2"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/></a>
            </div>
            <div class="links">
                <a target="_blank" :href="link3"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a>
            </div>
            <br>
        </div>
            <!-- <small class="copyright">&#169; 2019 <cite>jordantanaliga100</cite></small> -->
    </div>
</template>

<script>
    export default {
        name: "Links",
        data () {
            return {
                link1: "https://www.facebook.com/tanaligajordanpascual",
                link2: "https://www.linkedin.com/in/jordan-tanaliga-664b801a3/",
                link3: "https://github.com/tanaliga100"
            }
        }
    }
</script>

<style scoped>

.wrapper {
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.middle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px
}
.middle:hover {
    cursor: pointer;
    height: 10px;
    text-decoration: underline;
    
}
.copyright {
    text-align: center;
    width: 100%;
}

</style>