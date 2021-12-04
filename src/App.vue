<template>
  <div id="nav">
    <router-link to="/"> Home</router-link> 
    <router-link to="/about">About</router-link> 
    <!-- <router-link :to="{name: 'Services'}">Services</router-link>  -->
  </div>
  <router-view/>      
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
// import Services from './views/Services.vue'

export default {
  components: {
    Home,
    About
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color:#333;
  box-sizing: border-box;
  background: rgba(177, 177, 177, 0.035);
}

#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap:50px;
  justify-content: end;
  align-items: center;
  background: rgba(255, 255, 255, 0.234);
}

#nav a {
  font-weight: normal;
  color: rgb(126, 116, 111);
  text-decoration: none;
  font-size: 18px;
  /* border: 1px solid crimson; */
  border-radius: 4px;
  padding: 3px 12px;
  /* box-shadow: 0px 0px 10px 0px; */
}

#nav a.router-link-exact-active{
  color: crimson;
  padding: 3px 12px;
  border-radius: 4px;
}
@media all and (max-width:750px) {
  #nav {
    text-align: center;
    display: flex;
    grid-template-columns: 100px;
    justify-content: center;
    gap:10px;
    background: rgb(0, 0, 0);
    color: white;

  }
  #nav a {
  font-weight: normal;
  color: rgb(126, 116, 111);
  text-decoration: none;
  font-size:16px;
  /* border: 1px solid crimson; */
  border-radius: 4px;
  padding: 3px 12px;
    color: rgba(255, 255, 255, 0.796);

  /* box-shadow: 0px 0px 10px 0px; */
}



}

@media all and (max-width:300px){
    #nav a {
  font-weight: normal;
  color: rgb(126, 116, 111);
  text-decoration: none;
  font-size:12px;
  border-radius: 4px;
  padding: 3px 12px;
  color: rgba(255, 255, 255, 0.796);
}

}
</style>
