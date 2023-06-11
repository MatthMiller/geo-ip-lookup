import showBannerMessage from './functions/showBannerMessage.js';
import questionLoop from './functions/questionLoop.js';
import fetchData from './functions/fetchData.js';

const executionLoop = async () => {
  console.clear();

  await showBannerMessage();

  const ipAddress = await questionLoop('IP');

  await fetchData(ipAddress);

  const shouldReset = await questionLoop('reset');
  if (shouldReset) executionLoop();
};

executionLoop();
