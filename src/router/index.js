import { createRouter, createWebHistory } from 'vue-router'


import GuildChatUI from '../ChatUI/discord/guildchat'
import Emoji from  '../ChatUI/discord/emoji'
import DiscordLogin from  '../ChatUI/discord/login'
import DiscordRegister from  '../ChatUI/discord/register'


const routes = [
  {
    path:"/register",
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
    path:"/",
    component:GuildChatUI
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
