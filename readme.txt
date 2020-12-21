This bot is distributed as Open source & free to use for Public.
Author is not responsible for any action by Bot or Error in Code.
Although bot is made with due care, its advised not to alter bot code to avoid any kind of loss.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Please read the instructions carefully.

1)  Create a new application in Developer portal and add a bot in it. ( Link : https://discord.com/developers/applications)
    Please turn on these two items in "Privileged Gateway Intents" under bot page.
            PRESENCE INTENT         -[TURN ON]
            SERVER MEMBERS INTENT   -[TURN ON]
    Add the bot to server.
        Bot must have "Manage Roles" Permission and bot role must be above member role in order to give it to new members.
        Bot must have "Sen Message" Permission in welcome channel.
    Copy Bot token from bot page.

2)  Rename "config.json.txt" to "config.json" & Edit .
        Provide following items.
            "replace_with_bot_token" 
            "replace_with_channel_id"
            "replace_with_role_id"

3)  Open Linux terminal or windows terminal in bot directory. (for example- where pakage.json is located)
        Run Command "npm i"   (Note : You must have Node.js 14.15.1 or higher Installed. 14.15.1 is recommended)

4)  Run the bot.
        Rename and remove .txt from both start files
        For windows : run "startwin.bat"
        For Linux : In shell terminal run "startlinux.sh" by command "bash startlinux.sh"
        alternatively for both windows and linux - run command "node ." in bot directory.

You can also try PM2 to run your bot and prevent it from going offline. Enjoy!!!

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Bot Repository : https://github.com/Arcadegtech/welcomer-discord-bot
Discord Server Invite : https://discord.gg/UTHvWN3

Command list of bot.
.checkbot       /For bot ping and status.
.info           /details of bot.

Sample of Private DM.

        @mention_user Welcome to our server, Server_name. 
        Please follow the server rules.

Sample of Welcome Message.

        Hey, new_member_username
        @mention_user Have a great time in Server_name.
        Respect everyone and follow server rules.
        Now we are Total_Members members.
        @avatar
        Account Creation date

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////