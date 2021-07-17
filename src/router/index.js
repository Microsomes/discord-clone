import { createRouter, createWebHistory } from 'vue-router'


import GuildChatUI from '../ChatUI/discord/guildchat'
import Emoji from  '../ChatUI/discord/emoji'

const routes = [
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
