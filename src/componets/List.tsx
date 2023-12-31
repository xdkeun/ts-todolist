import { Todo } from "../model";
import styled from "styled-components";
import Nothing from "./Nothing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface ListProps {
  setTodo: (newTodo: Todo[]) => void;
  todo: Todo[];
}
const List: React.FC<ListProps> = ({ setTodo, todo }) => {
  const listDeleteHandler = (id: number) => {
    // id와 일치하는 Todo를 찾아서 삭제
    const updatedTodoList = todo.filter((todo) => todo.id !== id);
    // 새로운 Todo 리스트를 설정
    setTodo(updatedTodoList);
  };
  return (
    <Section>
      {todo.length === 0 ? (
        <Nothing />
      ) : (
        todo.map((todo) => (
          <Article key={todo.id}>
            <Content>{todo.content}</Content>
            <Icon
              icon={faX}
              onClick={() => {
                listDeleteHandler(todo.id);
              }}
            />
          </Article>
        ))
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Article = styled.article`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d9d9d9;
`;

const Content = styled.p`
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export default List;
