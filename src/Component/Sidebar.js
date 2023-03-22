import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                Thể Loại
                <ul>
                    <li><Link>Hành Động</Link></li>
                    <li><Link>Tình cảm</Link></li>
                    <li><Link>Kinh dị</Link></li>
                    <li><Link>Hoạt hình</Link></li>
                    <li><Link>Khoa học - Nghệ thuật</Link></li>
                </ul>   
            </div>
        );
    }
}

export default Sidebar;