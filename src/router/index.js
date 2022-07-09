import { createRouter, createWebHashHistory } from 'vue-router'


import GuildChatUI from '../pages/ChatUI/discord/guildchat'
import Emoji from  '../pages/ChatUI/discord/emoji'
import DiscordLogin from  '../pages/ChatUI/discord/login'
import DiscordRegister from  '../pages/ChatUI/discord/register'


//coins
import Coins from '../pages/Coins/main'

const routes = [
  {
    path:"/coins",
    component:  Coins
  },
  {
    path:"/",
    component:DiscordRegister
  },
  {
    path:"/login",
    component:DiscordLogin
  },
  {
    path:"/emoji",
    component:Emoji
  },
  {
    path:"/app",
    component:GuildChatUI
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
