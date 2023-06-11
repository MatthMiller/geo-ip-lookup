import figlet from 'figlet';

const showBannerMessage = async () => {
  return new Promise((resolve, reject) => {
    figlet('Geo - IP', { font: 'Dancing Font' }, (error, dataText) => {
      if (error) {
        console.log('Error:', error);
        reject(error);
        return;
      }
      console.log('\x1b[33m' + dataText);
      console.log('\nFind geographical information based on IP address!');
      console.log(
        "Don't know what your IP is? Try https://whatismyipaddress.com/"
      );
      console.log('\x1b[97m \n');
      resolve();
    });
  });
};

export default showBannerMessage;
