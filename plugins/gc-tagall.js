const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `> *𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚏𝚒𝚗𝚊𝚕 𝚏𝚊𝚒𝚕𝚞𝚛𝚎 𝚒𝚜 𝚗𝚘𝚝 𝚏𝚊𝚝𝚊𝚕: 𝙸𝚝 𝚒𝚜 𝚝𝚑𝚎 𝚌𝚘𝚞𝚛𝚊𝚐𝚎 𝚝𝚘 𝚌𝚘𝚗𝚝𝚒𝚗𝚞́𝚎 𝚝𝚑𝚊𝚝 𝚌𝚘𝚞𝚗𝚝𝚜*\n\n *${oi}\n\n➥ _*@tany.salazar._:*_\n`;
  for (const mem of participants) {
    teks += `*💋 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝐓𝐚𝐧𝐲 𝐩𝐞 𝐜𝐭𝐦𝐫*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;