<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <img src="@assets/icons/awesome.svg" alt="" width="500">
          <h1 class="product-sans">
            Awesomeness!
          </h1>
          <i18n
            path="awesome.title"
            tag="div"
            class="body-2"
            v-html="$t('awesome.title')"
          />
        </div>
        <VCard>
          <VCardTitle>
            <div class="headline product-sans mx-auto">
              Awesome Lists
            </div>
          </VCardTitle>
          <VExpansionPanel popout>
            <VExpansionPanelContent
              v-for="(awesome, i) in awesomeness"
              :key="`awesome-${i}`"
            >
              <div slot="header" class="title product-sans">
                {{ awesome.category }}
              </div>
              <VCard>
                <VCardText>
                  <VList>
                    <template v-for="(item, i2) in awesome.lists">
                      <VListTile :key="`item-${i2}`">
                        <VListTileAction>
                          <VIcon color="grey lighten-1">
                            locked
                          </VIcon>
                        </VListTileAction>
                        <VListTileContent>
                          <VListTileTitle v-text="item" />
                        </VListTileContent>
                      </VListTile>
                      <VDivider
                        v-if="i2 + 1 < awesome.lists.length"
                        :key="`divider-${i2}`"
                      />
                    </template>
                  </VList>
                </VCardText>
              </VCard>
            </VExpansionPanelContent>
          </VExpansionPanel>
        </VCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { awesomeness } from '@src/data/awesomeness';
import appConfig from '@src/app.config';

export default {
  metaInfo: {
    title: 'Awesome!',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      active: null,
      awesomeness,
    };
  },
};
</script>
