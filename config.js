module.exports = {
 
    /**
     * Instructions on how to get this: https://redd.it/40zgse
     */
    yourID: "",  //fill in your discord ID, when finished remove it from your ID so that when you write there is no rewriting on the BOT!
 
 
    setupCMD: "!reaction",
 
    /**
     * Delete the 'setupCMD' command after it is ran. Set to 'true' for the command message to be deleted
     */
    deleteSetupCMD: true,
 
    initialMessage: `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`,
   
    embedMessage: `
    React to the emoji that matches the role you wish to receive.
   
    If you would like to remove the role, simply remove your reaction!
    `,
   
    /**
     * Must set this if "embed" is set to true
     */
    embedFooter: "Role Reactions",
   
    roles: ["Hacker", "Artist", "Public Relations", "Intern"],
 
    /**
     * For custom emojis, provide the name of the emoji
     */
    reactions: ["💻", "🖌", "😃", "🆕"],
    /**
     * Set to "true" if you want all roles to be in a single embed
     */
    embed: false,
 
    /**
     * Set the embed color if the "embed" variable is et to "true"
     * Format:
     *
     * #dd9323
     */
    embedColor: "BLACK",
 
    /**
     * Set to "true" if you want to set a thumbnail in the embed
     */
    embedThumbnail: false,
 
    /**
     * The link for the embed thumbnail if "embedThumbnail" is set to true
     */
    embedThumbnailLink: "",
 
    /**
     * You"ll have to set this up yourself! Read more below:
     * Please do not commit this token to the public if you contributed to this repository
     * or host your code anywhere online. Giving someone your bot's token is the equivalent
     * to giving someone the keys to your house and walking away!
     *
     * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
     */
    botToken: ""
};