import { type SchemaTypeDefinition } from 'sanity'
import { products } from './productSchema'
import { category } from './categorySchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category],
}
