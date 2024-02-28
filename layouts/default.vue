<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

const { t } = useI18n();
useSeoMeta({
  title: () => t('title'),
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>

        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>

      <!-- 
        The reason for the warning is the "LangSwitcher" component.
        Where should the language selection be placed?
       -->
      <Body>
        <header class="flex justify-between p-2 bg-slate-100">
          <div>Company Logo</div>
          <LangSwitcher />
          <div>Main Menu</div>
        </header>

        <main>
          <slot />
        </main>
      </Body>
    </Html>
  </div>
</template>
