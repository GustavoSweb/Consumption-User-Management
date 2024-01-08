<template>
  <div class="animate-showAlert fixed right-0 top-[50px]">
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
      role="alert"
    >
      <span class="block sm:inline">{{errMessage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert-Message",
  props: {
    errMessage: String,
  },
};
</script>
