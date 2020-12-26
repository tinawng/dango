<template>
  <div class="container">
    <nav-bar />
    <div class="w-2/3 flex justify-between">
      <big-button name="Movies" baseline="Movies & Series 🍿" image="movie.png"/>
      <big-button name="Love Movies" baseline="Shortcut to the best parts 😉" image="hearts.png"/>
      <big-button name="Download" baseline="Backup some videos 💾" image="package.png"/>
    </div>
  </div>
</template>

<script>
import BigButton from "~/components/BigButton.vue";
import NavBar from "~/components/NavBar.vue";
export default {};
</script>

<style>
.container {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: linear-gradient(90deg, rgba(239,239,239,1) 15%, rgba(225,242,192,1) 35%);

  /* background: linear-gradient(
    to right,
    #fafafa 0%,
    #fafafa 25%,
    #e1f2c0 25%,
    #e1f2c0 100%
  ); */
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
