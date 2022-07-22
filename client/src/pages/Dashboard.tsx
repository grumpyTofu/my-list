import React, { useState } from "react";
import { Grid, Card, CardContent, SpeedDial, SpeedDialAction, SpeedDialIcon, OpenReason } from "@mui/material";
import { Add as AddIcon, Edit as EditIcon } from "@mui/icons-material";
import CreateTodo from "../features/todos/CreateTodo";

import { useGetTodosQuery } from "../api";

const Todo: React.FC = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState<boolean>(false);

  const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
  };

  const [fabOpen, setFabOpen] = useState<boolean>(false);
  const handleFabOpen = (event: React.SyntheticEvent<{}, Event>, reason: OpenReason) => {
    if (reason !== "focus") setFabOpen(true);
  };
  const handleFabClose = () => setFabOpen(false);

  const handleCreateActionClick = () => {
    handleOpenCreateDialog();
    handleFabClose();
  };

  const { data } = useGetTodosQuery();

  return (
    <>
      <Grid container spacing={3}>
        {data &&
          data.map((todo) => (
            <Grid item xs={12} sm={6} md={3} key={`GridItem_${todo.id}`}>
              <Card sx={{ minHeight: "10rem" }}>
                <CardContent>Title: {todo.title}</CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <CreateTodo open={createDialogOpen} setClosed={handleCloseCreateDialog} />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleFabClose}
        onOpen={handleFabOpen}
        open={fabOpen}
      >
        <SpeedDialAction icon={<AddIcon />} tooltipTitle="Add" onClick={handleCreateActionClick} />
      </SpeedDial>
    </>
  );
};

export default Todo;
