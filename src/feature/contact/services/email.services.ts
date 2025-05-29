import emailjs from 'emailjs-com';
import environments from '../../../utils/envManager';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const onSubmit = (
  data: ContactFormData,
  setHasSendEmail: React.Dispatch<
    React.SetStateAction<{
      enableAlert: boolean;
      hasSuccess: boolean;
    }>
  >
): void => {
  const formBody = {
    userName: data.name,
    email: data.email,
    message: data.message,
  };

  const SERVICE_ID = environments.SERVICE_ID;
  const TEMPLATE_ID = environments.TEMPLATE_ID;
  const USER_ID = environments.USER_ID;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, formBody, USER_ID).then(
    () => {
      setHasSendEmail({
        enableAlert: true,
        hasSuccess: true,
      });
    },
    () => {
      setHasSendEmail({
        enableAlert: true,
        hasSuccess: false,
      });
    }
  );
};
