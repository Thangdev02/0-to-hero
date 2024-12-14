import React, { useEffect, useState } from 'react';
import Data from '../data/Data';
import CardProduct from '../components/CardProduct';
import axios from 'axios';

const StorePage = () => {
   const [datas , setDatas] = useState(Data);
   useEffect(() => {
        axios.get('https://67526dd0d1983b9597b62d05.mockapi.io/comics').then(res => {
            setDatas(res.data)
        })
   })

    return (
        <div>

            {/* Display Filtered Products */}
            <div>
                {datas.length === 0 ? (
                    <div>No products found</div>
                ) : (
                    datas.map((comic) => (
                        <div key={comic.id} style={{ display: 'inline-block', margin: '10px' }}>
                            <CardProduct comic={comic} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default StorePage;
