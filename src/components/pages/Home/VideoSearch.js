import React, { useState } from 'react';
import axios from 'axios';

const VideoSearch = () => {
  const [query, setQuery] = useState(''); // Trạng thái cho từ khóa tìm kiếm
  const [videos, setVideos] = useState([]); // Trạng thái cho danh sách video
  const [loading, setLoading] = useState(false); // Trạng thái tải

  const API_KEY = '1NXpKIMVnNObhJKbNgZomY6sqAat9moHY3csuaVrkkPYD2BFrIiPt7CP'; // Thay YOUR_PEXELS_API_KEY bằng API Key của bạn

  const searchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.pexels.com/videos/search', {
        headers: {
          'Authorization': API_KEY
        },
        params: {
          query: query,
          per_page: 10,
          page: 1
        }
      });
      setVideos(response.data.videos); // Cập nhật trạng thái với dữ liệu từ API
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Search Videos</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Cập nhật trạng thái từ khóa tìm kiếm
        placeholder="Enter search term"
      />
      <button onClick={searchVideos} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      <div>
        {videos.length > 0 ? (
          <div>
            {videos.map((video) => (
              <div key={video.id} style={{ margin: '10px' }}>
                <video
                  src={video.video_files[0].link}
                  controls
                  style={{ maxWidth: '300px' }}
                />
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default VideoSearch;