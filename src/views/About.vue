<template>
  <div class="about">
    <div id="category">
            <div class="list spa">
            <h1>Single Page Application</h1>
            <p>I am highly recommend myself to developed single page application because it's easy to manage and maintain, I highly prefer in this approached in web developing.</p>
          </div>
          <div class="list responsive-ui">
            <h1>Responsive UI</h1>
            <p>My Design is great in any devices such as Laptop,Desktop,Tablet and Mobile Phones.Bootsrap Grid System I usually use because it's cross browser flatform.</p>
          </div>
          <div class="list reusable">
            <h1>Reusable</h1> 
            <p>I always think about the future project that how can I developed faster and accurate, So that I must separated some features to a folder and import on different Pages or UI Components. </p>
          </div>
    </div>
    <Links/>
  </div>
</template>
<script>
import Links from '@/components/Links'
export default {
  components: {
    Links
  }
}
</script>
<style scoped>
.about {
  background-color: white;
  color: rgba(0, 0, 0, 0.392);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: max-content;
}
#category{
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  color: rgba(4, 4, 4, 0.652);
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin: 0px 50px;
} 
h1{
    font-weight: lighter;
    font-size: larger;
    word-spacing: 10px;
    letter-spacing: 2px;
    color:rgba(46, 34, 34, 0.897);
}
.list p {
  grid-gap: 20px;
  background-color: rgba(48, 15, 21, 0.09);
  padding: 20px;
  border-radius: 10px;
  border:none;
  word-spacing: 10px;
}
@media all and (max-width:520px){
#category{
  margin-top: 50px;
  background-color: rgb(255, 255, 255);
  color: rgba(4, 4, 4, 0.652);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin: 10px 50px;

}
.list p {
  padding: 30px;
}
}
</style>