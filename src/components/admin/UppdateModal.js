import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from 'axios';

const UpdateModal = ({ open, onClose, onUpdated, comic }) => { //fetchComics
  const [formData, setFormData] = useState({
    Title: '',
    Price: '',
    Category: '',
    ComicImage: '',
    Author: [], // Initialize as an empty array to avoid mapping issues
  });

  // Sync the modal's form data with the passed `comic` prop
  useEffect(() => {
    if (comic) {
      setFormData(comic);
      console.log(comic)
    }
  }, [comic]);
  console.log("Formdata",formData)

  // Handle input changes for generic fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle the "Update" action
  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://67526dd0d1983b9597b62d05.mockapi.io/comics/${comic.id}`, //id cua commic
        formData // nguoi dung da thay doi roi
      );
      onUpdated(); // Notify parent component to refresh data
      onClose(); // Close the modal
    } catch (err) {
      console.error('Error updating comic:', err.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Comic</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Title"
          name="Title"
          fullWidth
          value={formData.Title || ''}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Price"
          name="Price"
          type="number"
          fullWidth
          value={formData.Price || ''}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Category"
          name="Category"
          fullWidth
          value={formData.Category || ''}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Comic Image URL"
          name="ComicImage"
          fullWidth
          value={formData.ComicImage || ''}
          onChange={handleChange}
        />

        {/* Dynamically render fields for authors */}
        {formData.Author && formData.Author.length > 0 ? (
          formData.Author.map((author, index) => (
            <TextField
              key={index}
              margin="dense"
              label={`Author Name ${index + 1}`}
              fullWidth
              value={author.name || ''}
              onChange={(e) => {
                const updatedAuthors = [...formData.Author];
                updatedAuthors[index].name = e.target.value; // Update the specific author's name
                setFormData({ ...formData, Author: updatedAuthors });
              }}
            />
          ))
        ) : (
          <p>No authors available. Add new authors in the database if needed.</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateModal;
