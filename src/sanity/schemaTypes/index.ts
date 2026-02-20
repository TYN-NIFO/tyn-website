import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import whitepaper from './whitepaper'
import ynsight from './ynsight'
import openPosition from './openPosition'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blog, whitepaper, ynsight, openPosition],
}
