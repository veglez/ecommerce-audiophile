export type withHTMLAttributes<T> = T & React.HTMLAttributes<HTMLElement>;

export type PickRequired<T, R extends keyof T> = Required<Pick<T, R>> &
  Partial<Omit<T, R>>;
