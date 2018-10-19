<template>
  <div class="apollo-example">
    <!-- Cute tiny form -->
    <div class="form">
      <label for="field-name" class="label">
        Name
      </label>
      <input
        v-model="name"
        placeholder="Type a name"
        class="input"
        id="field-name"
      >
    </div>

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('@queries/AllEvents.gql')"
      :variables="{ when: 'future' }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          Loading...
        </div>

        <div v-else-if="error" class="error apollo">
          An error occured
        </div>

        <div v-else-if="data" class="result apollo">
          {{ data }}
        </div>

        <div v-else class="no-result apollo">
          No result :(
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Anne',
      newMessage: '',
    };
  },

  computed: {
    formValid() {
      return this.newMessage;
    },
  },

  methods: {
    onMessageAdded(previousResult, { subscriptionData }) {
      return {
        messages: [
          ...previousResult.messages,
          subscriptionData.data.messageAdded,
        ],
      };
    },
  },
};
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 8px;
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.image-input {
  margin: 20px;
}
</style>
