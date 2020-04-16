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
width: 40%;
border: 1px solid red;

`

const Video = styled.video`
  max-width: 100%
`

function VideoCard(props) {

  return (
        <VideoCardItem>
            {props.title}
       </VideoCardItem>
  );
}

export default VideoCard;