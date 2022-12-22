import styles from '../css/Reservation.module.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import DataContext from "../data/DataContext";


const Reservation = () => {
    const {state,action}=useContext(DataContext);

    const ReservationBtn = (e) => {        
            alert('예약이 완료되었습니다');
            alert('진료내역에서 확인해주세요'); 
            action.setIsbook(true);                
    }
    
    return (
        <div>
            <div>
                {
                    state.mypageData ? (
                    <div className={styles.titlebox}>
                        <h2>예약정보</h2> 
                    <hr />
                    <h4> 
                    <br />{state.mypageData.사업장}</h4>
                    <h5> <br />{state.mypageData.주소}</h5>
                        </div>
                    ) : 
                        (
                        <div className={styles.titlebox}>
                            <h2>예약정보</h2> 
                    <hr />
                    <h4> 
                    <br />{state.mypageData2.사업장}</h4>
                    <h5> <br />{state.mypageData2.주소}</h5>
                        </div>
                    )
                }

                        
                <div className={styles.mapbox}>
                    <h4 >예약하실 날짜를 선택해주세요</h4>
                    <DatePicker className={styles.date}
                        selected={state.startDate}
                        onChange={(date) => action.setStartDate(date)}
                        locale={ko}                   // 한글로 변경
                        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                        showPopperArrow={false}       // 화살표 변경
                        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                    />  
                </div> 
                        
                
                    
                    <div className={styles.linkbox} >
                        <Link className={styles.link}  to='/history'> 
                        <button  onClick={ReservationBtn} value='onLogin'>예약</button>
                    </Link>
                    </div>           
                    
                    
                    
                
            </div>
        </div> 
    );
} 

export default Reservation;