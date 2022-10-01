import { VFC } from "react";
import { TodoType } from "./types/todo";

//componentで使うはずのpropsが親コンポーネントから渡されていないのに
//エラーになっていないのはバグの温床になる
//componentで必要なpropsはこれだよと明示的に型で指定してエラーを早めに出す
//propsで渡した変数にはfalseを代入しておく
export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  // pickでtodotypeから必要な型だけを取得する

  {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
  };
