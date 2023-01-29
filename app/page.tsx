"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  ListItem,
  Stack,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleInput = () => {
    if (!value) {
      toast({
        title: "Enter Item.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Item added.",
      description: value,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTodos((oldArray) => [...oldArray, value]);
    setValue("");
  };
  const delInput = (e: any) => {
    setTodos(
      todos.filter(function (i) {
        return i !== e;
      })
    );
  };

  const toast = useToast();
  const delAll = () => {
    if (todos.length == 0) {
      toast({
        title: "No items added.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "All item deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTodos([]);
  };

  return (
    <ChakraProvider>
      <Container
        style={{
          height: "400px",
          borderRadius: "5px",
          padding: " 10px",
          overflowY: "auto",
          boxShadow:
            "-1px -1px 6px rgb(255 255 255 / 90%), 4px 4px 9px rgb(0 0 0 / 30%)",
        }}
        id="container"
        maxW="sm"
        bg="linear-gradient(to right, rgba(2, 0, 36, 1) 0%, rgba(26, 161, 155, 1) 0%, rgba(0, 212, 255, 1) 100%)"
      >
        <Box w="100%" p={4} display="flex">
          <input
            type="text"
            name="add"
            id="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter item"
            style={{
              width: "130px",
              height: "30px",
              fontSize: "1rem",
              marginLeft: "10px",
              overflow: "hidden",
              border: "none",
              borderRadius: "3px",
              paddingLeft: "10px",
              background: "transparent",
              borderBottom: " 2px solid green",
              transition: "0.2s",
              color: "#544949",
              outline: "none",
            }}
          />

          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="gray"
              size="sm"
              variant="outline"
              onClick={() => handleInput()}
            >
              Add Item
            </Button>
            <Button
              colorScheme="gray"
              size="sm"
              variant="outline"
              onClick={() => delAll()}
            >
              Delete All
            </Button>
          </Stack>
        </Box>
        <UnorderedList>
          {todos.map((t) => {
            return (
              <Box w="100%" p={4} display="flex">
                <ListItem>{t}</ListItem>
                <Button
                  colorScheme="gray"
                  size="sm"
                  variant="outline"
                  onClick={(e) => delInput(t)}
                  ml={5}
                >
                  Delete
                </Button>
              </Box>
            );
          })}
        </UnorderedList>
      </Container>
    </ChakraProvider>
  );
}

export default Home;
