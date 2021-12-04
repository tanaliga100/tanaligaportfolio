<template>
  <div class="container">
    <Me class="me"/>
    <Stacks class="stacks"/>
    <MyProjects class="projects"/>
    <MyFooter class="footer"/>
    <Links class="links"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Me from '@/components/Me';
import MyProjects from '@/components/MyProjects';
import MyFooter from '@/components/MyFooter';
import Stacks from '@/components/Stacks';
import Links from '@/components/Links'

export default {
  name: 'Home',
  components: {
    Me,
    MyProjects,
    MyFooter,
    Stacks,
    Links
  }
}
</script>
<style scoped>
.container {
  margin:0;
  padding: 0;
  display: grid;
}
.me {
    background: white;
}
.stacks {
  background: rgb(255, 255, 255);
}
.projects{
  background: rgb(255, 255, 255);
}
.footer {
  background: rgba(252, 252, 252, 0.234);
}
.links{
   background: white;
}

</style>