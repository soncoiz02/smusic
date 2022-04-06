import React from 'react'
import china from '../../assets/img/china.jpg'
import edmUs from '../../assets/img/edm-us.jpg'
import rapUs from '../../assets/img/rap-us.jpg'
import popUs from '../../assets/img/pop-us.jpg'
import rapVn from '../../assets/img/rap-vn.jpg'
import popVn from '../../assets/img/pop-vn.jpg'
import edmVn from '../../assets/img/edm-vn.jpg'
import korea from '../../assets/img/korea.jpg'
import { Link } from 'react-router-dom'


export const topSong = [
    {
        label: "Top 100 Vietnamese",
        list: [
            {
                name: "Top 100 Vietnamese Pop Songs",
                type: "vn-pop",
                img: popVn
            },
            {
                name: "Top 100 Vietnamese Rap Songs",
                type: "vn-rap",
                img: rapVn
            }
            , {
                name: "Top 100 Vietnamese Remix Songs",
                type: "vn-edm",
                img: edmVn
            },
        ]
    },
    {
        label: "Top 100 US/UK",
        list: [
            {
                name: "Top 100 US/UK Pop Songs",
                type: "us-pop",
                img: popUs
            },
            {
                name: "Top 100 US/UK Rap Songs",
                type: "vn-rap",
                img: rapUs
            },
            {
                name: "Top 100 US/UK EDM Songs",
                type: "vn-edm",
                img: edmUs
            },
        ]
    },
    {
        label: "Top 100 Korea",
        list: [
            {
                name: "Top 100 Korean Songs",
                type: "/korea",
                img: korea
            }
        ]
    },
    {
        label: "Top 100 China",
        list: [
            {
                name: "Top 100 Chinese Songs",
                type: "/china",
                img: china
            }
        ]
    }
]

const TopSong = () => {
    return (
        <div className='top-song'>
            {
                topSong.map((item, index) =>
                    <div className="type" key={index}>
                        <div className="label">{item.label}</div>
                        <div className="list">
                            {
                                item.list.map((item, index) =>
                                    <div className="item" key={index}>
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <Link to={`/top-song/${item.type}`} className="name">{item.name}</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TopSong