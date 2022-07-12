import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg'
        },
        {
            id: 2,
            name: 'Rap việt nghe là ghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg'
        },
        {
            id: 3,
            name: 'Trào lưu nhạc hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg'
        },
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;