import fetch from 'node-fetch';
import Loading from '../classes/Loading.js';
import showResponseData from './showResponseData.js';

const fetchData = async (ipAddress) => {
  return new Promise(async (resolve) => {
    const loadingState = new Loading();
    loadingState.startLoading();

    try {
      const fetchResponse = await fetch(
        `http://ip-api.com/json/${ipAddress}?fields=33292287`
      );

      const json = await fetchResponse.json();
      if (json?.status === 'success') {
        loadingState.stopLoading();
        showResponseData(json);
        resolve();
      } else if (json?.status === 'fail') {
        loadingState.stopLoading();
        console.log('\n\x1b[91mIP address not found.\x1b[97m\n');
        resolve();
      }
    } catch (error) {
      throw error;
    }
  });
};

export default fetchData;
