export enum ConditionTypes {
  Restored = 'Restored',
  New = 'New',
  Used = 'Used',
}

export const conditionMapping: { [key: string]: string } = {
  Restored: 'A',
  New: 'N',
  Used: 'U',
};

export type Condition = keyof typeof ConditionTypes | keyof typeof conditionMapping;
