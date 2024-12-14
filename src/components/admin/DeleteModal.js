import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import axios from 'axios';

const DeleteModal = ({ open, onClose, comic, onDeleted }) => {
  const handleDelete = async () => {
    try {
      // Make DELETE request to the API to delete the selected comic
      await axios.delete(`https://67526dd0d1983b9597b62d05.mockapi.io/comics/${comic.id}`);
      onDeleted(); // Notify parent component to refresh the list of comics
      onClose(); // Close the modal
    } catch (err) {
      console.error('Error deleting comic:', err.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Comic</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete the comic <strong>{comic?.Title}</strong>?
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
