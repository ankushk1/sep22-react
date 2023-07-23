import React, { useState } from "react";
import { Button } from "reactstrap";

const TodoApp = () => {
  const ALL = "ALL";
  const COMPLETED = "COMPLETED";
  const PENDING = "PENDING";

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(ALL);
  const [todoArr, setTodoArr] = useState([
    {
      id: "9abeba11-1e4a-4d1e-8625-e6cc3acdad3e",
      text: "Todo 1",
      completed: false
    },
    {
      id: "28205856-425b-4842-965d-7a1fce688036",
      text: "Todo 2",
      completed: false
    }
  ]);
  const [edit, setEdit] = useState({
    editing: false,
    todoId: null
  });

  const onAddTodoHandler = () => {
    // const newTodo = {
    //   id: crypto.randomUUID(),
    //   text: input
    // };
    // const copyArr = [...todoArr, newTodo]
    // copyArr.push(newTodo)
    if (!input) return;
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID(),
        text: input,
        completed: false
      }
    ]);
    setInput("");
  };

  const onDeleteHandler = (id) => {
    // Filter or splice
    // const filterArr = todoArr.filter((elem) => elem.id !== id);
    // setTodoArr(filterArr);

    //Splice Logic
    const index = todoArr.findIndex((elem) => elem.id === id);
    const copyArr = [...todoArr];
    copyArr.splice(index, 1);
    setTodoArr(copyArr);
  };

  const onEditHandler = ({ text, id }) => {
    setEdit({ editing: true, todoId: id });
    setInput(text);
  };

  const onUpdateHandler = () => {
    // index or splice
    const index = todoArr.findIndex((elem) => elem.id === edit.todoId);
    const newElem = {
      id: edit.todoId,
      text: input
    };
    const copyArr = [...todoArr];
    copyArr[index] = newElem;
    setTodoArr(copyArr);
    setInput("");
    setEdit({ editing: false, todoId: null });
  };

  const onToggleComplete = (todo) => {
    const index = todoArr.findIndex((elem) => elem.id === todo.id);
    const newElem = {
      ...todo,
      completed: !todo.completed
    };
    const copyArr = [...todoArr];
    copyArr[index] = newElem;
    setTodoArr(copyArr);
  };

  const renderTodos = (elem) => {
    switch (filter) {
      case ALL:
        return (
          <div key={elem.id} className="row justify-content-between my-2">
            <div className="col-8 col-md-8 col-lg-8 fs-4">
              <span className="me-2" onClick={() => onToggleComplete(elem)}>
                {elem.completed ? (
                  <i class="fa-regular fa-square-check fs-sm"></i>
                ) : (
                  <i class="fa-regular fa-clock fa-sm"></i>
                )}
              </span>
              {elem.text}
            </div>
            <div className="col-4 col-md-4 col-lg-3">
              <button
                className="btn btn-info me-3"
                onClick={() => onEditHandler(elem)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteHandler(elem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      case COMPLETED:
        return (
          elem.completed && (
            <div key={elem.id} className="row justify-content-between my-2">
              <div className="col-8 col-md-8 col-lg-8 fs-4">
                <span className="me-2" onClick={() => onToggleComplete(elem)}>
                  {elem.completed ? (
                    <i class="fa-regular fa-square-check fs-sm"></i>
                  ) : (
                    <i class="fa-regular fa-clock fa-sm"></i>
                  )}
                </span>
                {elem.text}
              </div>
              <div className="col-4 col-md-4 col-lg-3">
                <button
                  className="btn btn-info me-3"
                  onClick={() => onEditHandler(elem)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteHandler(elem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        );
      case PENDING:
        return (
          !elem.completed && (
            <div key={elem.id} className="row justify-content-between my-2">
              <div className="col-8 col-md-8 col-lg-8 fs-4">
                <span className="me-2" onClick={() => onToggleComplete(elem)}>
                  {elem.completed ? (
                    <i class="fa-regular fa-square-check fs-sm"></i>
                  ) : (
                    <i class="fa-regular fa-clock fa-sm"></i>
                  )}
                </span>
                {elem.text}
              </div>
              <div className="col-4 col-md-4 col-lg-3">
                <button
                  className="btn btn-info me-3"
                  onClick={() => onEditHandler(elem)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteHandler(elem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        );
      default:
        return;
    }
  };

  return (
    <div>
      <div className="fs-2 my-4">TodoApp</div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50 me-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              edit.editing ? onUpdateHandler() : onAddTodoHandler();
            }
          }}
        />
        {!edit.editing ? (
          <button
            className="btn btn-primary"
            onClick={() => onAddTodoHandler()}
          >
            Add Todo
          </button>
        ) : (
          <button className="btn btn-warning" onClick={() => onUpdateHandler()}>
            Update Todo
          </button>
        )}
      </div>
      <div className=" d-flex justify-content-center  ">
        <div className="w-75 my-3 row justify-content-evenly">
          <Button
            color="success"
            size="lg"
            className=" col-2 px-3"
            outline={filter !== ALL}
            onClick={() => setFilter(ALL)}
          >
            All
          </Button>
          <Button
            className=" col-2"
            color="success"
            size="lg"
            onClick={() => setFilter(COMPLETED)}
            outline={filter !== COMPLETED}
          >
            Completed
          </Button>
          <Button
            color="success"
            size="lg"
            className="col-2"
            onClick={() => setFilter(PENDING)}
            outline={filter !== PENDING}
          >
            Pending
          </Button>
        </div>
      </div>
      <div className="mt-5 w-75">
        {todoArr.map((elem) => renderTodos(elem))}
      </div>
    </div>
  );
};

export default TodoApp;
