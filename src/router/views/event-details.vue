<template>
  <div class="pa-2">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm8 md4>
          <div>
            <img src="@assets/icons/io18.svg" alt="">
          </div>
          <div>
            <VBtn 
              fab 
              dark 
              small 
              color="orange accent-4"
            >
              <VIcon>event</VIcon>
            </VBtn>
            22 July 2018
          </div>
          <div>
            <VBtn
              href="https://goo.gl/maps/UznLp1j1C8z"
              target="_blank"
              fab
              dark
              small
              color="orange accent-4"
            >
              <VIcon>directions</VIcon>
            </VBtn>
            Kembali Innovation Hub
          </div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <div class="display-3 product-sans">
            Schedule
          </div>
          <v-container fluid grid-list-xl>
            <v-layout
              v-for="item in schedules"
              :key="item.title"
              row
              wrap
            >
              <v-flex
                xs3
                sm2
                md1
                class="title product-sans"
              >
                {{ item.time }}
              </v-flex>
              <v-flex
                xs9
                sm10
                md11
                class="subheading product-sans"
              >
                <div>
                  {{ item.title }}
                </div>
                <div class="body-2">
                  {{ item.speaker }}
                </div>
                <div v-for="codelab in item.codelabs" :key="codelab.title" class="mt-3">
                  <div>
                    {{ codelab.title }}
                  </div>
                  <div class="body-2">
                    {{ codelab.speaker }}
                  </div>
                </div>
              </v-flex>
              <v-flex xs12>
                <VDivider />
              </v-flex>
            </v-layout>
          </v-container>
          <v-container grid-list-xl>
            <v-layout column wrap>
              <v-flex xs12>
                <img src="@assets/icons/telegram.svg" alt="" class="teleImg">
                <div class="display-1 product-sans mb-3">
                  Telegram Groups
                </div>
                <div class="subheading product-sans mb-3">
                  <a href="https://www.petanikode.com/kumpulan-group-channel-bot-telegram/" target="_blank">
                    Source
                  </a>
                </div>
                <VList>
                  <VListTile
                    v-for="(group, idx) in groups"
                    :key="`group.text-${idx}`"
                  >
                    <VListTileContent>
                      <VListTileTitle>
                        <a :href="group.link" target="_blank">
                          {{ group.text }}
                        </a>
                      </VListTileTitle>
                    </VListTileContent>
                  </VListTile>
                </VList>
              </v-flex>
              <v-flex xs12>
                <div class="display-1 product-sans">
                  Notes
                </div>
                <div class="subheading mb-3">
                  (Build The Future of Web)
                </div>
                <VList>
                  <VListTile
                    v-for="(note, idx) in notes"
                    :key="`note.text-${idx}`"
                  >
                    <VListTileContent>
                      <VListTileTitle>
                        {{ note.description }} :
                        <a :href="note.link" target="_blank">
                          {{ note.text }}
                        </a>
                      </VListTileTitle>
                    </VListTileContent>
                  </VListTile>
                </VList>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Google I/O 2018',
  },
  data() {
    return {
      schedules: [
        { time: '09:00', title: 'Registration' },
        { time: '09:30', title: 'Google Keynote', speaker: 'Leonard Papilaya' },
        {
          time: '09:50',
          title: 'Journey at Google I/O',
          speaker: 'Dennis Alund',
        },
        {
          time: '10:00',
          title: 'Building App Using Kotlin',
          speaker: 'Wayan Dharmana',
        },
        { time: '10:30', title: 'Ice Breaker' },
        {
          time: '10:35',
          title: 'Journey with Flutter & Dart',
          speaker: 'Asep Bagja',
        },
        {
          time: '11:05',
          title: 'Tensor Flow & ML Kit',
          speaker: 'Sidiq Permana',
        },
        { time: '11:35', title: 'Lunch Break' },
        {
          time: '12:35',
          title: 'Build the Future of Web',
          speaker: 'Prabu Rangki',
        },
        { time: '13:05', title: 'Networking' },
        {
          time: '13:25',
          title: 'Codelabs',
          isCodelabs: true,
          codelabs: [
            { title: 'Using Workbox with ReactJS', speaker: 'Prabu Rangki' },
            { title: 'ML Kit', speaker: 'Sidiq Permana' },
          ],
        },
      ],
      notes: [
        {
          description: 'Youtube Playlist',
          link: '/io18/yt-playlist',
          text: 'Youtube',
        },
        {
          description: 'GDG Bali Repo',
          link: 'https://github.com/gdg-bali/webapp',
          text: 'Github',
        },
        {
          description: 'Latest update about JS',
          link: 'https://twitter.com/v8js',
          text: 'Twitter',
        },
        {
          description: 'PWA Starter Kit',
          link: 'https://github.com/polymer/pwa-starter-kit',
          text: 'Github',
        },
        {
          description: 'PWA by wwwid',
          link:
            'https://medium.com/wwwid/progressive-web-app-aplikasi-web-yang-bisa-di-install-bagian-2-c3839df40a8c',
          text: 'Medium',
        },
        {
          description: 'Workbox',
          link: 'http://workboxjs.org/',
          text: 'Docs',
        },
        {
          description: 'Good Mobile Site',
          link: 'http://bit.ly/mobile-web-principles-dev-guidelines',
          text: 'Docs',
        },
        {
          description: 'Lighthouse Perf',
          link: 'http://bit.ly/lighthouse-perf',
          text: 'Docs',
        },
        {
          description: 'Webpack Bundle Analyzer',
          link: 'https://github.com/webpack-contrib/webpack-bundle-analyzer',
          text: 'Github',
        },
        {
          description: 'VSCode Import Cost',
          link:
            'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
          text: 'VSCode',
        },
        {
          description: 'Bundle Phobia',
          link: 'https://bundlephobia.com/',
          text: 'Site',
        },
        {
          description: 'Webpack Libs',
          link: 'http://bit.ly/webpack-libs',
          text: 'Github',
        },
        {
          description: 'Lazysizes Images',
          link: 'https://github.com/aFarkas/lazysizes',
          text: 'Github',
        },
        {
          description: 'Images Guide',
          link: 'https://images.guide/',
          text: 'Site',
        },
        {
          description: 'Critical CSS',
          link: 'https://github.com/addyosmani/critical',
          text: 'Github',
        },
        {
          description: 'Best Practices',
          link:
            'https://medium.com/wwwid/berbagai-best-practice-dalam-memuat-halaman-website-20def6652adf',
          text: 'Medium',
        },
        {
          description: 'Guess JS',
          link: 'https://github.com/guess-js/guess',
          text: 'Github',
        },
      ],
      groups: [
        {
          text: 'Android Bandung',
          link: 'https://t.me/androidDevBdg',
        },
        {
          text: 'PWA Indonesia',
          link: 'https://t.me/wwwid_pwa',
        },
        {
          text: 'Android Indonesia',
          link: 'https://t.me/androiddevelopernasional',
        },
        {
          text: 'PHP Indonesia',
          link: 'https://t.me/PHPIDforStudent',
        },
        {
          text: 'Kotlin Indonesia',
          link: 'https://t.me/KotlinID',
        },
        {
          text: 'Ruby Indonesia',
          link: 'https://t.me/RubyID',
        },
        {
          text: 'Python Indonesia',
          link: 'https://t.me/pythonID',
        },
        {
          text: 'Golang Indonesia',
          link: 'https://t.me/golangID',
        },
        {
          text: 'VueJS Indonesia',
          link: 'https://t.me/vuejsid',
        },
        {
          text: 'Polymer Indonesia',
          link: 'https://t.me/polymer_id',
        },
        {
          text: 'React Indonesia',
          link: 'https://t.me/react_id',
        },
        {
          text: 'React Native Indonesia',
          link: 'https://t.me/reactnative_id',
        },
        {
          text: 'Angular Indonesia',
          link: 'https://t.me/AngularID',
        },
        {
          text: 'Flutter Indonesia',
          link: 'https://t.me/flutter_id',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: #bababa;
}
.teleImg {
  max-width: 50px;
}
</style>
