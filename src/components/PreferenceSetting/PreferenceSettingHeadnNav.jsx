import preflogo from "../../images/LOgo.svg";
import arrowleft from "../../images/arrow-left.svg";
import arrowright from "../../images/arrow-right.svg";
import setting from "../../images/setting-2.svg";
import logout from "../../images/logout.svg";
import style from "./Preferenceside.module.css";

function PrefSetHNN() {
	return (
		<>
			<img src={preflogo} alt="" />

			<div className={style.prefsidemain}>
				<div className={style.prefsiderow}>
					<img src={arrowleft} alt="" />
					<p className={style.prefsidetext}>Back</p>
				</div>
				<div className={style.prefsiderow}>
					<img src={setting} alt="" />
					<p className={style.prefsidetext}>Setting</p>
					<img src={arrowright} alt="" />
				</div>
				<div className={style.prefsiderow}>
					<p className={style.prefsidetext}>Preference</p>
				</div>
				<div className={style.prefsiderow}>
					<p className={style.prefsidetext}>My Profile</p>
				</div>
				<div className={style.prefsiderow}>
					<img src={logout} alt="" />
					<p className={style.prefsidetext}>Logout</p>
				</div>
			</div>
		</>
	);
}

export default PrefSetHNN;
