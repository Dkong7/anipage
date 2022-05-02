import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({primary}) => (primary ? '#e8d1d1' : '#cea6a5')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-family:Aleo;
    margin-top:50px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-ease-in-out;

    &:hover {
        transition: all 0.2s ease-ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#e8d1d1')};
    }

    @media screen and (max-width: 1107px) {

        margin-top: 20px;
        width: 123px;
        height: 35px;
        font-size:19px;
    }


    @media screen and (max-width: 814px) {

        margin-top: 20px;
        width: 123px;
        height: 33px;
        font-size:17px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        width: 123px;
        height: 33px;
        font-size:17px;
    }

    @media screen and (max-width: 520px) {
        margin-top: 20px;
        width: 103px;
        height: 33px;
        font-size:13px;
        }

    @media screen and ( max-width: 480px ) {
        margin-top: 20px;
        width: 103px;
        height: 33px;
        font-size:13px;    }

    `


