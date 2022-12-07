export const createLongDynamic = async (path: string) => {
  let host = 'https://easyhrsolution11252022.page.link';
  let webUrl = 'https://www.easy-hr.solutions/';
  let app_bundle_id = 'com.easyHRsolution11252022.app';
  let longLink = `${host}/?link=https://easyHR.com/${path}&apn=${app_bundle_id}&ibi=${app_bundle_id}&ipbi=${app_bundle_id}&ofl=${webUrl}`;
  let web_api_key = 'AIzaSyBq44TWDxORbVcqMsWmx8R_yF5YPNHEr2k';

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let raw = JSON.stringify({
    longDynamicLink: `${longLink}`,
  });
  const res = await fetch(
    `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${web_api_key}`,
    {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    },
  );
  const res_json = await res.json();
  console.log(res_json.shortLinks);
  if (res_json) {
    return res_json.shortLinks;
  } else {
    return 'failure to create short base on long link';
  }
};
