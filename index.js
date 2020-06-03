require('dotenv').config()

const Instagram = require('instagram-web-api')
const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env
 
const client = new Instagram({ username: INSTAGRAM_USERNAME, password: INSTAGRAM_PASSWORD })
 
;(async () => {
  await client.login()
  const profile = await client.getProfile()
 
  console.log(profile)
})()