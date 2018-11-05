<template>
  <v-flex xs12>
    <h1 class="product-sans mb-3 text-xs-center">
      Topic Submission
    </h1>
    <div class="subheading ">
      <p class="description">
        Jika kamu ingin kami untuk membahas topik yang tertentu, kami akan sangat senang untuk mendengar masukkanmu.
        <br><br>
        Topiknya bisa apa saja asalkan masih berkaitan dengan dunia pemrograman dan 
        kamu tidak perlu khawatir bahwa topiknya harus berkaitan dengan salah satu produk google.
        <br><br>
        Kami sendiri yang akan merancang bagaimana menghubungkan ide topikmu dengan salah satu produk google.
      </p>
    </div>
    <SubmissionDialog
      form-title="Topic Submission"
      button-text="Submit a topic"
      dialog-title="Submit your idea!"
      submission-type="topic"
      reasons-text="Topik yang diinginkan"
    />
  </v-flex>
</template>

<script>
import SubmissionDialog from '@components/Submissions/Dialog';

export default {
  components: {
    SubmissionDialog,
  },
};
</script>


<style lang="stylus" scoped>
.description {
  max-width: 670px;
  margin: 0 auto;
}
</style>
