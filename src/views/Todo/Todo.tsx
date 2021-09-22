import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/Todo.module.css";
import {
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import useStates from "../../../hooks/useState";
import useLocalStorage from "../../../hooks/useLocalStorage";

const TodoPage = () => {
  //collect the post-list from localstorage and parse it with JSON.parse() method
  const postsData = JSON.parse(localStorage.getItem("todos"));
  // const postsData = localStorage.getItem("todos");

  //initilize our parsed data if there is no data inside our initial state will be set as empty array []
  const [todos, setTodos] = useState(postsData || []);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };
  const AddPost = (e: any) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title,
        message,
      },
    ]);
    //let clear the input box after adding our post
    setTitle("");
    setMessage("");
  };
  const removePost = (title: any) => {
    //removePost take title as argument
    //let's reset the post list after filtering post title which are not equal to title
    setTodos(todos.filter((item: any) => item.title !== title));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <Container>
      <h1>React with local storage</h1>
      <form autoComplete="off" onSubmit={AddPost}>
        <TextField
          onChange={handleTitle}
          value={title}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
        />
        <div className={styles.padding_line_14px}></div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          variant="outlined"
          value={message}
          rows={4}
          onChange={handleMessage}
        />
        <div className={styles.padding_line_14px}></div>
        <div className={styles.add__buttons}>
          <Button type="submit" color="secondary" variant="outlined">
            Add Todo
          </Button>
        </div>
      </form>
      <div className={styles.padding_line_14px}></div>
      <Grid container item>
        {todos.map((item: any) => (
          //remember to set the key , each item need to have a key

          <Grid item sm={12} md={6} key={item.title}>
            <div className={styles.padding_card_14px}>
              <Paper variant="outlined">
                <div className={styles.padding_card_text}>
                  <div className={styles.close__buttons}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Button
                      onClick={() => removePost(item.title)}
                      color="secondary"
                      variant="contained"
                    >
                      X
                    </Button>
                  </div>

                  <Typography variant="subtitle2">
                    {item.message !== "" ? item.message : "None message"}
                  </Typography>
                </div>
              </Paper>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TodoPage;
