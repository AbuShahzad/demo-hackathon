import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:'v2021-10-21',
  dataset:'production',
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
  token:process.env.SANITY_ACCESS_TOKEN,
});
