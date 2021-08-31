/*
Modulo que envia notificações ao slack e printa informações no terminal
*/
const discordWebHook = process.env.DISCORD_WEB_HOOK;
import axios from 'axios';


export async function notifyDiscordSimpleMessage ( message: any ) {
    const requestBody = {
        content: `[ WEBHOOK-TEST ]\n--------------------\n${JSON.stringify( message, null, 2 )}\n--------------------`
    }

    if ( discordWebHook ) {
        try {
            return await axios.post( discordWebHook, requestBody );
        } catch ( err ) {
            console.log( `\n---------------------------------------------------------------\n`
                + `Erro ao tentar enviar notificação ao discord. `
                + `ERRO: ${err.message}`
                + `\n---------------------------------------------------------------\n` );
        }
    }
}
