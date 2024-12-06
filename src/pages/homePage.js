import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const HomePage = () => { 

    return (
        <div>
            <Box sx={{ padding: '50px 0' }}>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Welcome to My Website
                </Typography>
                <Typography variant="body1" paragraph>
                    This is a simple example of a homepage layout using Material-UI (MUI). The page consists of a header, 
                    a main content area, and a footer.
                </Typography>
                <Button variant="contained" color="primary">
                    Learn More
                </Button>
            </Container>
        </Box>

        </div>



    );
};

export default HomePage;