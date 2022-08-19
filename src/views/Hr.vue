<template>
  <div class="background">
    <MainHeader/>
    <transition appear name="title">
        <div class="title">
            <h2>Human Resources Page</h2>
            <p>Human resources (HR) is the division of a business that is charged with finding, screening, recruiting, and training job applicants. It also administers employee-benefit programs.</p>
        </div>
    </transition>
    <transition appear name="body">
        <div class="body">
            <section>
                <div class="section-name">
                    <p>Assets</p>
                </div>
                <div class="cards">
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                    <MobileCard :file="demoData"/>
                </div>
            </section>
        </div>
    </transition>
  </div>
</template>

<script>
import MainHeader from "../components/atom/MainHeader.vue";
import MobileCard from "../components/molecule/MobileCard.vue";
export default {
    components: {
    MainHeader,
    MobileCard,
    },
    setup() {
        let demoData = {
            fileName: "Printers",
            fileDescription: "List of all printers in the HR department",
            fileUrl: "../files/printers-hr-department.csv",
            fileDotName: "printers-hr-department.csv",
        };

        return { demoData }
    }
}
</script>

<style scoped>
.background {
  height: auto;
  width: 100%;
  background-image: url("../assets/hero.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: scroll;
}

.title {
    margin-top: 30px;
    color: aliceblue;
    text-align: center;
    padding: 2em;
    min-height: 200px;
}
.title-enter-active,
.title-leave-active {
  transition: opacity 1s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
}

.body {
    background-color: aliceblue;
    width: 100%;
    min-height: 600px;
    border-radius: 20px 20px 0px 0px;
    padding: 1.5em 2em;
    box-sizing: border-box;
}

.body-enter-active,
.body-leave-active {
  transition: all 1s ease-out;
}

.body-enter-from {
    opacity: 0;
    transform: translateY(400px);
}

.body-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.section-name {
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
}

.section-name p {
    font-size: 23px;
    font-weight: 600;
    margin: 0;
}



</style>