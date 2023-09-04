import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:'v2021-10-21',
  dataset:'production',
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:false,
  token:process.env.SANITY_ACCESS_TOKEN,
});


async function updateCategorySlugs() {
  const categories = await client.fetch('*[_type == "category" && slug == null]');
  for (const category of categories) {
    const updatedCategory = {
      ...category,
      slug: {
        current: category.name.toLowerCase().replace(/\s+/g, '-'), // Generate a slug based on name
      },
    };
    await client
      .patch(category._id)
      .set(updatedCategory)
      .commit();
  }
}

updateCategorySlugs().catch(console.error);