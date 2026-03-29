import type { GetStaticProps } from 'next';
import CategoryPage, { makeCategoryProps } from '@/pages/tools/_category-page';

export const getStaticProps: GetStaticProps = () => makeCategoryProps('developer');
export default CategoryPage;