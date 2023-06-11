const showResponseData = (data) => {
  console.log('\n\x1b[32mData found:\x1b[97m\n');
  const coloredEscape = '\x1b[35m';
  const whiteEscape = '\x1b[97m';
  const lineStart = `  ${whiteEscape}`;

  console.log(
    `${lineStart}Continent: ${coloredEscape}${data?.continent} (${data?.continentCode})`
  );
  console.log(
    `${lineStart}Country: ${coloredEscape}${data?.country} (${data?.countryCode})`
  );
  console.log(
    `${lineStart}Region/State: ${coloredEscape}${data?.regionName} (${data?.region})`
  );
  console.log(`${lineStart}City: ${coloredEscape}${data?.city}`);
  console.log(`${lineStart}District: ${coloredEscape}${data?.district}`);
  console.log(`${lineStart}Zip code: ${coloredEscape}${data?.zip}`);
  console.log(
    `${lineStart}Latitude and longitude: ${coloredEscape}${data?.lat}, ${data?.lon}`
  );
  console.log(`${lineStart}Timezone: ${coloredEscape}${data?.timezone}`);
  console.log(
    `${lineStart}National currency: ${coloredEscape}${data?.currency}`
  );
  console.log(`${lineStart}ISP name: ${coloredEscape}${data?.isp}`);
  console.log(`${lineStart}Organization name: ${coloredEscape}${data?.org}`);
  console.log(
    `${lineStart}Is mobile connection: ${coloredEscape}${
      data?.mobile ? 'Yes' : 'No'
    }`
  );
  console.log(
    `${lineStart}Is Proxy, VPN or Tor exit address: ${coloredEscape}${
      data?.mobile ? 'Yes' : 'No'
    }`
  );
  console.log(whiteEscape);
};

export default showResponseData;
