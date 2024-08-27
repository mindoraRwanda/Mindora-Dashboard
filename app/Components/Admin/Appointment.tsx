import { useTranslation } from "react-i18next";

export default function Appointments() {
  const { t } = useTranslation('common'); // useTranslation hook

  return (
    <div>
      <p className="text-center text-black text-2xl">
        {t('Patient_appointments')}
      </p>
    </div>
  );
}
