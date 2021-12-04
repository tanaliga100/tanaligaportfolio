<template>
<div class="skills">
      <h2>Logic & Design </h2>
      <h4 style="">Two things that got me hook into Web Development</h4>
      <div class="logic">
        <ul>
          <div>
             <img class="icon" src="https://img.icons8.com/ios-filled/20/000000/program.png"/>
              <h3>FrontEnd</h3>
          </div>
          <li class="list">Html5</li>
          <li class="list">Css3</li>
          <li class="list">Javascript</li>
        </ul>
        <ul>
          <div>
            <img class="icon" src="https://img.icons8.com/material-outlined/20/000000/globe--v2.png"/>
          <h3>Backend</h3>
          </div>
          <li class="list">Node.js</li>
          <li class="list">Express</li>
        </ul>
        <ul>
          <div>
            <img class="icon" src="https://img.icons8.com/ios-filled/20/000000/database.png"/>
          <h3>Databases</h3>
          </div>
          <li class="list">MongoDB</li>
          <li class="list">MySql</li>
          <li class="list">Firebase</li>
        </ul>
    </div>
</div>
</template>
<script>
    export default {
        name: 'Stacks'
    }
</script>
<style scoped>
.skills {
  width:100%;
  margin:0;
  padding:0;
  background: white;
  color:crimson;
  text-align: center;

}
.logic{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: center;
}

ul, li{
  padding: 1px;
  font-size: 15px;
  /* margin: 10px; */
  justify-content: center;
  list-style-type: square;
  margin: 0px 10px 10px 10px;
}
h2 {
    font-weight: 700;
    word-spacing: 10px;
    letter-spacing: 2px;
    color:rgba(46, 34, 34, 0.897);
}
h4{
  margin-top:0 ;
  font-weight: 100;
  letter-spacing: 2px;
  color: rgb(121, 74, 13); 
  word-spacing:5px; 
  letter-spacing: 1px; 
  font-size:medium;
 
}
h3 {
  color: rgb(138, 114, 82);
  letter-spacing: 1px;
  font-weight: 100;
}
p {
  letter-spacing: 1px;  
  word-spacing: 2px;
}
.list {
  list-style-type: circle;
  list-style-position: inside;
  color:rgba(46, 34, 34, 0.897);
  text-align: center;
  padding: 3px 0;
}
@media all and (max-width:520px) {
  .logic {
  width:100%;
  margin:0;
  padding:0;
  background: white;
  color:crimson;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.logic ul{
  border: none;
  border-radius: 20px;
  /* box-shadow: 0px 0px 10px 0px; */
  margin: 10px 40px;
  background:rgba(255, 255, 255, 0.207);
  color: white;
}
.list {
  color: rgba(0, 0, 0, 0.535);
}
.icon {
padding-top: 20px;
}
h4 {
  font-size: medium;
  margin: 0px 10px
}

}
</style>