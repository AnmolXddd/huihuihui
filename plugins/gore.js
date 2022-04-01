/* Codded by trin trin
*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IGI_DESC = "Downloads Random G0R3 videos"
const LOADING = "Downloading the Video..."
const NOT_FOUNDFB = "Under Maintenance"
const CAPTION = "Caption"


Asena.addCommand({ pattern: 'gore ?(.*)', fromMe: false, desc: IGI_DESC}, async (message, match) => {

    const userName = match[1]

    await message.sendMessage(infoMessage("Downloading your video..."))

    await axios
      .get(`https://caliphapi.com/api/randomgore?apikey=d5zS36Tp`)
      .then(async (response) => {
        const {
          link,
        } = response.data.result

        const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})

	await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By: Ask Your Mom"
        })
      })


      .catch(
        async (err) => await message.sendMessage(errorMessage("Under Maintenance")),
      )
  },
)
