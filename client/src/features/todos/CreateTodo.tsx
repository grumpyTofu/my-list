import React from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { isEmpty } from "../../utils/isEmpty";
import { Todo } from "../../api/api.generated";

interface CreateTodoProps {
  open: boolean;
  setClosed: () => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ open, setClosed }) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm, dirty, isSubmitting } = useFormik<Partial<Todo>>({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(3, "Think of a creative title longer than 3 characters ;)").required("A title is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      resetForm();
      setClosed();
    },
  });

  const handleClose = () => {
    resetForm();
    setClosed();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
        <DialogTitle>Create Todo</DialogTitle>
        <DialogContent sx={{ paddingTop: "20px !important" }}>
          <TextField
            error={touched.title && Boolean(errors.title)}
            label="Title"
            name="title"
            fullWidth
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" disabled={!dirty || !isEmpty(errors) || isSubmitting}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateTodo;
