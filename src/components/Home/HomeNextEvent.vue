<template>
  <BaseLazyBg img-name="events">
    <VContainer grid-list-xl>
      <VLayout row wrap>
        <VFlex xs12>
          <div class="product-sans display-2 white--text">
            {{ $t('events.next') }}
          </div>
        </VFlex>
        <VFlex xs12>
          <VCard>
            <VCardTitle primary-title>
              <div class="headline mb-0 product-sans">
                Google I/O 2018 Extended
              </div>
              <div class="body-1 mt-3">
                {{ $t('events.io.description') }}
              </div>
              <VLayout row wrap>
                <VFlex xs12>
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
                </VFlex>
              </VLayout>
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
        </VFlex>
      </VLayout>
    </VContainer>
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
