import DraggableItem from "./dnd/DraggableItem";
import DraggableImage from "./dnd/DraggableImage";
import DroppableTarget from "./dnd/DroppableTarget";

// App.js
import React, { useEffect, useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  Container,
  List,
  Typography,
  Box,
  ImageListItem,
  ImageList,
} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const initialItems = [
  { id: 1, text: "Male A1", type: "Male" },
  { id: 2, text: "Female B1", type: "Female" },
  { id: 3, text: "Male A2", type: "Male" },
  { id: 4, text: "Female B2", type: "Female" },
  { id: 5, text: "Male A3", type: "Male" },
  { id: 6, text: "Male A3", type: "Male" },
  { id: 7, text: "Male A3", type: "Male" },
  { id: 8, text: "Male A3", type: "Male" },
  { id: 9, text: "Male A3", type: "Male" },
  { id: 10, text: "Male A3", type: "Male" },
  { id: 11, text: "Male A3", type: "Male" },
  { id: 12, text: "Male A3", type: "Male" },
  { id: 13, text: "Male A3", type: "Male" },
  { id: 14, text: "Male A3", type: "Male" },
  { id: 15, text: "Male A3", type: "Male" },
  { id: 16, text: "Male A3", type: "Male" },
  { id: 17, text: "Male A3", type: "Male" },
  { id: 18, text: "Male A3", type: "Male" },
  { id: 19, text: "Female B3", type: "Female" },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [droppedItemsA, setDroppedItemsA] = useState([]);
  const [droppedItemsB, setDroppedItemsB] = useState([]);
  const [activeBox, setActiveBox] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);

  const resetItems = () => {
    setItems(initialItems);
    setDroppedItemsA([]);
    setDroppedItemsB([]);
  };

  useEffect(() => {
    const droppedItem = items.find((item) => item.id === activeItemId);
    if (activeBox === "Female" && droppedItemsA.length < 1) {
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== activeItemId)
      );
      setDroppedItemsA((prevItems) => [...prevItems, droppedItem]);
    } else if (activeBox === "Male" && droppedItemsB.length < 1) {
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== activeItemId)
      );
      setDroppedItemsB((prevItems) => [...prevItems, droppedItem]);
    }
  }, [activeBox, activeItemId]);

  const handleDrop = useCallback((boxName, itemId) => {
    setActiveBox(boxName);
    setActiveItemId(itemId);
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth='lg'>
          <Typography variant='h4' gutterBottom>
            React DND with Material-UI
          </Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid spacing={3}>
              <DroppableTarget
                boxName='Drop Male Here'
                acceptedTypes={["Male"]}
                onDrop={(itemId) => {
                  handleDrop("Male", itemId);
                }}
                droppedItems={droppedItemsB}
              />
            </Grid>
            <Grid spacing={3} marginX={2}>
              <Stack spacing={1}>
                <Item>
                  <Button
                    variant='outlined'
                    onClick={resetItems}
                    fullWidth
                  >
                    Reset Items
                  </Button>
                </Item>
                <Item>
                  <Button
                    variant='outlined'
                    onClick={resetItems}
                    fullWidth
                  >
                    Mixed
                  </Button>
                </Item>
              </Stack>
            </Grid>
            <Grid spacing={3}>
              <DroppableTarget
                boxName='Drop Female Here'
                acceptedTypes={["Female"]}
                onDrop={(itemId) => {
                  handleDrop("Female", itemId);
                }}
                droppedItems={droppedItemsA}
              />
            </Grid>
          </Grid>
          <Container maxWidth='md'>
            <List>
              <ImageList sx={{ height: 400 }} cols={5}>
                {items.map((item) => (
                  <DraggableImage
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    type={item.type}
                  />
                ))}
              </ImageList>
            </List>
          </Container>
        </Container>
      </DndProvider>
    </>
  );
};

export default App;
