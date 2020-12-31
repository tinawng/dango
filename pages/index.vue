<template>
  <div class="main-container">
    <nav-bar />
    <div class="menu-container portrait:flex-vertical-center-x">
      <NuxtLink to="/list/" ondragstart="return false" ondrop="return false">
        <big-button
          name="Movies"
          baseline="Movies & Series 🍿"
          image="movie.png"
        />
      </NuxtLink>
      <NuxtLink to="/list/p0" ondragstart="return false" ondrop="return false">
        <big-button
          name="Love Movies"
          baseline="Shortcuts to the best part 😉"
          image="hearts.png"
        />
      </NuxtLink>
      <big-button
        name="Upload"
        baseline="Backup some videos 💾"
        image="package.png"
      />
    </div>
  </div>
</template>

<script>
import BigButton from "~/components/BigButton.vue";
import NavBar from "~/components/NavBar.vue";
export default {};
</script>

<style lang="postcss" scoped>
.main-container {
  @apply min-w-screen min-h-screen ;
  @apply bg-olive-200;
  @apply flex justify-center items-center text-center;
}

.menu-container {
  @apply w-2/3;
  @apply mt-24;
  @apply flex justify-between;
  @apply text-steel-800;

  @media (orientation: portrait) {
    @apply h-screen;
    @apply mt-20;
    @apply justify-evenly;
  }
}
</style>
