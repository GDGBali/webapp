<template>
  <v-layout wrap class="mt-3">
    <v-flex 
      xs12 
      sm6 
      v-for="event in events"
      :key="event.title"
    >
      <EventCard :event="event" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
