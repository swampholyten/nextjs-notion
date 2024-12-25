import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '15f8d03cada7802aabd3f9908c83798e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Junkai Ji - Web Developer',
  domain: 'junkai.org',
  author: 'Junkai Ji',

  // open graph metadata (optional)
  description:
    "Junkai Ji is a junior back-end web developer. He's passionate about web development and deep learning.",

  // social usernames (optional)
  github: 'swampholyten',
  linkedin: 'junkai-ji-3a73bb267',
  paypal: 'JunkaiJi',
  kofi: 'jiorno',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  isSearchEnabled: true,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '1608d03cada7804c82d8fdf5be845d9d'
    },
    // {
    //   title: 'Contact',
    //   pageId: '15f8d03cada7813e8357dda7c9576590'
    // },
    {
      title: 'Donate',
      pageId: '1658d03cada780c6984ee3712c4cc653'
    }
  ]
})
