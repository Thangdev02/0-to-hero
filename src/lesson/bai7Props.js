import React from 'react';
import ButtonComponents from '../components/ButtonComponents';
import InforCard from '../components/InforCard';

const Bai7Props = () => {
   
      //Props la truyen du lieu tu cha xuong con. Cho truyen la cha, cho nhan la con
      //Nhung luc lam la nen lam thang con truoc
    //components cha
    return (
        <div>
            {/* <ButtonComponents text="Submit"  backgroundColor="red"/> */}
            <h1>Bai 7</h1>
            <InforCard color="red" name="Thang" address="HCM"></InforCard> 
            <InforCard color="blue" name="Minh" address="Ha Noi"></InforCard> 

        </div>
    );
};

export default Bai7Props;