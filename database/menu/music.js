const music = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: Victor
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MUSIC*
  │
  ├─ ❏ ${prefix}play
  ├─ ❏ ${prefix}joox
  ├─ ❏ ${prefix}lirik
  └─ ❏ ${prefix}chord`
}
exports.music = music
