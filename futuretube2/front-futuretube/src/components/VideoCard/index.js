import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const VideoCardItem = styled.div `
margin: 2px;
width: 165px;
background: #e1c8f380;
border-radius: 8px;
font-family: Arial, Helvetica, sans-serif;
font-size: 13px;
padding: 5px;

`


function VideoCard(props) {

  return (
        <VideoCardItem>
          {props.title}
          <video src={props.src} width="165">
          </video>
       </VideoCardItem>
  );
}

export default VideoCard;