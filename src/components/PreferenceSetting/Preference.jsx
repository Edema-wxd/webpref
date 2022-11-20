import PrefSetHNN from "./PreferenceSettingHeadnNav";
import PrefSetForm from "./PreferenceSettingForm";
import style from "./Preference.module.css";
function Preference() {
	return (
		<div className={style.preference}>
			<PrefSetHNN />
			<PrefSetForm />
		</div>
	);
}

export default Preference;
