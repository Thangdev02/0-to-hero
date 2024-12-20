import axios from 'axios';
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const CreateModal = ({ open, onClose, onCreated }) => { //open = true //false //fetchComic //calback
    const [fromData, setFormData] = useState({
        Title: '',
        Price: '',
        Category: '',
        ComicImage: '',
        Author: '',
    })// anh dang tao initial value cho form, luu requestbody
    const handleChange = (e) => {
        setFormData({ ...fromData, [e.target.name]: e.target.value }); // ... la ke thua, giu lai nhung gia tri da thay doi, da co trong formData
        //Hien dtai Initial dang rong, bay gio ng dung nhap vao Title "Hello" thi se luu hello vao title, va ke thua lai nhung thang khac (Price, Category,.. "", ) 
        //TIep theo nguoi dung nhap vao Price, Ke thua lai Title = "Hello" , Price = 10 , Price
    };
    const handleCreate = async () => {
        try {
            await axios.post('https://67526dd0d1983b9597b62d05.mockapi.io/comics', {
                ...fromData,
                Author: [{ name: fromData.Author, avatar: '' }],
            });
            onCreated(); // fetch comics
            onClose();
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create Comic</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Title"
                    name="Title"
                    fullWidth
                    onChange={handleChange} // khi nguoi dung nhap vao o nay, thi se lay gia tri do luu vao fomrData
                />
                <TextField
                    margin="dense"
                    label="Price"
                    name="Price"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Category"
                    name="Category"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="ComicImage URL"
                    name="ComicImage"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Author Name"
                    name="Author"
                    fullWidth
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleCreate}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateModal;