export const BASE_URL = 'http://localhost:8000';

export const copyToClipboard = (text: string) => {
   try {
      if (navigator.clipboard && window.isSecureContext) {
         navigator.clipboard.writeText(text);
         //  return toast.success('Copy liên kết thành công');
      } else {
         let textArea = document.createElement('textarea');
         textArea.value = text;
         textArea.style.position = 'fixed';
         textArea.style.left = '-999999px';
         textArea.style.top = '-999999px';
         document.body.appendChild(textArea);
         textArea.focus();
         textArea.select();
         return new Promise((res: any, rej: any) => {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
            // toast.success('Copy liên kết thành công');
         });
      }
   } catch (error) {
      console.error(error);
      //   return toast.error('Copy liên kết thất bại');
   }
};

export const covertTime = (timer: number) => {
   const date = new Date(timer * 1000);
   const hours = date.getHours();

   const minutes = '0' + date.getMinutes();

   const seconds = '0' + date.getSeconds();

   const formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

   return formattedTime;
};
