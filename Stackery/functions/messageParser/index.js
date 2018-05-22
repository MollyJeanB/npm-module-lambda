
const emoji = require("node-emoji")
const md = require("markdown-it")()
const inputString = "mmmm *strong* :coffee:"

module.exports = async message => {
  console.dir(message)

  return {
    "response": emoji.emojify(md.render(message.text))
  }
}
