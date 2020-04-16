import React from 'react';
import VideoCard from '../../components/VideoCard/index.js'
import { getAllVideos } from '../../actions/videos.js';
import { connect } from 'react-redux';
import HeaderNav from '../../components/HeaderNav/index.js';
import styled from 'styled-components';
import SimpleMenu from '../../components/Menu/index.js';

const HomeMainContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100vw;
`

function HomePage(props) {
    React.useEffect(
        ()=> {
        props.getAllVideos()
    },[])

    return (
        <div>
            <HeaderNav><SimpleMenu></SimpleMenu></HeaderNav>
                <HomeMainContainer>
                    {props.allVideos.map(video => <VideoCard src={video.url} title={video.title}>{video.title}</VideoCard>)}
                </HomeMainContainer>
        </div>
    )      
}

const mapStateToProps = (state) => ({
    allVideos: state.videos.videos
})

const mapDispatchToProps = (dispatch) => ({
    getAllVideos: () => dispatch(getAllVideos(1))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage); 