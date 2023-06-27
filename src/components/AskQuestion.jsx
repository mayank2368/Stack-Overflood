import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import questionService from "../services/questionService";

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && body) {
      const question = { title, body };
      await questionService.postQuestion(question);
      setTitle("");
      setBody("");
      Navigate("/");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card style={{ width: 400 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6">
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
              />
            </Typography>

            <Typography variant="h6">
              <TextField
                label="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                fullWidth
                required
                multiline
                rows={4}
              />
            </Typography>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AskQuestion;
