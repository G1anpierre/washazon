import z from 'zod';
import {Spect, Product, ProductList} from './utils/api';

export type SpectType = z.infer<typeof Spect>;
export type ProductType = z.infer<typeof Product>;
export type ProductListType = z.infer<typeof ProductList>;
