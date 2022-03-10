let handler = async m => m.reply(`
☕ *सरकारी बॉट :* a whatsapp bot जय श्री राम🚩🚩🚩🚩
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
