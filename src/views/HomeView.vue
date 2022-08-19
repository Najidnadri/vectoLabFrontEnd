<template>
  <div class="background">
      <MainHeader/>
      <transition appear name="title">
        <div class="title-container">
          <div class="title">
            <h1>Welcome to VectoLabs!</h1>
            <p><i>Use mobile phone for better experience!</i></p>
            <br>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis nulla ipsum. Eos ad repellendus inventore unde praesentium magni? Eaque facilis neque odit voluptatem velit officiis itaque vitae quibusdam quasi.</p>
            <button>Learn More</button>
          </div>
        </div>
      </transition>


      <transition appear name="title">
        <div class="tab-container"> 
          <div class="tab">
            <h1>Human Resources</h1>
            <p>Human resources (HR) is the division of a business that is charged with finding, screening, recruiting, and training job applicants. It also administers employee-benefit programs.</p>
            <button @click="goToHr()">Go to HR page </button>
          </div>
        </div>
      </transition>


      <transition appear name="title">
        <div class="tab-container">
          <div class="tab">
            <h1>Information Technology</h1>
            <p>Information technology (IT) is the use of computers to create, process, store, retrieve, and exchange all kinds of data[1] and information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.</p>
            <button @click="goToIt()">Go to IT page</button>
          </div>
        </div>
      </transition>

      <transition appear name="title">
        <div class="tab-container">
          <div class="tab">
            <h1>Account</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iste nulla pariatur! Ex veritatis voluptas excepturi. Enim non ullam aliquam voluptatibus at deserunt facere sequi tempore, saepe ad eveniet eligendi?</p>
            <button @click="goToAcc()">Go to Account page</button>
          </div>
        </div>
      </transition>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import MainHeader from "../components/atom/MainHeader.vue";
export default {
  components: {
    MainHeader
  },
  methods: {
    goToAcc: function() {
      this.$router.push('/acc')
    },
    goToHr: function() {
      this.$router.push('/hr')
    },
    goToIt: function() {
      this.$router.push('/it')
    }
  }
}
</script>

<style scoped>

button {
  margin-top: 1em;
  width: 50%;
  padding: 0.7em 0em;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  font-family: "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-weight: 700;
  color: rgb(44, 43, 43);
  font-size: 14px;
}


.background {
  height: 100%;
  background-image: url("../assets/hero.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(100vh);
}



p {
  margin: 0;
}

.title {
  text-align: center;
  color: aliceblue;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  padding: 0em 2em 0em 2em;
}

.title-container {
  position:relative;
  scroll-snap-align: start;
  min-height: 100vh;
}

.tab-container {
  position: relative;
  scroll-snap-align: start;
  z-index: 3;
  min-height: 100vh;
}

.tab {
  text-align: center;
  color: aliceblue;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  padding: 0em 2em 0em 2em;
}

.title-enter-active,
.title-leave-active {
  transition: opacity 1s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
}
</style>