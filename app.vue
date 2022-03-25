<template>
	<NuxtLayout name="navigation">
    <nuxt-page></nuxt-page>
  </NuxtLayout>
</template>
<script setup>
import {useRuntimeConfig} from "nuxt3/app";

const EnvConfig = useRuntimeConfig()
</script>
