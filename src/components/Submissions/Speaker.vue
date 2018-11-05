<template>
  <v-flex xs12>
    <h1 class="product-sans mb-3 text-xs-center">
      Share with Us
    </h1>
    <div class="subheading">
      <p class="description">
        Berbagi itu sangatlah penting dalam ruang lingkup komunitas.
        Kami dengan senang hati memberikanmu kesempatan untuk berbagi bersama GDG Bali.
        <br><br>
        Daftarkan dirimu beserta topik yang ingin kamu bahas.
      </p>
    </div>
    <SubmissionDialog
      form-title="Speaker Submission"
      button-text="Become a speaker"
      dialog-title="Share with Us!"
      submission-type="speaker"
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
