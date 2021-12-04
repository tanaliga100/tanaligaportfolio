<template>
    <div class="projects">
        <h2>Projects</h2>
        <h4>I've done a lot of small scales projects using Vue.js maximixing its full features</h4>
        <p>The projects are in my github repositories...</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.projects {
    display: grid;
    width: 100%;
    background: rgb(255, 255, 255);
    color: black;
    text-align: center;
    height: 250px;
    justify-content: center;
    align-items: center;
    
}
h2 {
    font-weight: 700;
    word-spacing: 20px;
    letter-spacing: 2px;
    color:rgba(46, 34, 34, 0.897);
    padding-top: 10px 0;
    background: rgba(166, 169, 169, 0.035);
    padding: 5px;
    
}
h4{
    padding-top: 10px;
  font-weight: normal;
  letter-spacing: 2px;
  color: rgb(121, 74, 13); 
  word-spacing:5px; 
  letter-spacing: 1px; 
  font-size:large;
  margin: 0 30px;
 
}
p {
    margin-bottom: 50px;
    padding: 10px;
    margin: 0 20px;
    color: rgba(220, 20, 60, 0.871);
}
@media all and (max-width:520px) {
    .projects, h2, h4{text-align: center;}
}
</style>