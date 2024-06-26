import { auth } from '../../lib/firebase';
import './detail.css';

const Detail = () =>{
    return(
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                    <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                 
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://images.pexels.com/photos/2412720/pexels-photo-2412720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>photo_2024_2.png</span>

                            </div>
                            
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://images.pexels.com/photos/2412720/pexels-photo-2412720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>photo_2024_2.png</span>

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
               
                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logout' onClick={()=> auth.signOut()}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Detail