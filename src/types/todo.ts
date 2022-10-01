//jsonplaceholderから持ってきたデータの型指定しバグを防ぐ
// 渡さなくても良い変数。必須ではないものには?をつける

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
