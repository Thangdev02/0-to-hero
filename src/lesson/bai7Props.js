import React from 'react';
import ButtonComponents from '../components/ButtonComponents';
import InforCard from '../components/InforCard';
import LinkButton from '../components/LinkButton';
import SubmitNameButton from '../components/SubmitNameButton';

const Bai7Props = () => {

    //Props la truyen du lieu tu cha xuong con. Cho truyen la cha, cho nhan la con
    //Nhung luc lam la nen lam thang con truoc
    //components cha
    //one - way binding
    //muc dich sai: khi muon su dung lai 1 components do nhung ma chi thay doi 1 so gia tri
    return (
        <div>
            {/* <ButtonComponents text="Submit"  backgroundColor="red"/> */}
            <LinkButton text="Learn" color="red" />
            <LinkButton text="Learn" />
            <SubmitNameButton name='Thang' fullname ='Le Quoc Thang' color='red' />
            <SubmitNameButton name='Minh' />

{/* //trong 1 binding thi cho truyen goi la doi so (argumentative), cho nhhan du lieu, la tham so ( parameter )  */}
            {/* <InforCard color="red" name="Thang" address="HCM"></InforCard> 
            <InforCard color="blue" name="Minh" address="Ha Noi"></InforCard>  */}

        </div>
    );
};

export default Bai7Props;