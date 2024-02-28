<script setup>
definePageMeta({
  middleware: function () {
    const { $localePath } = useNuxtApp();
    return navigateTo($localePath('blog'), { redirectCode: 301 });
  },
});
</script>
