<script setup>
const { locale } = useI18n();
const { data } = await useFetch('/api/blog', {
  query: { locale: locale.value },
});
</script>

<template>
  <div class="space-y-4 p-4">
    <div>{{ $t('title') }}</div>
    <NuxtLinkLocale
      v-for="slug in data.localizations[locale]"
      :to="{ name: 'blog-slug', params: { slug } }"
      class="text-blue-600"
      >{{ slug }}</NuxtLinkLocale
    >
  </div>
</template>
