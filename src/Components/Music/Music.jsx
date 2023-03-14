import React from "react";
import s from './Music.module.css'


const Music = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Alexandr',
                Follow: true,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=ce2a382dbd06a91c36a98cd492c48c813c0ee9f0-5297706-images-thumbs&n=13',
                status: 'I am Programmer',
                location: {city: 'Msk', country: 'Russia'}
            },
            {
                id: 2,
                fullName: 'Dima',
                Follow: true,
                photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                status: 'I am Teacher',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                fullName: 'Misha',
                Follow: false,
                photoUrl: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
                status: 'I am Student',
                location: {city: 'Elb', country: 'Russia'}
            },
        ])
    }

    return <div className={s.wrapper}>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl}/></div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>UnFollow</button>
                    }
                    </div>
                </span>
            <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
            <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
        </div>)

        }
    </div>
}

export default Music