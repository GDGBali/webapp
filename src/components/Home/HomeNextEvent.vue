<template>
  <BaseLazyBg img-name="events">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <div class="product-sans display-2 white--text">
            {{ $t('events.next') }}
          </div>
        </v-flex>
        <v-flex xs12>
          <VCard>
            <VCardTitle primary-title>
              <div class="headline mb-0 product-sans">
                Google I/O 2018 Extended
              </div>
              <div class="body-1 mt-3">
                {{ $t('events.io.description') }}
              </div>
              <v-layout wrap>
                <v-flex xs12>
                  <VList>
                    <VListTile v-for="detail in details" :key="detail.title">
                      <VListTileAction>
                        <VIcon left class="mr-2">
                          {{ detail.icon }}
                        </VIcon>
                      </VListTileAction>
                      <VListTileContent>
                        <VListTileTitle v-text="detail.title" />
                      </VListTileContent>
                    </VListTile>
                  </VList>
                </v-flex>
              </v-layout>
            </VCardTitle>
            <VCardActions class="justify-end">
              <VBtn to="/events/io18" color="primary">
                <VIcon left>
                  local_activity
                </VIcon>
                Join
              </VBtn>
            </VCardActions>
          </VCard>
        </v-flex>
      </v-layout>
    </v-container>
  </BaseLazyBg>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          title: 'Kembali Innovation Hub',
          icon: 'location_on',
        },
        {
          title: 'Sat Jun 23 2018, 8:00:00 AM',
          icon: 'event',
        },
        {
          title: '20 attending members',
          icon: 'people',
        },
      ],
    };
  },
};
</script>
