<template lang="pug">
.input
  input(
    v-model="content"
  )
</template>

<script>
export default {
  data: () => {
    content: ''
  }
}
</script>
