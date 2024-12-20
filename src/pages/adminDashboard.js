import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import CreateModal from '../components/admin/CreateModal';
import UpdateModal from '../components/admin/UppdateModal';
import DeleteModal from '../components/admin/DeleteModal';
const AdminDashboard = () => {
    const [datas, setDatas] = useState([]);
    const [Error, setError] = useState([]);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedComic, setSelectedComic] = useState(null); //de nhan duoc comic
   
    const fetchComics = async () => { // ly do tao ham rieng, la de truyen call back, khi tao 1 Comics moi thi goi lai ham fetch Comic, de no reload lai co cai moi nhat
        try {
            // const res = await axios.get('https://67526dd0d1983b9597b62d05.mockapi.io/comics');
            // setDatas(res.data);
            axios.get("https://67526dd0d1983b9597b62d05.mockapi.io/comics")
            .then(res => {
                setDatas(res.data);
            })
        } catch (err) {
            console.error(err.message);
        }
    };
 
    useEffect(() => {
        fetchComics();
        console.log('useEffect');
    },[]); //-> depency list, cho de xem la co gi thay doi khong, neu co thi chay lai useEffect

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <div>
            <Box>
                <Button variant="contained" color="primary" onClick={() => setOpenCreateModal(true)}>
                    Add Comic
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Index</StyledTableCell>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">Author</StyledTableCell>
                            <StyledTableCell align="left">Price&nbsp;(vnd)</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">ComicImage</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((data, index) => (
                            <StyledTableRow key={data.id}>
                                <StyledTableCell align="left">{index}</StyledTableCell>
                                <StyledTableCell align="left">{data.Title}</StyledTableCell>
                                <StyledTableCell align="left" component="th" scope="row">
                                    {data.Author.map((author) => author.name + ', ')}
                                </StyledTableCell>
                                <StyledTableCell align="left">{data.Price}</StyledTableCell>
                                <StyledTableCell align="left">{data.Category}</StyledTableCell>
                                <StyledTableCell align="left"><img style={{ width: '80px', height: '100px' }} src={data.ComicImage} /></StyledTableCell>
                                <StyledTableCell align="left" style={{ height: '100px', display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        onClick={() => {
                                            setSelectedComic(data);
                                            setOpenUpdateModal(true);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setSelectedComic(data);
                                            setOpenDeleteModal(true);
                                        }}
                                        sx={{ padding: '2% 3%' }} variant="contained" color="error">Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CreateModal
                open={openCreateModal}
                onClose={() => setOpenCreateModal(false)} //false
                onCreated={fetchComics} //Function : fetch api
            />
            <UpdateModal
                open={openUpdateModal} //true
                onClose={() => setOpenUpdateModal(false)} //false
                comic={selectedComic} //truyen di cai comic da duoc chon qua kia de ben kia show dc du lieu comic
                onUpdated={fetchComics}
            />
            <DeleteModal
                open={openDeleteModal} //true
                onClose={() => setOpenDeleteModal(false)} //false
                comic={selectedComic}
                onDeleted={fetchComics}
            />
        </div>
    );
};

export default AdminDashboard;