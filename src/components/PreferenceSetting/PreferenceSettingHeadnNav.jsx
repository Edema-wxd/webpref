import preflogo from "../../images/LOgo.svg";
import arrowleft from "../../images/arrow-left.svg";
import arrowright from "../../images/arrow-right.svg";
import setting from "../../images/setting-2.svg";
import logout from "../../images/logout.svg";
import style from "./Preferenceside.module.css";
import menu from "../../images/menu.svg";
import { useState } from "react";
//import { Link } from "react-router-dom";

function PrefSetHNN() {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div className={style.prefside}>
			<img
				src={menu}
				onClick={toggleMenu}
				className={style.prefsidemenu}
				alt=""
			/>

			<img src={preflogo} alt="" />
			{openMenu ? (
				<div className={style.prefsidemob}>
					<a href="/" className={style.prefsiderow}>
						<img src={setting} alt="" />
						<p className={style.prefsidetext}>Setting</p>
						<img src={arrowright} alt="" />
					</a>
					<a href="/" className={style.prefsiderow}>
						<p className={style.prefsidetext}>Preference</p>
					</a>
					<div className={style.prefsiderow}>
						<p className={style.prefsidetext}>My Profile</p>
					</div>
					<a href="/" className={style.prefsiderow}>
						<img src={logout} alt="" />
						<p className={style.prefsidetext} id={style.logouttxt}>
							Logout
						</p>
					</a>
				</div>
			) : null}

			<div className={style.prefsidemain}>
				<a href="/" className={style.prefsiderow}>
					<img src={arrowleft} alt="" />
					<p className={style.prefsidetext}>Back</p>
				</a>
				<a href="/" className={style.prefsiderow}>
					<img src={setting} alt="" />
					<p className={style.prefsidetext}>Setting</p>
					<img src={arrowright} alt="" />
				</a>
				<a href="/" className={style.prefsiderow}>
					<p className={style.prefsidetext}>Preference</p>
				</a>
				<div className={style.prefsiderow}>
					<p className={style.prefsidetext}>My Profile</p>
				</div>
				<a href="/" className={style.prefsiderow}>
					<img src={logout} alt="" />
					<p className={style.prefsidetext} id={style.logouttxt}>
						Logout
					</p>
				</a>
			</div>
		</div>
	);
}

export default PrefSetHNN;
