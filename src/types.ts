import { ReactNode } from 'react'

export interface IPost {
  id: number
  titulo: string
  imagem: string
  ingredientes: string[]
  instrucoes: string[]
  autor: string
  criadoEm: string
  descricao: string
  children?: React.ReactNode
}
// I de interface
