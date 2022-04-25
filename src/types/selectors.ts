import { RootState } from '../store/store';
import { Income } from '../types/incomes';

export type Incomes = (state: RootState) => Income[];
