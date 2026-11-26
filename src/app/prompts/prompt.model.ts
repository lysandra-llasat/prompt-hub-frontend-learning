import { category } from "./category.model"

export interface prompt {  
    id:number,
    title:string,
    content:string
    score: number,
    createdAt:string,
    category: category,
    author: {
      id:number,
      username:string
    },
    userVote: null | 'up'| 'down'  }
