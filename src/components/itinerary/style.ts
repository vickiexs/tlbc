import { BiColor } from "react-icons/bi";
import styled from "styled-components";

export const StyledTimelineContainer = styled(`div`)(({ theme }) => ({

    ".swiper": {

    },

    ".swiper-wrapper":{
        // width:'100%',
    },

    ".swiper-slide": {
        width: '100%',
        maxWidth: '450px',
        // paddingRight: theme.spacing(20)
    },

    '.swiper-slide:last-child': {
        paddingRight: 0,
    }




    }));

export const HorizontalLine = styled(`div`)(({ theme }) => ({
    width: "100%",
    height: "2px",
    backgroundColor: theme.palette.text,
  }));

export const StyledTimeline = styled(`div`)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(5),
    width: "100%",

    // ".hr":{
    //     margin:0
    // }
  }));
  