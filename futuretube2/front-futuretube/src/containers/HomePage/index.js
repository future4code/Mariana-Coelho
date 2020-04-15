import React from 'react';
import VideoCard from '../../components/VideoCard/index.js'
import { getAllVideos } from '../../actions/videos.js';
import { connect } from 'react-redux';

function HomePage(props) {
    React.useEffect(
        ()=> {
        props.getAllVideos()
    },[])

    return (
        <div>
            <VideoCard></VideoCard>
            {props.allVideos.map(video => <VideoCard title={video.title}>{video.title}</VideoCard>)}
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