<template>
  <div class="me">
    <div class="left">
    <h1 class="greet" v-bind:me="me">{{greet}}</h1>
    <h1 class="my-name" v-bind:name="name">{{name}}</h1>
    <h3 class="profession" v-bind:profession="profession">{{profession}}</h3>
    <p class="para" v-bind:para="para">{{para}}</p>
    <div class="contact">
        <a href="mailto:jordantanaliga@gmail.com?subject=Hello%20Jordan ~?">Contact</a>
    </div>
    </div>
    <div class="right">
      <img class="picture" :src="img" alt="niana">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Me',
  data() {
    return {
      greet: "Hello !",
      name: "I am Jordan",
      profession: "Front-End Web Developer ||",
      para: "Creating the best looking web applications with good user experience is my JOB. And I highly recommend myself in developing single-page-applications using Vue.js.",
      img: "https://cdna.artstation.com/p/assets/images/images/014/009/938/large/ekachai-milintapas-chris-martin.jpg?1542065546",
      pic: "../src/assets/niana.jpg"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.me{
  display: grid;
  grid-template-columns: 3fr 1fr;
  width:100%;
  box-sizing:border-box;
  margin:0;
  padding:50px;
  background: white;
  color: crimson;
  justify-content: center;
  height: 100%;

}
.left {
  padding: 10px;
  width: 100%;
  justify-content: center;
}

.right {
  padding: 10px;
  border-radius: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.contact {
    background-color: rgba(220, 20, 60, 0.905);
    color: rgba(255, 255, 255, 0.46);
    padding:5px 10px;
    font-size: 15px;
    width: 100px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 3px 1px 1px;
    text-decoration: none;
    text-align: center;
}
.contact:hover{
  background: rgba(0, 0, 0, 0.761);
  color: white;
}
.picture{
  width: 100%;
  height: 300px;
  border-radius:50%;
}
a {
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 1px;  
  font-size: 20px;
  color: white;
}
.greet{
    font-weight: 900;
    letter-spacing: 0;    
    line-height: 2rem;
    color:rgba(56, 42, 42, 0.897);

}
.my-name{
    font-weight: 900;
    letter-spacing: 0px;    
    line-height: 2rem;
    color: crimson;
}
.profession {
        margin-top: 0;
       letter-spacing: 1px;  
       word-spacing: 2px;
       font-weight: normal;
}
.para {
      letter-spacing: 1px;  
       word-spacing: 2px;
       color:rgba(46, 44, 41, 0.809);
       font-weight: lighter;
}

@media all and (max-width:520px) {
    .me {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;
    }
    .left {
      padding: 10px;
      width: 100%;
      justify-content: center;
      font-size: medium;
}
    .right {
      
      padding: 10px;
      border-radius: 100%;
      width: 60%;
      justify-content: center;
      align-items: center;
    }
    .para {
      letter-spacing: 1px;  
       word-spacing: 2px;
       color:rgb(65, 39, 5);
       font-weight: lighter;
       font-size: medium;
       margin-bottom: 30px;
}
    .contact {
    background-color: rgba(220, 20, 60, 0.905);
    color: rgba(255, 255, 255, 0.46);
    padding:5px 10px;
    font-size: small;
    font-weight: 100;
    width: 100px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 3px 1px 1px;
    text-decoration: none;
    text-align: center;
}
.contact:hover{
  background: rgba(0, 0, 0, 0.761);
  color: white;
}

}
</style>
