require('dotenv').config()

const Instagram = require('instagram-web-api')
const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env
 
const client = new Instagram({ username: INSTAGRAM_USERNAME, password: INSTAGRAM_PASSWORD })

;(async () => {  
  await client.login()
  const photos = await client.getPhotosByUsername({ username: 'joaodoveneno' })
  const mediaComments = await client.getMediaComments({ shortcode: 'CA37wGmhAPV', first: '49', after: '' })
  const commentsFormatted = mediaComments.edges && mediaComments.edges.map(e => {
    return { text: e.node.text, username: e.node.owner && e.node.owner.username }
  })
  console.log(JSON.stringify(commentsFormatted));
  console.log(JSON.stringify(photos));
})()