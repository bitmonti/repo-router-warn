<script setup>
const { locale } = useI18n();
const { data } = await useFetch('/api/blog', {
  query: { locale: locale.value },
});
const { localizations } = data.value;
const setI18nParams = useSetI18nParams();
setI18nParams(localizations);
</script>

<template>
  <div>
    <div>my blog</div>
    <pre>{{ localizations }}</pre>
  </div>
</template>
